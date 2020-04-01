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
    'futuro',
    'ballard',
    'meta',
    'cyber',
    'solar',
    'lunar',
    'neuro',
    'realismo',
    'aperi',
    'psico',
    'anarco',
    'geo',
    'disagio',
    'turbo',
    'proto',
    'vetero',
    'neo',
    'demono',
    'corona',
    'feudo',
    'omni',
    'esa',
    'penta',
    'tetra',
    'novo',
    'contra',
    'infra',
    'intra',
    'avio',
    'trans',
    'onico',
    'gastro',
    'pneumo',
    'orto',
    'alea',
    'supra',
    'alveo',
    'non'

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
    'politica',
    'liberismo',
    'comunismo',
    'socialismo',
    'proletariato',
    'patia',
    'caos',
    'classe disagiata',
    'topia',
    'manzia',
    'occultismo',
    'logia',
    'catastrofe',
    'umanesimo',
    'plastico',
    'verso',
    'normale',
    'situazione',
    'cose'
  ]

  var prefix = prefixes[Math.floor(Math.random()*prefixes.length)];
  var suffix = suffixes[Math.floor(Math.random()*suffixes.length)];

  var title = prefix + suffix;

  document.getElementById('title').innerHTML = title;
  document.getElementById('preorder').setAttribute("href", "https://www.ibs.it/search/?ts=as&query=" + title);

}

generator();
