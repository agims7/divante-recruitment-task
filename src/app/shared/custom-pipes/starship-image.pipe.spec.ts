import { StarshipImagePipe } from './starship-image.pipe';

describe('Pipe: StarshipImagePipe', () => {
  const pipe = new StarshipImagePipe();
  const defaultImageUrl = 'https://via.placeholder.com/';

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct url', () => {
    expect(pipe.transform('Death Star')).toBe('../../../assets/img/Death Star.jpg');
  });

  it('should return correct url', () => {
    expect(pipe.transform('Death Star', 300)).toBe('../../../assets/img/Death Star.jpg');
  });

  it('should return correct url with size', () => {
    expect(pipe.transform('test', 300)).toBe(`${defaultImageUrl}300`);
  });


});
