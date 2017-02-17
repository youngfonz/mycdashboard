function chart_load() {
    if(!$('#viewerchart').length)
        return;
    var ctx_viewer = $("#viewerchart");
    var ctx_chat = $("#chatchart");
    var ctx_emoji = $("#emojichart");

    $.get({
        url: "view_data.php",
        dataType: "JSON",
        success: function(result){
            data_viewer = [];
            data_chat = [];
            data_emoji = [];
            
            $.each(result["data_viewer"], function(k,v){
                if(k==0)
                    return true;
                data_viewer.push({x: v[0], y: v[2]});
            });
            
            var scatterChart = new Chart(ctx_viewer, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Scatter Dataset',
                        borderColor: "rgb(150, 150, 150)",
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        showLine: false,
                        data: data_viewer,
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
                                stepSize: 100
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
                        label: 'Scatter Dataset',
                        borderColor: "rgb(150, 150, 150)",
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        showLine: false,
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
                        label: 'Scatter Dataset',
                        borderColor: "rgb(150, 150, 150)",
                        pointBackgroundColor: "rgb(150, 150, 150)",
                        pointRadius: 10,
                        pointHoverBackgroundColor: "rgb(90, 180, 80)",
                        pointHoverBorderColor: "rgba(90, 180, 80, 0.3)",
                        pointHoverBorderWidth: 10,
                        pointHoverRadius: 10,
                        pointStyle: 'rectRot',
                        showLine: false,
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
                                max: 2700,
                                min: 0,
                                stepSize: 100
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

    var tooltip = $('#tooltip');
}
