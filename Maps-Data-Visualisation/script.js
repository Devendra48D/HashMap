google.load('visualization', '1', {
    'packages': ['geochart']
});
google.setOnLoadCallback(drawMarkersMap);

function drawMarkersMap() {
    var data = google.visualization.arrayToDataTable([
        ['State', 'Population (in Millions)', 'Number of Tweets #s'],
        ['US-IL', 12.5, 1285.31],
        ['US-NY', 19, 181.76],
        ['US-DC', 0.6, 181.76],
        ['US-AL', 4.83, 181.76],
        ['US-AK', 0.7, 181.76],
        ['US-AZ', 6, 181.76],
        ['US-AR', 3, 181.76],
        ['US-CA', 38, 181.76],
        ['US-CO', 5, 181.76],
        ['US-CT', 3.5, 181.76],
        ['US-DE', 0.9, 181.76],
        ['US-FL', 19, 181.76],
        ['US-GA', 9, 181.76],
        ['US-HI', 1.4, 181.76],
        ['US-ID', 0.6, 181.76],
        ['US-IN', 6.5, 181.76],
        ['US-IA', 3, 181.76],
        ['US-KS', 2.9, 181.76],
        ['US-KY', 4, 181.76],
        ['US-LA', 4.625, 181.76],
        ['US-ME', 1.3, 181.76],
        ['US-MA', 6, 181.76],
        ['US-MI', 3, 181.76],
        ['US-MN', 5.5, 181.76],
        ['US-MD', 6, 181.76],
        ['US-MS', 6, 181.76],
        ['US-MO', 1, 181.76],
        ['US-MT', 1, 181.76],
        ['US-NE', 1.8, 181.76],
        ['US-NM', 2.085, 181.76],
        ['US-NV', 2.7, 181.76],
        ['US-NJ', 9, 181.76],
        ['US-NC', 9, 181.76],
        ['US-ND', 0.7, 181.76],
        ['US-NH', 1.3, 181.76],
        ['US-UT', 2.9, 181.76],
        ['US-OH', 11.5, 181.76],
        ['US-OK', 3.85, 181.76],
        ['US-OR', 3.93, 181.76],
        ['US-PA', 13, 181.76],
        ['US-RI', 1, 181.76],
        ['US-SC', 4, 181.76],
        ['US-SD', 0.8, 181.76],
        ['US-TN', 6.5, 181.76],
        ['US-TX', 26, 181.76],
        ['US-VT', 0.6, 181.76],
        ['US-VA', 8.2, 181.76],
        ['US-WA', 7, 181.76],
        ['US-WV', 2, 181.76],
        ['US-WI', 5.7, 181.76],
        ['US-WY', 0.5, 181.76], ]);

    var options = {
        region: 'US',
        resolution: 'provinces',
        colorAxis: {
            colors: ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
        }
    };

    var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};
