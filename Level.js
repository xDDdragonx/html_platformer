function createLevel() {
    // border of level
    for(let i=0; i<50; i++) {
        new terrain(i*32, 0);
    }
    for(let i=0; i<28; i++) {
        new terrain(0, i*32);
    }
    for(let i=1; i<50; i++) {
        new terrain(i*32, 864);
    }
    for(let i=1; i<28; i++) {
        new terrain(1568, i*32);
    }
// adding terrain for lower half
    for(let i=1; i<32; i++) {
        new terrain(i*32, 700);
    }
    for(let i=30; i<49; i++) {
        new terrain(i*32, 500);
    }
    for(let i=40; i<44; i++) {
        new terrain(i*32, 680);
    }
    for(let i=44; i<46; i++) {
        new terrain(i*32, 750);
    }
    new terrain(35*32, 730);
    new terrain(48*32, 26*32);
    for(let i=7; i<23; i++) {
        new terrain(i*32, 26*32);
    }
    for(let i=11; i<18; i++) {
        new terrain(i*32, 25*32);
    }
    for(let i=14; i<15; i++) {
        new terrain(i*32, 24*32);
    }

    // adding terrain for upper half
    for(let i=6; i<10; i++) {
        new terrain(i*32, i*32);
    }
    for(let i=3; i<6; i++) {
        new terrain(i*32, 18*32);
    }
    for(let i=8; i<11; i++) {
        new terrain(i*32, 20*32);
    }
    for(let i=8; i<11; i++) {
        new terrain(i*32, 21*32);
    }
    for(let i=8; i<11; i++) {
        new terrain(i*32, 16*32);
    }
    for(let i=18; i<21; i++) {
        new terrain(i*32, 13*32);
    }
    for(let i=14; i<16; i++) {
        new terrain(i*32, 10*32);
    }
    for(let i=10; i<11; i++) {
        new terrain(i*32, 5*32);
    }
    new terrain(11*32, 4*32);
    new terrain(14*32, 4*32);
    for(let i=15; i<17; i++) {
        new terrain(i*32, 5*32);
    }
    for(let i=20; i<22; i++) {
        new terrain(i*32, 5*32);
    }
    for(let i=25; i<28; i++) {
        new terrain(i*32, 5*32);
    }

    new terrain(7*32, 21*32);
    new terrain(15*32, 15*32);
    new terrain(10*32, 9*32);

    // adding terrain for end part
    for(let i=5; i<16; i++) {
        new terrain(30*32, i*32);
    }
    for(let i=45; i<49; i++) {
        new terrain(i*32, 5*32);
    }

    new terrain(40*32, 12*32);
    new terrain(46*32, 13*32);
    new terrain(37*32, 11*32);
    new terrain(43*32, 11*32);
    new terrain(39*32, 8*32);
    new terrain(44*32, 6*32);
    new terrain(43*32, 6*32);
}