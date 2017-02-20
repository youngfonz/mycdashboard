<?php
    require_once 'reader.php';

    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $data_view = $xlsx->getSheetData('Viewer Buckets Data');

    foreach($data_view as $key => $value) {
        if(($value[0] > "2017-01-30T24:00:00.000Z"))
            unset($data_view[$key]);
    }
    print_r(json_encode($data_view));
?>
