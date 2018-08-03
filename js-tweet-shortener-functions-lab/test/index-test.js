describe('Tweet Functions Lab', () => {
  describe("characterCounter", () => {
    it("given message = 'Stuffing my face with food'", () => {
      expect(characterCounter("Stuffing my face with food")).toEqual(26)
    })
  })
  
  
  describe("addHashtag", () => {
    it("given message = 'At the Gym'", () => {
          expect(addHashtag("At the Gym!")).toEqual("At the Gym! #yolo")
    })
  })
  
  describe('tweetShortener', () => {
    it('takes a tweet and shortens if it is too long', () => {
      expect(tweetShortener('This tweet is only barely to long to be displayed on Twitter so you should shorten it. If you dont shorten it, then Twitter will not allow you to post the tweet. #notok'))
      .toEqual('This tweet is only barely to long to be displayed on Twitter so you should shorten it. If you dont shorten it, then Twitter will not allow y')
    })
    
    it('keeps the tweet the same length if it is not too long', () => {
      expect(tweetShortener('This tweet is all Gucci.'))
      .toEqual('This tweet is all Gucci.')
    })    
  })
})



