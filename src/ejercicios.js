const ejercicios = [
    {
        nombre: "Press de banca con barra",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bench-Press_0316b783-43b2-44f8-8a2b-b177a2cfcbfc_600x600.png?v=1612137800"
    },
    {
        nombre: "Press banca inclinado con mancuernas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Bench-Press_c2bf89a2-433f-4a8f-9801-67c679980867_600x600.png?v=1612138008"
    },
    {
        nombre: "Cruce de poleas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Crossover_09c90616-2777-47ed-927e-d5987edfce09_600x600.png?v=1612138036"
    },
    {
        nombre: "Press de banca inclinado con barra",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Barbell-Bench-Press_dc0c6279-d038-44f5-a682-54c2a5e2602c_600x600.png?v=1612137944"
    },
    {
        nombre: "Press de banca con mancuernas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bench-Press_13090f67-ccfc-4f3a-9bab-e75d753fa9fa_600x600.png?v=1612137970"
    },
    {
        nombre: "Aperturas con mancuernas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Fly_119e2918-4241-4f55-bd77-c98a0c76c6c8_600x600.png?v=1612137840"
    },
    {
        nombre: "Aperturas Inclinadas con mancuernas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Fly_44d253c3-da60-45b2-b0ba-88a3bb79da09_600x600.png?v=1612137870"
    },
    {
        nombre: "Press de banca en máquina sentado",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Chest-Press-Machine_ab8cd29d-5698-4110-a938-098bda19b5fc_600x600.png?v=1621163108"
    },
    {
        nombre: "Press de banca declinado con barra",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Declined-Bench-Press_600x600.png?v=1619977283"
    },
    {
        nombre: "Press de banca declinado con mancuernas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Declined-Bench-Press_600x600.png?v=1619977242"
    },
    {
        nombre: "Flexiones",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Push-Ups_600x600.png?v=1640121436"
    },
    {
        nombre: "Fondos en barras paralelas",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Parallel-Dip-Bar_600x600.png?v=1619977962"
    },
    {
        nombre: "Aperturas en máquina Peck Deck o Contractora",
        categoria: "Pecho",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Peck-Deck_600x600.png?v=1612137910"
    },
    {
        nombre: "Remo con mancuerna a una mano",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Row-_Single-Arm_49867db3-f465-4fbc-b359-29cbdda502e2_600x600.png?v=1612138069"
    },
    {
        nombre: "Jalón con agarre ancho",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wide-Grip-Pulldown_91fcba9b-47a2-4185-b093-aa542c81c55c_600x600.png?v=1612138105"
    },
    {
        nombre: "Remo en máquina",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Cable-Row_9470fa48-f0d1-40b1-a980-caee9e6f2e53_600x600.png?v=1612138127"
    },
    {
        nombre: "Jalón al pecho con agarre cerrado",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Pulldown_072bb5ce-e3d9-4007-b8d2-d343e9d1051b_600x600.png?v=1612138178"
    },
    {
        nombre: "Remo con barra",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Row_4beb1d94-bac9-4538-9578-2d9cf93ef008_600x600.png?v=1612138201"
    },
    {
        nombre: "Jalón tras nuca",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-Neck-Pulldown_f0f50b6b-ad34-48cd-8663-84ee6a581928_600x600.png?v=1612138228"
    },
    {
        nombre: "Jalón al pecho con agarre invertido",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Pulldown_10c5341f-30fd-4126-8fd7-2fa05c079889_600x600.png?v=1612138255"
    },
    {
        nombre: "Jalón en polea con cuerda",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Pulldown_24c7b22e-bf99-4ade-ba6c-c7b2f20ffa9a_600x600.png?v=1612138283"
    },
    {
        nombre: "Remo en barra T",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/T-Bar-Rows_600x600.png?v=1612092112"
    },
    {
        nombre: "Remo inclinado con barra con agarre supinado",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bent-Over-Rows-Supinated-Grip_600x600.png?v=1619977891"
    },
    {
        nombre: "Elevaciones en barra fija",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up_600x600.png?v=1619977612"
    },
    {
        nombre: "Elevaciones tras nuca en barra fija",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Behind-the-Neck-Pull-Up_600x600.png?v=1619977573"
    },
    {
        nombre: "Elevaciones en barra fija con agarre supinado",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Pull-Up-with-a-Supinated-Grip_600x600.png?v=1619977534"
    },
    {
        nombre: "Jalón dorsal con brazos rectos",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Arm-Lat-Pulldown_600x600.png?v=1619977498"
    },
    {
        nombre: "Remo inclinado con mancuernas",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Bent-Over-Rows_600x600.png?v=1619977463"
    },
    {
        nombre: "Peso muerto con barra",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Deadlift_600x600.png?v=1619977112"
    },
    {
        nombre: "Peso muerto sumo con barra",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Sumo-Deadlift_600x600.png?v=1619976908"
    },
    {
        nombre: "Peso muerto con barra hexagonal",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Trap-Bar-Deadlift_600x600.png?v=1619976866"
    },
    {
        nombre: "Peso muerto con mancuernas",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Deadlift_600x600.png?v=1619976747"
    },
    {
        nombre: "Encogimiento de hombros con barra",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Shrug_4f8a4e15-96b9-4595-8e88-635bf83cc8ac_600x600.png?v=1612138751"
    },
    {
        nombre: "Encogimiento de hombros con mancuernas",
        categoria: "Espalda",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shrugs_69a32385-3573-471b-a66e-3abdb0d95819_600x600.png?v=1619986777"
    },
    {
        nombre: "Press de hombro con mancuernas",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Shoulder-Press_da0aa742-620a-45f7-9277-78137d38ff28_600x600.png?v=1612138495"
    },
    {
        nombre: "Elevación lateral con mancuernas",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Lateral-Raise_31c81eee-81c4-4ffe-890d-ee13dd5bbf20_600x600.png?v=1612138523"
    },
    {
        nombre: "Elevación frontal con mancuernas",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Front-Raise_11804c3c-22d1-4589-a035-e30ad72149f3_600x600.png?v=1612138576"
    },
    {
        nombre: "Cruces inversos en polea alta",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/High-Cable-Rear-Delt-Fly_600x600.png?v=1612541996"
    },
    {
        nombre: "Press de hombros en Máquina Smith",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Smith-Machine-Shoulder-Press_e53bea60-c273-41e9-a70d-f5fa339c6780_600x600.png?v=1612138658"
    },
    {
        nombre: "Remo alto con barra",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Upright-Row_8a03db96-29ea-47df-b517-0b863f96b564_600x600.png?v=1612138684"
    },
    {
        nombre: "Elevaciones posteriores para hombros (Pájaro)",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Over-Lateral-Raise_41bd4de4-0370-4e6b-9501-37cdcc26ded4_600x600.png?v=1621163232"
    },
    {
        nombre: "Elevación lateral con cable a una mano",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-One-Arm-Lateral-Raise_3e57189f-cdf3-46ee-9a89-6ca054eae56a_600x600.png?v=1612138775"
    },
    {
        nombre: "Press Militar con mancuernas",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Push-Press_f9229ee9-08e7-4aeb-8e41-ebd897e7ba8b_600x600.png?v=1621162780"
    },
    {
        nombre: "Press Militar",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Push-Press_8ba0542a-aba8-45ce-bdee-1a3eb4736514_600x600.png?v=1621162658"
    },
    {
        nombre: "Elevaciones frontales con cable a una mano",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Front-Raise_600x600.png?v=1619977928"
    },
    {
        nombre: "Elevaciones frontales con barra",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Front-Raise_600x600.png?v=1619977846"
    },
    {
        nombre: "Press militar sentado con barra",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Shoulder-Press_600x600.png?v=1619977796"
    },
    {
        nombre: "Press tras nuca sentado",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977737"
    },
    {
        nombre: "Press militar de pie",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Barbell-Shoulder-Press_600x600.png?v=1619977694"
    },
    {
        nombre: "Press militar de pie tras nuca",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Behind-the-Neck-Barbell-Shoulder-Press_600x600.png?v=1619977648"
    },
    {
        nombre: "Elevación frontal con mancuernas alternas agarre neutro",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternate-Dumbbell-Front-Raise-Neutral-Grip_600x600.png?v=1619977407"
    },
    {
        nombre: "Elevación frontal con un brazo en polea baja agarre neutro",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/One-Arm-Low-Pulley-Front-Raise-Neutral-Grip_600x600.png?v=1619977374"
    },
    {
        nombre: "Elevación frontal con mancuerna a dos manos",
        categoria: "Hombro",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Two-Handed-Dumbbell-Front-Raise_600x600.png?v=1619977326"
    },
    {
        nombre: "Curl con cuerda en polea",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Cable-Curl_6216e254-5f77-462c-9954-ea210fff8a70_600x600.png?v=1612137195"
    },
    {
        nombre: "Curl con barra EZ",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Curl_42cb566b-6415-4318-94e0-c93f4b442e59_600x600.png?v=1612137227"
    },
    {
        nombre: "Curl de predicador con barra EZ",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/EZ-Barbell-Preacher-Curl_4d449fee-1920-4137-970c-75d4698b268d_600x600.png?v=1612137254"
    },
    {
        nombre: "Curl alterno de martillo con mancuernas",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hammer-Curl_da9fea8b-fc81-4a4f-9af1-aea1b85239d7_600x600.png?v=1612137282"
    },
    {
        nombre: "Curl inclinado con mancuernas",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Incline-Dumbbell-Curl_7debf468-cd34-49bc-8933-7f4b087e6cca_600x600.png?v=1612137309"
    },
    {
        nombre: "Curl concentrado con mancuernas",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Concentration-Curl_289b5739-4bdd-40e6-a195-6ecfcc685126_600x600.png?v=1612137334"
    },
    {
        nombre: "Curl de cable en polea baja a una mano",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Low-Pulley-Cable-Curl_600x600.png?v=1619978525"
    },
    {
        nombre: "Curl de cable con barra recta en polea baja",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Straight-Bar-Low-Pulley-Cable-Curl_600x600.png?v=1619978455"
    },
    {
        nombre: "Curl de cable en polea alta de pie",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-High-Pulley-Cable-Curl_600x600.png?v=1619978409"
    },
    {
        nombre: "Curl de muñeca con barra sentado",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Curl_600x600.png?v=1619978365"
    },
    {
        nombre: "Extensión de muñeca con barra sentado",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-Wrist-Extension_600x600.png?v=1619978327"
    },
    {
        nombre: "Curl de barra invertido",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Barbell-Curl_600x600.png?v=1619978270"
    },
    {
        nombre: "Curl con barra",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Curl_f38580d5-412e-4082-b453-5d319afa94fd_600x600.png?v=1612137128"
    },
    {
        nombre: "Curl alterno con mancuernas",
        categoria: "Biceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Alternating-Dumbbell-Curl_ad879dc4-b4fb-4ca7-b2b1-6e1eb5d78252_600x600.png?v=1612137169"
    },
    {
        nombre: "Extensión de tríceps tumbado",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Triceps-Extension_4affa7a2-9c1c-48f8-8003-3570d7b3a39c_600x600.png?v=1612136744"
    },
    {
        nombre: "Extensión de tríceps en polea",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Triceps-Pressdown_e759437b-6200-4b44-b484-14db770024a4_600x600.png?v=1612136845"
    },
    {
        nombre: "Extensión de tríceps en polea con cuerda",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Cable-Rope-Pushdown_600x600.png?v=1612136916"
    },
    {
        nombre: "Extensión de tríceps con mancuernas por encima de la cabeza",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Overhead-Triceps-Extension_99242f13-ab4d-4e77-be12-e0f180cc93ac_600x600.png?v=1612136962"
    },
    {
        nombre: "Press Banca con agarre cerrado",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Close-Grip-Bench-Press_28c01bfb-504d-43a6-8264-bd2101d317b9_600x600.png?v=1612137028"
    },
    {
        nombre: "Patadas traseras",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Kickback_c8df8485-ed16-4808-96c0-7ccc27a0bec2_600x600.png?v=1612136991"
    },
    {
        nombre: "Extensión de tríceps con cable de agarre inverso con barra",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Reverse-Grip-Cable-Triceps-Extension-with-Barbell_600x600.png?v=1619978215"
    },
    {
        nombre: "Extensión de tríceps con cable a una mano",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension_600x600.png?v=1619978169"
    },
    {
        nombre: "Extensión de tríceps con cable a una mano con agarre supinado",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Arm-Cable-Triceps-Extension-with-Supinated-Grip_600x600.png?v=1619978117"
    },
    {
        nombre: "Extensión de tríceps con mancuernas tumbado",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Dumbbell-Triceps-Extension_600x600.png?v=1619978076"
    },
    {
        nombre: "Press francés sentado con barra",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Barbell-French-Press_600x600.png?v=1619978038"
    },
    {
        nombre: "Fondos en banco",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bench-Dips_600x600.png?v=1619977992"
    },
    {
        nombre: "Pullover con mancuerna",
        categoria: "Triceps",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Pullover_600x600.png?v=1619977197"
    },
    {
        nombre: "Crunch",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch_f3498d5d-82d9-4a7f-8dee-98a2e55a62f2_600x600.png?v=1612138317"
    },
    {
        nombre: "Crunch oblicuo",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Oblique-Crunch_253d0361-395d-443b-8228-aff440c1eee9_600x600.png?v=1612138354"
    },
    {
        nombre: "Abdominales en máquina",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Crunch-Machine_538b22a3-379f-4a45-874a-ec1d798235b4_600x600.png?v=1612138379"
    },
    {
        nombre: "Abdominales con cuerda en polea alta",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Rope-Ab-Pulldown_b808db26-a4f3-4018-8007-5e31da5736dc_600x600.png?v=1612138402"
    },
    {
        nombre: "Plancha",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank_3a82d566-9cb2-4c20-b301-bc8bd635c4d1_600x600.png?v=1612138431"
    },
    {
        nombre: "Elevación de piernas",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hanging-Leg-Raise_36986393-d0a6-494a-981f-4ea06a99b0b5_600x600.png?v=1612138457"
    },
    {
        nombre: "Encogimientos de rodillas para abdominales",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bent-Knee-Reverse-Crunch_600x600.png?v=1621163012"
    },
    {
        nombre: "Abdominales con brazos estirados",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Long-Arm-Crunch_f0e219dc-514f-411f-ad0d-0cdf02a93d41_600x600.png?v=1621163062"
    },
    {
        nombre: "Plancha con flexión",
        categoria: "Abdomen",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Plank-Get-Ups_600x600.png?v=1621163166"
    },
    {
        nombre: "Sentadilla",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat_d752e42d-02ba-4692-b300-c6e67ad5a4f5_600x600.png?v=1612138811"
    },
    {
        nombre: "Prensa de piernas",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Press_f7febd5c-75e5-42f4-9bb4-c938969ce293_600x600.png?v=1612138836"
    },
    {
        nombre: "Extensión de piernas",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Leg-Extension_41d91d3f-4b9c-4374-82e2-1d697ce35fe4_600x600.png?v=1612138862"
    },
    {
        nombre: "Zancada",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lunge_600x600.png?v=1612138903"
    },
    {
        nombre: "Curl de pierna tumbado en máquina de femoral",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Lying-Leg-Curl_203153d8-79dd-4bb9-9125-708aa4327107_600x600.png?v=1612139013"
    },
    {
        nombre: "Sentadilla Hack",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Hack-Squat_044b3d09-ffa7-4728-b56f-f4fb3c175548_600x600.png?v=1612139060"
    },
    {
        nombre: "Curl de piernas sentado",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Leg-Curl_e367789a-bbb3-4144-a926-5a9b42afc278_600x600.png?v=1612139123"
    },
    {
        nombre: "Extensión a una pierna",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Leg-Extension_9cf850d1-0b9b-4fb3-8caf-49d438e86db0_600x600.png?v=1612139177"
    },
    {
        nombre: "Sentadilla frontal",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Front-Squat_600x600.png?v=1612049397"
    },
    {
        nombre: "Peso muerto rumano (piernas rectas) con mancuernas",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Romanian-Deadlift_35135213-e0df-4ef2-b093-22ed8d04dc41_600x600.png?v=1621162896"
    },
    {
        nombre: "Peso muerto rumano (piernas rectas) con barra",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Romanian-Deadlift_34ede1b4-63ac-451d-9536-bbf9942b560c_600x600.png?v=1621162957"
    },
    {
        nombre: "Sentadilla Goblet con mancuerna",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Goblet-Squat_600x600.png?v=1612049778"
    },
    {
        nombre: "Salto Rodillas al Pecho",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Knee-Tuck-Jumps_dbf2e5a8-e907-4117-a044-8cd0abeb191d_600x600.png?v=1653509454"
    },
    {
        nombre: "Burpees",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Burpees_600x600.png?v=1640121232"
    },
    {
        nombre: "Sentadillas con propio peso",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Squat_600x600.png?v=1653577860"
    },
    {
        nombre: "1.5 repeticiones de sentadillas con propio peso",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Squat_600x600.png?v=1653577860"
    },
    {
        nombre: "Sentadillas con balón medicinal",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Medicine-Ball-Squat_600x600.png?v=1655223652"
    },
    {
        nombre: "Sentadilla búlgara con barra",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Bulgarian-Split-Squat_600x600.png?v=1655223749"
    },
    {
        nombre: "Sentadilla búlgara con propio peso",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Bulgarian-Split-Squat_600x600.png?v=1655223826"
    },
    {
        nombre: "Sentadilla con mini banda",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Mini-Band-Air-Squat_600x600.png?v=1655223897"
    },
    {
        nombre: "Sentadilla con salto",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Jump-Squat_600x600.png?v=1655223952"
    },
    {
        nombre: "Sentadilla isométrica apoyado sobre la pared",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Wall-Sit_600x600.png?v=1655224007"
    },
    {
        nombre: "Peso muerto con balón medicinal",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Medicine-Ball-Deadlift_600x600.png?v=1655224056"
    },
    {
        nombre: "Peso muerto a una pierna",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Leg-Bodyweight-Deadlift_600x600.png?v=1655224115"
    },
    {
        nombre: "Sentadilla sumo con kettlebell",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Kettlebell-Sumo-Deadlift_600x600.png?v=1655224172"
    },
    {
        nombre: "Ejercicio “buenos días” con barra",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Good-Morning_600x600.png?v=1655224242"
    },
    {
        nombre: "Puente con propio peso",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Glute-Bridge_600x600.png?v=1655224288"
    },
    {
        nombre: "Puentes a una pierna",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Single-Leg-Glute-Bridge_600x600.png?v=1655224356"
    },
    {
        nombre: "Puente con bandas",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Banded-Glute-Bridge_600x600.png?v=1656401790"
    },
    {
        nombre: "Caminata de pato",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Duck-Walk_600x600.png?v=1656401872"
    },
    {
        nombre: "Ejercicio Superman en cuadrupedia",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bird-Dog_600x600.png?v=1656401941"
    },
    {
        nombre: "Los Groiners",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Groiners_600x600.png?v=1656402166"
    },
    {
        nombre: "Hidrantes",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Fire-Hydrant_600x600.png?v=1656402231"
    },
    {
        nombre: "Hip thrust con maquina Smith",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Smith-Machine-Hip-Thrust_600x600.png?v=1656402282"
    },
    {
        nombre: "Hip thrust con barra",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Barbell-Hip-Thrust_600x600.png?v=1656402338"
    },
    {
        nombre: "Abducciones de cadera sentado con banda",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Band-Seated-Hip-Abduction_600x600.png?v=1656404992"
    },
    {
        nombre: "Abducción de cadera con máquina de abducción de cadera",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Hip-Abduction-Machine_600x600.png?v=1656405168"
    },
    {
        nombre: "Abducción con polea",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Cable-Abduction_600x600.png?v=1656405251"
    },
    {
        nombre: "Elevaciones en posición de rana con propio peso",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Bodyweight-Frog-Pump_600x600.png?v=1656405316"
    },
    {
        nombre: "Elevaciones cortas en posición de rana con maquina Smith",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Smith-Machine-Frog-Pump_600x600.png?v=1656405486"
    },
    {
        nombre: "Almejas laterales con banda",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Banded-Clams_600x600.png?v=1656405564"
    },
    {
        nombre: "Levantamiento de pierna acostado de lado",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Side-Lying-Leg-Raise_600x600.png?v=1656405688"
    },
    {
        nombre: "Elevaciones de bíceps femoral con máquina GHD",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Glute-Ham-Raise_600x600.png?v=1656405832"
    },
    {
        nombre: "Step Up con mancuernas",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Dumbbell-Step-Up_600x600.png?v=1656405942"
    },
    {
        nombre: "Caminata lateral con minibanda",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Mini-Band-Lateral-Walks_600x600.png?v=1656406023"
    },
    {
        nombre: "Elevaciones de rodilla",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Knee-Raise_600x600.png?v=1656406133"
    },
    {
        nombre: "Columpios con kettlebell",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Kettlebell-Swing_600x600.png?v=1656782014"
    },
    {
        nombre: "Contragolpe con cable",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Cable-Kickback_600x600.png?v=1656782126"
    },
    {
        nombre: "Patadas de burro",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Donkey-Kicks_600x600.png?v=1656782198"
    },
    {
        nombre: "Elevaciones de cadera acostado lateralmente",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Side-Lying-Hip-Raise_600x600.png?v=1656782257"
    },
    {
        nombre: "Sentadilla Posturas funcionales",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Squat-Sit-to-Reach_600x600.png?v=1656783666"
    },
    {
        nombre: "Elevación de gemelos sentado",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Seated-Calf-Raise_8c8641b2-10f2-4dc8-9adb-8d80fd1a16d0_600x600.png?v=1612137064"
    },
    {
        nombre: "Elevación de gemelos de pie",
        categoria: "Pierna",
        img: "https://cdn.shopify.com/s/files/1/0269/5551/3900/files/Standing-Calf-Raise_61746b47-98aa-49ee-bb97-5a19562592b9_600x600.png?v=1612137090"
    }
]

export default ejercicios;