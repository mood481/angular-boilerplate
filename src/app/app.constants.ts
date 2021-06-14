

export class AppConstants
{
    public static readonly LANGS = [
        { id: "es", label: "Español" },
        { id: "en", label: "English" }
    ];

    public static readonly APP_PAGES = [
        { key: "home", url: "/home" }
    ];

    public static readonly Routing = {
        BASE_PRIVATE: "abo",
        EDIT_SUFFIX: "edit",
        Parts: {
            VIEW: "details",
            EDIT: "edit/:id"
        }
    }

    public static readonly DEFAULT_LANG = AppConstants.LANGS[0].id;
    public static readonly DEFAULT_MAIN_PAGE = AppConstants.APP_PAGES[0].url;
}
