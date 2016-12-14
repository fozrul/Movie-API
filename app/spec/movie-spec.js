// this test the movies to see if the data is undefined

describe('Film test', () => {
    it('test example', done => {
        movies.getMovie(1)
            .then(data => {
                expect(data).not.toBe(undefined)
                done()
            })
    })
})