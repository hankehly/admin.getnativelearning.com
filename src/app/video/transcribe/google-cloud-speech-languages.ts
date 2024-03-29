/**
 * google-cloud-speech-languages
 * admin.getnativelearning.com
 *
 * Created by henryehly on 2017/05/30.
 */

export interface GoogleCloudSpeechLanguage {
    name: string;
    code: string;
    englishName: string;
}

/* Taken from https://cloud.google.com/speech/docs/languages
 * Formatted at http://convertjson.com/html-table-to-json.htm */
export const GoogleCloudSpeechLanguages: GoogleCloudSpeechLanguage[] = [
    {
        'name': 'Afrikaans (Suid-Afrika)',
        'code': 'af-ZA',
        'englishName': 'Afrikaans (South Africa)'
    },
    {
        'name': 'Bahasa Indonesia (Indonesia)',
        'code': 'id-ID',
        'englishName': 'Indonesian (Indonesia)'
    },
    {
        'name': 'Bahasa Melayu (Malaysia)',
        'code': 'ms-MY',
        'englishName': 'Malay (Malaysia)'
    },
    {
        'name': 'Català (Espanya)',
        'code': 'ca-ES',
        'englishName': 'Catalan (Spain)'
    },
    {
        'name': 'Čeština (Česká republika)',
        'code': 'cs-CZ',
        'englishName': 'Czech (Czech Republic)'
    },
    {
        'name': 'Dansk (Danmark)',
        'code': 'da-DK',
        'englishName': 'Danish (Denmark)'
    },
    {
        'name': 'Deutsch (Deutschland)',
        'code': 'de-DE',
        'englishName': 'German (Germany)'
    },
    {
        'name': 'English (Australia)',
        'code': 'en-AU',
        'englishName': 'English (Australia)'
    },
    {
        'name': 'English (Canada)',
        'code': 'en-CA',
        'englishName': 'English (Canada)'
    },
    {
        'name': 'English (Great Britain)',
        'code': 'en-GB',
        'englishName': 'English (United Kingdom)'
    },
    {
        'name': 'English (India)',
        'code': 'en-IN',
        'englishName': 'English (India)'
    },
    {
        'name': 'English (Ireland)',
        'code': 'en-IE',
        'englishName': 'English (Ireland)'
    },
    {
        'name': 'English (New Zealand)',
        'code': 'en-NZ',
        'englishName': 'English (New Zealand)'
    },
    {
        'name': 'English (Philippines)',
        'code': 'en-PH',
        'englishName': 'English (Philippines)'
    },
    {
        'name': 'English (South Africa)',
        'code': 'en-ZA',
        'englishName': 'English (South Africa)'
    },
    {
        'name': 'English (United States)',
        'code': 'en-US',
        'englishName': 'English (United States)'
    },
    {
        'name': 'Español (Argentina)',
        'code': 'es-AR',
        'englishName': 'Spanish (Argentina)'
    },
    {
        'name': 'Español (Bolivia)',
        'code': 'es-BO',
        'englishName': 'Spanish (Bolivia)'
    },
    {
        'name': 'Español (Chile)',
        'code': 'es-CL',
        'englishName': 'Spanish (Chile)'
    },
    {
        'name': 'Español (Colombia)',
        'code': 'es-CO',
        'englishName': 'Spanish (Colombia)'
    },
    {
        'name': 'Español (Costa Rica)',
        'code': 'es-CR',
        'englishName': 'Spanish (Costa Rica)'
    },
    {
        'name': 'Español (Ecuador)',
        'code': 'es-EC',
        'englishName': 'Spanish (Ecuador)'
    },
    {
        'name': 'Español (El Salvador)',
        'code': 'es-SV',
        'englishName': 'Spanish (El Salvador)'
    },
    {
        'name': 'Español (España)',
        'code': 'es-ES',
        'englishName': 'Spanish (Spain)'
    },
    {
        'name': 'Español (Estados Unidos)',
        'code': 'es-US',
        'englishName': 'Spanish (United States)'
    },
    {
        'name': 'Español (Guatemala)',
        'code': 'es-GT',
        'englishName': 'Spanish (Guatemala)'
    },
    {
        'name': 'Español (Honduras)',
        'code': 'es-HN',
        'englishName': 'Spanish (Honduras)'
    },
    {
        'name': 'Español (México)',
        'code': 'es-MX',
        'englishName': 'Spanish (Mexico)'
    },
    {
        'name': 'Español (Nicaragua)',
        'code': 'es-NI',
        'englishName': 'Spanish (Nicaragua)'
    },
    {
        'name': 'Español (Panamá)',
        'code': 'es-PA',
        'englishName': 'Spanish (Panama)'
    },
    {
        'name': 'Español (Paraguay)',
        'code': 'es-PY',
        'englishName': 'Spanish (Paraguay)'
    },
    {
        'name': 'Español (Perú)',
        'code': 'es-PE',
        'englishName': 'Spanish (Peru)'
    },
    {
        'name': 'Español (Puerto Rico)',
        'code': 'es-PR',
        'englishName': 'Spanish (Puerto Rico)'
    },
    {
        'name': 'Español (República Dominicana)',
        'code': 'es-DO',
        'englishName': 'Spanish (Dominican Republic)'
    },
    {
        'name': 'Español (Uruguay)',
        'code': 'es-UY',
        'englishName': 'Spanish (Uruguay)'
    },
    {
        'name': 'Español (Venezuela)',
        'code': 'es-VE',
        'englishName': 'Spanish (Venezuela)'
    },
    {
        'name': 'Euskara (Espainia)',
        'code': 'eu-ES',
        'englishName': 'Basque (Spain)'
    },
    {
        'name': 'Filipino (Pilipinas)',
        'code': 'fil-PH',
        'englishName': 'Filipino (Philippines)'
    },
    {
        'name': 'Français (Canada)',
        'code': 'fr-CA',
        'englishName': 'French (Canada)'
    },
    {
        'name': 'Français (France)',
        'code': 'fr-FR',
        'englishName': 'French (France)'
    },
    {
        'name': 'Galego (España)',
        'code': 'gl-ES',
        'englishName': 'Galician (Spain)'
    },
    {
        'name': 'Hrvatski (Hrvatska)',
        'code': 'hr-HR',
        'englishName': 'Croatian (Croatia)'
    },
    {
        'name': 'IsiZulu (Ningizimu Afrika)',
        'code': 'zu-ZA',
        'englishName': 'Zulu (South Africa)'
    },
    {
        'name': 'Íslenska (Ísland)',
        'code': 'is-IS',
        'englishName': 'Icelandic (Iceland)'
    },
    {
        'name': 'Italiano (Italia)',
        'code': 'it-IT',
        'englishName': 'Italian (Italy)'
    },
    {
        'name': 'Lietuvių (Lietuva)',
        'code': 'lt-LT',
        'englishName': 'Lithuanian (Lithuania)'
    },
    {
        'name': 'Magyar (Magyarország)',
        'code': 'hu-HU',
        'englishName': 'Hungarian (Hungary)'
    },
    {
        'name': 'Nederlands (Nederland)',
        'code': 'nl-NL',
        'englishName': 'Dutch (Netherlands)'
    },
    {
        'name': 'Norsk bokmål (Norge)',
        'code': 'nb-NO',
        'englishName': 'Norwegian Bokmål (Norway)'
    },
    {
        'name': 'Polski (Polska)',
        'code': 'pl-PL',
        'englishName': 'Polish (Poland)'
    },
    {
        'name': 'Português (Brasil)',
        'code': 'pt-BR',
        'englishName': 'Portuguese (Brazil)'
    },
    {
        'name': 'Português (Portugal)',
        'code': 'pt-PT',
        'englishName': 'Portuguese (Portugal)'
    },
    {
        'name': 'Română (România)',
        'code': 'ro-RO',
        'englishName': 'Romanian (Romania)'
    },
    {
        'name': 'Slovenčina (Slovensko)',
        'code': 'sk-SK',
        'englishName': 'Slovak (Slovakia)'
    },
    {
        'name': 'Slovenščina (Slovenija)',
        'code': 'sl-SI',
        'englishName': 'Slovenian (Slovenia)'
    },
    {
        'name': 'Suomi (Suomi)',
        'code': 'fi-FI',
        'englishName': 'Finnish (Finland)'
    },
    {
        'name': 'Svenska (Sverige)',
        'code': 'sv-SE',
        'englishName': 'Swedish (Sweden)'
    },
    {
        'name': 'Tiếng Việt (Việt Nam)',
        'code': 'vi-VN',
        'englishName': 'Vietnamese (Vietnam)'
    },
    {
        'name': 'Türkçe (Türkiye)',
        'code': 'tr-TR',
        'englishName': 'Turkish (Turkey)'
    },
    {
        'name': 'Ελληνικά (Ελλάδα)',
        'code': 'el-GR',
        'englishName': 'Greek (Greece)'
    },
    {
        'name': 'Български (България)',
        'code': 'bg-BG',
        'englishName': 'Bulgarian (Bulgaria)'
    },
    {
        'name': 'Русский (Россия)',
        'code': 'ru-RU',
        'englishName': 'Russian (Russia)'
    },
    {
        'name': 'Српски (Србија)',
        'code': 'sr-RS',
        'englishName': 'Serbian (Serbia)'
    },
    {
        'name': 'Українська (Україна)',
        'code': 'uk-UA',
        'englishName': 'Ukrainian (Ukraine)'
    },
    {
        'name': 'עברית (ישראל)',
        'code': 'he-IL',
        'englishName': 'Hebrew (Israel)'
    },
    {
        'name': 'العربية (إسرائيل)',
        'code': 'ar-IL',
        'englishName': 'Arabic (Israel)'
    },
    {
        'name': 'العربية (الأردن)',
        'code': 'ar-JO',
        'englishName': 'Arabic (Jordan)'
    },
    {
        'name': 'العربية (الإمارات)',
        'code': 'ar-AE',
        'englishName': 'Arabic (United Arab Emirates)'
    },
    {
        'name': 'العربية (البحرين)',
        'code': 'ar-BH',
        'englishName': 'Arabic (Bahrain)'
    },
    {
        'name': 'العربية (الجزائر)',
        'code': 'ar-DZ',
        'englishName': 'Arabic (Algeria)'
    },
    {
        'name': 'العربية (السعودية)',
        'code': 'ar-SA',
        'englishName': 'Arabic (Saudi Arabia)'
    },
    {
        'name': 'العربية (العراق)',
        'code': 'ar-IQ',
        'englishName': 'Arabic (Iraq)'
    },
    {
        'name': 'العربية (الكويت)',
        'code': 'ar-KW',
        'englishName': 'Arabic (Kuwait)'
    },
    {
        'name': 'العربية (المغرب)',
        'code': 'ar-MA',
        'englishName': 'Arabic (Morocco)'
    },
    {
        'name': 'العربية (تونس)',
        'code': 'ar-TN',
        'englishName': 'Arabic (Tunisia)'
    },
    {
        'name': 'العربية (عُمان)',
        'code': 'ar-OM',
        'englishName': 'Arabic (Oman)'
    },
    {
        'name': 'العربية (فلسطين)',
        'code': 'ar-PS',
        'englishName': 'Arabic (State of Palestine)'
    },
    {
        'name': 'العربية (قطر)',
        'code': 'ar-QA',
        'englishName': 'Arabic (Qatar)'
    },
    {
        'name': 'العربية (لبنان)',
        'code': 'ar-LB',
        'englishName': 'Arabic (Lebanon)'
    },
    {
        'name': 'العربية (مصر)',
        'code': 'ar-EG',
        'englishName': 'Arabic (Egypt)'
    },
    {
        'name': 'فارسی (ایران)',
        'code': 'fa-IR',
        'englishName': 'Persian (Iran)'
    },
    {
        'name': 'हिन्दी (भारत)',
        'code': 'hi-IN',
        'englishName': 'Hindi (India)'
    },
    {
        'name': 'ไทย (ประเทศไทย)',
        'code': 'th-TH',
        'englishName': 'Thai (Thailand)'
    },
    {
        'name': '한국어 (대한민국)',
        'code': 'ko-KR',
        'englishName': 'Korean (South Korea)'
    },
    {
        'name': '國語 (台灣)',
        'code': 'cmn-Hant-TW',
        'englishName': 'Chinese, Mandarin (Traditional, Taiwan)'
    },
    {
        'name': '廣東話 (香港)',
        'code': 'yue-Hant-HK',
        'englishName': 'Chinese, Cantonese (Traditional, Hong Kong)'
    },
    {
        'name': '日本語（日本）',
        'code': 'ja-JP',
        'englishName': 'Japanese (Japan)'
    },
    {
        'name': '普通話 (香港)',
        'code': 'cmn-Hans-HK',
        'englishName': 'Chinese, Mandarin (Simplified, Hong Kong)'
    },
    {
        'name': '普通话 (中国大陆)',
        'code': 'cmn-Hans-CN',
        'englishName': 'Chinese, Mandarin (Simplified, China)'
    }
];
