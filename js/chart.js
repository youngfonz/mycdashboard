function chart_load(panel) {
    if(panel == "1")
        dashboard1_chart();
    else if (panel == "2")
        dashboard2_chart();
}

function dashboard2_chart() {
    if(!$('#emoji_delta').length)
        return;
    var ctx_delta = $("#emoji_delta");
    var ctx_chat = $("#chatchart");
    var ctx_emoji = $("#emojichart");

    $.get({
        url: "data_chart1.php",
        dataType: "JSON",
        success: function(result){
            data_delta = [];
            data_chat = [];
            data_emoji = [];
            
            $.each(result["data_emoji"], function(k,v){
                if(k==0)
                    return true;
                data_delta.push({x: v[0], y: v[6]});
            });
            
            var scatterChart = new Chart(ctx_delta, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '# of Emojis',
                        borderColor: "rgb(150, 150, 150)",
                        borderDash: [5,5],
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        data: data_delta,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                              unit: "hour"
                            },
                            position: 'bottom',
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 800,
                                min: -1200,
                                stepSize: 100,
                                beginAtZero: true
                            },
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                }
            });

            $.each(result["data_chat"], function(k,v){
                if(k==0)
                    return true;
                data_chat.push({x: v[0], y: v[2]});
            });

            var scatterChart = new Chart(ctx_chat, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '# of Chats',
                        borderColor: "rgb(150, 150, 150)",
                        borderDash: [5,5],
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        data: data_chat,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                              unit: "minute",
                              unitStepSize: 5,
                            },
                            position: 'bottom',
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 100,
                                min: 0,
                                stepSize: 5
                            },
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                }
            });

            $.each(result["data_emoji"], function(k,v){
                if(k==0)
                    return true;
                data_emoji.push({x: v[0], y: v[2]});
            });

            var scatterChart = new Chart(ctx_emoji, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Total # of Emojis',
                        borderColor: "rgb(150, 150, 150)",
                        borderDash: [5,5],
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        data: data_emoji,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                              unit: "minute",
                              unitStepSize: 30
                            },
                            position: 'bottom',
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 3200,
                                min: 0,
                                stepSize: 200
                            },
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                }
            });
        }
    });
}

function dashboard1_chart() {
    if(!$('#view_chart').length)
        return;
    var ctx_view = $("#view_chart");

    $.get({
        url: "data_chart2.php",
        dataType: "JSON",
        success: function(result){
            data_view = [];
            
            $.each(result, function(k,v){
                if(k==0)
                    return true;
                data_view.push({x: v[0], y: v[2]});
            });
            
            var scatterChart = new Chart(ctx_view, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '# of Concurrent Viewers',
                        borderColor: "rgb(150, 150, 150)",
                        borderDash: [4,5],
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        data: data_view,
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                              unit: "hour"
                            },
                            position: 'bottom',
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: 2700,
                                min: 0,
                                stepSize: 100,
                            },
                            gridLines: {
                                color: "rgba(100, 100, 100, 0.1)",
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                }
            });
        }     
    });
}
