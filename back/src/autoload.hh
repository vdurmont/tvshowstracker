<?hh

require_once(__DIR__."/../../../hhrouter/src/autoload.hh");
require_once(__DIR__."/../vendor/autoload.php");

function TVSTloadPath($path) : void {
  $files = scandir($path);
  foreach($files as $file) {
    if (is_dir($file) && $file != "." && $file != "..") {
      TVSTloadPath($path."/".$file);
    } else if ($file != "." && $file != ".." && $file != "autoload.php") {
      require_once($path."/".$file);
    }
  }
}

TVSTloadPath(__DIR__);
