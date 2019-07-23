<?php
//Array of options
$a[] = "Apples with Peanut Butter";
$a[] = "Avocado Toast";
$a[] = "Breakfast Food at a Diner";
$a[] = "Bonchon Chicken";
$a[] = "Chicken on Waffles";
$a[] = "Donuts";
$a[] = "Egg Custard";
$a[] = "Fast Food";
$a[] = "General Tso Chicken";
$a[] = "Halal Guys";
$a[] = "Ice Cream";
$a[] = "Steak";
$a[] = "Kimchi Fried Rice";
$a[] = "Lobster";
$a[] = "Mocktails";
$a[] = "Nuggets from Mickey D's";
$a[] = "Oatmeal Raisin Cookie";
$a[] = "Pina Colada";
$a[] = "Panera Bread";
$a[] = "Salad";
$a[] = "Mexican Food";
$a[] = "Red Velvet Cake";
$a[] = "Starbucks Pink Drink";
$a[] = "Texas Roadhouse Steak";
$a[] = "Udon";
$a[] = "Vegan Food... Yuck";
$a[] = "White Chocolate Macadamia Nut Cookie";
$a[] = "Yogurt Parfait";
$a[] = "Angel Food Cake";
$a[] = "Korean BBQ";
$a[] = "Ekta Indian Food";
$a[] = "Omelette";
$a[] = "Peking Duck";
$a[] = "Vietnamese Pho";
$a[] = "Stir Fried Noodles";
$a[] = "Alfredo Pasta";
$a[] = "Shrimp Scampi";
$a[] = "Chipotle";
$a[] = "Bubble Tea";
$a[] = "Frozen Yogurt";
$a[] = "Waffles";
$a[] = "Pancakes";
$a[] = "Pad Thai";
$a[] = "Sushi";
$a[] = "Domino's Pizza";

//get the q parameter from http_build_url
$q = $_REQUEST["q"];
$possibles = "";

//look up all the options from array if $q is different from ""
if ($q !== ""){
  $q = strtolower($q);
  $len = strlen($q);
  foreach($a as $name){
    if (stristr($q, substr($name, 0, $len))){
      if ($possibles === "") {
        $possibles = $name;
      } else {
        $possibles .= " , $name";
      }
    }
  }
}

//output "no suggestion" if no hint was found or output correct values
echo $possibles ==="" ? "no suggestion" : $possibles;
 ?>
