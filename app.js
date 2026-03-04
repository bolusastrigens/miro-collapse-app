document.getElementById("collapse").onclick = async () => {

  const items = await miro.board.get();

  console.log(items);

};
