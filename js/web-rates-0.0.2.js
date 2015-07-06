var webRates = {
  rates: [
      {cd: 'AED', nm: 'United Arab Emirates Dirham', sym: 'Ø¯.Ø¥', op: 4.1591, cl: 4.1591, hi: 4.1591, lo: 4.1591, sp: 0, el: null },
    {cd: 'ALL', nm: 'Albanian Lek', sym: 'Lek', op: 139.9862, cl: 139.9862, hi: 139.9862, lo: 139.9862, sp: 0, el: null },
    {cd: 'ANG', nm: 'Netherlands Antillean Guilder', sym: 'Æ’', op: 2.0268, cl: 2.0268, hi: 2.0268, lo: 2.0268, sp: 0, el: null },
    {cd: 'ARS', nm: 'Argentine Peso', sym: '$', op: 9.8059, cl: 9.8059, hi: 9.8059, lo: 9.8059, sp: 0, el: null },
    {cd: 'AUD', nm: 'Australian Dollar', sym: '$', op: 1.4577, cl: 1.4577, hi: 1.4577, lo: 1.4577, sp: 0, el: null },
    {cd: 'AWG', nm: 'Aruban Florin', sym: 'Æ’', op: 2.0268, cl: 2.0268, hi: 2.0268, lo: 2.0268, sp: 0, el: null },
    {cd: 'BBD', nm: 'Barbadian Dollar', sym: '$', op: 2.2646, cl: 2.2646, hi: 2.2646, lo: 2.2646, sp: 0, el: null },
    {cd: 'BDT', nm: 'Bangladeshi Taka', sym: 'Tk', op: 88.1478, cl: 88.1478, hi: 88.1478, lo: 88.1478, sp: 0, el: null },
    {cd: 'BHD', nm: 'Bahraini Dinar', sym: 'BD', op: 0.427, cl: 0.427, hi: 0.427, lo: 0.427, sp: 0, el: null },
    {cd: 'BIF', nm: 'Burundian Franc', sym: 'FBu', op: 1777.7109, cl: 1777.7109, hi: 1777.7109, lo: 1777.7109, sp: 0, el: null },
    {cd: 'BMD', nm: 'Bermudan Dollar', sym: '$', op: 1.1323, cl: 1.1323, hi: 1.1323, lo: 1.1323, sp: 0, el: null },
    {cd: 'BND', nm: 'Brunei Dollar', sym: '$', op: 1.5321, cl: 1.5321, hi: 1.5321, lo: 1.5321, sp: 0, el: null },
    {cd: 'BOB', nm: 'Bolivian Boliviano', sym: '$b', op: 7.8242, cl: 7.8242, hi: 7.8242, lo: 7.8242, sp: 0, el: null },
    {cd: 'BRL', nm: 'Brazilian Real', sym: 'R$', op: 3.1505, cl: 3.1505, hi: 3.1505, lo: 3.1505, sp: 0, el: null },
    {cd: 'BSD', nm: 'Bahamian Dollar', sym: '$', op: 1.1323, cl: 1.1323, hi: 1.1323, lo: 1.1323, sp: 0, el: null },
    {cd: 'BTN', nm: 'Bhutanese Ngultrum', sym: 'Nu.', op: 69.894, cl: 69.894, hi: 69.894, lo: 69.894, sp: 0, el: null },
    {cd: 'BWP', nm: 'Botswanan Pula', sym: 'P', op: 10.7326, cl: 10.7326, hi: 10.7326, lo: 10.7326, sp: 0, el: null },
    {cd: 'BZD', nm: 'Belize Dollar', sym: 'BZ$', op: 2.2589, cl: 2.2589, hi: 2.2589, lo: 2.2589, sp: 0, el: null },
    {cd: 'CAD', nm: 'Canadian Dollar', sym: '$', op: 1.4204, cl: 1.4204, hi: 1.4204, lo: 1.4204, sp: 0, el: null },
    {cd: 'CHF', nm: 'Swiss Franc', sym: 'CHF', op: 1.05, cl: 1.05, hi: 1.05, lo: 1.05, sp: 0, el: null },
    {cd: 'CLP', nm: 'Chilean Peso', sym: '$', op: 710.6541, cl: 710.6541, hi: 710.6541, lo: 710.6541, sp: 0, el: null },
    {cd: 'CNY', nm: 'Chinese Yuan Renminbi', sym: 'Â¥', op: 7.0719, cl: 7.0719, hi: 7.0719, lo: 7.0719, sp: 0, el: null },
    {cd: 'COP', nm: 'Colombian Peso', sym: '$', op: 2695.8816, cl: 2695.8816, hi: 2695.8816, lo: 2695.8816, sp: 0, el: null },
    {cd: 'CRC', nm: 'Costa Rican ColÃ³n', sym: 'â‚¡', op: 609.8115, cl: 609.8115, hi: 609.8115, lo: 609.8115, sp: 0, el: null },
    {cd: 'CUP', nm: 'Cuban Peso', sym: 'â‚±', op: 1.1323, cl: 1.1323, hi: 1.1323, lo: 1.1323, sp: 0, el: null },
    {cd: 'CVE', nm: 'Cape Verdean Escudo', sym: '$', op: 110.0024, cl: 110.0024, hi: 110.0024, lo: 110.0024, sp: 0, el: null },
    {cd: 'CZK', nm: 'Czech Republic Koruna', sym: 'KÄ', op: 27.7153, cl: 27.7153, hi: 27.7153, lo: 27.7153, sp: 0, el: null },
    {cd: 'DJF', nm: 'Djiboutian Franc', sym: 'Fdj', op: 201.0455, cl: 201.0455, hi: 201.0455, lo: 201.0455, sp: 0, el: null },
    {cd: 'DKK', nm: 'Danish Krone', sym: 'kr', op: 7.4426, cl: 7.4426, hi: 7.4426, lo: 7.4426, sp: 0, el: null },
    {cd: 'DOP', nm: 'Dominican Peso', sym: 'RD$', op: 50.8289, cl: 50.8289, hi: 50.8289, lo: 50.8289, sp: 0, el: null },
    {cd: 'DZD', nm: 'Algerian Dinar', sym: 'Ø¯Ø¬', op: 105.5021, cl: 105.5021, hi: 105.5021, lo: 105.5021, sp: 0, el: null },
    {cd: 'EGP', nm: 'Egyptian Pound', sym: 'Â£', op: 8.6452, cl: 8.6452, hi: 8.6452, lo: 8.6452, sp: 0, el: null },
    {cd: 'ETB', nm: 'Ethiopian Birr', sym: 'Br', op: 22.9766, cl: 22.9766, hi: 22.9766, lo: 22.9766, sp: 0, el: null },
    {cd: 'EUR', nm: 'Euro', sym: 'â‚¬', op: 1, cl: 1, hi: 1, lo: 1, sp: 0, el: null },
    {cd: 'FKP', nm: 'Falkland Islands Pound', sym: 'Â£', op: 0.7386, cl: 0.7386, hi: 0.7386, lo: 0.7386, sp: 0, el: null },
    {cd: 'GBP', nm: 'British Pound Sterling', sym: 'Â£', op: 0.743, cl: 0.743, hi: 0.743, lo: 0.743, sp: 0, el: null },
    {cd: 'GIP', nm: 'Gibraltar Pound', sym: 'Â£', op: 0.7385, cl: 0.7385, hi: 0.7385, lo: 0.7385, sp: 0, el: null },
    {cd: 'GMD', nm: 'Gambian Dalasi', sym: 'D', op: 48.5757, cl: 48.5757, hi: 48.5757, lo: 48.5757, sp: 0, el: null },
    {cd: 'GNF', nm: 'Guinean Franc', sym: 'FG', op: 8158.2212, cl: 8158.2212, hi: 8158.2212, lo: 8158.2212, sp: 0, el: null },
    {cd: 'GTQ', nm: 'Guatemalan Quetzal', sym: 'Q', op: 8.6672, cl: 8.6672, hi: 8.6672, lo: 8.6672, sp: 0, el: null },
    {cd: 'GYD', nm: 'Guyanaese Dollar', sym: '$', op: 234.6239, cl: 234.6239, hi: 234.6239, lo: 234.6239, sp: 0, el: null },
    {cd: 'HKD', nm: 'Hong Kong Dollar', sym: '$', op: 8.7781, cl: 8.7781, hi: 8.7781, lo: 8.7781, sp: 0, el: null },
    {cd: 'HNL', nm: 'Honduran Lempira', sym: 'L', op: 23.7783, cl: 23.7783, hi: 23.7783, lo: 23.7783, sp: 0, el: null },
    {cd: 'HRK', nm: 'Croatian Kuna', sym: 'kn', op: 7.7034, cl: 7.7034, hi: 7.7034, lo: 7.7034, sp: 0, el: null },
    {cd: 'HTG', nm: 'Haitian Gourde', sym: 'G', op: 53.1091, cl: 53.1091, hi: 53.1091, lo: 53.1091, sp: 0, el: null },
    {cd: 'HUF', nm: 'Hungarian Forint', sym: 'Ft', op: 306.1966, cl: 306.1966, hi: 306.1966, lo: 306.1966, sp: 0, el: null },
    {cd: 'IDR', nm: 'Indonesian Rupiah', sym: 'Rp', op: 14349.5811, cl: 14349.5811, hi: 14349.5811, lo: 14349.5811, sp: 0, el: null },
    {cd: 'ILS', nm: 'Israeli New Sheqel', sym: 'â‚ª', op: 4.4094, cl: 4.4094, hi: 4.4094, lo: 4.4094, sp: 0, el: null },
    {cd: 'INR', nm: 'Indian Rupee', sym: 'â‚¹', op: 70.258, cl: 70.258, hi: 70.258, lo: 70.258, sp: 0, el: null },
    {cd: 'IQD', nm: 'Iraqi Dinar', sym: 'Ø¯.Ø¹', op: 1342.9077, cl: 1342.9077, hi: 1342.9077, lo: 1342.9077, sp: 0, el: null },
    {cd: 'ISK', nm: 'Icelandic KrÃ³na', sym: 'kr', op: 149.7806, cl: 149.7806, hi: 149.7806, lo: 149.7806, sp: 0, el: null },
    {cd: 'JMD', nm: 'Jamaican Dollar', sym: 'J$', op: 130.8486, cl: 130.8486, hi: 130.8486, lo: 130.8486, sp: 0, el: null },
    {cd: 'JOD', nm: 'Jordanian Dinar', sym: 'JD', op: 0.8032, cl: 0.8032, hi: 0.8032, lo: 0.8032, sp: 0, el: null },
    {cd: 'JPY', nm: 'Japanese Yen', sym: 'Â¥', op: 134.8739, cl: 134.8739, hi: 134.8739, lo: 134.8739, sp: 0, el: null },
    {cd: 'KES', nm: 'Kenyan Shilling', sym: 'KSh', op: 103.5369, cl: 103.5369, hi: 103.5369, lo: 103.5369, sp: 0, el: null },
    {cd: 'KHR', nm: 'Cambodian Riel', sym: 'áŸ›', op: 4602.7427, cl: 4602.7427, hi: 4602.7427, lo: 4602.7427, sp: 0, el: null },
    {cd: 'KMF', nm: 'Comorian Franc', sym: 'CF', op: 492.2939, cl: 492.2939, hi: 492.2939, lo: 492.2939, sp: 0, el: null },
    {cd: 'KPW', nm: 'North Korean Won', sym: 'â‚©', op: 1019.0699, cl: 1019.0699, hi: 1019.0699, lo: 1019.0699, sp: 0, el: null },
    {cd: 'KRW', nm: 'South Korean Won', sym: 'â‚©', op: 1243.3164, cl: 1243.3164, hi: 1243.3164, lo: 1243.3164, sp: 0, el: null },
    {cd: 'KWD', nm: 'Kuwaiti Dinar', sym: 'Ùƒ', op: 0.3345, cl: 0.3345, hi: 0.3345, lo: 0.3345, sp: 0, el: null },
    {cd: 'KYD', nm: 'Cayman Islands Dollar', sym: '$', op: 0.9285, cl: 0.9285, hi: 0.9285, lo: 0.9285, sp: 0, el: null },
    {cd: 'KZT', nm: 'Kazakhstan Tenge', sym: 'Ð»Ð²', op: 209.5831, cl: 209.5831, hi: 209.5831, lo: 209.5831, sp: 0, el: null },
    {cd: 'LAK', nm: 'Laotian Kip', sym: 'â‚­', op: 9199.8809, cl: 9199.8809, hi: 9199.8809, lo: 9199.8809, sp: 0, el: null },
    {cd: 'LBP', nm: 'Lebanese Pound', sym: 'Â£', op: 1710.3391, cl: 1710.3391, hi: 1710.3391, lo: 1710.3391, sp: 0, el: null },
    {cd: 'LKR', nm: 'Sri Lanka Rupee', sym: 'â‚¨', op: 150.5506, cl: 150.5506, hi: 150.5506, lo: 150.5506, sp: 0, el: null },
    {cd: 'LRD', nm: 'Liberian Dollar', sym: '$', op: 95.8216, cl: 95.8216, hi: 95.8216, lo: 95.8216, sp: 0, el: null },
    {cd: 'LSL', nm: 'Lesotho Loti', sym: 'M', op: 13.0164, cl: 13.0164, hi: 13.0164, lo: 13.0164, sp: 0, el: null },
    {cd: 'LTL', nm: 'Lithuanian Litas', sym: 'Lt', op: 3.3222, cl: 3.3222, hi: 3.3222, lo: 3.3222, sp: 0, el: null },
    {cd: 'LVL', nm: 'Latvian Lats', sym: 'Ls', op: 0.7033, cl: 0.7033, hi: 0.7033, lo: 0.7033, sp: 0, el: null },
    {cd: 'LYD', nm: 'Libyan Dinar', sym: 'Ù„.Ø¯', op: 1.5427, cl: 1.5427, hi: 1.5427, lo: 1.5427, sp: 0, el: null },
    {cd: 'MAD', nm: 'Moroccan Dirham', sym: 'Ø¯.Ù…', op: 10.8218, cl: 10.8218, hi: 10.8218, lo: 10.8218, sp: 0, el: null },
    {cd: 'MDL', nm: 'Moldovan Leu', sym: 'lei', op: 21.0891, cl: 21.0891, hi: 21.0891, lo: 21.0891, sp: 0, el: null },
    {cd: 'MKD', nm: 'Macedonian Denar', sym: 'Ð´ÐµÐ½', op: 61.2971, cl: 61.2971, hi: 61.2971, lo: 61.2971, sp: 0, el: null },
    {cd: 'MMK', nm: 'Myanma Kyat', sym: 'K', op: 1164.1176, cl: 1164.1176, hi: 1164.1176, lo: 1164.1176, sp: 0, el: null },
    {cd: 'MNT', nm: 'Mongolian Tugrik', sym: 'â‚®', op: 2204.022, cl: 2204.022, hi: 2204.022, lo: 2204.022, sp: 0, el: null },
    {cd: 'MOP', nm: 'Macanese Pataca', sym: '$', op: 9.042, cl: 9.042, hi: 9.042, lo: 9.042, sp: 0, el: null },
    {cd: 'MRO', nm: 'Mauritanian Ouguiya', sym: 'MO', op: 331.7639, cl: 331.7639, hi: 331.7639, lo: 331.7639, sp: 0, el: null },
    {cd: 'MUR', nm: 'Mauritian Rupee', sym: 'â‚¨', op: 37.3093, cl: 37.3093, hi: 37.3093, lo: 37.3093, sp: 0, el: null },
    {cd: 'MVR', nm: 'Maldivian Rufiyaa', sym: 'Þƒ', op: 17.3808, cl: 17.3808, hi: 17.3808, lo: 17.3808, sp: 0, el: null },
    {cd: 'MWK', nm: 'Malawian Kwacha', sym: 'MK', op: 526.5138, cl: 526.5138, hi: 526.5138, lo: 526.5138, sp: 0, el: null },
    {cd: 'MXN', nm: 'Mexican Peso', sym: '$', op: 16.806, cl: 16.806, hi: 16.806, lo: 16.806, sp: 0, el: null },
    {cd: 'MYR', nm: 'Malaysian Ringgit', sym: 'RM', op: 4.0173, cl: 4.0173, hi: 4.0173, lo: 4.0173, sp: 0, el: null },
    {cd: 'NAD', nm: 'Namibian Dollar', sym: '$', op: 13.0164, cl: 13.0164, hi: 13.0164, lo: 13.0164, sp: 0, el: null },
    {cd: 'NGN', nm: 'Nigerian Naira', sym: 'â‚¦', op: 219.4964, cl: 219.4964, hi: 219.4964, lo: 219.4964, sp: 0, el: null },
    {cd: 'NIO', nm: 'Nicaraguan Cordoba Oro', sym: 'C$', op: 30.2666, cl: 30.2666, hi: 30.2666, lo: 30.2666, sp: 0, el: null },
    {cd: 'NOK', nm: 'Norwegian Krone', sym: 'kr', op: 8.6288, cl: 8.6288, hi: 8.6288, lo: 8.6288, sp: 0, el: null },
    {cd: 'NPR', nm: 'Nepalese Rupee', sym: 'â‚¨', op: 111.8305, cl: 111.8305, hi: 111.8305, lo: 111.8305, sp: 0, el: null },
    {cd: 'NZD', nm: 'New Zealand Dollar', sym: '$', op: 1.5372, cl: 1.5372, hi: 1.5372, lo: 1.5372, sp: 0, el: null },
    {cd: 'OMR', nm: 'Omani Rial', sym: 'ï·¼', op: 0.4359, cl: 0.4359, hi: 0.4359, lo: 0.4359, sp: 0, el: null },
    {cd: 'PAB', nm: 'Panamanian Balboa', sym: 'B/.', op: 1.1323, cl: 1.1323, hi: 1.1323, lo: 1.1323, sp: 0, el: null },
    {cd: 'PEN', nm: 'Peruvian Nuevo Sol', sym: 'S/.', op: 3.4773, cl: 3.4773, hi: 3.4773, lo: 3.4773, sp: 0, el: null },
    {cd: 'PGK', nm: 'Papua New Guinean Kina', sym: 'K', op: 2.9692, cl: 2.9692, hi: 2.9692, lo: 2.9692, sp: 0, el: null },
    {cd: 'PHP', nm: 'Philippine Peso', sym: 'â‚±', op: 50.1003, cl: 50.1003, hi: 50.1003, lo: 50.1003, sp: 0, el: null },
    {cd: 'PKR', nm: 'Pakistani Rupee', sym: 'â‚¨', op: 114.5605, cl: 114.5605, hi: 114.5605, lo: 114.5605, sp: 0, el: null },
    {cd: 'PLN', nm: 'Polish Zloty', sym: 'zÅ‚', op: 4.1596, cl: 4.1596, hi: 4.1596, lo: 4.1596, sp: 0, el: null },
    {cd: 'PYG', nm: 'Paraguayan Guarani', sym: 'Gs', op: 5400.2896, cl: 5400.2896, hi: 5400.2896, lo: 5400.2896, sp: 0, el: null },
    {cd: 'QAR', nm: 'Qatari Rial', sym: 'ï·¼', op: 4.1236, cl: 4.1236, hi: 4.1236, lo: 4.1236, sp: 0, el: null },
    {cd: 'RUB', nm: 'Russian Ruble', sym: 'Ñ€ÑƒÐ±', op: 75.3257, cl: 75.3257, hi: 75.3257, lo: 75.3257, sp: 0, el: null },
    {cd: 'SAR', nm: 'Saudi Riyal', sym: 'ï·¼', op: 4.2491, cl: 4.2491, hi: 4.2491, lo: 4.2491, sp: 0, el: null },
    {cd: 'SBD', nm: 'Solomon Islands Dollar', sym: '$', op: 8.8483, cl: 8.8483, hi: 8.8483, lo: 8.8483, sp: 0, el: null },
    {cd: 'SCR', nm: 'Seychellois Rupee', sym: 'â‚¨', op: 15.9824, cl: 15.9824, hi: 15.9824, lo: 15.9824, sp: 0, el: null },
    {cd: 'SEK', nm: 'Swedish Krona', sym: 'kr', op: 9.557, cl: 9.557, hi: 9.557, lo: 9.557, sp: 0, el: null },
    {cd: 'SGD', nm: 'Singapore Dollar', sym: '$', op: 1.5331, cl: 1.5331, hi: 1.5331, lo: 1.5331, sp: 0, el: null },
    {cd: 'SHP', nm: 'Saint Helena Pound', sym: 'Â£', op: 0.7385, cl: 0.7385, hi: 0.7385, lo: 0.7385, sp: 0, el: null },
    {cd: 'SIT', nm: 'Slovenian Tolar', sym: '', op: 239.7988, cl: 239.7988, hi: 239.7988, lo: 239.7988, sp: 0, el: null },
    {cd: 'SLL', nm: 'Sierra Leonean Leone', sym: 'Le', op: 4902.8589, cl: 4902.8589, hi: 4902.8589, lo: 4902.8589, sp: 0, el: null },
    {cd: 'SOS', nm: 'Somali Shilling', sym: 'S', op: 798.2148, cl: 798.2148, hi: 798.2148, lo: 798.2148, sp: 0, el: null },
    {cd: 'STD', nm: 'SÃ£o TomÃ© and PrÃ­ncipe Dobra', sym: 'Db', op: 24403.8945, cl: 24403.8945, hi: 24403.8945, lo: 24403.8945, sp: 0, el: null },
    {cd: 'SVC', nm: 'Salvadoran ColÃ³n', sym: '$', op: 9.902, cl: 9.902, hi: 9.902, lo: 9.902, sp: 0, el: null },
    {cd: 'SYP', nm: 'Syrian Pound', sym: 'Â£', op: 213.8914, cl: 213.8914, hi: 213.8914, lo: 213.8914, sp: 0, el: null },
    {cd: 'SZL', nm: 'Swazi Lilangeni', sym: 'E', op: 13.0164, cl: 13.0164, hi: 13.0164, lo: 13.0164, sp: 0, el: null },
    {cd: 'THB', nm: 'Thai Baht (off-shore)', sym: 'à¸¿', op: 36.9583, cl: 36.9583, hi: 36.9583, lo: 36.9583, sp: 0, el: null },
    {cd: 'TND', nm: 'Tunisian Dinar', sym: 'DT', op: 2.1891, cl: 2.1891, hi: 2.1891, lo: 2.1891, sp: 0, el: null },
    {cd: 'TOP', nm: 'Tongan PaÃŠÂ»anga', sym: 'T$', op: 2.2537, cl: 2.2537, hi: 2.2537, lo: 2.2537, sp: 0, el: null },
    {cd: 'TRY', nm: 'Turkish Lira', sym: 'â‚®', op: 2.8013, cl: 2.8013, hi: 2.8013, lo: 2.8013, sp: 0, el: null },
    {cd: 'TTD', nm: 'Trinidad and Tobago Dollar', sym: 'TT$', op: 7.191, cl: 7.191, hi: 7.191, lo: 7.191, sp: 0, el: null },
    {cd: 'TWD', nm: 'New Taiwan Dollar', sym: 'å°å¸', op: 35.8486, cl: 35.8486, hi: 35.8486, lo: 35.8486, sp: 0, el: null },
    {cd: 'TZS', nm: 'Tanzanian Shilling', sym: 'TSh', op: 2078.5063, cl: 2078.5063, hi: 2078.5063, lo: 2078.5063, sp: 0, el: null },
    {cd: 'UAH', nm: 'Ukrainian Hryvnia', sym: 'â‚´', op: 28.5906, cl: 28.5906, hi: 28.5906, lo: 28.5906, sp: 0, el: null },
    {cd: 'UGX', nm: 'Ugandan Shilling', sym: 'USh', op: 3249.7009, cl: 3249.7009, hi: 3249.7009, lo: 3249.7009, sp: 0, el: null },
    {cd: 'USD', nm: 'US Dollar', sym: '$', op: 1.1323, cl: 1.1323, hi: 1.1323, lo: 1.1323, sp: 0, el: null },
    {cd: 'UYU', nm: 'Uruguayan Peso', sym: '$U', op: 27.7583, cl: 27.7583, hi: 27.7583, lo: 27.7583, sp: 0, el: null },
    {cd: 'VND', nm: 'Vietnamese Dong', sym: 'â‚«', op: 24097.6074, cl: 24097.6074, hi: 24097.6074, lo: 24097.6074, sp: 0, el: null },
    {cd: 'VUV', nm: 'Vanuatu Vatu', sym: 'VT', op: 122.1978, cl: 122.1978, hi: 122.1978, lo: 122.1978, sp: 0, el: null },
    {cd: 'WST', nm: 'Samoan Tala', sym: '$', op: 2.8236, cl: 2.8236, hi: 2.8236, lo: 2.8236, sp: 0, el: null },
    {cd: 'XAF', nm: 'CFA Franc BEAC', sym: 'CFA', op: 656.3918, cl: 656.3918, hi: 656.3918, lo: 656.3918, sp: 0, el: null },
    {cd: 'XAG', nm: 'Silver 1 Troy Ounce', sym: 'ozt', op: 0.0679, cl: 0.0679, hi: 0.0679, lo: 0.0679, sp: 0, el: null },
    {cd: 'XAU', nm: 'Gold 1 Troy Ounce', sym: 'ozt', op: 0.0009, cl: 0.0009, hi: 0.0009, lo: 0.0009, sp: 0, el: null },
    {cd: 'XCD', nm: 'East Caribbean Dollar', sym: '$', op: 3.0572, cl: 3.0572, hi: 3.0572, lo: 3.0572, sp: 0, el: null },
    {cd: 'XOF', nm: 'CFA Franc BCEAO', sym: 'CFA', op: 656.3918, cl: 656.3918, hi: 656.3918, lo: 656.3918, sp: 0, el: null },
    {cd: 'XPD', nm: 'Palladium', sym: 'ozt', op: 0.0014, cl: 0.0014, hi: 0.0014, lo: 0.0014, sp: 0, el: null },
    {cd: 'XPF', nm: 'Comptoirs FranÃ§ais du Pacifique CFP Franc', sym: 'CFP', op: 119.4108, cl: 119.4108, hi: 119.4108, lo: 119.4108, sp: 0, el: null },
    {cd: 'XPT', nm: 'Platinum 1 Troy Ounce', sym: 'ozt', op: 0.0009, cl: 0.0009, hi: 0.0009, lo: 0.0009, sp: 0, el: null },
    {cd: 'YER', nm: 'Yemeni Rial', sym: 'ï·¼', op: 243.5351, cl: 243.5351, hi: 243.5351, lo: 243.5351, sp: 0, el: null },
    {cd: 'ZAR', nm: 'South African Rand', sym: 'R', op: 13.0281, cl: 13.0281, hi: 13.0281, lo: 13.0281, sp: 0, el: null },
    {cd: 'ZMK', nm: 'Zambian Kwacha', sym: 'ZK', op: 5876.0708, cl: 5876.0708, hi: 5876.0708, lo: 5876.0708, sp: 0, el: null },

  ],
  timestamp: "2015-02-09 10:08:36"
};
