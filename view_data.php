<?php
    require_once 'reader.php';

    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $data_viewer = $xlsx->getSheetData('Viewer Buckets Data');
    $data_chat = $xlsx->getSheetData('Chat Buckets Data');
    $data_emoji = $xlsx->getSheetData('Emoji Buckets Data');
    $data = array("data_viewer" => $data_viewer, "data_chat" => $data_chat, "data_emoji" => $data_emoji);

    print_r(json_encode($data));
?>
