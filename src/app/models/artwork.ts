export interface ReqParams {
  limit: number;
  page: number;
  fields?: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}
interface Meta {
  pagination: Pagination;
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
}

interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface ArtWork {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  image_id: string | null | undefined;
  date_start: number;
  date_end: number;
  place_of_origin: string;
  artist_title: string | null;
  style_titles: string[];
  material_titles: string[];
}

export type ArtworkResponse = Meta & {
  data: ArtWork[];
};
