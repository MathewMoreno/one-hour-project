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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true, effects.slash)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy3, function (sprite, otherSprite) {
    zombie3.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    zombie2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    mySprite.destroy()
    game.over(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    zombie1.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0) {
        info.changeScoreBy(-1)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . c c b c c c c c . . . . . 
. . . c c b c c c c c . . . . . 
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
. . . . . c c c c c b c c . . . 
. . . . . c c c c c b c c . . . 
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
info.onCountdownEnd(function () {
    mySprite.destroy()
    game.over(false, effects.blizzard)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy4, function (sprite, otherSprite) {
    zombie4.destroy()
})
let projectile2: Sprite = null
let projectile: Sprite = null
let zombie4: Sprite = null
let zombie3: Sprite = null
let zombie2: Sprite = null
let zombie1: Sprite = null
let mySprite: Sprite = null
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
info.setScore(3)
mySprite = sprites.create(img`
. . . . . e e e e e . . . . . . 
. . . . 3 3 2 3 e e e . . . . . 
. . . . 3 3 3 3 3 e e . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
e e e d . 2 2 2 2 2 2 . e d e e 
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
mySprite.setPosition(230, 250)
controller.moveSprite(mySprite, 70, 70)
scene.cameraFollowSprite(mySprite)
mySprite.say("I have to get to the tunnel", 5000)
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
let End = sprites.create(img`
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
info.startCountdown(30)
