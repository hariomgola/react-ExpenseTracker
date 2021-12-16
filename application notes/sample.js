function app() {
  // adding code in regular javascript
  const para = document.createElement("p");
  para.textContent = "This is Regular JavaScript";
  document.getElementById("root").append(para);
  // above code is termed as imperative approach where we are giving clear instructiuon what javascript in browser will do
  // React will do all those thing behind the scene
}
