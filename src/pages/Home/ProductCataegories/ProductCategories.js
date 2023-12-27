import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import SortBy from './SortBy';
import SearchBar from './SearchBar';

const ProductCategories = () => {

    const [categories, setCategories] = useState([]);

    // const categories = [
    //     {
    //         _id: 1,
    //         name: "Tambourine",
    //         tags: [
    //             "Percussion",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJGLfoBMtCyqSHJYo-qE5_E0ylToHawrwLDYHYbdVI1UEiFumAFjf7s1YwIRdrtByab4OAYi40ag6Qi7oA1doTGegJPjGmpqkOWLKJzChw2idTv5SvT5Fd7cwCOzNe5OvyD3miZdbn80HEYyPNLo3ZTwb3FLfrsP00jeONFeBM7kOrqm9NAYwfMpDwtsb-AeIWeFYQYT4fD5QOmwaDTyFRAJtcnBpqNxtMnBQyWNTeBm4aE1FWOvQvQgo7qyhkKZ2FBtyHXSBhLg-oCKbD3giAp93Nxq4vO7Wyi6HARKElwC2K9EhRKJDQQbbhgUdLU1mBxgY7vCbgO0jQNW1jSdw2m/p.png"
    //     },
    //     {
    //         _id: 2,
    //         name: "Tabla",
    //         tags: [
    //             "Percussion",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKSjBxg6YydaPG4cUNI5IZfLkvkR5lloVYppkFkKvuxMhY_pQhrfrkyReBsUYsMZRGSUNwYxX2usAUrlBnB7jRAH2atTYi1U5aa9nOyzgHXD39e6o2RrXqgKsT78wqOQrvh-ZVcOklf8WOxexQJgLLMHzRpkMI5H0rjJMD-X-ktsoOTpwFC_3wdfpmUIRv09tRL76QP-x7C0aet9-WdcPmcVlIi3YHXmgFX8I8IDCIrzAy69VT_Vz-bjzHSQuYDiEzuh-e3kzz_EhU_wrxDB4vXZxomScfeKWjFYw9qQEi4QMGGvCtdpZx619j0wSXazDVKnHm1ydkifIFZ3SbNwVky/p.png"
    //     },
    //     {
    //         _id: 3,
    //         name: "Mridanga",
    //         tags: [
    //             "Percussion",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKsgQfKLoK4L2Je_bzfoXrwyZ5u-WV95H7c_4WIfcNZHyxJar_hNMsESBr_z_jDKIKbsrxHk2SEehApZgOqqtXtG9mFkuXtdEjto5r7dGxU5l6nHXdXVADmDtzGtb-x700kosUsIX8pmwsmHLO3fAxCBb41L3-M9ybjY2A3A1ToaElFsxrpnpYKr0rPDEDguC5gpLE0O-qazZCQNy_kxE0-FFRdSiHF8mh8LXp0bC70nwKbrEzlh54knFpbgDzKyGVU5iIswIcE9UE6QekQgMFOXT92T3ikYdh1CnSyun5XiU_Rs40PDyUmoGpPys5yCGK00FyXEfVAuRHB3fTV72Bd/p.png"
    //     },
    //     {
    //         _id: 4,
    //         name: "Dhol",
    //         tags: [
    //             "Percussion",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJuJ06yh_r44Nnx5IbaD2c_5s6WHhqyrebpHViah9SxjRIjtwyTwiJWULXysNQu0eqn3IIkrgi7QzjvsKCSU7vF_yJknIHPOvS3A5X1k77O9CaMSgtWeJLt94Xsp_FbEieSQ73b7qYIVAkI0VLaDlW7NBo9E4iqNZ_Ndj7HQfXkewFvzlkHesnCohWJ1bERa5qG_AcWdeaTo_OJ0BrxFYpUYj3JT4lWqgbIcSaAkOU3xXQIYaOdghRTvM4cCpHrb6_Hl8IGkl-xMNESTg7inKZ3UOWVoxODu4rLNJ18lp4RaxN3Co7RUQd2JNhpXgzaXxAdHhbkF2rLrzrS_z9UWJrS/p.png"
    //     },
    //     {
    //         _id: 5,
    //         name: "Sarod",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJAdBEIBc3JCXQaI7QW5fPeHf9tyCsgLOG0FKug_6UWpgYiibMXSJII6KE6HspOEZmJG0-98FryCXALtOrYixoiibtX5IFXfHNDJtyhM77j02GAIxqnkM6IbCNqXdwiBvtYtHu7SNr-RnBrUA0jQqYqjrcffAxvxY2Z9riGqDgxEXxuZ7ihaND1EImTlvwZSHcHGrT7GbmejWdq8vKk97o3zN1wIzJtuHU7CXsc_WgyUqygjHXZp7Kdq-C_BKOUZACziC2FFwfWQYDyFY95DOiZnXnQyzpcSIthLD5JXf4Be-0orE8hd8PcCW4LEBE5hRrI2qVv2YDxm9DY5FtszQkT/p.png"
    //     },
    //     {
    //         _id: 6,
    //         name: "Guitar",
    //         tags: [
    //             "Stringed",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACIbOZOib0-IYz-y1l-cnQkCb-KPLLOYYv8stzncGVS4PoQryMf9y3OZHU4PL3ndsz8fLByMncp6i0s5ha6UW3atFbcTfxsHUcxmC6-DTC8NLz3EfzM69sm4kquN2GY13W6I69AJcbXqKCfl0iwATQDRHvrtQUghKKFngT_DYKCd1TvcO2choh28p_OC1PwK5EhfnDkhPNzq7sXgIC3zfEzKi9S1ZCRvT69uBevKSN16RESPFtNCUgEaALw9t5zK6XVpNNpYd3vTEBhWGXDrewKLGTR5K0v5enrSb0dLyYSvyRmb6hjMf7F6hUHvQUXUcqLiAHboE_Yb5LaOAnxVaVP6/p.png"
    //     },
    //     {
    //         _id: 7,
    //         name: "Setar",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACI32AIyDdih_NyBC8pndmqY3zJ8bozGxEs5OqTLjWxpMawMtSv-fiyIvFTViNN7zK3wdlfXB0X9CQQ1PBC9UZ08wQplvElmYC7o2bhKfIUpJwWE99KesMo72Ww-f5OEOMrGonqhNejf0Fpue1H7qQyeDHwJmw0qpIsoVg4Kq0SVPlUhQxPLAgjb8oot8oQCHplu6-lURO1ls_aaJusshkTy2HA8bEm7CEmXCvQ861ALhl1hD0_Fm8cv0HQnJ-r4MyM3guUY29Qc8YikE_bxoC61zhVYKsrX7jeaux6IE0fxSLrGWxx5sxBDJY4xjFno_pa28dYCveD_FHs2TAO73eg7/p.png"
    //     },
    //     {
    //         _id: 8,
    //         name: "Sarangi",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJYhvVhPRy0DkbVnrKYsMAzymQ9xtWvO2ZOaYOCqovXJdjDMQuDIdZvr85JjZ3uUd8Ka5glWr7_eeKCKDAJLIMGVrGmkHUKrmlHskv2maQ8ZcOuaC8kPm8fzAB_jNbPmv0XBWKC03uTxgEm_ST1CCB9bL15wTwUJ6NoT1lUqpFjGGBrJycxriG7HADmzJfepU2Em7oaZJE92eJO1P0OUAI7PihpZwDHa5QJGze4E2fExv95dmUV1_qb1wvb8uAqmMARh-ZR_HhlbB0nZMaUPZmlKir3wTi7qU_Fdn2rvIbRc7jhw7Yia5smlXERwekXeZDIReqTJEIbTEskbiL1J5yT/p.png"
    //     },
    //     {
    //         _id: 9,
    //         name: "Tanpura",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJ6PuF_dYkfyNu1VQdWvM1iITSo0ni3IvD9p0DeJJhDjpxna9xqyBoEX1cfTD1Pj3vbaiw-v5qO_A5MSPiDarGZ-k__8DT-TCJ2SVdRumnfh5RMEijBKjnqCCL2dQTziUA1jr2gJZbqzcAmoscR7fhi6f0Youwpsj0-h60exNQjbqtHz2M88NdOWuCWJnO-CbJ-lOZulpIv3ulK-3OGvNU34_JX9Z9B-3Y3TiCJRQL-3QRADKVDVv1uykh3j9R00Mhewcd3gIJrn0gJui_Ce48_v19FBJER8B_HFukTZYJoChRMdjz4H0y3-sFzozLjxG4CmFdZHwLwkJ13X4HdYjgV/p.png"
    //     },
    //     {
    //         _id: 10,
    //         name: "Cello",
    //         tags: [
    //             "Stringed",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKfT4hRS5IYuDBJhmGNyIZ4rFJXMqz2e5Xzoz8hX-vSdXqs_HnXwtXJ0j0Voo7iVpnBIETRGLSOoEaQh1WUnR60NrKX2jvu8HNv8vCa5311Wc_fgj42dwplBWKFsOSzPoigjM6isbQmuTblD59RpqrmmP5E3jbK2PEYqsGBT8-M6kACBIAxLVjU35BG9e2D6wipmRLoZcRkcrjgEHoEoIrhV_SFx3Shjwx-d57R9Cvs4wMkafVoAQTkF0vSc2BIAPVMsGxpqIiYhTmOmcU-A1vVJzhcXD8DDxMGnHKC8PNM9MRyGClYILWL6voJJ7EJl_x_JsqS1EyFTRAcmWrFStSi/p.png"
    //     },
    //     {
    //         _id: 11,
    //         name: "Violin",
    //         tags: [
    //             "Stringed",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKawVOXh60jCtiiWXeRI6nUTm49Tjs7rGYpUUkzAa-2Sfed8ufa5nBSUfGOQQ537FwZR2uCTGsiQc-Ydwtz8qAIe_QzvRLxONNcxrWrvSMzEqi-UcU1H_-RRzNfKVj0sDfuYzuopv1SjvqSOxk5DjRt1ukmLiPdJprGQ6mTzBryPyrOKK7DmU8FcCOTe-xwVsQONY-AsSEkbXutqUlDHSqf0EzlAfXu38CafGH7169jTI8FnwYxQR3wRXic8emW5W-qB3C1KZSZmBjG7Rold00N0cJp1AO8IdIRDLYPhUyEZVnPsQhiVuJmMatZTPh9h6o_Y2qVgTCC16Hg86ReTEO4/p.png"
    //     },
    //     {
    //         _id: 12,
    //         name: "Ukulele",
    //         tags: [
    //             "Stringed",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKP6vkBdB-FQNdbYC8BWre9Twt0EQB_WOuInDbo1waxhrlrP8QVmqUIpwQ3mX1_SgmCdowYbVGlS8e2Pl11l1ouoobMkf31v7bx5TuqEZJWdtet24yyl_xraIrsaiZ-iCVd2-ZFP-20Zs5frvCSVTmp5AsADYODhdmCp4GFDPl7g2HL78zGiiozfKxo2OrFdf_sMd8uFN3D6mi9405OziIkgXRJzYWZL1O_KZI7vQfMOkv7FKPEFg-LoQBxEm3v7C-3kwgAWrBrBMF1Wi9sDCPCeN9Ou7EQnbIjTy_wEzV-6kDNXFJlhdY3CtqapfLG-YPdJbD5HJIgblZIiPMKdZty/p.png"
    //     },
    //     {
    //         _id: 13,
    //         name: "Harmonium",
    //         tags: [
    //             "Keyboard",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKSH-6A6enGuZ-IwjqXI5JxNvzrn0kPd82kXDjXGPtmpwFSzRxCq45_ZSr3-6Mj_kKWekv1Na_njiXg4BjyvqRSnjvzUyC2whzTQznLnQKXykR979IO9f0TZ3IG46ZSm93UiuMMLCc48xe0icrXWYb0sVhPcypNx4GdH4O8x8MFljqYTYLyCDDJ5-TZ0mSy4VXGD-VpH1ZR_B5zl9uaaSypeJW3KujyedIQRKkSkV2CsYJeuxOjLG1n1U-hl2XaEmG_CeSpo1_6yIEzITas30fiDoIiAgn906U19Ar3r2vxUfPJvEIBj0h2zLKjoqpnamWJ10F_zrK_EG8bY32F7_Gr/p.png"
    //     },
    //     {
    //         _id: 14,
    //         name: "Piano",
    //         tags: [
    //             "Keyboard",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJyrIrZHSYizG5Jati8F9XbHQIBIh-Z0bTCLc30dT0wDfvzuEdzhdSNl8jDVRM2_PQ1CY3ytGGlzQvPi78IvJOcvsjR6dOkfdqDaZAvPWdHO0njDDxLEGg_kDWe1eMUnM34dzaoBDKAR76Ge06ML_KWHTitEDCWa4gnDofoBIyF1_ZzIHboNfDV_fPIrh_ZVPePcDa4Dud0ko2n4IDmv2wI1uhSmEHUcb3RjIKk5zQSPSWz_Tpd6gbrS4V5J6mY5XXzFOFd1Cu3e--3mhpOXvk7UQ4IGaj_CmbVSfxSzPxzi7fK21qhXrJ_XNXqQhX5sa7yEWWdZZTk881-DXMeSb3H/p.png"
    //     },
    //     {
    //         _id: 15,
    //         name: "Accordion",
    //         tags: [
    //             "Keyboard",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACK5RwpuJZ7xVNUyWKWgWYNLHevgUGpoiEX-7UTnPtUQabeIxjpVYy8UzK477QWfxGf851a7cc8rYwX8XW7uu3zNpb7asrWGTEk1qXWYvJOMAwXBoqJC1-Aq9F_kDm6zwe9J_nz78xaZD73hPls9a8a6chlEMSagIoKQC77h3sSrWXgYkzDpZoeGx5lQuS_JsQl_mnos2LkLWgm_HE93d2bkmErecte4JSZa4INAxEPVCjl9mx9lxp74-SjKc6c7MAAC0KJqxwGTZdx_LVRluppjuE9hJHEaNkHb8uNeqbEU2da7HIor5rk5NttXoLVG8rVeSNQSV61WQZc2FdFspwqV/p.png"
    //     },
    //     {
    //         _id: 16,
    //         name: "Flute",
    //         tags: [
    //             "Wind",
    //             "Mixed Origin"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJA_LMjxy04IUXfxNlt-L2vfIQfpF-3Ia32hOD2CGWWUctk0gyYoIt7xhzVYl9CqgEKa5cwd02sb8zfnJHhwkzP4A8ev5mjAK80BX_Y4km3XeJqRtsn883tB58pdrOAOJMjVGywgMCsGDrPhXKLHHgqlN5BpRJVfPxf4MHMNrXfu25yxzrn91fUch7dS6xxsvnVhHMxY_8uW3PGFzXMJQTEcGuMFd2lztbcEtgPaN2YjUjdqbocVB1_ONCd-SneFaiBK4Wl0n_A14GdjGn2ZWxDISjMVtEHj5zi8NijUp2gYV9bIewIDak7ciuFixRlmX6LLp1U1RxnwcWEHT-XZopf/p.png"
    //     },
    //     {
    //         _id: 17,
    //         name: "Shangkha",
    //         tags: [
    //             "Wind",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACI98xCjt2vDT9c2VvS4m_nE8RtYIfr668khxqGYNwOUNLFgRoQs_qVbA4Aa_-vZZb7snkb-HouzE7WZtB4uChNDqJOEGdCBhOFCK3XfYgJqbkOCDunkeSTLQHtZ6wU97U0Zp_C6EKGNp-zVZFIe1Szj4SqT9U7vEgjB3io8yWZyNlpE1-Cq00vzkwVBsZvFiS-rN6ewlZUxMJGo0WC7s1GvlKc9u9C5RtqNfx0qMZNTmKevrOU50eg0jqVImdC_i0l1fVdN301CkaraDNujwSbDQfzGasc0bsDnX8lmXZbluVllaCruGtJgT6sWrmEM0doWDlTG8KdbO2K3bD9iQSpB/p.png"
    //     },
    //     {
    //         _id: 18,
    //         name: "Trumpet",
    //         tags: [
    //             "Wind",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACL8nDL26mCxZqR5AsSinS4mo_sAabGwIVOdnaOXy6IYMtyLp9siK0-Qu4e2QnfFqukJqYy8oGpgW5OTrBloFMzat-NAqkPhQlAE9e2s2Zd6nTqh8jNYm2b1u9CAOQMUwyKKYH5Eox3okKRgH-I4bDHOkIGLwli4fUl_aNNQSajOBGS6_deH3K8WWwtWIDrEJp2IVBRmuDs7Epa9kRpAXDM5nRHWLt4OUxKZZSfMPAb9AK6YFth8dfDzQAeDuZYTylBp7rrhfT4a-oqxvZykL1Fj3zU9hLHC40GqF7QhF3fOk-x0e4ql9qEOMV0Fkd2g3-bnPpwlHgKYZeQ4CsFD7-oy/p.png"
    //     },
    //     {
    //         _id: 19,
    //         name: "Saxophone",
    //         tags: [
    //             "Wind",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACLDNjbWAWvZ4gP-BhTUXowsYwykiJl6tj9SgR4Ixplea69xSTkNc4L1vux4wpLQ0okhu1DrarsDxNvB75hAWODS4um2wp0PAOMf-YVa7Iu_3ExI7aaNcCn6Qsg6vU8kiftoFE2X8qJTw6eASvhStzA4E8eTMSUCa4nnJP4Pw3utV_W7-bKhD7A6dMcO7UICmkD4VRjHWWoGxcc9yF-4glqatttwAU2m68vD-_wF_Npk3R1LddFqt101X0kcTwFi5zSdvDymHaHiS8V3E30U21hy4VjsD7ZBDGRQiJdu-xP840IIha4tW_85C7bsaCFiEyLSdUCVYXP65RapqoVGD2N5/p.png"
    //     },
    //     {
    //         _id: 20,
    //         name: "Veena",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJLvN_ULsrjCK9kGkXl925aADAjIZMfES57iekHkNf3PrA5MYkLLuVQLeZMR2r8B-WNc2mWpDvnbc2pbS3z3yjbnyoB-uKDH0gNTPisQOAPXxnxh9hhDge7PBuGv4pf_QdOgD_fWWuwBFDj131GVOwUFdOaPJNYt7kLi41lfEhNPvle16QgzHWoVD-3638_RgUoWaGKqptKZOlZtFz9c8u1sOpPOBtO35FcPaDZc6e9zixkePCcZJxq7GGg-iq5k4TnDAjKUNulmRumUpMHN7JfXgCw8Uht6VmXOXYn7z7k_fqzhzFSW1jvWbPcrX3-TuDu9K24b90A0sFnBXBucOL3/p.png"
    //     },
    //     {
    //         _id: 21,
    //         name: "Harmonica",
    //         tags: [
    //             "Wind",
    //             "Western"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJWn4d0Tv4Mu3J-jcViQzncAzTOtU91M_jTg0HLA7fKoy5QupsHUH24jbIEdBsFOewbCnLOqxKqz1pD-ArSVs_xDrKHPFlEkVRfhYpA_8vYOhdVjPFNXb_prNII69gih8VE83BsKUbOUwz0GxgYKxVXYxCGEwvPJH2CmMdU0693B1dpRQk5is61bQk8PUvJpgFmtSmernHEls9PXxq18maWOK2JX02gRiv3rJ5yGY6PKnAvGmtSzhkQtT8qWcZJ4IvPEwe2kwmqn5F1UAbAvdm-fY322WW9xYIV_kv7fzo0efacb3GhaUOprN5PUQralK7ZoqkKGFsJFYcXx2mHrvmX/p.png"
    //     },
    //     {
    //         _id: 22,
    //         name: "Sarinda",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACKaa-o56_OT3iAMi_J2wTrK0fQWD4u0h0tKluKmOIBssKjT02a-FAyfpRIp12zPpCOdjnonoIpB_wSYpMaIlJQp3uZEw0LLuBCHErNJrFmn3Vi5QjaYF2Wx2AQK6qzHPLysdFiXe_bdpfxiOHbfuEdI4WVHdnGkOG8dIeCNSbpC1AdqBgv-bCrX4sFbhwLrpB-zQ3neQZAwHVDIkY65DaD9e0nLldE3T7dvQab1kRHthK3HQaGy_kewZMUo8g-Ubf-zm_TaN_4L4qfjoytSRxiIq6vvlOwrGOQKmAF3Ls171qg0sIgyef53itqgi0VmK6zmY81-5RLU2ZITQi3NRjme/p.png"
    //     },
    //     {
    //         _id: 23,
    //         name: "Ektara",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJafb-vpCv10lPwLK48mcoZ1NudVEd3WaLPlCgKt1E0MRruyATZeL5Rlgcdo-gR_1Kn0cE1aY3xf3ioqayLKvUwhPMXnnwLiHNClPPzbUfVJzgug_fp8gfPYzCc5gSKalgGoiv48X1_qSufd5Zzfwwif5YiRBQSNakvmmDksNdfu6wlguUZYi7WaWAtd059jSQwqLON49IHDvhmAT7bGObwrMhBxZz7agOqChIlTgyv0Wy56qgGMXYNys00mGQy-jAvlWYp90vv9TSOKk1dTAXZNzcy6h4ET1PBMZczCN7o6OiTJAn4xEsKW_N11fvi5TD2W0tB39iPiytgLGIhXoZI/p.png"
    //     },
    //     {
    //         _id: 24,
    //         name: "Dotara",
    //         tags: [
    //             "Stringed",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACJ6LnGTNFD-7XsSHKU2q54EpfO8o6k04ud4zGSescCe6LxSZ8L6j2qCk8b96vDcbMz7JMvC4TqdILaGpTpfG7_uxer58pHk5ddmscWtVCikpjktLP5Pgqts9pY0iHhm6uM6gx96Md9rhQj2RU6iAD4XSCvJ1A84tS0rqyXBVS7WHNUZnWapbf9yMlJp3n5RBHTJBTmQG4c6WiRzbR05BftPLAtJGMfQ6pNMTw8BtC_yKh9LnCANT8NMyGnVPDa5tjcwbQMWq8HpLFURSzL1rERLzxj-7V6FBoMPKqbrZoIRV7AFp8Zm3b5owni3i8CIW-9D-wcNN9_9IR8ZjiWUBFIK/p.png"
    //     },
    //     {
    //         _id: 25,
    //         name: "Dhak",
    //         tags: [
    //             "Percussion",
    //             "Asian"
    //         ],
    //         image: "https://previews.dropbox.com/p/thumb/ACIKOacdT2RKyABBlxhfwUaO8axyzIr5fatIlQ9A9FrPWuTmqg7hzPIpf70V1wdNRgBUJAuk7hy6FI606rih7GKOB3dYXpU9Qx1wsA5ClBE0xx-zIFklwG1v5cdQnVYN4sj-dBa7uNKtM3meqnFJI-i0xO-IIBP-tnHoA29lv8SRqRQ7nI3HXL-05PImWasEaKgCUU8KZeurUjEas_vFx1sKIKLI-v01UQXys4xPRqGXBNJkxZhJ1KhvgtSuMfjewV-PjWl0RmhmlivNjQObKC5praoBlsjyBguW740YyADkmcIPRD_b3GQGAL92lsPx1wFtGuW9JXBsTkKN-Zwynvcr/p.png"
    //     },
    // ]

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div className='mt-28'>
            <h2 className='text-4xl font-zcool'>Product Categories</h2>
            <div className='flex justify-between items-center px-16 mt-12'>
                <SortBy></SortBy>
                <SearchBar></SearchBar>
            </div>
            <div className='mt-6 grid grid-cols-4 gap-0'>
                {
                    categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategories;