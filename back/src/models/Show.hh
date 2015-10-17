<?hh

namespace TVST;

class Show {
  private int $id;
  private string $title;
  private string $description;

  public function __construct(int $id, string $title, string $description) {
    $this->id = $id;
    $this->title = $title;
    $this->description = $description;
  }

  public function toString() : string {
    return "Show#".$this->id."(".$this->title.")";
  }

  public function toJSON() : array {
    return array(
      "id" => $this->id,
      "title" => $this->title,
      "description" => $this->description
    );
  }
}
