namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy4, function (sprite, otherSprite) {
    mySprite.destroy()
    game.over(false, effects.slash)
})
function Destroy () {
    mySprite.destroy()
    game.over(false, effects.slash)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
})
function Villains () {
    zombie1 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.Enemy)
    zombie1.setPosition(14, 200)
    zombie1.follow(mySprite, 100)
    zombie2 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.enemy2)
    zombie2.setPosition(230, 100)
    zombie2.follow(mySprite, 75)
    zombie3 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.enemy3)
    zombie3.setPosition(200, 90)
    zombie3.follow(mySprite, 50)
    zombie4 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.enemy4)
    zombie4.setPosition(150, 10)
    zombie4.follow(mySprite, 25)
    End = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    End.setPosition(245, 10)
}
function Hero_3 () {
    mySprite = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 3 3 2 3 e e e . . . . . 
. . . . 3 3 3 3 3 e e . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
e e e d . 2 2 2 2 2 2 . d e e e 
. 3 e 3 . 2 2 2 2 2 2 . 3 e 3 . 
. . . . 3 2 2 2 2 2 2 3 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 8 2 2 2 2 2 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
`, SpriteKind.Player)
    mySprite.setPosition(0, 120)
    controller.moveSprite(mySprite, 70, 70)
    scene.cameraFollowSprite(mySprite)
}
function Villains_3 () {
    zombie1 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.Enemy)
    zombie1.setPosition(14, 200)
    zombie1.follow(mySprite, 100)
    zombie2 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.enemy2)
    zombie2.setPosition(230, 100)
    zombie2.follow(mySprite, 75)
    zombie3 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.enemy3)
    zombie3.setPosition(200, 90)
    zombie3.follow(mySprite, 50)
    zombie4 = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 7 7 2 7 e e e . . . . . 
. . . . 7 7 7 7 7 e e . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. 7 7 . . 4 4 4 4 4 4 . . . 7 . 
. . 7 7 . 4 4 4 7 7 4 . 7 7 7 . 
. . . 7 7 4 4 4 4 7 4 7 7 . . . 
. . . . . 4 7 7 4 4 4 . . . . . 
. . . . . 4 7 4 4 4 4 . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c c c c c c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
. . . . . c . . . . c . . . . . 
`, SpriteKind.enemy4)
    zombie4.setPosition(150, 10)
    zombie4.follow(mySprite, 25)
    End = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . f f f f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    End.setPosition(245, 10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.splash("Level 2", "Caves")
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100015141414141414141414141414141414141414141414141414141414141414141313131313131313131313131313141413131313131313131313131313131414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414171313131313131313131313131414141713131313131313131313131314141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141413131313131313131313131313141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles12,sprites.builtin.forestTiles14,sprites.builtin.forestTiles13,sprites.builtin.forestTiles21,sprites.builtin.forestTiles24],
            TileScale.Sixteen
        ))
    scene.setBackgroundColor(15)
    Hero()
    Villains()
    info.player2.setScore(3)
    info.startCountdown(30)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy3, function (sprite, otherSprite) {
    zombie3.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    zombie2.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    Destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    zombie1.destroy()
    info.changeScoreBy(1)
})
function Background () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100010100e100e0e0e1010100e0e0e0e0e120e0e0e0e0e10100e1010100e10100e0e0e0e0a0a0a0a0a0a0a0a0a0a0a0a0a0a0e100a0a0a0a0a0a0a0a0a0a0a0a0a0a1010100f0b101010100e0e0e0e0e0e0e0f100e0e0b0e10101010101010100e0e100e0f0e0b0e0e0e0e10100e0e10100e0a0a0a0a0a0a0a0a0a0a0a0a0a0e10100a0a0a0a0a0a0a0a0a0a0a0a0a1010100e0e0e0e0e0e0e0e0e0e0e0e0e10100e0e0e0e0e1010100e0e0e0e0e0e100e0e0e0e0e0e10101010101010100e0e0e0e0e100e0a0a0a0a0a0a0a0a0a0a0a0a0a0e100e10100e0e0e10100e0b1010100f0e0e10100e1010101010100b0e100f100e0e0e0e0e0e0e10100e0e0b100e0e0f`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15],
            TileScale.Sixteen
        ))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.player2.score() > 0) {
        info.player2.changeScoreBy(-1)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 300, 0)
        projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 9 9 9 9 9 9 9 9 . . . 
. . . . . 9 9 9 9 9 9 9 9 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, -300, 0)
        pause(2000)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy3, function (sprite, otherSprite) {
    mySprite.destroy()
    game.over(false, effects.slash)
})
// Makes a wall
function Walls () {
    tiles.setWallAt(tiles.getTileLocation(3, 12), true)
    tiles.setWallAt(tiles.getTileLocation(4, 12), true)
    tiles.setWallAt(tiles.getTileLocation(5, 12), true)
    tiles.setWallAt(tiles.getTileLocation(6, 12), true)
    tiles.setWallAt(tiles.getTileLocation(7, 12), true)
    tiles.setWallAt(tiles.getTileLocation(8, 12), true)
    tiles.setWallAt(tiles.getTileLocation(9, 12), true)
    tiles.setWallAt(tiles.getTileLocation(10, 12), true)
    tiles.setWallAt(tiles.getTileLocation(11, 12), true)
    tiles.setWallAt(tiles.getTileLocation(12, 12), true)
    tiles.setWallAt(tiles.getTileLocation(13, 12), true)
    tiles.setWallAt(tiles.getTileLocation(14, 12), true)
    tiles.setWallAt(tiles.getTileLocation(15, 12), true)
    tiles.setWallAt(tiles.getTileLocation(0, 8), true)
    tiles.setWallAt(tiles.getTileLocation(1, 8), true)
    tiles.setWallAt(tiles.getTileLocation(2, 8), true)
    tiles.setWallAt(tiles.getTileLocation(3, 8), true)
    tiles.setWallAt(tiles.getTileLocation(4, 8), true)
    tiles.setWallAt(tiles.getTileLocation(5, 8), true)
    tiles.setWallAt(tiles.getTileLocation(6, 8), true)
    tiles.setWallAt(tiles.getTileLocation(7, 8), true)
    tiles.setWallAt(tiles.getTileLocation(8, 8), true)
    tiles.setWallAt(tiles.getTileLocation(9, 8), true)
    tiles.setWallAt(tiles.getTileLocation(10, 8), true)
    tiles.setWallAt(tiles.getTileLocation(11, 8), true)
    tiles.setWallAt(tiles.getTileLocation(12, 8), true)
    tiles.setWallAt(tiles.getTileLocation(0, 7), true)
    tiles.setWallAt(tiles.getTileLocation(1, 7), true)
    tiles.setWallAt(tiles.getTileLocation(2, 7), true)
    tiles.setWallAt(tiles.getTileLocation(3, 7), true)
    tiles.setWallAt(tiles.getTileLocation(4, 7), true)
    tiles.setWallAt(tiles.getTileLocation(5, 7), true)
    tiles.setWallAt(tiles.getTileLocation(6, 7), true)
    tiles.setWallAt(tiles.getTileLocation(7, 7), true)
    tiles.setWallAt(tiles.getTileLocation(8, 7), true)
    tiles.setWallAt(tiles.getTileLocation(9, 7), true)
    tiles.setWallAt(tiles.getTileLocation(10, 7), true)
    tiles.setWallAt(tiles.getTileLocation(11, 7), true)
    tiles.setWallAt(tiles.getTileLocation(12, 7), true)
    tiles.setWallAt(tiles.getTileLocation(2, 3), true)
    tiles.setWallAt(tiles.getTileLocation(3, 3), true)
    tiles.setWallAt(tiles.getTileLocation(4, 3), true)
    tiles.setWallAt(tiles.getTileLocation(5, 3), true)
    tiles.setWallAt(tiles.getTileLocation(6, 3), true)
    tiles.setWallAt(tiles.getTileLocation(7, 3), true)
    tiles.setWallAt(tiles.getTileLocation(8, 3), true)
    tiles.setWallAt(tiles.getTileLocation(9, 3), true)
    tiles.setWallAt(tiles.getTileLocation(10, 3), true)
    tiles.setWallAt(tiles.getTileLocation(11, 3), true)
    tiles.setWallAt(tiles.getTileLocation(12, 3), true)
    tiles.setWallAt(tiles.getTileLocation(13, 3), true)
    tiles.setWallAt(tiles.getTileLocation(14, 3), true)
    tiles.setWallAt(tiles.getTileLocation(15, 3), true)
    tiles.setWallAt(tiles.getTileLocation(2, 2), true)
    tiles.setWallAt(tiles.getTileLocation(3, 2), true)
    tiles.setWallAt(tiles.getTileLocation(4, 2), true)
    tiles.setWallAt(tiles.getTileLocation(5, 2), true)
    tiles.setWallAt(tiles.getTileLocation(6, 2), true)
    tiles.setWallAt(tiles.getTileLocation(7, 2), true)
    tiles.setWallAt(tiles.getTileLocation(8, 2), true)
    tiles.setWallAt(tiles.getTileLocation(9, 2), true)
    tiles.setWallAt(tiles.getTileLocation(10, 2), true)
    tiles.setWallAt(tiles.getTileLocation(11, 2), true)
    tiles.setWallAt(tiles.getTileLocation(12, 2), true)
    tiles.setWallAt(tiles.getTileLocation(13, 2), true)
    tiles.setWallAt(tiles.getTileLocation(14, 2), true)
    tiles.setWallAt(tiles.getTileLocation(15, 2), true)
}
function Hero () {
    mySprite = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 3 3 2 3 e e e . . . . . 
. . . . 3 3 3 3 3 e e . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
4 4 4 d . 2 2 2 2 2 2 . d 4 4 4 
. 3 4 3 . 2 2 2 2 2 2 . 3 4 3 . 
. . . . 3 2 2 2 2 2 2 3 . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 8 2 2 2 2 2 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
. . . . . 8 . . . . 8 . . . . . 
`, SpriteKind.Player)
    mySprite.setPosition(230, 250)
    controller.moveSprite(mySprite, 70, 70)
    scene.cameraFollowSprite(mySprite)
}
info.onCountdownEnd(function () {
    mySprite.destroy()
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy4, function (sprite, otherSprite) {
    zombie4.destroy()
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let End: Sprite = null
let zombie4: Sprite = null
let zombie3: Sprite = null
let zombie2: Sprite = null
let zombie1: Sprite = null
let mySprite: Sprite = null
game.splash("Make it to the tunnel")
game.splash("Level 1")
Background()
Hero()
Villains()
// Creates separate score
info.player2.setScore(3)
info.startCountdown(30)
info.player1.setScore(0)
Walls()
mySprite.say(":(")
