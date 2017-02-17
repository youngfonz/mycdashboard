<?php
    require_once '../reader.php';

    $xlsx = new XLSXReader('optum_stream_full.xlsx');

    $browser = $xlsx->getSheetData('OS Browser Usage');
    $location = $xlsx->getSheetData('Chat Pivot');
?>

<div class="section2">
    <div class="part1 col-md-12">
        <div class="heading col-md-12">
            <div class="heading-score div-left">
                <div class="div-left">
                    <span class="yello-text">SECTION 2.</span>
                    <br/>
                    <strong>ENGAGEMENT</strong>
                </div>
                <div class="div-right">
                    <span class="large-score">0</span>%
                </div>
                <div class="div-right">
                    <span class="sentiment-score">ENGAGEMENT SCORE</span>
                    <a href="#" class="engagement-help"><img src="img/help.png" /></a>
                    <br/>
                    <span class="font-grey">On a scale of 1 to 100</span>  
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="list-header col-md-12">
                <div class="col-md-12">
                    <div class="font-size-16">RECENT VIDEO ON DEMAND ACTIVITY</div>
                </div>
            </div>
            <div class="chat-body col-md-12">
                <table class="font-size-12 col-md-12 text-center">
                    <tr class="chat-header">
                        <td class="col-md-7 row-chat text-left">NAME OF VIDEO</td>
                        <td class="col-md-2 row-channel">VIEWS</td>
                        <td class="col-md-3 row-channel">#OF CHATS</td>
                    </tr>
                    <?php for($i=0; $i<4; $i++) { ?>
                        <tr>
                            <td class="col-md-7 row-chat text-left"><?php echo $i+1 ?>. Optum Communication Town Hall</td>
                            <td class="col-md-2 row-channel">456</td>
                            <td class="col-md-3 row-channel">456</td>
                        </tr>
                    <?php }?>
                </table>
            </div>
        </div>

        <div class="col-md-6">
            <div class="list-header col-md-12">
                <div class="col-md-12">
                    <div class="font-size-16">RECENT LIVE STREAM ACTIVITY</div>
                </div>
            </div>
            <div class="chat-body col-md-12">
                <table class="font-size-12 col-md-12 text-center">
                    <tr class="chat-header">
                        <td class="col-md-7 row-chat text-left">NAME OF VIDEO</td>
                        <td class="col-md-2 row-channel">VIEWS</td>
                        <td class="col-md-3 row-channel">#OF CHATS</td>
                    </tr>
                    <?php for($i=0; $i<2; $i++) { ?>
                        <tr>
                            <td class="col-md-7 row-chat"><?php echo $i+1 ?>. Optum Communication Town Hall</td>
                            <td class="col-md-2 row-channel">456</td>
                            <td class="col-md-3 row-channel">456</td>
                        </tr>
                    <?php }?>
                </table>
            </div>
        </div>
    </div>
    <div class="part2 col-md-12">
        <div class="dash-panel col-md-12">
            <div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title">USERS</div>
                    <span id="digit-user">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title">UNIQUE VIEWERS</div>
                    <span id="digit-univie">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF VIDEO</div>
                    <span id="digit-video">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title">PAGEVIEWS</div>
                    <span id="digit-page">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title">PAGE/SESSIONS</div>
                    <span id="digit-session">0</span>
                </div>
            </div>

            <div>
                <div class="digit-panel-large col-md-6">
                    <div class="panel-title">AVG.SESSION DURATION</div>
                    <span id="digit-avgsess">00:00:24</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF CHATS</div>
                    <span id="digit-chat">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title">#OF USERS WHO CHATTED</div>
                    <span id="digit-chatted">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF PINNED CHATS</div>
                    <span id="digit-pinned">0</span>
                </div>
            </div>

            <div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF SHARES</div>
                    <span id="digit-share">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF USERS WHO SPARKED</div>
                    <span id="digit-sparked">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF SPARKS</div>
                    <span id="digit-spark">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF ADMINS WHO IGNITED</div>
                    <span id="digit-ignited">0</span>
                </div>
                <div class="digit-panel col-md-3">
                    <div class="panel-title"># OF IGNITES</div>
                    <span id="digit-ignit">0</span>
                </div>
            </div>
        </div>
    </div>

    <div class="part3 col-md-12">
        <div class="col-md-8">
            <div class="list-header col-md-12">
                <div class="col-md-12">
                    <div class="font-size-16">BROWSER</div>
                </div>
            </div>

            <div class="chat-body col-md-12">
                <table class="font-size-12 col-md-12">
                    <tr class="chat-header">
                        <td class="col-md-2">OS</td>
                        <td class="col-md-2 text-right">OS_VER</td>
                        <td class="col-md-3 row-video text-right">BROWSER</td>
                        <td class="col-md-3 row-video text-right">BROWSER_VER</td>
                        <td class="col-md-2 row-video text-right">USER_COUNT</td>
                    </tr>
                    <?php for($i = 1; $i < count($browser); $i++) { ?>
                        <tr>
                            <td class="col-md-2"><?php echo $browser[$i][0]?></td>
                            <td class="col-md-2 text-right"><?php echo $browser[$i][1]?></td>
                            <td class="col-md-3 row-video text-right"><?php echo $browser[$i][2];?></td>
                            <td class="col-md-3 row-video text-right"><?php echo $browser[$i][3];?></td>
                            <td class="col-md-2 row-video text-right"><?php echo $browser[$i][4];?></td>
                        </tr>
                    <?php }?>
                </table>
            </div>
        </div>

        <div class="col-md-4">
            <div class="list-header col-md-12">
                <div class="col-md-12">
                    <div class="font-size-16">LOCATION</div>
                </div>
            </div>

            <div class="chat-body col-md-12">
                <table class="font-size-12 col-md-12">
                    <tr class="chat-header">
                        <td class="col-md-6">CITY</td>
                        <td class="col-md-3">SESSIONS</td>
                        <td class="col-md-3">%SESSIONS</td>
                    </tr>
                    <?php for($i = 1; $i < count($location); $i++) { ?>
                        <tr>
                            <td class="col-md-6"><?php echo $i.$location[$i][1];?></td>
                            <td class="col-md-3">72</td>
                            <td class="col-md-3">36</td>
                        </tr>
                    <?php }?>
                </table>
            </div>
        </div>
    </div>
</div>