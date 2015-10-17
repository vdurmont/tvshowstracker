<?hh

namespace TVST;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class TVLogger {
  private static array<string, TVLogger> $loggers = array();
  private Logger $logger;

  public static function getLogger(string $name) : TVLogger {
    if(array_key_exists($name, TVLogger::$loggers)) {
      return TVLogger::$loggers[$name];
    } else {
      $logger = new TVLogger($name);
      TVLogger::$loggers[$name] = $logger;
      return $logger;
    }
  }

  public function __construct(string $name) {
    $this->logger = new Logger($name);
    $this->logger->pushHandler(new StreamHandler(LOG_FILE, Logger::DEBUG));
  }

  public function addInfo(string $str) {
    $this->logger->addInfo($str);
  }

  public function addDebug(string $str) {
    $this->logger->addDebug($str);
  }
}
