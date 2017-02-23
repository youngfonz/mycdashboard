<?php
    require_once 'reader.php';
    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $stats = $xlsx->getSheetData('Stats');
    
    $viewbucket = $xlsx->getSheetData('Viewer Buckets Data');
    $unique_views = 0;

    foreach($viewbucket as $row) {
        if($row[2] > $unique_views)
            $unique_views = $row[2];
    }

    $page_view_data = $xlsx->getSheetData('Page View Data');
    $page_view = 0;
    foreach($page_view_data as $row){
        $page_view += $row[1];
    }

    $user_page_viewed = $xlsx->getSheetData('User Pages Viewed');
    $sum = 0;
    foreach($user_page_viewed as $row) {
        $sum += $row[1];
    }
    $page_session = $sum / count($user_page_viewed);

    $session_duration = $xlsx->getSheetData('View Time Data');
    $sum = 0;
    foreach($session_duration as $row) {
        $sum += $row[1];
    }
    $average_duration_min = floor($sum / count($session_duration));
    $average_duration_hour = floor($average_duration_min / 60);
    $average_duration_min = $average_duration_min % 60;
    $average_duration_sec = ($sum % count($session_duration)) / count($session_duration) * 60;

    $chat_data = $xlsx->getSheetData('Chat Buckets Data');
    $chats_count = 0;
    foreach($chat_data as $row) {
        $chats_count += $row[2];
    }

    $chat_pivot = $xlsx->getSheetData('Chat Pivot');
    $users_chatted = count($chat_pivot) - 4;

    $raw_chat = $xlsx->getSheetData('Raw Chats');
    $shares = 0;
    $sparks = 0;
    $ignites = 0;
    foreach($raw_chat as $row) {
        $shares += $row[10];
        $sparks += $row[6];
        $ignites += $row[7];
    }
    $users_sparked = count(array_unique(array_column($raw_chat, 13)));

    $emoji_data = $xlsx->getSheetData('Emoji Buckets Data');
    $emoji_count = 0;
    foreach($emoji_data as $row) {
        $emoji_count += $row[2];
    }

    $scores = array('stats_data' => $stats, 'unique_views' => $unique_views, 'page_views' => $page_view, 'page_session' => $page_session, 'session_duration' => array($average_duration_hour, $average_duration_min, $average_duration_sec), 'chats_count' => $chats_count, 'users_chatted' => $users_chatted, 'shares' => $shares, 'users_sparked' => $users_sparked, 'sparks' => $sparks, 'ignites' => $ignites, 'emoji_count' => $emoji_count);
    print_r(json_encode($scores));
?>
