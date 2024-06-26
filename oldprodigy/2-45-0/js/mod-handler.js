/*
	Simple mod interface for Prodigy version 2-45-0
	
	Installed Mods: 
		
		| Mod Name |               	| Author |
		
		Walk Speed 					Daboss7173
		Fast Game Speed				Daboss7173
		Rebalanced Battles				Daboss7173
		Imitation Titan				Daboss7173
	
	Written by: Daboss7173
        Rebalanced Battles was installed for 2.45.0 by XPMUser/Ao28th28 and Prodidows.
	Github: https://github.com/Daboss7173/Daboss7173.github.io
*/
(async () => {
	
	/*
		These are for importing esmodules from the game.
		Not all of the modules are included, but most of
		the important ones are. Allows for much greater
  		control over Prodigy.
		
		
		To import a module in the Mod Handler instance you
		just use the following syntax:
		
		this.import(Prodigy.<module name here>)
  		 - OR - 
	 	importer(Prodigy.<module name here>)
		
		You can set it to a variable to access it later.
		
		
		Each of them are actually linked to numerical
		values, this just makes it far easier to work
		with, allowing for more control over Prodigy's
		inner-workings.
	*/
	let Prodigy = {
		Services: 0,
		Util: 1,
		EProdigyInjectionIdentifiers: 2,
		Items: 3,
		GameConstants: 4,
		Events: 5,
		AreaEvent: 6,
		InversifyInjection: 7,
		Quest: 8,
		Element: 9,
		Map: 10,
		RebalancedBattles: 11,
		Menu: 12,
		Breadcrumbs: 13,
		Player: 14,
		EventEnum: 15,
		ECoOpBattleState: 16,
		EFunnelEventIDs: 17,
		CreatureContainer: 18,
		isArray: 19,
		MembershipInfo: 20,
		RenderMenu: 22,
		Image: 23,
		TweenController: 24,
		ProdigyGame: 25,
		Device: 26,
		Scene: 27,
		AnalyticService: 28,
		UIElement: 29,
		BonfireSpireMap: 30,
		CombatFormulas: 31,
		Data: 32,
		Random: 34,
		TextButton: 35,
		ECopOpSocketMessageAction: 36,
		ShiverchillMap: 37,
		SkywatchMap: 38,
		GameObject: 39,
		NPC: 41,
		HUDButton: 42,
		EAssetType: 43,
		Monster: 44,
		EItemInfoMode: 45,
		Zone: 46,
		Action: 47,
		UIParser: 50,
		TaggedLogger: 51,
		Decision: 52,
		RenderFactory: 57,
		TypeUtils: 58,
		State: 59,
		DataNameResolver: 62,
		Creature: 63,
		GameEventData: 65,
		GameEventFactory: 66,
		WebFontText: 68,
		GameEventDataBuilder: 69,
		ForestMap: 70,
		BattleTeamMember: 71,
		Utils: 72,
		ApiServices: 75,
		Boss: 78,
		EInputBlockType: 79,
		BossContainer: 80,
		MonsterContainer: 81,
		ToyMerchant: 82,
		NetworkManager: 83,
		Renderer: 86,
		UIButton: 87,
		ECombatEndMode: 88,
		GameDataFactoryBase: 89,
		GameEventBroadcastWrapper: 90,
		ActionQueue: 91,
		BaseData: 93,
		Screen: 97,
		NotificationController: 98,
		MenuTutorial: 99,
		InputField: 100,
		LegacyMenu: 101,
		TrialMembershipUtil: 102,
		SpineRenderer: 110,
		InputBlocker: 112,
		URLProvider: 113,
		ActivityZoneMap: 114,
		AnimationClipSynchronizer: 115,
		QueuedAction: 116,
		PacketManager: 119,
		EInjectionIdentifiers: 124,
		Sprite: 128,
		Event: 129,
		Factory: 130,
		Overlay: 132,
		Bam: 133,
		TowerZone: 134,
		Wheel: 135,
		MemberAd: 136,
		CoOpBattleTeamInfo: 137,
		DataFactory: 145,
		ApiEventData: 150,
		ApiEventFactory: 151,
		JSON: 153,
		PhaserButtonWrapper: 154,
		EEnvironment: 155,
		QuestNPC: 156,
		DungeonZone: 157,
		ToyStore: 158,
		RegisterPage: 160,
		SurveyController: 161,
		KeystoneState: 162,
		BaseNicknameProvider: 163,
		NetworkHandler: 164,
		Signal: 165,
		CacheStorage: 182,
		Service: 183,
		Character: 186,
		DungeonDirection: 189,
		AnonymousEventData: 190,
		AnonymousEventFactory: 191,
		TitanBoss: 192,
		GraphicBase: 193,
		Slider: 194,
		EffectFactory: 195,
		Team: 197,
		SpellFactory: 198,
		PippetEncounter: 199,
		MonsterEvent: 200,
		SeededRandomGenerator: 201,
		LoggedInPlayerDataProvider: 202,
		TimeManager: 203,
		AcademyGH1: 204,
		AcademyGH2: 205,
		Pippet: 206,
		Skin: 207,
		DungeonExitRoomComponent: 208,
		QuestEvent: 209,
		CoOpTeamData: 210,
		MultiplayerSocketMessageListener: 211,
		PlayerAppearanceSelector: 212,
		ColoredCustomizablePlayerAttribute: 213,
		CustomizablePlayerAttribute: 214,
		SpineAnimator: 215,
		Localizer: 219,
		StateMachine: 221,
		GameObjectContext: 229,
		PrefabData: 230,
		CharacterAppearance: 263,
		EducationEventData: 269,
		EducationEventFactory: 270,
		Graphic: 271,
		CharacterContainer: 272,
		PlayerContainer: 278,
		ParticleEmitter: 279,
		BonfireBoss: 280,
		CloudBoss: 281,
		OldOneBoss: 282,
		PippetBoss: 283,
		BattleScreenBase: 284,
		DebugValueRenderer: 285,
		DinoDig: 287,
		DynoZone: 288,
		UUIDProvider: 289,
		GameCompleteDataFactory: 290,
		BattleController: 291,
		Wizard: 292,
		WorldMap: 293,
		Social: 294,
		PuppetMaster: 295,
		ParentLinkBenefitsConfig: 296,
		MemberStarController: 297,
		HouseItem: 298,
		Button: 299,
		LegacyAuthProvider: 300,
		ClickableEvent: 302,
		WalkableScreen: 303,
		Debug: 304,
		DungeonMonsterComponent: 305,
		LocalizationData: 306,
		TitanMap: 307,
		BattleHealth: 308,
		CastPlayerSpellAction: 309,
		CastSpellAction: 310,
		PlayerDefeatedAction: 311,
		TitanDefeatedAction: 312,
		SpellAnimationClip: 313,
		PlayerKeyFrameAnimator: 314,
		DontUseMeContext: 315,
		Spine: 316,
		StateMachine: 317,
		FadeMenuTween: 318,
		Input: 319,
		LocalizedNameProvider: 321,
		BaseLocalizer: 322,
		StateMachineDataFactories: 323,
		DataFactories: 324,
		ActionData: 325,
		StateMachineData: 326,
		FSMController: 327,
		FSMFactories: 328,
		TextSource: 340,
		StringTextSource: 341,
		InversifyBindingAs: 345,
		InversifyBindingTo: 346,
		InversifyContainer: 347,
		PrefabComponentOverrideData: 348,
		PrefabOverrideData: 349,
		PrefabTemplateData: 350,
		PrefabService: 351,
		ApplicationError: 370,
		IStoreDataProvider: 371,
		IAssetDataProvider: 372,
		StoreDataFactory: 373,
		StoreCostData: 374,
		StoreData: 375,
		StoreItemData: 376,
		StoreMerchantAvatarData: 377,
		StoreTabButtonData: 378,
		StoreTabData: 379,
		VoucherCodeFactory: 382,
		GameAssetDefinition: 383,
		VoucherCode: 384,
		VoucherCodeRedemptionFactory: 385,
		VoucherCodeRedemption: 386,
		PlayerData: 387,
		NameData: 388,
		AppearanceData: 389,
		PlayerDataFactory: 390,
		DungeonFactory: 391,
		DungeonData: 392,
		DungeonMonsterDropData: 393,
		DungeonPathData: 394,
		DungeonRoomData: 395,
		Backpack: 410,
		SpellUtil: 421,
		CharacterEquipment: 425,
		PlayerAppearance: 432,
		ProdigyRandomDataGenerator: 434,
		TiledMap: 435,
		SpriteRenderer: 436,
		AnonymousAnalyticService: 438,
		AnonymousGameCompleteData: 445,
		DataFactory: 446,
		AnonymousWebMembershipData: 447,
		AnonymousGameDiscoveryData: 448,
		ApiStudentAttachedToParentData: 449,
		ApiMembershipAssignData: 451,
		ApiMembershipCreatedData: 452,
		ApiCancelMembershipEventData: 453,
		WebMembershipData: 455,
		ApiAnalyticService: 458,
		WebAnalyticService: 460,
		GameAvatarData: 461,
		GameBattleData: 462,
		GameCompleteData: 463,
		GameDiscoveryData: 464,
		GameQuestionData: 465,
		GameSessionEndData: 466,
		GameSessionStartData: 467,
		GameSocialData: 468,
		GameSinkData: 469,
		GameSourceData: 470,
		EducationLessonEncounterData: 471,
		EducationQuestionInterfaceData: 472,
		TiledRenderer: 476,
		Monsters: 477,
		CharacterStatus: 478,
		ScrollBar: 479,
		TextElement: 480,
		UIUtil: 481,
		SlicedGraphic: 482,
		ESlicedGraphicDirection: 483,
		DrawUtil: 484,
		SpineUI: 485,
		Tab: 486,
		TabButton: 487,
		JsonFeatureFlagsProvider: 488,
		EvolutionSummary: 489,
		PaginatedMenu: 490,
		LocalizedNameResolver: 491,
		CharacterAnimationData: 492,
		ForestContainer: 493,
		ForestBoss: 494,
		IceWrymBoss: 495,
		BamSpellButton: 496,
		BanEpicButton: 497,
		BattleStats: 498,
		AVERAGE_FPS: 499,
		MEMORY_USAGE: 499,
		MOUSE_POSITION: 499,
		SpellAOE: 500,
		SpellProjectile: 501,
		SpellBase: 502,
		EPVPAction: 503,
		PVPManager: 504,
		DancePose: 505,
		Pathfinder: 506,
		AnonymousAnalyticsService: 507,
		NotificationCell: 508,
		MenuFactory: 509,
		GradePage: 510,
		NameChange: 511,
		BountyContainer: 512,
		BountyTextProvider: 513,
		Coliseum: 514,
		EpicBoostMenu: 515,
		ItemInfo: 516,
		ActivePlayer: 517,
		StarConverter: 518,
		DailyQuestions: 519,
		BitField: 520,
		PlayAtHome: 521,
		ClassCode: 522,
		ClassLeadersPanel: 523,
		Store: 524,
		StoreBase: 525,
		StoreItemSort: 526,
		UserEquipment: 527,
		DungeonEntranceMenu: 529,
		Florian: 530,
		AcademyMerchant: 531,
		Gale: 532,
		MessageBox: 533,
		ParentalLink: 534,
		MailerSplitTests: 535,
		FetchLibraryHttpClient: 536,
		JWTAuthProvider: 537,
		HttpDataProvider: 538,
		CebolliniEvent: 539,
		Follow: 540,
		BitmapFont: 541,
		NameTextComponent: 542,
		DialogueController: 543,
		GameBattleDataFactory: 544,
		GameFestival: 545,
		Hints: 546,
		ActivityZone: 547,
		ArchivesZone: 548,
		DungeonMap: 549,
		DarkTowerZone: 550,
		DarkTowerMap: 551,
		DebugMisc: 552,
		TMXMapLoader: 554,
		ImageAnimator: 555,
		ProdigyAssetLoader: 556,
		TileScreen: 557,
		DungeonCurrencyComponent: 558,
		LiveJSONEditor: 559,
		Elevator: 560,
		TitanIntro: 561,
		Harvey: 562,
		EGameCompleteName: 563,
		EGameCompleteType: 564,
		HouseMapBase: 565,
		Squeak: 566,
		DungeonGenerator: 567,
		ActiveMemberHealthBar: 568,
		ItemIDNameProvider: 569,
		QueueTooLateAction: 570,
		CastMissedPlayerSpellAction: 571,
		CastMissedSpellAction: 572,
		CoOpSummaryMenu: 573,
		FullPlayerAppearance: 574,
		PlayerKeyFrameAnimationData: 575,
		PlayerOutfit: 576,
		CoOpPrizeProvider: 577,
		HostPlayerSpellSelector: 578,
		SegmentedBar: 579,
		ThreeSliceImage: 580,
		CoOpBattleStateMachine: 581,
		PlayActionQueueDecision: 582,
		PlayInjectedAnimatorState: 583,
		Mask: 584,
		Loading: 585,
		AwardItemsAction: 590,
		DebugLocalizer: 593,
		LocalLanguageDataCollection: 594,
		VerboseLocalizer: 595,
		FSMService: 597,
		ConditionData: 598,
		StateData: 599,
		VersionedData: 600,
		TransitionData: 601,
		AddVariableAction: 602,
		EnableInputAction: 603,
		ExecuteFunctionAction: 604,
		ExecuteStateMachineAction: 605,
		SetAlphaAction: 606,
		SetVariableAction: 607,
		SetVariablesAction: 608,
		SetVisibleAction: 609,
		TweenAction: 610,
		WaitAction: 611,
		WaitForEventAction: 612,
		Factories: 613,
		Condition: 614,
		State: 615,
		LogFSMController: 616,
		SocketIOWebSocket: 618,
		Utf8Encoder: 638,
		UIComponents: 648,
		ContextBinding: 657,
		Installer: 661,
		InjectableComponent: 662,
		InjectableClass: 663,
		Transform: 664,
		DimensionPlaceholder: 665,
		PrefabLoader: 666,
		PrefabService: 666,
		Prefab: 668,
		PrefabDataFactories: 669,
		PrefabComponentData: 670,
		CompleteQuestionAction: 671,
		CompleteSequenceAction: 672,
		CompleteItemAction: 673,
		CreateChatBubbleAction: 674,
		CreateElementAction: 675,
		CreateIconAction: 676,
		CreateSpriteAction: 677,
		EnableSaveAction: 678,
		ExplodeAction: 679,
		FlipCreatureAction: 680,
		GetDailyRewardCountAction: 681,
		GetZoneStateAction: 682,
		Response: 742,
		IStoreDataProvider: 744,
		EItemBaseCost: 744,
		ERarityModifier: 744,
		IAssetDataProvider: 744,
		IStoreDataProvider: 744,
		StoreCostData: 744,
		StoreData: 744,
		StoreDataFactory: 744,
		StoreItemData: 744,
		StoreMerchantAvatarData: 744,
		StoreService: 744,
		StoreTabButtonData: 744,
		StoreTabData: 744,
		UtilStoreModifier: 744,
		StoreService: 745,
		UtilStoreFormatter: 747,
		MemoryCacheStorage: 748,
		NoCacheStorage: 749,
		NoCacheExpiration: 750,
		TimedCacheExpiration: 751,
		VoucherCodeFactory: 752,
		VoucherCode: 752,
		VoucherCodeRedemption: 752,
		VoucherCodeRedemptionFactory: 752,
		VoucherService: 752,
		GameAssetDefinition: 755,
		AppearanceData: 756,
		NameData: 756,
		PlayerData: 756,
		PlayerDataFactory: 756,
		PlayerService: 756,
		FeatureRevisionDefinition: 760,
		DungeonSystem: 761,
		MailingSystem: 781,
		EStatsType: 783,
		ELoggingLevel: 783,
		StatsData: 783,
		Achievements: 797,
		House: 829,
		Kennel: 833,
		MountEntity: 840,
		PlayerEquipment: 843,
		Quests: 844,
		State: 845,
		Tutorial: 846,
		HasItemAction: 847,
		HideFollowAction: 848,
		HighlightElementAction: 849,
		HopAction: 850,
		IsOnQuestAction: 851,
		IsQuestSequenceAction: 852,
		IsQuestCompleteAction: 853,
		PauseMusicAction: 854,
		PlayFireworkAction: 855,
		PlayMusicAction: 856,
		PlaySoundAction: 857,
		PlaySpineAction: 858,
		SendAdvancedEventAction: 859,
		SetDailyRewardCountAction: 860,
		SetEventProcessingAction: 861,
		SetPathAction: 862,
		SetPlayerStateAction: 863,
		SetValidPathAction: 864,
		SetWalkSpeedAction: 865,
		SetZoneStateAction: 866,
		ShakeAction: 867,
		ShowDialogueAction: 868,
		StartBattleAction: 869,
		TeleportAction: 870,
		TiledImage: 871,
		TiledSprite: 872,
		SpritesheetRenderer: 873,
		CreateMonsterDungeonComponent: 874,
		CreateGoldenPageDungeonComponent: 875,
		CreateSpineAction: 876,
		CompleteBreadcrumbAction: 877,
		CreatePageDungeonComponent: 878,
		BroadcastGameEventAction: 879,
		AnalyticSystem: 880,
		AnonymousEventFactoryContainer: 901,
		AnonymousGameCompleteData: 902,
		Data: 903,
		Validation: 904,
		PlanNameEnum: 918,
		Mapper: 927,
		PlaySceneAction: 959,
		Boot: 960,
		Battle: 973,
		ButtonToggle: 974,
		LayoutElement: 975,
		Mask: 976,
		ScrollView: 977,
		SlicedBanner: 978,
		VideoGraphic: 979,
		WoodSlicedPanel: 980,
		AutoAttack: 981,
		Rescue: 984,
		PlayerLocomotion: 985,
		AnimatedEmote: 992,
		ChatBubble: 993,
		DamageDisplayContainer: 994,
		FlyingStars: 995,
		OldOneContainer: 996,
		PippetContainer: 997,
		MountRenderer: 998,
		MountBehaviour: 999,
		BattleTutorial: 1000,
		BamSpellInfo: 1001,
		DebugLayout: 1002,
		EDebugLayoutType: 1003,
		AverageFPSRenderer: 1004,
		MemoryUsageDebugRenderer: 1005,
		MousePositionDebugRenderer: 1006,
		ScreenMessage: 1007,
		EEpicAttackType: 1008,
		CombatManager: 1008,
		SpellAOA: 1009,
		SpellCharacterAnimator: 1010,
		SpellDataParser: 1011,
		SpellBeam: 1012,
		VictoryManager: 1013,
		Daily: 1014,
		PVP: 1015,
		ComboMeter: 1016,
		ComboMeterUI: 1017,
		PVPComboMeterConfig: 1018,
		DanceDance: 1019,
		DanceBot: 1020,
		DanceMenu: 1021,
		DanceTimer: 1022,
		EasyStar: 1023,
		DynoA0: 1024,
		Scoog: 1025,
		DinoDigMenu: 1026,
		InputDispatcher: 1027,
		Broadcaster: 1028,
		GameObj: 1029,
		SessionCamSessionRecorder: 1030,
		TechnicalMetricsManager: 1031,
		EventBroadcastWrapper: 1032,
		StatusEffectManager: 1033,
		Ink: 1034,
		StatusEffect: 1035,
		AchievementController: 1036,
		DungeonWheel: 1037,
		DailyQuestionsNotification: 1038,
		SocialNotificationCell: 1039,
		AudioController: 1040,
		AutomationController: 1041,
		WizardAppearance: 1046,
		ClassModeController: 1047,
		AuthencatedAnalyticsService: 1050,
		PopUpModal: 1051,
		AccountCreate: 1052,
		ClassCodePage: 1053,
		LocationPage: 1054,
		NamePage: 1055,
		PasswordPage: 1056,
		AdvancedNameChange: 1057,
		BackpackMenu: 1059,
		BoostSelect: 1060,
		BountyBoardMenu: 1061,
		BuyToy: 1062,
		Card: 1063,
		Character: 1064,
		Chat: 1065,
		ChatPanel: 1066,
		ChoostPet: 1067,
		FriendRequests: 1068,
		FriendRequestController: 1069,
		FriendRequestModel: 1070,
		FriendRequestView: 1071,
		ConjureCubeView: 1072,
		RewardView: 1073,
		GotItem: 1074,
		HouseItemInfo: 1075,
		Nicknamer: 1076,
		PetsMenu: 1077,
		Hearts: 1078,
		ElementBanner: 1079,
		BattlePotionSelect: 1080,
		ConfirmPotionUse: 1081,
		Pouch: 1082,
		QuestDescription: 1083,
		Rating: 1084,
		Server: 1085,
		ServerSelectMode: 1087,
		ClassSelect: 1088,
		AchievementsPanel: 1089,
		BattleRequestsPanel: 1090,
		BountiesPanel: 1091,
		SeasonDetails: 1092,
		SeasonLeaders: 1093,
		BadgesMenu: 1094,
		BountyStore: 1095,
		Stylist: 1096,
		Survey: 1097,
		SurveyDataAdapter: 1098,
		MultiContainerLayout: 1099,
		ArchiveEntranceMenu: 1100,
		ClassCodeMessage: 1101,
		CoOpModal: 1102,
		CoOpTeamSelect: 1103,
		DailyQuestionsMenu: 1104,
		DungeonExitMenu: 1105,
		DungeonPrizesMenu: 1106,
		DungeonRoulette: 1107,
		FriendsListMenu: 1108,
		KeystonePedestalsMenu: 1109,
		AcademyCR1: 1110,
		AcademyCR2: 1111,
		AcademyGH3: 1112,
		AcademyTutorial: 1113,
		AcademyFirstKeystone: 1114,
		AcademyIntroPt1: 1115,
		AcademyIntroPt2: 1116,
		AcademySecondFloor: 1117,
		AcademyStairsUnlocked: 1118,
		GreatHallPt1: 1119,
		GreatHallPt2: 1120,
		GreatHallPt3: 1121,
		GreatHallPt4: 1122,
		LamplightClassModeMenu: 1123,
		LearningEfficacySkipPopup: 1124,
		MembershipSchoolAd: 1125,
		MembershipSuccess: 1126,
		OpenMail: 1127,
		MailerMethods: 1128,
		ParentalLinkPopup: 1129,
		ParentalLinkTrial: 1130,
		PVPPrizes: 1131,
		ResultsMenu: 1132,
		ChestContainer: 1133,
		SummaryPopupController: 1134,
		StarJarUI: 1135,
		MemberStarAnimation: 1136,
		StarJarContainer: 1137,
		CountdownTimerType: 1138,
		CountdownTimer: 1138,
		CurrentTab: 1139,
		SocialFeed: 1139,
		HeartSummary: 1140,
		SpellSummary: 1141,
		SystemMenu: 1142,
		TitanProgress: 1146,
		TowerEntranceMenu: 1147,
		TowerExitMenu: 1148,
		TrialEnded: 1149,
		TwilightWheelPOpup: 1150,
		VoucherCodeUnlock: 1151,
		YourMail: 1152,
		ZoneProgress: 1153,
		UIViewer: 1154,
		HouseEditorMenu: 1155,
		HouseItemsScroll: 1156,
		HouseItemIcon: 1157,
		TestMail: 1158,
		APIClient: 1159,
		ColorReplaceController: 1160,
		GiftBoxController: 1161,
		GraphicsController: 1162,
		MailController: 1163,
		NicknameController: 1164,
		BonfireSpireNicknameProvider: 1165,
		FireflyForestNicknameProvider: 1166,
		NicknameFactory: 1167,
		NicknameWrapper: 1168,
		ShipwreckShoreNicknameProvider: 1169,
		ShiverchillMountainsNicknameProvider: 1170,
		SkywatchNicknameProvider: 1171,
		PVPController: 1172,
		HttpDataProviderFailure: 1175,
		StoreHttpDataProvider: 1176,
		VoucherCodeHttpDataProvider: 1177,
		AdvGameObjectFactory: 1178,
		AchievementContainer: 1179,
		BonfireContainer: 1180,
		CloudContainer: 1181,
		IceWrymBossContainer: 1182,
		FollowContainer: 1183,
		ItemContainer: 1184,
		MonsterSpineContainer: 1185,
		Pet: 1186,
		TimerContainer: 1187,
		TimerControl: 1188,
		NameLabel: 1189,
		PlayAnimationList: 1190,
		ConjureCubeButton: 1191,
		GameObjectFactory: 1192,
		AdvButton: 1193,
		AnimatedSprite: 1194,
		FillBar: 1195,
		Indicator: 1196,
		Panel: 1197,
		PanelButton: 1198,
		ProgressBar: 1199,
		Slider: 1201,
		StackButton: 1202,
		EFontStyle: 1203,
		DialogueFactory: 1204,
		EventFactory: 1205,
		EventController: 1206,
		ExternalFactory: 1207,
		IconFactory: 1208,
		QuantityIcon: 1209,
		FSMItemsDataProvider: 1210,
		GameAvatarDataFactory: 1211,
		GameDiscoveryDataFactory: 1212,
		AnonymousEventBroadcastWrapper: 1213,
		GameQuestionDataFactory: 1214,
		GameSinkDataFactory: 1215,
		GameSocialDataFactory: 1216,
		GameSourceDataFactory: 1217,
		GameStartDataFactory: 1218,
		GameEvenBroadcaster: 1219,
		TelemetryGameEventReceiver: 1220,
		AnalyticsRecieverBase: 1221,
		MessageListener: 1222,
		MailExtensionController: 1223,
		SurveyMailExtension: 1224,
		BaseMailExtension: 1225,
		FriendsListNetworkHandler: 1226,
		GiftBoxNetworkHandler: 1227,
		MailerNetworkHandler: 1228,
		PVPNetworkHandler: 1229,
		TitansNetworkHandler: 1230,
		PrefabDataProvider: 1231,
		SkinManager: 1232,
		Bubbles: 1233,
		MagicParticle: 1234,
		Snow: 1235,
		Assets: 1236,
		Attacks: 1237,
		Dialogues: 1238,
		DialogueData: 1239,
		World: 1240,
		ActivityZoneA1: 1241,
		ActivityZoneA2: 1242,
		ActivityZoneB1: 1243,
		ActivityZoneB2: 1244,
		ActivityZoneB3: 1245,
		Swoopy: 1246,
		ActivityZoneC1: 1247,
		ActivityZoneC2: 1248,
		ArchivesMap: 1249,
		BonfireSpireZone: 1250,
		BonfireSpireA1: 1251,
		BonfireSpireA4: 1252,
		BonfireSpireB1: 1253,
		BonfireSpireB2: 1254,
		BonfireSpireB4: 1255,
		BonfireSpireB5: 1256,
		BonfireSpireC1: 1257,
		BonfireSpireC2: 1258,
		BonfireSpireC3: 1259,
		BonfireSpireC4: 1260,
		BonfireSpireC6: 1261,
		BonfireSpireD1: 1262,
		BonfireSpireD2: 1263,
		BonfireSpireD3: 1264,
		BonfireSpireD4: 1265,
		BonfireSpireD5: 1266,
		BonfireSpireD6: 1267,
		BonfireSpireE5: 1268,
		BonfireSpireE6: 1269,
		BonfireSpireQ1: 1270,
		BonfireSpireQ10: 1271,
		BonfireSpireQ11: 1272,
		BonfireSpireQ12: 1273,
		BonfireSpireQ13: 1274,
		BonfireSpireQ14: 1275,
		BonfireSpireQ2: 1276,
		BonfireSpireQ3: 1277,
		BonfireSpireQ4: 1278,
		BonfireSpireQ5: 1279,
		BonfireSpireQ6: 1280,
		BonfireSpireQ7: 1281,
		BonfireSpireQ8: 1282,
		BonfireSpireQ9: 1283,
		DarktowerA1: 1284,
		DarktowerA2: 1285,
		Roulette: 1286,
		LoadMapState: 1290,
		TMXAnimator: 1291,
		TMXMap: 1292,
		TMXTotator: 1293,
		TMXTile: 1294,
		BlockEvent: 1295,
		BountyEvent: 1296,
		ChestEvent: 1297,
		ClickableMoveEvent: 1298,
		CollectEvent: 1299,
		FireflyEvent: 1300,
		GnomeEvent: 1301,
		MimicEvent: 1302,
		MonsterSpineEvent: 1303,
		NPCEvent: 1304,
		BroccolinaEvent: 1305,
		EugeneEvent: 1306,
		JellyJimEvent: 1307,
		WorkerSlimeEvent: 1308,
		BenniEvent: 1309,
		EveEvent: 1310,
		FloraEvent: 1311,
		QuestProgressEvent: 1312,
		WizardEvent: 1313,
		Menu: 1314,
		MenuModel: 1315,
		BackpackButton: 1316,
		ChatButton: 1317,
		EditHouseButton: 1318,
		FeedButton: 1319,
		FriendsListButton: 1320,
		LockHouseButton: 1321,
		MailerButton: 1322,
		MemberIconButton: 1323,
		MoveHouseButton: 1324,
		PetsButton: 1325,
		SettingsButton: 1326,
		SocialButton: 1327,
		WorldMapButton: 1328,
		LiveFSMEditor: 1329,
		LiveUIPreview: 1332,
		DarktowerA3: 1333,
		EarthTowerZone: 1334,
		EarthTowerCR: 1335,
		EarthTowerMap: 1336,
		TowerMap: 1337,
		EarthTowerWR: 1338,
		EarthTowerQuest: 1339,
		BattleShadowGerald: 1340,
		EarthTowerIntro: 1341,
		FreeFlorian: 1342,
		ForestZone: 1343,
		CoOpActiveTeamSocketHandler: 1344
	};
	/*
		These two classes help keep track of animations
		to be used in the Fast Game Speed mod.
		
		They make it so that the animations' timescale
		could be changed in real time.
	*/
	class TweenManager {
		constructor() {
			this.tweens = []
		}
		getAll() {
			return this.tweens
		}
		getTweens() {
			let e = [];
			for (let t = 0; t < this.tweens.length; t++) e.push(this.tweens[t].tween);
			return e
		}
		register(e, t, i, a) {
			this.tweens.push({
				tween: t,
				_parent: e,
				baseDelay: i,
				baseDuration: a
			})
		}
		clear() {
			this.tweens = []
		}
	}
	class AnimationManager {
		constructor() {
			this.animations = []
		}
		getAll() {
			let e = [];
			for (let t = 0; t < this.animations.length; t++) e.push(this.animations[t].animation);
			return e
		}
		register(e, t) {
			this.animations.push({
				animation: e,
				baseSpeed: t
			})
		}
		clear() {
			this.animations = []
		}
	}
	/*
		This class is where the  M A G I C  happens.
		
		Basically all of the mod stuff is here.
		Handles all of the patches necessary for modding.
		
		If you want to add a new mod, it's all done in
		this class.
	*/
	var ModHooks = null;
	class ModHandler {
		constructor(e, t, i) {
			this.game = e,
			this.import = t,
			this.gamedata = i,
			this.animations = new AnimationManager,
			this.tweens = new TweenManager,
			this.available = [{
				id: "WalkSpeed",
				patch: "initWalkSpeedMod"
			}, {
				id: "FastGameSpeed",
				patch: "initFastGameSpeedMod"
                        }, {
                                id: "RebalancedBattles",
                                patch: "initRebalancedBattleMod"
			}, {
				id: "ImitationTitan",
				patch: "initImitationTitanMod"
			}];
			window.ProdigyModules = this.import;
		}
		log(e) {
			this.import(Prodigy.Util).Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #1724", "background: #172a", "background: #172f; color: #FFF", "background: #172a", "background: #1724")
		}
		info(e) {
			this.import(Prodigy.Util).Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #14b4", "background: #14ba", "background: #14bf; color: #FFF", "background: #14ba", "background: #14b4")
		}
		error(e) {
			this.import(Prodigy.Util).Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #a114", "background: #a11a", "background: #a11f; color: #FFF", "background: #a11a", "background: #a114")
		}
		initWalkSpeedMod() {
			let e = this.gamedata.ui,
				t = this.import(Prodigy.SystemMenu).SystemMenu.prototype.postCreate,
				i = this.import(Prodigy.ScrollBar),
				a = this.import(Prodigy.Util),
				o = this.game,
				r = this.import(Prodigy.PlayerContainer).PlayerContainer.prototype.update;
			e[3].data.elements[0].children[4].children[3].children.push({
				type: "Text",
				name: "walkSpeedSliderText",
				y: 154,
				x: 20,
				height: 30,
				relativeWidth: .2,
				textKey: "Walk Speed",
				fontID: 157,
				fontSize: 0,
				horizontalAlignment: "left",
				forceUpperCase: !0
			}), e[3].data.elements[0].children[4].children[3].children.push({
				type: "Slider",
				name: "walkSpeedSlider",
				y: 154,
				relativeX: .26,
				relativeWidth: .7,
				height: 42,
				atlasID: 144,
				thumbFrameName: "buttons/orange-thumb",
				activeTrackBaseFrameName: "scroll-tracks/blue",
				inactiveTrackBaseFrameName: "scroll-tracks/grey",
				isVertical: !1
			}), e[22].data.elements[0].children[1].children[3].children.push({
				type: "UIElement",
				relativeX: .065,
				relativeY: .75,
				relativeWidth: 1,
				relativeHeight: 1,
				children: [{
					type: "ScrollBar",
					name: "walkSpeedScrollBar",
					relativeY: .06,
					relativeWidth: .84,
					height: 20,
					anchorX: 0,
					anchorY: .5,
					atlasID: 149,
					isVertical: !1,
					thumbFrameName: "image/slider-knob",
					trackFrameName: "image/slider-track"
				}, {
					type: "WebFontText",
					relativeX: .4,
					relativeY: 0,
					textKey: "Walk Speed",
					style: 9,
					fontSize: 18,
					boundsAlignH: "center",
					boundsAlignV: "middle",
					color: "#363636"
				}]
			}),
			this.game.prodigy.player.walkSpeed = 1.5,
			this.import(Prodigy.SystemMenu).SystemMenu.prototype.postCreate = function() {
				t.call(this);
				let e = this.findElement(i.ScrollBar, "walkSpeedScrollBar");
				a.Util.isValid(e) && (e.setPercent((this.game.prodigy.player.walkSpeed - .1) / 20), e.onDragUpdateCallbacks.push((function(e) {
					o.prodigy.player.walkSpeed = 20 * e + .1
				})))
			}
			this.import(Prodigy.PlayerContainer).PlayerContainer.prototype.update = function() {
				r.call(this);
				this.walkSpeed = o.prodigy.player.walkSpeed;
			}
		}
		initFastGameSpeedMod() {
			let e = this.game,
				t = this.import(Prodigy.Util),
				i = this.import(Prodigy.TweenController).TweenController.prototype.set,
				a = this.tweens,
				o = this.animations,
				r = Phaser.AnimationManager.prototype.play,
				n = Phaser.AnimationManager.prototype.add,
				l = t,
				s = this;
			window.setGameSpeed = function(d) {
				if (d < .1) ModHooks.error("Supplied speed multiplier is too low. Try a larger speed value.");
				else {
					if (e.prodigy.debugMisc.setGameSpeed.call(e.prodigy, d), spine.AnimationState.prototype.timeScale = d, Phaser.AnimationManager.prototype.add = function(e, t, i, a, r) {
							let s = 10;
							l.Util.isDefined(i) && (s = i, i *= d);
							let h = n.call(this, e, t, i, a, r);
							return o.register(h, s), h
						}, Phaser.AnimationManager.prototype.play = function(e, i, a, o) {
							return t.Util.isDefined(i) && !isNaN(i) && (i *= d), r.call(this, e, i, a, o)
						}, s.import(Prodigy.TweenController).TweenController.prototype.set = function(e, t, o, r) {
							let n = o,
								s = r;
							l.Util.isDefined(o) && (o /= d), l.Util.isDefined(r) && (r /= d);
							let h = i.call(this, e, t, o, r);
							return a.register(this, this.tweens[this.tweens.length - 1], n, s), h
						}, t.Util.isDefined(e.tweens))
						for (var h = e.tweens.getAll(), p = 0; p < h.length; p++) h[p].timeScale = d;
					if (t.Util.isDefined(o))
						for (var c = o.getAll(), m = 0; m < c.length; m++) c[m].speed = d * (t.Util.isDefined(o.animations[m].baseSpeed) ? o.animations[m].baseSpeed : 10);
					if (t.Util.isDefined(a))
						for (var g = a.getAll(), u = 0, k = a.getTweens(); u < g.length; u++) k[u].delay = g[u].baseDelay / d, k[u].duration = k[u].frames.length * g[u].baseDelay * g[u].baseDuration / d
				}
			}, setTimeout(this.info.bind(this, 'Use "setGameSpeed(speed)" to change the game speed at anytime.'), 2e3), window.setGameSpeed(2)
    }
    initRebalancedBattleMod() {
        Prodigy.Creature.ATTACK_BONUS = {
            "A+": 1.6,
            A: 1.45,
            "A-": 1.3,
            "B+": 1.15,
            B: 1,
            "B-": .925,
            "C+": .85,
            C: .775,
            "C-": .7
        }, Prodigy.Attacks.prototype.calculateDamage = function(e, t, i, a, s) {
            Util.isDefined(a) || (a = 0);
            var r = 0;
            Util.isDefined(e) && Util.isDefined(e.damage) && (r = e.damage);
            var o = e.element,
                n = i.getElement(),
                l = 0,
                d = "B",
                h = 0;
            return Util.isDefined(t) ? (l = t.getLevel() - 1 + 1, d = Util.isDefined(t.source) && Util.isDefined(t.source.power) ? t.source.power : d, h = (l + 10) / 11) : h = 1, "Glacial Shield" !== e.name && 0 === i.modifiers.ignoreElement && (this.isStrong(o, n) ? r += 4 : this.isWeak(o, n) && 0 >= (r -= 3) && (r = 2)), r = Math.floor(10 * r * s * h * Prodigy.Creature.ATTACK_BONUS[d]), Math.max(Math.floor(r + (Util.isDefined(a) ? a : 0)), 0)
        }, Prodigy.Creature.HEALTH_CURVE = {
            "A+": 31,
            A: 29,
            "A-": 28,
            "B+": 26,
            B: 25,
            "B-": 24,
            "C+": 22,
            C: 21,
            "C-": 19
        }, Prodigy.Creature.getHeartsFromCurve = function(e, t, i) {
            return Prodigy.Creature.HEALTH_CURVE[e] * (i - t)
        }, Prodigy.Container.CreatureContainer.prototype.levelEventNewHeart = function(e) {
            for (var t = 0; 10 > t; t++) {
                var i = this.game.prodigy.create.sprite(this.x, this.y - 50, "core-2", "user-heart");
                this.game.broadcaster.broadcast(Prodigy.Events.Screen.ADD_CHILD, this.game, [i, "content"]), i.anchor.setTo(.5, .5), i.alpha = .5, this.game.add.tween(i).to({
                    x: 470
                }, 600, Phaser.Easing.Linear.None).delay(300 * t).to({
                    alpha: 0
                }, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(i).to({
                    y: 55
                }, 600, Phaser.Easing.Quadratic.Out).delay(300 * t).start()
            }
            this.source.changeCurrentHearts(Number.MAX_VALUE), this.callBattlePopup({
                type: Prodigy.Menu.BattleBase.LEVEL_UP,
                hearts: e,
                source: this.source
            })
        }, Prodigy.Creature.prototype.addStars = function(e, t, i, a) {
            if (Util.isDefined(this.isOpponent) && this.isOpponent) return !1;
            e = Math.round(e);
            var s = !1,
                r = Util.isDefined(this.getLife) ? this.getLife() : "B";
            if (Util.isDefined(t)) {
                var o = this.game.prodigy.player;
                return o.hasValidatedParentEmail() && o.hasCompletedTutorial() && (e *= GameConstants.get("GameConstants.Battle.VALID_PARENT_EMAIL_STARS_PERCENTAGE")), this.starsToProcess += e, !1
            }
            this.starsToProcess = 0;
            var n = this.getLevel();
            if (this.game.broadcaster.broadcast(Prodigy.Events.Creature.STARS_ADDED, this, null), n >= 100) return !1;
            if (Util.isDefined(this.data.stars) ? this.data.stars += e : this.data.stars = e, Util.isDefined(i) || (this.starsEarned += e), this.data.level = Prodigy.Creature.levelFromStars(this.data.stars), n !== this.data.level) {
                this.levelEvents = [];
                var l = this.getLevelingCurve(this.data.level);
                if (Util.isDefined(l))
                    for (var d = 0; d < l.length; d++) Util.inArray(this.levelEvents, l[d]) || this.levelEvents.push(l[d]);
                Prodigy.Creature.getHeartsFromCurve(r, null, n) !== Prodigy.Creature.getHeartsFromCurve(r, null, this.data.level) ? this.levelEvents.push({
                    h: Prodigy.Creature.getHeartsFromCurve(r, null, this.data.level) - Prodigy.Creature.getHeartsFromCurve(r, null, n),
                    lvl: this.data.level
                }) : this.game.time.events.add(2500, this.changeCurrentHearts.bind(this, Number.MAX_VALUE), this), this.justLeveled = !0, this.game.broadcaster.broadcast(Prodigy.Events.Creature.LEVEL_UP, this, null), s = !0
            }
            return Util.isDefined(a) && this.clearUnprocessedLevelEvents(), this.updated = !0, s
        }, Attack.prototype.damage = function() {
            this.calculateDamageDone(), Util.isDefined(this.atk.type) && "epic-attack" === this.atk.type && (Util.isDefined(this.epic) ? this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.epic.x, this.epic.y - 50, "battle", "text-epic-attack")) : this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.source.x, this.source.y - 50, "battle", "text-epic-attack"))), this.potionActive = !1, this.shieldTime = 0;
            var e = 0;
            if (Util.isDefined(this.target.source.modifiers) && Util.isDefined(this.target.source.modifiers.potion)) {
                var t = Items.getItemData("item", this.target.source.modifiers.potion);
                if (Util.isDefined(t.subType) && "elemental" === t.subType && Util.isDefined(this.atk.element) && ("all" === t.element || this.atk.element === t.element)) {
                    this.potionActive = !0, this.shieldTime = 1e3, e = t.potency * this.damageDone / 10, this.damageDone -= Math.round(e);
                    var i = this.target.sprites.add(this.game.prodigy.create.sprite(0, -75, "icons", "potion-buff-" + t.element));
                    i.anchor.setTo(.5, .5);
                    var a = this.game.add.tween(i).to({
                            alpha: 0
                        }, 1300, Phaser.Easing.Quadratic.Out),
                        s = this.game.add.tween(i.scale).to({
                            x: 4,
                            y: 4
                        }, 1300, Phaser.Easing.Quadratic.Out);
                    a.start(), s.onComplete.add((function() {
                        i.destroy()
                    }), i), s.start()
                }
            }
            var r = "",
                o = Math.random() < this.CRITICAL_HIT_THRESHOLD + this.criticalThresholdBonus && "PVP" !== this.game.state.current || "epic-attack" === this.atk.type;
            o ? (this.damageDone = Math.round(1.5 * this.damageDone), this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.target.x, this.source.y + 50, "battle", "text-critical-hit"), 1e3 + this.shieldTime), r = "critical-hit") : r = "normal-hit", this.processStars(), this.lastTargetHp = this.target.source.getCurrentHearts(), this.target.source.changeCurrentHearts(-this.damageDone), this.game.prodigy.effects.characterText("-" + this.damageDone, this.target.x, this.source.y, this.shieldTime, {
                size: 1,
                font: "battle",
                mono: 44
            }), this.game.prodigy.audio.playSFX(Prodigy.Controller.AudioController.SFX_PACKS.BATTLE, r);
            var n = null;
            o || 0 !== this.target.source.modifiers.ignoreElement || (this.game.prodigy.attacks.isStrong(this.atk.element, this.target.source.getElement()) ? n = "Powerful!" : this.game.prodigy.attacks.isWeak(this.atk.element, this.target.source.getElement()) && (n = "Weak...")), Util.isDefined(n) && (this.delayComplete = !0, this.game.prodigy.effects.characterText(n, this.target.x, this.source.y + 50, 1e3 + this.shieldTime))
        }
		initImitationTitanMod() {
			let e = this.import(Prodigy.Util),
				t = this.import(Prodigy.Services),
				i = {
					id: 1314,
					assetID: 2,
					health: 4e6,
					startDate: "2023-10-01T21:40:01.408Z",
					endDate: "2035-10-01T21:40:01.408Z",
					processed: !1,
					hits: 0,
					rewardData: null,
					maxHealth: 4e6,
					rewards: [100, 60, 30, 10],
					increments: [71, 40, 20, 10]
				};
			this.game.prodigy.network.getTitan = function(t, a, o) {
				return e.Util.isDefined(a) && a.call(this, i), i
			}, this.game.prodigy.network.getTitans = function(t, a) {
				return e.Util.isDefined(t) && t.call(this, i), i
			}, this.game.prodigy.network.hitTitan = function(a, o, r) {
				return e.Util.isDefined(o) && o.call(this, i), t.Logger.log("Titan hit!", t.LogLevel.Verbose), {
					id: 1314,
					userID: 1,
					hits: 1
				}
			}, this.game.prodigy.titansNetworkHandler.isTitanAlive = function() {
				return !0
			}, this.game.prodigy.titansNetworkHandler.titan = i;
			let a = this.import(Prodigy.WorldMap).WorldMap.prototype.gotTitanCallback,
				o = this.import(Prodigy.WorldMap).WorldMap.prototype.create;
			this.import(Prodigy.WorldMap).WorldMap.prototype.gotTitanCallback = function(e) {
				return t.Logger.log("Manually running the get titan callback.", t.LogLevel.Verbose), a.call(this, e)
			}, this.import(Prodigy.WorldMap).WorldMap.prototype.create = function() {
				let e = o.call(this);
				return this.gotTitanCallback(i), e
			}
		}
	}
	/*
		This function just loads all of the mods automatically.
		
		It's ran when the game boots up.
	*/
	window.checkForMods = function(e, t, i, a) {
		ModHooks = new ModHandler(e, i, a), ModHooks.log("Checking for mods...");
		for (i = 0, a = 0; a < ModHooks.available.length; a += 1)
			if (t.includes(ModHooks.available[a].id)) try {
				let e = ModHooks.available[a].patch;
				ModHooks[e].call(ModHooks), ModHooks.log('Mod "' + ModHooks.available[a].id + '" successfully applied!'), i++
			} catch (e) {
				ModHooks.error('Error occured while applying mod "' + ModHooks.available[a].id + '" to Prodigy!'), console.error(e)
			}
		i > 0 ? ModHooks.log("Applied (" + i + ") mods to the game") : ModHooks.log("No mods have been applied")
	}
})();
