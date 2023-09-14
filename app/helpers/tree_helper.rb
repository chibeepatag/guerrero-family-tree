module TreeHelper
  def color member
    return "red" if member.branch.nil?
    {
    "Leon" => "beige",
    "Luis" => "yellow",
    "Rosa"=> "red",
    "Fernando"=> "green",
    "Alfredo"=> "blue",
    "Jose" => "orange",
    "Manuel"=> "lavender"}[member.branch]
  end

  def template member
    if member.in_law
      {
      "Leon" => "beige_male",
      "Luis" => "yellow_male",
      "Rosa"=> "red_male",
      "Fernando"=> "green_male",
      "Alfredo"=> "blue_male",
      "Jose" => "orange_male",
      "Manuel"=> "lavender_male"}[member.branch]
    else
      {
      "Leon" => "beige_female",
      "Luis" => "yellow_female",
      "Rosa"=> "red_female",
      "Fernando"=> "green_female",
      "Alfredo"=> "blue_female",
      "Jose" => "orange_female",
      "Manuel"=> "lavender_female"}[member.branch]
    end
  end
end
