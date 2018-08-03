
describe('yellMyBreakfast(breakfast)', () => {
  it('receives one argument and returns it in all caps', () => {
    expect(yellMyBreakfast('bacon and eggs')).toEqual('BACON AND EGGS')
  })
})

describe('underYourBreath(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(underYourBreath('I LOVE SHAKIRA')).toEqual('i love shakira')
  })
})

describe('yellingOrWhispering(phrase)', () => {
  it('calls console.log() its one argument in all caps', () => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    yellingOrWhispering('i love coffee')

    expect(spy).toHaveBeenCalledWith('I LOVE COFFEE')

    console.log.restore()
  })
  
  it('returns "whisper" if `phrase` is all lowercase', function() {
    expect(yellingOrWhispering('shhhhh')).toEqual("whisper")
  })

  it('returns "yelling" if `phrase` is all caps', function() {
    expect(yellingOrWhispering('GET OUT NOW!')).toEqual("yelling")
  })

  it('returns "I got you fam. Have a rice krispie." if `string` is "Yo! I got to eat."', function() {
    expect(yellingOrWhispering("Yo! I got to eat.")).toEqual("I got you fam. Have a rice krispie.")
  })
})
