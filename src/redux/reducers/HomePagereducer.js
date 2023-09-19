import {
  IS_LOADING,
  GET_BANNER_ERROR,
  GET_BANNER_SUCCESS,
  GET_BLOGS_ERROR,
  GET_BLOGS_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
  GET_COURSES_ERROR,
  GET_COURSES_SUCCESS,
  GET_FAQ_ERROR,
  GET_FAQ_SUCCESS,
  GET_TESTIMONIALSS_ERROR,
  GET_TESTIMONIALSS_SUCCESS,
  GET_COUNTRY_LIST_ERROR,
  GET_COUNTRY_LIST_SUCCESS,
  POST_STATES_LIST_SUCCESS,
  POST_STATES_LIST_ERROR,
  POST_CITIES_LIST_SUCCESS,
  POST_CITIES_LIST_ERROR,
  GET_BLOGS_CATEGORY_SUCCESS,
  GET_BLOGS_CATEGORY_ERROR,
  CONTACT_US_SUCCESS,
  CONTACT_US_ERROR,
  GET_BLOG_DETAIL_SUCCESS,
  GET_BLOG_DETAIL_ERROR,
} from "../actions/Type";

const initialState = {
  get_testimonial: [],
  get_course: [],
  get_blogs: [],
  get_blog_detail: {},
  get_blogs_category: [],
  get_faqs: [],
  get_banner: [],
  get_category: [],
  get_country_list: [],
  post_states_list: [],
  post_cities_list: [],
  contact_us_success: {},
  contact_us_error: {},
  loading: false,
};

const HomePagereducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        get_course: payload,
        loading: false,
      };
    case GET_COURSES_ERROR:
      return {
        ...state,
        get_course: payload,
        loading: false,
      };
    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        get_blogs: payload,
        loading: false,
      };
    case GET_BLOGS_ERROR:
      return {
        ...state,
        get_blogs: payload,
        loading: false,
      };
    case GET_BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        get_blog_detail: payload,
        loading: false,
      };
    case GET_BLOG_DETAIL_ERROR:
      return {
        ...state,
        get_blog_detail: payload,
        loading: false,
      };
    case GET_BLOGS_CATEGORY_SUCCESS:
      return {
        ...state,
        get_blogs_category: payload,
        loading: false,
      };
    case GET_BLOGS_CATEGORY_ERROR:
      return {
        ...state,
        get_blogs_category: payload,
        loading: false,
      };
    case GET_FAQ_SUCCESS:
      return {
        ...state,
        get_faqs: payload,
        loading: false,
      };
    case GET_FAQ_ERROR:
      return {
        ...state,
        get_faqs: payload,
        loading: false,
      };
    case GET_BANNER_SUCCESS:
      return {
        ...state,
        get_banner: payload,
        loading: false,
      };
    case GET_BANNER_ERROR:
      return {
        ...state,
        get_banner: payload,
        loading: false,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        get_category: payload,
        loading: false,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        get_category: payload,
        loading: false,
      };
    case GET_TESTIMONIALSS_SUCCESS:
      return {
        ...state,
        get_testimonial: payload,
        loading: false,
      };
    case GET_TESTIMONIALSS_ERROR:
      return {
        ...state,
        get_testimonial: payload,
        loading: false,
      };
    case GET_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        get_country_list: payload,
        loading: false,
      };
    case GET_COUNTRY_LIST_ERROR:
      return {
        ...state,
        get_country_list: payload,
        loading: false,
      };
    case POST_STATES_LIST_SUCCESS:
      return {
        ...state,
        post_states_list: payload,
        loading: false,
      };
    case POST_STATES_LIST_ERROR:
      return {
        ...state,
        post_states_list: payload,
        loading: false,
      };
    case POST_CITIES_LIST_SUCCESS:
      return {
        ...state,
        post_cities_list: payload,
        loading: false,
      };
    case POST_CITIES_LIST_ERROR:
      return {
        ...state,
        post_cities_list: payload,
        loading: false,
      };
    case CONTACT_US_SUCCESS:
      return {
        ...state,
        contact_us_success: payload,
        loading: false,
      };
    case CONTACT_US_ERROR:
      return {
        ...state,
        CONTACT_US_ERROR: payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default HomePagereducer;
