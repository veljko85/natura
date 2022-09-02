function setSmallerFenceSize(
  rightPost,
  rightPostCap,
  newFenceForwardSigns,
  newFenceRightSigns,
  newFenceLeftSigns,
  newFenceBackSigns,
  getAbsPosX,
  getAbsPosZ,
  fakeFence,
  rightWoodPost,
  size
) {
  rightPost.position.x = rightWoodPost.position.x = rightPost.position.x - size;
  rightPostCap.position.x = rightPostCap.position.x - size;
  if (size == 0.9) {
    fakeFence.scaling.x = 0.5;
    fakeFence.position.x = 0.45;
  }

  // foundationRight.position.x = getAbsPosX;
  // foundationRight.setAbsolutePosition(
  //   new BABYLON.Vector3(
  //     getAbsPosX(rightPost),
  //     foundationRight.position.y,
  //     getAbsPosZ(rightPost)
  //   )
  // );

  newFenceForwardSigns[newFenceForwardSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost) + 0.3,
      newFenceForwardSigns[newFenceForwardSigns.length - 1].position.y,
      getAbsPosZ(rightPost)
    )
  );

  newFenceRightSigns[newFenceRightSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost),
      newFenceRightSigns[newFenceRightSigns.length - 1].position.y,
      getAbsPosZ(rightPost) - 0.3
    )
  );

  newFenceLeftSigns[newFenceLeftSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost),
      newFenceLeftSigns[newFenceLeftSigns.length - 1].position.y,
      getAbsPosZ(rightPost) + 0.3
    )
  );

  newFenceBackSigns[newFenceBackSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost) - 0.3,
      newFenceBackSigns[newFenceBackSigns.length - 1].position.y,
      getAbsPosZ(rightPost)
    )
  );
}
