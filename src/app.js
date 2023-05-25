/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = [],
  adj = [],
  noun = [],
  tld = [],
  results = undefined,
  $pron,
  $adj,
  $nouns,
  $tlds;

window.onload = function() {
  results = document.getElementById("results");
  $pron = document.getElementById("pron");
  $adj = document.getElementById("adj");
  $nouns = document.getElementById("nouns");
  $tlds = document.getElementById("tlds");
  document
    .getElementById("generateDomains")
    .addEventListener("click", handleGenerate);
};

function handleGenerate(e) {
  pronoun = $pron.value
    .trim()
    .split(", ")
    .filter(item => item !== "");
  adj = $adj.value
    .trim()
    .split(", ")
    .filter(item => item !== "");
  noun = $nouns.value
    .trim()
    .split(", ")
    .filter(item => item !== "");
  tld = $tlds.value
    .trim()
    .split(", ")
    .filter(item => item !== "");

  let ol = "";
  const domains = generator(pronoun, adj, noun, tld);

  domains.forEach(item => {
    ol += `<li>${item}</li>`;
  });
  results.innerHTML = ol;
}

function generator(...args) {
  var r = [],
    max = args.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = args[i].length; j < l; j++) {
      var a = arr.slice(0);
      a.push(args[i][j]);
      if (i == max) r.push(a.join(""));
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}
