function addDefaultMaterial(
  sturmankersVorderseite,
  sturmankersRuckseite,
  sturmankerMat,
  allPosts,
  fencePostMat,
  allWoodPosts,
  woodMaterials,
  allFences,
  addFenceSings,
  fencesArr
) {
  //sturmankers material
  sturmankersVorderseite.forEach((elm) => {
    elm.material = sturmankerMat;
  });
  sturmankersRuckseite.forEach((elm) => {
    elm.material = sturmankerMat;
  });
  allPosts.forEach((elm) => {
    elm.material = fencePostMat;
  });
  //fences material
  // allFences.forEach((element) => {
  //   element.forEach((elm) => {
  //     elm.material = woodMaterials[0];
  //   });
  // });

  // allWoodPosts.forEach((elm) => {
  //   elm.material = woodMaterials[0];
  // });
  // //fences material
  for (let i = 0; i < fencesArr.length; i++) {
    if (fencesArr[i].color == "braun") {
      allFences[i].forEach((elm) => {
        elm.material = woodMaterials[0];
      });
      allWoodPosts[i + 1].material = woodMaterials[0];
      if (i == 0) allWoodPosts[0].material = woodMaterials[0];
    }
    if (fencesArr[i].color == "grau") {
      allFences[i].forEach((elm) => {
        elm.material = woodMaterials[1];
      });
      allWoodPosts[i + 1].material = woodMaterials[1];
      if (i == 0) allWoodPosts[0].material = woodMaterials[1];
    }
  }
  //sings to not be visible
  addFenceSings.forEach((elm) => {
    elm.isVisible = false;
  });
}
