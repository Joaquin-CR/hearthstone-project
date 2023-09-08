import { SearchCards } from '../src/lib/getClassCard';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    // Other router properties and methods you use in your component
  })),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        message: 'Table created successfully',
      }),
  })
) as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks(); // Reset all mock function calls before each test
});

describe('Get Cards for search tests', () => {
  it('should fetch data from the API and return a deserialized CardClass array', async () => {
    // Mock the fetch function
    const mockFetch = jest.fn();
    global.fetch = mockFetch;
    const mockResponse = {
      json: jest.fn().mockResolvedValue([
        {
          cardId: '1',
          name: 'Card 1',
          cardSet: 'Set 1',
          type: 'Type 1',
          rarity: 'Rarity 1',
          attack: 1,
          health: 1,
          text: 'Text 1',
          race: 'Race 1',
          playerClass: 'Class 1',
          img: 'Image 1',
          mechanics: 'Mechanics 1',
          cost: 1,
        },
        {
          cardId: '2',
          name: 'Card 2',
          cardSet: 'Set 2',
          type: 'Type 2',
          rarity: 'Rarity 2',
          attack: 2,
          health: 2,
          text: 'Text 2',
          race: 'Race 2',
          playerClass: 'Class 2',
          img: 'Image 2',
          mechanics: 'Mechanics 2',
          cost: 2,
        },
      ]),
    };
    mockFetch.mockResolvedValue(mockResponse);
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    // Call the function
    const result = await SearchCards('Mage');

    // Assertions
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/className',
      {
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      }
    );
    expect(result).resolves.toEqual([
      {
        cardid: '1',
        cardname: 'Card 1',
        cardset: 'Set 1',
        type: 'Type 1',
        rarity: 'Rarity 1',
        attack: 1,
        health: 1,
        text: 'Text 1',
        race: 'Race 1',
        playerclass: 'Class 1',
        img: 'Image 1',
        mechanics: 'Mechanics 1',
        mana: 1,
      },
      {
        cardid: '2',
        cardname: 'Card 2',
        cardset: 'Set 2',
        type: 'Type 2',
        rarity: 'Rarity 2',
        attack: 2,
        health: 2,
        text: 'Text 2',
        race: 'Race 2',
        playerclass: 'Class 2',
        img: 'Image 2',
        mechanics: 'Mechanics 2',
        mana: 2,
      },
    ]);
  });
  //   it('should return an empty array when the API returns no data for the given className', async () => {
  //     // Mock the fetch function
  //     const mockResponse: Array<any> = [];
  //     const mockJsonPromise = Promise.resolve(mockResponse);
  //     const mockFetchPromise = Promise.resolve({
  //       json: () => mockJsonPromise,
  //     });
  //     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  //     // Call the function
  //     const result = await getCards('className');

  //     // Assertions
  //     expect(global.fetch).toHaveBeenCalledTimes(1);
  //     expect(global.fetch).toHaveBeenCalledWith(
  //       'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/className',
  //       {
  //         headers: {
  //           'X-RapidAPI-Key': '',
  //           'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  //         },
  //       }
  //     );
  //     expect(result).toEqual([]);

  //     // Restore the fetch function
  //     // global.fetch.mockRestore();
  //   });
  //   it('should return deserialized data when the API returns valid data', async () => {
  //     // Mock the fetch function
  //     const mockResponse = [
  //       { cardId: 1, name: 'Card 1' },
  //       { cardId: 2, name: 'Card 2' },
  //     ];
  //     const mockJsonPromise = Promise.resolve(mockResponse);
  //     const mockFetchPromise = Promise.resolve({
  //       json: () => mockJsonPromise,
  //     });
  //     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  //     // Call the function
  //     const result = await getCards('className');

  //     // Assertions
  //     expect(global.fetch).toHaveBeenCalledTimes(1);
  //     expect(global.fetch).toHaveBeenCalledWith(
  //       'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/className',
  //       {
  //         headers: {
  //           'X-RapidAPI-Key': '',
  //           'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  //         },
  //       }
  //     );
  //     expect(result).toEqual([
  //       { cardid: 1, cardname: 'Card 1' },
  //       { cardid: 2, cardname: 'Card 2' },
  //     ]);

  //     // Restore the fetch function
  //     // global.fetch.mockRestore();
  //   });
  //   it('should handle an API response with a single object instead of an array', async () => {
  //     // Mock the fetch function
  //     const mockResponse = { cardId: 1, name: 'Card 1' };
  //     const mockJsonPromise = Promise.resolve(mockResponse);
  //     const mockFetchPromise = Promise.resolve({
  //       json: () => mockJsonPromise,
  //     });
  //     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  //     // Call the function
  //     const result = await getCards('className');

  //     // Assertions
  //     expect(global.fetch).toHaveBeenCalledTimes(1);
  //     expect(global.fetch).toHaveBeenCalledWith(
  //       'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/className',
  //       {
  //         headers: {
  //           'X-RapidAPI-Key': '',
  //           'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  //         },
  //       }
  //     );
  //     expect(result).toBeUndefined();

  //     // Restore the fetch function
  //     // global.fetch.mockRestore();
  //   });
  //   it('should handle an API response with missing properties in CardClass', async () => {
  //     // Mock the fetch function
  //     const mockResponse = [
  //       { cardId: 1, name: 'Card 1', attack: 2 },
  //       { cardId: 2, name: 'Card 2' },
  //     ];
  //     const mockJsonPromise = Promise.resolve(mockResponse);
  //     const mockFetchPromise = Promise.resolve({
  //       json: () => mockJsonPromise,
  //     });
  //     global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  //     // Call the function
  //     const result = await getCards('className');

  //     // Assertions
  //     expect(global.fetch).toHaveBeenCalledTimes(1);
  //     expect(global.fetch).toHaveBeenCalledWith(
  //       'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/className',
  //       {
  //         headers: {
  //           'X-RapidAPI-Key': '',
  //           'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  //         },
  //       }
  //     );
  //     expect(result).toEqual([
  //       { cardid: 1, cardname: 'Card 1', attack: 2 },
  //       { cardid: 2, cardname: 'Card 2' },
  //     ]);

  //     // Restore the fetch function
  //     // global.fetch.mockRestore();
  //   });
});
