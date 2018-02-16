window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 410, 260);
  ctx.fillRect(100, 10, 410, 260);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 270, 410, 10);
  ctx.fillRect(510, 20, 10, 250);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for(var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  ctx.fillText('Худшее время: ' + max, 120, 100);

  var barHeight = 20;
  var indent = 40;
  var initialX = 120;
  var initialY = 80;
  var lineHeight = 15;

  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(initialY)
  }
}