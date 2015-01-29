describe 'UUID4', ->

  it 'should exist', ->
    expect(UUID4).toBeDefined()

  it 'should generate and validate', ->
    for i in [0..1000]
      expect(UUID4.validate UUID4.generate()).toEqual true
