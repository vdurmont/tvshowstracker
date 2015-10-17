<?hh

namespace TVST;

use \HHRouter\JSONResponse;
use \HHRouter\Request;
use \TVST\Database;

class ShowsController {
  private TVLogger $logger;

  public function __construct() {
    $this->logger = new TVLogger("ShowsController");
  }

  public function getShows() : JSONResponse {
    $this->logger->addDebug("Get all the shows");
    $shows = Database::getShows();
    $data = array();
    foreach ($shows as $show) {
      $data[] = $show->toJSON();
    }
    return new JSONResponse($data);
  }

  public function getShow(Request $request) : JSONResponse {
    $id = $request->getPathVariables()["id"];
    $this->logger->addDebug("Get Show#".$id);
    $show = Database::getShow((int) $id);
    if ($show == null) {
      http_response_code(404);
      $data = array(
        "message" => "The Show#".$id." cannot be found.",
        "code" => "NOT_FOUND"
      );
    } else {
      $data = $show->toJSON();
    }
    return new JSONResponse($data);
  }
}
