import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ArtWork, ArtworkResponse } from '../models/artwork';

@Injectable({
  providedIn: 'root',
})
export class ArtworkService {
  artWorks: ArtworkResponse = {
    pagination: {
      total: 119590,
      limit: 10,
      offset: 0,
      total_pages: 11959,
      current_page: 1,
      next_url:
        'https://api.artic.edu/api/v1/artworks?page=2&limit=10&fields=id%2Ctitle%2Cartist_title%2Cimage_id%2Cstyle_titles%2Cdate_start%2Cdate_end%2Cthumbnail%2Cmaterial_titles%2Cplace_of_origin',
    },
    data: [
      {
        id: 149696,
        title: 'Upholstery Fabric for the Fisher Theater',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhBgAFAPQAAEIsH0cyJEw1KVM6LlE8L1Q9L1hAM1lANFxFOF1HOllHP15QS2RNQWBORWhPQGVRTGxaVW5aVWldVXNdU3JeWm5jW3BkW3ZlX3hiWHFkY3RoYHJrZnpran1zbwAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYYGdplbRNwyEAyuUwSbFgBkIEDRdR0JOFADs=',
          width: 2713,
          height: 2250,
          alt_text:
            'A work made of cotton and wool, plain weave with supplementary pile warps forming cut solid velvet; printed.',
        },
        date_start: 1918,
        date_end: 1938,
        place_of_origin: 'United States',
        artist_title: 'Mrs.  Howard C. Blake',
        style_titles: ['Modernism'],
        material_titles: ['cotton (textile)', 'wool (textile)'],
        image_id: '6327b93a-62f1-3224-2a02-c4679c4b6892',
      },
      {
        id: 200030,
        title: 'Panel',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhAwAFAPMAAERENUtJN0tJOV5bTWBgVGtoW3FrXnNsXHRuX3dvYHdxYX94bIN6b4F+c4mDeAAAACH5BAAAAAAALAAAAAADAAUAAAQL0JGmQEHCnJDWYBEAOw==',
          width: 1439,
          height: 2250,
          alt_text:
            'A work made of silk and cotton, satin weave; cut; appliquéd with silk, cut solid velvet; embroidered with looped and outlining gilt-metal strip wrapped silk.',
        },
        date_start: 1875,
        date_end: 1925,
        place_of_origin: 'Spain',
        artist_title: null,
        style_titles: [],
        material_titles: ['silk (textile)', 'cotton (textile)', 'gilt-metal-strip-wrapped silk'],
        image_id: 'af550ce2-c835-ccfc-71a4-b4f26a5ee4f2',
      },
      {
        id: 73174,
        title: 'Panel',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhAgAFAPMAAGMdKWEfKWIfKmAgKmUjL2QkL3A7RXI7RX8/S4BBTQAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAACAAUAAAQI0JwRChEgoQgAOw==',
          width: 981,
          height: 2250,
          alt_text:
            'A work made of silk, satin weave with multi-color supplementary pile warps forming cut and uncut voided velvet.',
        },
        date_start: 1860,
        date_end: 1880,
        place_of_origin: 'Lyon',
        artist_title: 'Mathevon et Bouvard',
        style_titles: [],
        material_titles: ['silk (textile)'],
        image_id: '7ce0edeb-b786-00db-2631-d8ce8afd574b',
      },
      {
        id: 121930,
        title: 'Panel',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhAgAFAPIAAIeBcoiCc4qFd4uGd4qEeIyHeIyHeY6JfSH5BAAAAAAALAAAAAACAAUAAAMHSAQhNuWcBAA7',
          width: 1011,
          height: 2250,
          alt_text:
            'A work made of cotton, silk and silvered-metal strip, plain weave with supplementary patterning wefts and pile warps forming cut voided velvet.',
        },
        date_start: 1930,
        date_end: 1939,
        place_of_origin: 'Italy',
        artist_title: 'Guido Cadorin',
        style_titles: ['Modernism', 'Art Deco'],
        material_titles: ['cotton (textile)', 'silk (textile)'],
        image_id: '',
      },
      {
        id: 215631,
        title: 'Wie das Gras (Like the Grass)',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhBgAFAPQAAF5NTH9hXX1jXXxwZ45WWIRnYYtlZ4RtYY12aI52aJ+Ab5yBcJiHfJmLeJ2TfqCAcaKPeqGJfK+RfZ+NgZ+RhKOUgK6dhKCWiK2YibCfh6+gi7Okk7eolLmomAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUY4KURQkNhyoNIXAdVTrZNVnIskREMQMGEADs=',
          width: 5709,
          height: 4631,
          alt_text:
            'A work made of linen, plain weave; backed with cotton, plain weave; embroidered with silk and linen and gilt-metal-strip-wrapped silk in stem, satin, long and short, padded satin and variations on buttonhole stitches; french knots; laid work and couching; glass beads.',
        },
        date_start: 1977,
        date_end: 1977,
        place_of_origin: 'Zürich',
        artist_title: 'Lissy Funk',
        style_titles: [],
        material_titles: ['glass', 'silk (fiber)'],
        image_id: '08a88440-45b9-ab13-7885-a08b58cf4885',
      },
      {
        id: 53163,
        title: 'Panel',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhAwAFAPMAAJF3RZV6Rpl9RJSAXpSAX5qFW52HW5WCY5yKYZ2MZZeHa5iIbqGPaKGScqKUdgAAACH5BAAAAAAALAAAAAADAAUAAAQLcBlHAjsgDYFUaREAOw==',
          width: 1243,
          height: 2250,
          alt_text:
            'A work made of silk and gilt-metal strip, twill weave with supplementary patterning wefts and pile warps forming cut and uncut voided velvet \n\nsilk, cut, uncut, voided velvet with additional patterning wefts of gilt strips against twill weave foundation.',
        },
        date_start: 1601,
        date_end: 1800,
        place_of_origin: 'France',
        artist_title: null,
        style_titles: [],
        material_titles: ['silk (fiber)'],
        image_id: '9a567ede-8f5f-b880-409f-a7504a5c8263',
      },
      {
        id: 133453,
        title: 'Cushion Cover',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhDQAFAPUAAAAAAAEAAAMAAAQCAAQCAQQCAgQDAgUDAgcHBgUJCAoJCQkKDwsQDhMXFhYbIBceIR0fIB4kJxkiKxwhKR4iKx0kKxkgLR0hLRslMB8oMyUkJCErLyQrMCApNCg3NyA5OEpISUtJSkxJSkxKS09MTlBNTlBNT1BOUFFPUFJQUlRRUlpWVldWWFxZWVtdW1xaXVxcXFxdXl1eXl1fXl5fYG1pam9tbnBucXZzdXhzdHx3d5COkZCPkZSQkqGdnAAAACH5BAAAAAAALAAAAAANAAUAAAY7QN+q5YLBYjMZ7cXi6RIYi8QBeUwol4Utx/h0MhVNZMPxNHA1wAEgGBgKBIQicOupSqIQaIQ6kUwpO0EAOw==',
          width: 3000,
          height: 1154,
          alt_text:
            'A work made of cotton and silk, plain weave with supplementary pile warps forming cut, solid velvet; stenciled.',
        },
        date_start: 1911,
        date_end: 1911,
        place_of_origin: 'Rome',
        artist_title: 'Maria Monaci Gallenga',
        style_titles: ['Modernism'],
        material_titles: ['cotton (textile)', 'silk (textile)'],
        image_id: '61c40dab-186e-aa86-0d82-a06b2b3b2861',
      },
      {
        id: 121994,
        title: 'Panel',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhAgAFAPMAAKZ3Val6Val4VqJ6Xq99Wql+X7N9V7iBWrWHaLqLawAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAACAAUAAAQIsIwAiDgmoQgAOw==',
          width: 909,
          height: 2250,
          alt_text:
            'A work made of silk and cotton, plain weave with supplementary pile warps forming cut voided velvet.',
        },
        date_start: 1890,
        date_end: 1890,
        place_of_origin: 'United States',
        artist_title: 'Hubert von Herkomer',
        style_titles: ['gothic revival'],
        material_titles: ['silk (textile)', 'cotton (textile)'],
        image_id: '7e02e7c1-6120-a91f-e5e7-ebc3eadc1e3e',
      },
      {
        id: 105112,
        title: 'Panel',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhAgAFAPMAAF09M19BNV5AN2FDOWRHO2NHPWhPSGtVTW9VTnBWUQAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAACAAUAAAQIMKERChHgmAgAOw==',
          width: 969,
          height: 2250,
          alt_text:
            'A work made of silk, plain weave with supplementary pile warps forming cut, solid velvet; printed.',
        },
        date_start: 1906,
        date_end: 1949,
        place_of_origin: 'Venice',
        artist_title: 'Mariano Fortuny y Madrazo',
        style_titles: ['Modernism'],
        material_titles: ['silk (textile)'],
        image_id: '73d112a9-d654-689e-7193-358643c2d064',
      },
      {
        id: 149444,
        title: 'Anatolia (Furnishing Fabric)',
        thumbnail: {
          lqip: 'data:image/gif;base64,R0lGODlhBwAFAPUAAGY4LmY8LGc+LWg5L2s+NGo+NWs+NWBBLWJCLmVGNGZHNGZHNWpCM2tCM2pDM31fV3pbWHxdWHxdWn1fXH1fXX5jV39gWHlkWnxlWHxnW3xpXn1qXn5rYH5rYYl0dIx4dox8dYp8eAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhwI9kQplAPBjEQpE4XCoCR4MReFgGBkIBEAFlNpyOJhQEADs=',
          width: 3000,
          height: 2221,
          alt_text: 'A work made of cotton, plain weave with supplementary pile warps forming uncut solid velvet.',
        },
        date_start: 1988,
        date_end: 1988,
        place_of_origin: 'London',
        artist_title: 'Osborne & Little (Firm)',
        style_titles: [],
        material_titles: [],
        image_id: 'ae88627b-fc88-3f32-a272-12fa5bda93b1',
      },
    ],
    info: {
      license_text:
        'The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.',
      license_links: ['https://creativecommons.org/publicdomain/zero/1.0/', 'https://www.artic.edu/terms'],
      version: '1.6',
    },
    config: {
      iiif_url: 'https://www.artic.edu/iiif/2',
      website_url: 'http://www.artic.edu',
    },
  };

  constructor() {}

  getArtWorks() {
    return this.artWorks;
    // const apiUrl = 'https://api.artic.edu/api/v1/artworks';
    // return this.http.get<ArtworkResponse>(apiUrl).pipe(map((response: ArtworkResponse) => response.data));
  }
}
