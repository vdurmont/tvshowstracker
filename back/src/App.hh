<?hh

namespace TVST;

require_once(__DIR__."/autoload.hh");

use \HHRouter\HttpMethod;
use \HHRouter\Router;

// TODO config to move elsewhere
echo "PROUT";
define("LOG_FILE", __DIR__."/../my_app.log");

class App {
  private TVLogger $logger;
  private Router $router;

  public function __construct() {
    $this->logger = new TVLogger("App");
    $this->router = new Router();
  }

  public function init() : void {
    $this->logger->addDebug("Init the app.");
    Database::init();
    $this->router->registerRoute(HttpMethod::GET, "/shows", "\TVST\ShowsController::getShows");
    $this->router->registerRoute(HttpMethod::GET, "/shows/{id}", "\TVST\ShowsController::getShow");
  }

  public function handle($context) : void {
    $this->logger->addDebug("RESOLVING: "); // TODO sysou
    header("Access-Control-Allow-Origin: *");
    $this->router->resolve($context);
  }
}

$app = new App();
$app->init();
$app->handle($_SERVER);
