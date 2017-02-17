<?php
    require_once 'reader.php';

    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $data = $xlsx->getSheetData('Raw Chats');
    $sum = 0;
    $max = -1;
    $min = 1;
    
    $happy = 0;
    $neutral = 0;
    $unhappy = 0;
    foreach($data as $row) {
        $sum += $row[11];
        if($row[11] > $max)
            $max = $row[11];
        if($row[11] < $min)
            $min = $row[11];

        if($row[11] >= 0.2 )
            $happy++;
        else if(($row[11] >= 0)&&($row[11] < 0.2))
            $neutral++;
        else
            $unhappy++;

    }

    $happy = $happy / count($data) * 100;
    $neutral = $neutral / count($data) * 100;
    $unhappy = $unhappy / count($data) * 100;

    $happy_scores = array('sent_score' => $sum/count($data), 'peak' => $max, 'low' => $min, 'happy' => $happy, 'neutral' => $neutral, 'unhappy' => $unhappy);

    print_r(json_encode($happy_scores));
?>
