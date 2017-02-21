<?php
    require_once 'reader.php';
    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $stats = $xlsx->getSheetData('Stats');
    
    print_r(json_encode($stats));
?>
