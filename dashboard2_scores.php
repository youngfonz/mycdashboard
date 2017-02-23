<?php
    require_once 'reader.php';

    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $data = $xlsx->getSheetData('Raw Chats');
    $max = -1;
    $min = 1;
    
    foreach($data as $row) {
        if($row[11] > $max)
            $max = $row[11];
        if($row[11] < $min)
            $min = $row[11];
    }

    $data = $xlsx->getSheetData('Emoji Buckets Data');
    $sum = 0;
    $happy = 0;
    $neutral = 0;
    $unhappy = 0;

    foreach($data as $row) {
        $sum += $row[2];
        $happy += $row[3];
        $neutral += $row[4];
        $unhappy += $row[5];
    }

    $happy = $happy / $sum * 100;
    $neutral = $neutral / $sum * 100;
    $unhappy = $unhappy / $sum * 100;

    $happy_scores = array('sent_score' => $sum/count($data), 'peak' => $max, 'low' => $min, 'happy' => $happy, 'neutral' => $neutral, 'unhappy' => $unhappy);

    print_r(json_encode($happy_scores));
?>
