<?php
    require_once '../reader.php';

    $xlsx = new XLSXReader('optum_stream_full.xlsx');

    $data = $xlsx->getSheetData('Raw Chats');
    $sparked = array();
    $ignited = array();
    
    foreach($data as $row) {
        $row[3] = calc_time($row);
        if($row[6] > 0){
            array_push($sparked, $row);
        }
        if($row[7] > 0) {
            array_push($ignited, $row);
        }
    }

    function calc_time($row) {
        $UNIX_DATE = ($row[3] - 25569) * 86400;
        $tz = new DateTimeZone('America/Denver');
        $time = gmdate("d-m-Y H:i:s", $UNIX_DATE);
        $datetime = new DateTime($time);
        $datetime->setTimezone($tz);
        return $datetime->format('Y-m-d H:i:s');
    }
?>

<div class="section2">
    <div class="part1 col-md-12">
        <div class="heading col-md-12">
            <div class="heading-score div-left">
                <div class="div-left">
                    <span class="yello-text">SECTION 2.</span>
                    <br/>
                    <strong>SENTIMENT</strong>
                </div>
                <div class="div-right">
                    <span class="large-score">0</span>
                </div>
                <div class="div-right">
                    <span class="sentiment-score">SENTIMENT SCORE</span>
                    <a href="#" class="sentiment-help"><img src="img/help.png"/></a>
                    <br/>
                    <span class="font-grey">On a scale of -1 to 1</span>  
                </div>
            </div>
            <div class="div-right emotion">
                <img src="img/emotion-1.png" />
            </div>
        </div>
        <div class="chart-area col-md-12">
            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#chart1">Emoji Sentiment</a></li>
                <li><a data-toggle="tab" href="#chart2">Chats</a></li>
                <li><a data-toggle="tab" href="#chart3">Emoji</a></li>
            </ul>

            <div class="tab-content">
                <div id="chart1" class="tab-pane fade in active">
                    <h3>Emoji Sentiment<div id="emoji_rating" class="div-right"></div></h3>
                    <canvas id="emoji_delta" class="chart col-md-12"></canvas>
                </div>
                <div id="chart2" class="tab-pane fade">
                    <h3>Chats<div id="chat_rating" class="div-right"></div></h3>
                    <canvas id="chatchart" class="chart col-md-12"></canvas>
                </div>
                <div id="chart3" class="tab-pane fade">
                    <h3>Emojis<div id="emojis_rating" class="div-right"></div></h3>
                    <canvas id="emojichart" class="chart col-md-12"></canvas>
                </div>
            </div>
            <div class="chart-board col-md-12">
                <div class="col-md-3 sentiment-peak">
                    <img src="img/emotion-1.png">
                    <div>SENTIMENT PEAK</div>
                    <span class="peak-score border-green">0</span>
                </div>
                <div class="col-md-3 sentiment-low">
                    <img src="img/emotion-2.png">
                    <div>SENTIMENT LOW</div>
                    <span class="low-score border-red">0</span>
                </div>
                <div class="col-md-6 emoji-break">
                    <div class="col-md-3">EMOJI BREAKDOWN</div>
                    <div class="col-md-3 text-center border-green">
                        HAPPY<br><span class="happy-score">0</span>%
                    </div>
                    <div class="col-md-3 text-center border-nor">
                        NEUTRAL<br><span class="neutral-score">0</span>%
                    </div>
                    <div class="col-md-3 text-center border-red">
                        NOT HAPPY<br><span class="nothappy-score">0</span>%
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="part2 col-md-12">
        <div class="list-header col-md-12">
            <div class="col-md-12">
                <div class="font-size-16 active ignited-a">IGNITED CHATS</div>
                <div class="font-size-16 sparked-a">SPARKED CHATS</div>
                <div id="rawchat_rating" class="div-right"></div>
            </div>
        </div>
        <div class="list-body col-md-12">
            <div class="chat-body col-md-12 ignited-chats">
                <table class="font-size-12 col-md-12">
                    <tr class="table-header chat-header">
                        <td class="col-md-1 row-time">TIME</th>
                        <td class="col-md-5 row-chat">USER CHATS</th>
                        <td class="col-md-2 row-channel">CHANNEL</th>
                        <td class="col-md-3 row-video">VIDEOS</th>
                        <td class="col-md-1 row-sentiment">SENTIMENT</th>
                    </tr>
                    <?php for($i=0; $i<count($ignited); $i++) { ?>
                        <tr>
                            <td class="col-md-1 time"><?php echo $ignited[$i][3];?></td>
                            <td class="col-md-5">
                                <p class="email-format"><?php echo $ignited[$i][13]?></p>
                                <p class="normal-format"><?php echo $ignited[$i][5]?></p>
                            </td>
                            <td class="col-md-2">Communications</td>
                            <td class="col-md-3">Communications Town Hall Live Stream</td>
                            <td class="col-md-1"><?php echo $ignited[$i][11]?></td>
                        </tr>
                    <?php }?>
                </table>
            </div>

            <div class="chat-body col-md-12 sparked-chats">
                <table class="font-size-12 col-md-12">
                    <tr class="table-header chat-header">
                        <td class="col-md-1 row-time">TIME</th>
                        <td class="col-md-5 row-chat">USER CHATS</th>
                        <td class="col-md-2 row-channel">CHANNEL</th>
                        <td class="col-md-3 row-video">VIDEOS</th>
                        <td class="col-md-1 row-sentiment">SENTIMENT</th>
                    </tr>
                    <?php for($i=0; $i<count($sparked); $i++) { ?>
                        <tr>
                            <td class="col-md-1 time"><?php echo $sparked[$i][3]?></td>
                            <td class="col-md-5">
                                <p class="email-format"><?php echo $sparked[$i][13]?></p>
                                <p class="normal-format"><?php echo $sparked[$i][5]?></p>
                            </td>
                            <td class="col-md-2">Communications</td>
                            <td class="col-md-3">Communications Town Hall Live Stream</td>
                            <td class="col-md-1"><?php echo $sparked[$i][11]?></td>
                        </tr>
                    <?php }?>
                </table>
            </div>
        </div>
    </div>
</div>
