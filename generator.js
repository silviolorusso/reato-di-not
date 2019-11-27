function generator() {
  var prefixes = [
    'xeno',
    'crono',
    'data',
    'iper',
    'neo',
    'capitalo',
    'chtulu',
    'post',
    'imprendi',
    'necro',
    'ufo',
    'futuro ',
    'ballard',
    'realismo ',
    'meta',
    'cyber',
    'solar',
    'lunar',
    'neuro',
    'realismo',
    'aperi',
    'psico'
  ]

  var suffixes = [
    'fagia',
    'crazia',
    'precariato',
    'era oscura',
    'cene',
    'gotico',
    'ciclismo',
    'comitato invisibile',
    'complotto',
    'femminismo',
    'futuro',
    'oggetti',
    'complotto',
    'visionarie',
    'tardo capitalismo',
    'pangalattico',
    'politica'
  ]

  var prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
  var suffix = suffixes[Math.floor(Math.random()*suffixes.length)];

  var title = prefix + suffix;

  document.getElementById('title').innerHTML = title;

  console.log('title');

}

generator();
