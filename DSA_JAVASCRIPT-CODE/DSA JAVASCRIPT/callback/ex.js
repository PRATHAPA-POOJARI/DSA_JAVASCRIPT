function kp(nanu) {
    console.log("greeting");
    nanu();              // 👈 callback is called here
}

function sp() {
    console.log("This is sp");
}

kp(sp);                  // 👈 sp is passed as a callback