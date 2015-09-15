<?hh

require_once("../Database.hh");
$database = new Database();

$id = $_GET["id"];
if ($id == null) {
  // We want all the shows
  $shows = $database->getShows();
  $data = array();
  foreach ($shows as $show) {
    $data[] = $show->toJSON();
  }
} else {
  // We want a single show
  if (ctype_digit($id)) {
    $show = $database->getShow((int) $id);
    if ($show == null) {
      http_response_code(404);
      $data = array(
        "message" => "The Show#".$id." cannot be found.",
        "code" => "NOT_FOUND"
      );
    } else {
      $data = $show->toJSON();
    }
  } else {
    http_response_code(400);
    $data = array(
      "message" => "'id' parameter is not valid. Expected a int.",
      "code" => "BAD_ARGUMENT"
    );
  }
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
echo json_encode($data);
