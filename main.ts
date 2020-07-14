enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    Princess.startEffect(effects.confetti, 500)
    music.jumpUp.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    Princess.startEffect(effects.warmRadial, 500)
    music.jumpDown.play()
    info.changeLifeBy(-1)
})
let cherry: Sprite = null
let asteroid: Sprite = null
let Princess: Sprite = null
scene.setBackgroundColor(6)
Princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKindLegacy.Player)
controller.moveSprite(Princess)
Princess.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(30)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    asteroid = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . a b a a . . . . . . 
. . . . . c b a f c a c . . . . 
. . . . c b b b f f a c c . . . 
. . . . b b f a b b a a c . . . 
. . . . c b f f b a f c a . . . 
. . . . . c a a c b b a . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
    cherry = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . 6 6 
. . . . . . . . . 6 6 7 7 7 7 . 
. . . . . . 8 8 8 7 7 8 8 6 8 . 
. . . . . . c 6 6 8 8 . 8 7 . . 
. . 2 5 4 2 e c 8 . . . 6 7 . . 
. . 4 2 2 2 2 2 c . . . 6 7 . . 
. 2 2 2 2 2 2 2 . . . . 8 6 . . 
. 2 e e 2 2 2 2 . . . e c 6 . . 
. 2 e e 2 2 2 2 . . 5 4 2 c . . 
. . 2 e e e 2 . 2 4 2 2 2 2 . . 
. . . 2 2 2 . . 2 2 2 2 2 2 . . 
. . . . . . . . 2 2 2 2 2 2 2 . 
. . . . . . . . 2 e e 2 2 e 2 . 
. . . . . . . . . e e e e e . . 
. . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
    cherry.setKind(SpriteKindLegacy.Food)
})
