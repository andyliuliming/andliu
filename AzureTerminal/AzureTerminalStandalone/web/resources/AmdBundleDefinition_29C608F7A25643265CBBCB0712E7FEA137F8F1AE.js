var __extends;require.config({bundles:{"**Shared":["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.Commands",
"MsPortalImpl/_generated/Common/Base.UriBuilder","MsPortalImpl.Controls/Controls/Base/Host","Viva.Controls/Util/Util",
"Viva.Controls/Util/Detection","Viva.Controls/Util/Util.Private","MsPortalImpl.Controls/Controls/Base/Base",
"MsPortalImpl.Controls/Base/Base.TriggerableLifetimeManager","Viva.Controls/Controls/Base/Base","Viva.Controls/Base/Base.TriggerableLifetimeManager",
"Viva.Controls/Controls/Base/KnockoutExtensions","Viva.Controls/Controls/Base/Image","MsPortalImpl.Controls/Controls/Base/Loadable",
"MsPortalImpl.Controls/Controls/Documents/DiscussionThread","Viva.Controls/Util/Resize","Viva.Controls/Util/StringUtil",
"Viva.Controls/Controls/Visualization/ChartBase","Viva.Controls/Util/Hatching","Viva.Controls/Util/UnitConversion",
"Viva.Controls/Util/EnumUtil","Viva.Controls/Util/ArrayUtil","Viva.Controls/Util/DateUtil","Viva.Controls/Util/ColorUtil",
"Viva.Controls/Controls/Visualization/Legend","Viva.Controls/Controls/Lists/Grid1/Grid.SelectableRow",
"Viva.Controls/Controls/Lists/Grid1/Grid.FocusableRow","Viva.Controls/Controls/Lists/Grid1/Grid","Viva.Controls/Util/TemplateEngine",
"Viva.Controls/Controls/Base/ExtensibleControl","Viva.Controls/Controls/Lists/Grid1/Grid.Formatters",
"Viva.Controls/Controls/Lists/Grid1/Grid.Formatters.Helpers","MsPortalImpl/Base/Base.KeyboardHelper",
"MsPortalImpl/Base/Base.KnockoutExtensions.Image","MsPortalImpl/Base/Base.ImageHelper","MsPortalImpl/Generated/SvgDefinitions",
"MsPortalImpl/Base/Base.Sanitization","MsPortalImpl/Base/Base.KnockoutTemplateSanitizer","MsPortalImpl/Base/Base.KnockoutBindingSanitizer",
"MsPortalImpl/Base/Base.CssSanitizer","MsPortalImpl/Base/Base.CssSelectorParser","MsPortalImpl/Services/Services.Storage",
"Viva.Controls/Controls/Lists/Grid1/Grid.FocusableRowHover","Viva.Controls/Controls/Base/CompositeControl",
"MsPortalImpl.Controls/Base/Base.Commands","Viva.Controls/Controls/Visualization/Donut","Viva.Controls/Controls/Forms/MultiSelectDropDown",
"Viva.Controls/Controls/Forms/ComboDropBase","Viva.Controls/Controls/Base/ValidatableControl","Viva.Controls/Controls/Base/Validators",
"Viva.Controls/Controls/Base/EditableControl","Viva.Controls/Controls/Forms/GroupDropDown","Viva.Controls/Controls/Base/ItemList",
"Viva.Controls/Controls/Visualization/QuotaGauge","Viva.Controls/Controls/Visualization/UsageGauge",
"Viva.Controls/Controls/Visualization/Gauge","Viva.Controls/Controls/Visualization/GaugeBase","Viva.Controls/Controls/SingleSetting",
"Viva.Controls/Util/Positioning","Viva.Controls/Controls/DockedBalloon","Viva.Controls/Controls/Balloon",
"MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedAttrBinding","MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedHtmlBinding",
"MsPortalImpl.Controls/Controls/Lists/List1/ListView","Viva.Controls/Controls/Lists/List1/List","Viva.Controls/Controls/Lists/List1/List.Selectable",
"Viva.Controls/Controls/Lists/List1/List.Focusable","Viva.Controls/Controls/Lists/List1/List.Groupable",
"MsPortalImpl.Controls/Fields/Base/Field","MsPortalImpl.Controls/Fields/Base/FormValidation","MsPortalImpl.Controls/Fields/Base/LabelAndBalloonWidget",
"MsPortalImpl/Base/Telemetry","Viva.Controls/Controls/Forms/CheckBox","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon",
"Viva.Controls/Controls/Base/ValidationPlacements/Base","Viva.Controls/Controls/Base/ValidationPlacements/Css",
"MsPortalImpl.Controls/Controls/Forms/CreatorAndSelector","MsPortalImpl.Controls/Controls/Forms/SelectorBase",
"MsPortalImpl.Controls/Controls/Base/ValidatableControl","Viva.Controls/Controls/Forms/DatePicker","Viva.Controls/Controls/Forms/DatePanel",
"Viva.Controls/Controls/Forms/EditableCombo","Viva.Controls/Controls/Base/TypableControl","Viva.Controls/Controls/Base/ValueUpdateTrigger",
"Viva.Controls/Controls/Forms/DateTimeCombo","Viva.Controls/Controls/Forms/DateTimePicker","Viva.Controls/Controls/Forms/TimePicker",
"Viva.Controls/Controls/Forms/FilterCombo","Viva.Controls/Controls/Lists/Grid1/Grid.Scrollable","Viva.Controls/Controls/Forms/MultiLineTextBox",
"MsPortalImpl.Controls/Controls/Base/Formatters","Viva.Controls/Controls/Lists/Grid1/Grid.EditableRow",
"Viva.Controls/Controls/Forms/NumericTextBox","Viva.Controls/Controls/Forms/OptionPicker","Viva.Controls/Controls/Forms/Password",
"MsPortalImpl.Controls/Fields/Base/SliderBaseField","Viva.Controls/Controls/Forms/TextBox","Viva.Controls/Controls/Forms/RangeSlider",
"Viva.Controls/Controls/Base/SliderBase","MsPortalImpl.Controls/Controls/Forms/Selector","Viva.Controls/Controls/Forms/Slider",
"MsPortalImpl/Parts/Parts","MsPortalImpl/Interactions/Interactions.FocusHandler","MsPortalImpl/UI/Compositions/UI.Composition.PropertyBinding",
"MsPortalImpl/Widgets/Widgets.PartError","MsPortalImpl/Widgets/Widgets.WidgetBase","MsPortalImpl/UI/Hubs/Services/UI.ResourceGroups.PropertyProviderService",
"MsPortalImpl/UI/Hubs/UI.HubBase","MsPortalImpl/Prototype/Extension.Definition.Locator","MsPortalImpl/Widgets/Widgets.DefaultHubIcon",
"MsPortalImpl/Services/Services.GeneralSettings","MsPortalImpl/Services/Services.Settings","MsPortalImpl/Services/Services.Settings.Schema",
"MsPortalImpl/Widgets/Widgets.HubIcon","MsPortalImpl/Base/Base.DiagnosticsPopup","MsPortalImpl/UI/Hubs/UI.HubsDiagnostics",
"MsPortalImpl/Base/Languages","MsPortalImpl/Base/Base.Events","MsPortalImpl/Base/Template","MsPortalImpl/UI/Hubs/UI.CreateLauncher",
"MsPortalImpl/UI/Hubs/ViewModels/UI.Gallery.CsmCommand","MsPortalImpl/UI/Hubs/UI.NotificationManager",
"MsPortalImpl/UI/UI.DialogManager","MsPortalImpl/Widgets/Dialogs/Widgets.FormDialog","MsPortalImpl/Interactions/Interactions.Command",
"MsPortalImpl/Widgets/Dialogs/Widgets.ListPopup","MsPortalImpl/Interactions/Interactions.DismissHandler",
"MsPortalImpl/Widgets/Dialogs/Widgets.ProgressBox","MsPortalImpl/UI/Compositions/UI.Composition","MsPortalImpl/Widgets/Dialogs/Widgets.MessageBox",
"Viva.Controls/Controls/Toolbars/CommandButton","Viva.Controls/Controls/Toolbars/ExecutableButtonBase",
"Viva.Controls/Controls/Toolbars/ToolbarButton","Viva.Controls/Controls/Toolbars/ToolbarItemType","Viva.Controls/Controls/Toolbars/ToolbarItem",
"MsPortalImpl/Widgets/Widgets.Blade","MsPortalImpl/Interactions/Interactions.RightClick","MsPortalImpl/Widgets/Widgets.CommandBar",
"MsPortalImpl/Widgets/Widgets.Common","MsPortalImpl/Widgets/Widgets.ContextMenu","MsPortalImpl/Interactions/Interactions.OverflowAutoTooltip",
"MsPortalImpl/Widgets/Widgets.LayoutBase","MsPortalImpl/Widgets/Widgets.UIElementBase","MsPortalImpl/Widgets/Widgets.Lens",
"MsPortalImpl/Widgets/Widgets.FlowLayout","MsPortalImpl/Widgets/Widgets.Tile","MsPortalImpl/Widgets/Widgets.TileActionBar",
"MsPortalImpl/Widgets/Widgets.StackLayout","MsPortalImpl/Base/Base.Router","MsPortalImpl/UI/Hubs/UI.CreateHub",
"MsPortalImpl/Widgets/Widgets.CreateHub","MsPortalImpl/Widgets/Widgets.Hub","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Extensibility","MsPortalImpl/UI/UI.DesktopManager",
"MsPortalImpl/Base/Base.UriHelper","MsPortalImpl/Services/Services.AssetTypes.Utils","MsPortalImpl/UI/Hubs/UI.BrowseManager",
"MsPortalImpl/UI/Hubs/ViewModels/UI.Hubs.Common","MsPortalImpl.Controls/Controls/Balloon","MsPortalImpl/UI/Commands/UI.Commands",
"MsPortalImpl/UI/Compositions/UI.Composition.BladeOpener","MsPortalImpl/UI/Compositions/UI.Composition.CompositionBinder",
"MsPortalImpl/UI/Compositions/UI.Composition.PropertyTransformers","MsPortalImpl/UI/Compositions/UI.Composition.DelayedBladeManager",
"MsPortalImpl/Widgets/Widgets.Journey","MsPortalImpl/UI/Compositions/UI.Composition.SelectableSetBinder",
"MsPortalImpl/UI/Compositions/UI.Composition.Security","MsPortalImpl/Base/Base.KnockoutExtensions.OverrideComputed",
"MsPortalImpl/UI/Compositions/UI.Composition.Base","MsPortalImpl/UI/Compositions/UI.Composition.Part",
"MsPortalImpl/UI/Commands/UI.Commands.Base","MsPortalImpl/UI/Commands/UI.Commands.Lists","MsPortalImpl/UI/Commands/UI.ShellCommands",
"MsPortalImpl/UI/Compositions/UI.Composition.PartSettingsManager","MsPortalImpl/UI/Compositions/UI.Composition.SelectableRegistration",
"MsPortalImpl/Parts/Parts.Error","MsPortalImpl/Widgets/Widgets.NotificationHubIcon","MsPortalImpl/UI/Hubs/UI.NotificationHub",
"MsPortalImpl/Widgets/Widgets.NotificationHub","Viva.Controls/Controls/Base/Command","MsPortalImpl/Parts/Parts.ButtonPart",
"MsPortalImpl/UI/Commands/UI.Commands.Parts","MsPortalImpl/UI/Compositions/UI.Composition.Services",
"MsPortalImpl/UI/Hubs/UI.HubsManager","MsPortalImpl/UI/Hubs/ViewModels/UI.Gallery.UiDefinition","MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.Common",
"MsPortalImpl/ViewModels/ViewModels.Forms","Viva.Controls/Base/Base.Disposable","Viva.Controls/Controls/Command",
"Viva.Controls/Controls/Base/Promise","Viva.Controls/Controls/Base/Sanitizer","Viva.Controls/Controls/Visualization/Graph/GraphEntitiesAddition",
"Viva.Controls/Controls/Visualization/Graph/Commands/ICommand"],"*MsPortalImpl.Controls/Base/Base.KnockoutExtensions.Image":
["MsPortalImpl.Controls/Base/Base.KnockoutExtensions.Image"],"*MsPortalImpl.Controls/Controls/Documents/DiffEditor":
["MsPortalImpl.Controls/Controls/Documents/DiffEditor","MsPortalImpl.Controls/Controls/Documents/Editor",
"MsPortalImpl.Controls/Controls/Documents/Editor.DiscussionExtension","MsPortalImpl.Controls/Controls/Documents/Editor.Extension"],
"*MsPortalImpl.Controls/Controls/Documents/DiffList":["MsPortalImpl.Controls/Controls/Documents/DiffList",
"MsPortalImpl.Controls/Controls/Documents/DiffView"],"*MsPortalImpl.Controls/Controls/Documents/DiscussionTimeline":
["MsPortalImpl.Controls/Controls/Documents/DiscussionTimeline"],"*MsPortalImpl.Controls/Controls/Visualization/Chart":
["MsPortalImpl.Controls/Controls/Visualization/Chart","Viva.Controls/Controls/Visualization/Chart","Viva.Controls/Controls/Visualization/StackedAreaChartViewImpl",
"Viva.Controls/Controls/Visualization/StackedChartViewImpl","Viva.Controls/Controls/Visualization/ChartViewImpl",
"Viva.Controls/Controls/Visualization/ScatterChartViewImpl","Viva.Controls/Controls/Visualization/LineChartViewImpl",
"Viva.Controls/Controls/Visualization/AreaChartViewImpl","Viva.Controls/Controls/Visualization/BarChartViewImpl"],
"*MsPortalImpl.Controls/Controls/Visualization/CsmTopology":["MsPortalImpl.Controls/Controls/Visualization/CsmTopology"],
"*MsPortalImpl.Controls/Controls/Visualization/Donut":["MsPortalImpl.Controls/Controls/Visualization/Donut"],
"*MsPortalImpl.Controls/Controls/Visualization/Gauge":["MsPortalImpl.Controls/Controls/Visualization/Gauge"],
"*MsPortalImpl.Controls/Controls/Visualization/Graph":["MsPortalImpl.Controls/Controls/Visualization/Graph",
"Viva.Controls/Controls/Visualization/Graph/GraphViewModel","Viva.Controls/Controls/Visualization/Graph/GraphEntityViewModel",
"Viva.Controls/Controls/Visualization/Graph/GraphWidget","Viva.Controls/Controls/Visualization/Graph/GraphWidget.Constants",
"Viva.Controls/Controls/Visualization/Graph/Animation","Viva.Controls/Controls/Visualization/Graph/MouseCapture",
"Viva.Controls/Controls/Visualization/Graph/Geometry","Viva.Controls/Controls/Visualization/Graph/Commands/MoveNodes",
"Viva.Controls/Controls/Visualization/Graph/SvgUtils"],"*MsPortalImpl.Controls/Controls/Visualization/Map":
["MsPortalImpl.Controls/Controls/Visualization/Map","Viva.Controls/Controls/Visualization/Map","Viva.Controls/Controls/Visualization/MapCoordinateConverter",
"Viva.Controls/Controls/Visualization/Map.HexagonLayoutExtension","Viva.Controls/Controls/Visualization/Hexagon"],
"*MsPortalImpl.Controls/Controls/Visualization/Metrics":["MsPortalImpl.Controls/Controls/Visualization/Metrics",
"Viva.Controls/Controls/Visualization/Metrics"],"*MsPortalImpl.Controls/Controls/Visualization/PairedTimeline":
["MsPortalImpl.Controls/Controls/Visualization/PairedTimeline","MsPortalImpl.Controls/Controls/Visualization/RangeSelection"],
"*MsPortalImpl.Controls/Controls/Visualization/QuotaGauge":["MsPortalImpl.Controls/Controls/Visualization/QuotaGauge"],
"*MsPortalImpl.Controls/Controls/Visualization/SingleValueGauge":["MsPortalImpl.Controls/Controls/Visualization/SingleValueGauge",
"Viva.Controls/Controls/Visualization/SingleValueGauge"],"*MsPortalImpl.Controls/Controls/Visualization/StepGauge":
["MsPortalImpl.Controls/Controls/Visualization/StepGauge","Viva.Controls/Controls/Visualization/StepGauge"],
"*MsPortalImpl.Controls/Fields/CheckBoxField":["MsPortalImpl.Controls/Fields/CheckBoxField"],"*MsPortalImpl.Controls/Fields/CreatorAndSelectorField":
["MsPortalImpl.Controls/Fields/CreatorAndSelectorField"],"*MsPortalImpl.Controls/Fields/CustomHtmlField":
["MsPortalImpl.Controls/Fields/CustomHtmlField"],"*MsPortalImpl.Controls/Fields/DatePickerField":["MsPortalImpl.Controls/Fields/DatePickerField"],
"*MsPortalImpl.Controls/Fields/DateTimeComboField":["MsPortalImpl.Controls/Fields/DateTimeComboField"],
"*MsPortalImpl.Controls/Fields/DateTimePickerField":["MsPortalImpl.Controls/Fields/DateTimePickerField"],
"*MsPortalImpl.Controls/Fields/DateTimeRangePickerField":["MsPortalImpl.Controls/Fields/DateTimeRangePickerField",
"Viva.Controls/Controls/Forms/DateTimeRangePicker"],"*MsPortalImpl.Controls/Fields/DropDownField":["MsPortalImpl.Controls/Fields/DropDownField"],
"*MsPortalImpl.Controls/Fields/FilterComboField":["MsPortalImpl.Controls/Fields/FilterComboField"],"*MsPortalImpl.Controls/Fields/HtmlEditorField":
["MsPortalImpl.Controls/Fields/HtmlEditorField","Viva.Controls/Controls/Forms/ContentEditable"],"*MsPortalImpl.Controls/Fields/MultiLineTextField":
["MsPortalImpl.Controls/Fields/MultiLineTextField"],"*MsPortalImpl.Controls/Fields/MultiselectDropDownField":
["MsPortalImpl.Controls/Fields/MultiselectDropDownField"],"*MsPortalImpl.Controls/Fields/NumericTextBoxField":
["MsPortalImpl.Controls/Fields/NumericTextBoxField"],"*MsPortalImpl.Controls/Fields/OptionsGroupField":
["MsPortalImpl.Controls/Fields/OptionsGroupField"],"*MsPortalImpl.Controls/Fields/PasswordField":["MsPortalImpl.Controls/Fields/PasswordField"],
"*MsPortalImpl.Controls/Fields/RangeSliderField":["MsPortalImpl.Controls/Fields/RangeSliderField"],"*MsPortalImpl.Controls/Fields/Section":
["MsPortalImpl.Controls/Fields/Section"],"*MsPortalImpl.Controls/Fields/SelectorField":["MsPortalImpl.Controls/Fields/SelectorField"],
"*MsPortalImpl.Controls/Fields/SliderField":["MsPortalImpl.Controls/Fields/SliderField"],"*MsPortalImpl.Controls/Fields/TimePickerField":
["MsPortalImpl.Controls/Fields/TimePickerField"],"*MsPortalImpl.Controls/Fields/TriStateCheckBox":["MsPortalImpl.Controls/Fields/TriStateCheckBox"],
"*MsPortalImpl/Controls/Controls.PickerV3":["MsPortalImpl/Controls/Controls.PickerV3"],"*MsPortalImpl/Extension/Extension.Compatibility":
["MsPortalImpl/Extension/Extension.Compatibility","MsPortalImpl/Extension/Extension.ProductionDefinitions"],
"*MsPortalImpl/Parts/Parts.ResourceSummary":["MsPortalImpl/Parts/Parts.ResourceSummary","MsPortalImpl/Parts/Parts.Properties"],
"*MsPortalImpl/UI/Hubs/UI.DebugHub":["MsPortalImpl/UI/Hubs/UI.DebugHub","MsPortalImpl/Widgets/Widgets.DebugHub",
"MsPortalImpl/Widgets/Widgets.DebugHub.Performance"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.DiagnosticsPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.DiagnosticsPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LocaleSelectionBlade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LocaleSelectionBlade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LocaleGrid":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LocaleGrid"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.SettingsPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.SettingsPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LanguageGrid":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LanguageGrid"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LanguageSelectionBlade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.LanguageSelectionBlade"],"*MsPortalImpl/Controls/Forms/Controls.TokenComboBox":
["MsPortalImpl/Controls/Forms/Controls.TokenComboBox"],"*MsPortalImpl/Controls/Controls.DeleteAssetConfirmation":
["MsPortalImpl/Controls/Controls.DeleteAssetConfirmation"],"*MsPortalImpl/Controls/Controls.HeroBanner":
["MsPortalImpl/Controls/Controls.HeroBanner"],"*MsPortalImpl/Controls/Controls.FileDownloadButton":[
"MsPortalImpl/Controls/Controls.FileDownloadButton","MsPortalImpl/Commands/Commands.FileDownloadCommand"],
"*MsPortalImpl/Controls/Controls.Notice":["MsPortalImpl/Controls/Controls.Notice"],"*MsPortalImpl/Controls/Controls.Picker":
["MsPortalImpl/Controls/Controls.Picker"],"*MsPortalImpl/Controls/Controls.InfoBox":["MsPortalImpl/Controls/Controls.InfoBox",
"MsPortalImpl/Controls/Controls.HotSpot"],"*MsPortalImpl/Init":["MsPortalImpl/Init","MsPortalImpl/Extension/ExtensionManager",
"MsPortalImpl/Extension/Extension","MsPortalImpl/Extension/DefinitionPreprocessor","MsPortalImpl/Extension/PinBladeInferred",
"MsPortalImpl/Prototype/ViewModelManager","MsPortalImpl/ViewModels/ViewModels.BladeCaller","MsPortalImpl/Extension/Extension.DefinitionValidator",
"MsPortalImpl/Extension/Extension.Definition","MsPortalImpl/Extension/Extension.Manifest","MsPortalImpl/Services/Services.PortalIdentity",
"MsPortalImpl/Base/ClaimsIdentity","MsPortalImpl/Extension/Extension.Loader","MsPortalImpl/UI/UI.Initialize",
"MsPortalImpl/Base/Base.KnockoutExtensions.FxParameterCollector","MsPortalImpl/Base/Base.PopupClickBlocker",
"MsPortalImpl/Controls/Controls.Host","MsPortalImpl/Base/Base.DebugHelper","MsPortalImpl/Extension/ExtensionMetadataSource",
"MsPortalImpl/Services/Services.AssetManagement","MsPortalImpl/Services/Services.AssetTypes","MsPortalImpl/Base/Base.ItemCache",
"MsPortalImpl/Services/Services.Controller","MsPortalImpl/Services/Services.GalleryEndpoints","MsPortalImpl/Services/Services.Permissions",
"MsPortalImpl/Services/Services.SecurityTokens","MsPortalImpl/Services/Services.ShellProvisioner","MsPortalImpl/Base/Themes",
"MsPortalImpl/UI/Hubs/ViewModels/UI.Browse.ViewModelRegistration","MsPortalImpl/UI/Commands/UI.CommandManager",
"MsPortalImpl/UI/Compositions/UI.Composition.BladePair","MsPortalImpl/UI/UI.ContextPane","MsPortalImpl/UI/Hubs/UI.CreateManager",
"MsPortalImpl/UI/UI.DesktopManagerImpl","MsPortalImpl/UI/Compositions/UI.Composition.Blade","MsPortalImpl/Interactions/Interactions.FlowLayoutDragDrop",
"MsPortalImpl/UI/Compositions/UI.Composition.DefinitionChangeMonitor","MsPortalImpl/UI/Commands/UI.CommandBarManager",
"MsPortalImpl/UI/Compositions/UI.Composition.BladeTemplateManager","MsPortalImpl/UI/Compositions/UI.Composition.Lens",
"MsPortalImpl/UI/Compositions/UI.Composition.CompositionAwaiter","MsPortalImpl/UI/Compositions/UI.Composition.LensAddition",
"MsPortalImpl/UI/Compositions/UI.Composition.Journey","MsPortalImpl/UI/Compositions/UI.Composition.StartBoard",
"MsPortalImpl/UI/Compositions/UI.Composition.StartboardPart","MsPortalImpl/Widgets/Widgets.StartBoard",
"MsPortalImpl/UI/Compositions/UI.Composition.Util","MsPortalImpl/UI/UI.DesktopManagerView","MsPortalImpl/Widgets/Widgets.ModalDialog",
"MsPortalImpl/UI/UI.DesktopModeManager","MsPortalImpl/Widgets/Widgets.PartGallery","MsPortalImpl/Interactions/Interactions.PartGalleryDragDrop",
"MsPortalImpl/UI/UI.PartGalleryManager","MsPortalImpl/UI/Hubs/ViewModels/UI.Gallery.ViewModelRegistration",
"MsPortalImpl/UI/Hubs/UI.HubsManagerImpl","MsPortalImpl/UI/Hubs/UI.BillingHub","MsPortalImpl/Widgets/Widgets.BillingHub",
"MsPortalImpl/UI/Hubs/UI.BrowseHub","MsPortalImpl/Widgets/Widgets.BrowseHub","MsPortalImpl/UI/Hubs/UI.ExtensionDefinedHub",
"MsPortalImpl/UI/Hubs/UI.JourneysHub","MsPortalImpl/Widgets/Widgets.JourneysHub","MsPortalImpl/UI/Hubs/UI.HubsRpcCallbacks",
"MsPortalImpl/UI/Hubs/ViewModels/UI.Notifications.ViewModelRegistration","MsPortalImpl/UI/Hubs/UI.ResourceMapManager",
"MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.ViewModelRegistration","MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.ViewModelRegistration",
"MsPortalImpl/Widgets/Widgets.Portal","MsPortalImpl/Interactions/Interactions.ContextMenuTouch","MsPortalImpl/Interactions/Interactions.KeyboardShortcutHandler",
"MsPortalImpl/Widgets/Widgets.ContextPane","MsPortalImpl/Widgets/Widgets.JumpBar","MsPortalImpl/Widgets/Widgets.HubPane",
"MsPortalImpl/Widgets/Widgets.NavBar","MsPortalImpl/Widgets/Widgets.Panorama","MsPortalImpl/Interactions/Interactions.MousePanning",
"MsPortalImpl/Widgets/Widgets.AvatarMenu","MsPortalImpl/Base/Base.KnockoutExtensions.Controls","MsPortalImpl.Controls/Fields/ArtifactLinks",
"MsPortalImpl.Controls/Fields/Attachment","MsPortalImpl.Controls/Controls/Forms/FileUpload","MsPortalImpl.Controls/Controls/Visualization/ProgressBar",
"Viva.Controls/Controls/Visualization/Progress","Viva.Controls/Controls/Forms/FileUpload","Viva.Controls/Controls/Forms/Button",
"MsPortalImpl.Controls/Controls/Forms/TextBox","MsPortalImpl.Controls/Fields/History","MsPortalImpl.Controls/Fields/OAuthButtonField",
"MsPortalImpl.Controls/Fields/SectionField","MsPortalImpl.Controls/Fields/CreatorAndSelectorFieldV2",
"MsPortalImpl.Controls/Fields/Splitter","Viva.Controls/Controls/Forms/Splitter","MsPortalImpl.Controls/Fields/StringListField",
"Viva.Controls/Controls/Forms/StringList","MsPortalImpl.Controls/Fields/Base/KnockoutExtensions","MsPortalImpl.Controls/Controls/Console",
"Viva.Controls/Controls/Console","Viva.Controls/Controls/LogStream","Viva.Controls/Controls/TextStream",
"Viva.Controls/Controls/Scrollbar","MsPortalImpl.Controls/Controls/Data/QueryBuilder","Viva.Controls/Controls/Forms/CommandLink",
"MsPortalImpl.Controls/Controls/DockedBalloon","MsPortalImpl.Controls/Controls/Forms/Button","MsPortalImpl.Controls/Controls/Forms/CheckBox",
"MsPortalImpl.Controls/Controls/Forms/CopyableLabel","MsPortalImpl.Controls/Controls/Forms/DateTimeCombo",
"MsPortalImpl.Controls/Controls/Forms/EditableCombo","MsPortalImpl.Controls/Controls/Forms/DropDown",
"MsPortalImpl.Controls/Controls/Forms/FilterCombo","MsPortalImpl.Controls/Controls/Forms/GroupDropDown",
"MsPortalImpl.Controls/Controls/Forms/MultiLineTextBox","MsPortalImpl.Controls/Controls/Forms/MultiselectDropDown",
"MsPortalImpl.Controls/Controls/Forms/NumericTextBox","MsPortalImpl.Controls/Controls/Forms/OptionPicker",
"MsPortalImpl.Controls/Controls/Forms/Password","MsPortalImpl.Controls/Controls/Forms/RangeSlider","MsPortalImpl.Controls/Controls/Forms/Slider",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ContextMenuShortcut","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.RightClickableRow",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.SelectableRow","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FocusableRow",
"Viva.Controls/Controls/Lists/Grid1/Grid.SelectableRowActivate","Viva.Controls/Controls/Lists/Grid1/Grid.RightClickableRow",
"Viva.Controls/Controls/Lists/Grid1/Grid.ContextMenuShortcut","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.EditableRow",
"MsPortalImpl.Controls/Fields/TextField","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Filterable",
"Viva.Controls/Controls/Lists/Grid1/Grid.Filterable","Viva.Controls/Controls/Forms/SearchBox","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FocusableRowHover",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Formatter","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FormatterHtmlBindings",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Groupable","Viva.Controls/Controls/Lists/Grid1/Grid.Groupable",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Hierarchical","Viva.Controls/Controls/Lists/Grid1/Grid.Hierarchical",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Pageable","Viva.Controls/Controls/Pager","Viva.Controls/Controls/Lists/Grid1/Grid.Pageable",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ReorderRow","Viva.Controls/Controls/Lists/Grid1/Grid.ReorderRow",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ResizableColumn","Viva.Controls/Controls/Lists/Grid1/Grid.ResizableColumn",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Scrollable","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.SortableColumn",
"Viva.Controls/Controls/Lists/Grid1/Grid.SortableColumn","MsPortalImpl.Controls/Controls/Lists/List1/Gallery",
"MsPortalImpl.Controls/Controls/Lists/Tree1/TreeView","Viva.Controls/Controls/Lists/Tree1/Tree","Viva.Controls/Controls/Lists/Tree1/Tree.Selectable",
"Viva.Controls/Controls/Lists/Tree1/Tree.Focusable","Viva.Controls/Controls/Lists/Tree1/Tree.OnDemandLoadable",
"Viva.Controls/Controls/Lists/Tree1/Tree.RightClickable","MsPortalImpl.Controls/Controls/LogStream",
"MsPortalImpl.Controls/Controls/Scrollbar","MsPortalImpl.Controls/Controls/Settings","Viva.Controls/Controls/Settings",
"MsPortalImpl.Controls/Controls/SingleSetting","MsPortalImpl.Controls/Controls/Toolbars/Toolbar","Viva.Controls/Controls/Toolbars/ToolbarOptionsGroup",
"Viva.Controls/Controls/Toolbars/ToolbarGroupType","Viva.Controls/Controls/Toolbars/ToolbarGroup","Viva.Controls/Controls/Toolbars/Toolbar",
"Viva.Controls/Controls/Toolbars/ToggleCommandButton","Viva.Controls/Controls/Toolbars/OpenLinkButton",
"Viva.Controls/Controls/Toolbars/ClickableLink","MsPortalImpl.Controls/Controls/PreviewTag","MsPortalImpl/Controls/ControlBindings",
"MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedCssBinding","MsPortalImpl/Base/Base.KnockoutExtensions.TextLinesBinding",
"MsPortalImpl/Base/JQueryExtensions","MsPortalImpl/Controls/Controls.Wizard","MsPortalImpl/Controls/Forms/Controls.FileUpload",
"Viva.Controls/Controls/Forms/FileUpload2","MsPortalImpl/Parts/Parts.Intrinsics","MsPortalImpl/Services/Services.EditScopeManagement"],
"*MsPortalImpl/Parts/Parts.Asset":["MsPortalImpl/Parts/Parts.Asset"],"*MsPortalImpl/Parts/Parts.Chart":
["MsPortalImpl/Parts/Parts.Chart"],"*MsPortalImpl/Parts/Parts.CollectionSummary":["MsPortalImpl/Parts/Parts.CollectionSummary",
"MsPortalImpl/Parts/Parts.Collection"],"*MsPortalImpl/Parts/Parts.Donut":["MsPortalImpl/Parts/Parts.Donut"],
"*MsPortalImpl/Parts/Parts.InfoList":["MsPortalImpl/Parts/Parts.InfoList"],"*MsPortalImpl/Parts/Parts.Provisioning":
["MsPortalImpl/Parts/Parts.Provisioning"],"*MsPortalImpl/Parts/Parts.QuickStart":["MsPortalImpl/Parts/Parts.QuickStart"],
"*MsPortalImpl/Parts/Parts.QuotaGauge":["MsPortalImpl/Parts/Parts.QuotaGauge"],"*MsPortalImpl/Parts/Parts.SingleValueGauge":
["MsPortalImpl/Parts/Parts.SingleValueGauge"],"*MsPortalImpl/UI/Compositions/UI.Composition.BladeActionBar":
["MsPortalImpl/UI/Compositions/UI.Composition.BladeActionBar","MsPortalImpl/Widgets/Widgets.BladeActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.ActionBarBase","MsPortalImpl/Controls/ActionBars/Controls.CreateActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.DeleteActionBar","MsPortalImpl/Controls/ActionBars/Controls.FilterActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.FormActionBar","MsPortalImpl/Controls/ActionBars/Controls.GenericActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.PickerActionBar"],"*MsPortalImpl/UI/Hubs/Services/NotificationsBrowseService":
["MsPortalImpl/UI/Hubs/Services/NotificationsBrowseService"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseAll.Part":
["MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseAll.Part"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseService.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseService.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseService.Part":
["MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseService.Part"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseService.PinnedPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseService.PinnedPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Notifications.NotificationsBlade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Notifications.NotificationsBlade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.Notifications.NotificationsTile":
["MsPortalImpl/UI/Hubs/ViewModels/UI.Notifications.NotificationsTile"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.ActionBar":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.ActionBar"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.ListPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.ListPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.WarningPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupDelete.WarningPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupList.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupList.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupList.Part":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupList.Part"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupList.PinnedPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupList.PinnedPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupMap.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupMap.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupMap.Part":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupMap.Part"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupMap.PinnedPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceGroupMap.PinnedPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceList.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceList.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceList.Part":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceList.Part"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceList.PinnedPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceList.PinnedPart"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.Blade":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.Blade"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.Part":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.Part"],"*MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.PinnedPart":
["MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.PinnedPart"],"*MsPortalImpl/UI/UI.DragDropCompositionManager":
["MsPortalImpl/UI/UI.DragDropCompositionManager"],"*Viva.Controls/Controls/MouseCompanion":["Viva.Controls/Controls/MouseCompanion"],
"*Viva.Controls/Controls/Forms/CommandButton":["Viva.Controls/Controls/Forms/CommandButton"],"*Viva.Controls/Controls/Forms/Password.StrengthIndicator":
["Viva.Controls/Controls/Forms/Password.StrengthIndicator","Viva.Controls/Controls/Visualization/ColorBar"],
"*Viva.Controls/Controls/Visualization/BarGauge":["Viva.Controls/Controls/Visualization/BarGauge"],"*Viva.Controls/Controls/Visualization/SparkLine":
["Viva.Controls/Controls/Visualization/SparkLine"],"*Viva.Controls/Controls/Visualization/SvgBase":[
"Viva.Controls/Controls/Visualization/SvgBase"]}});define("MsPortalImpl/Init",["require","exports","./Extension/ExtensionManager",
"./UI/UI.Initialize","./Services/Services.EditScopeManagement","./Services/Services.Settings"],function(
n,t,i,r,u,f){var e;return function(){"use strict";var o;(function(n){n[n.None=0]="None";n[n.Session=
1]="Session"})(o||(o={}));var e=window,t=jQuery,s=e.fx.environment,h=MsPortalFx.Base.Diagnostics.createLog(
n);h.custom("Session",1);t(function(){var o=f.createUserSettingsManager(),h=i.initialize(),n=r.create(
t("#web-container"),t("body").find("> .fxs-splashscreen"),{settings:o,extensionManager:h,editScopeManager:
u.createEditScopeManager(o,h),extensionsMetadata:s.extensionsMetadata,hubsMetadata:s.hubsMetadata,openWindow:
function(n){var t=e.open();return Q(n).then(function(n){t.location.href=n})}});n.initialize();t(e).on(
"beforeunload",function(){n.beforeUnload()}).on("unload",function(){n.dispose()})})}(e||(e={})),e});
define("MsPortalImpl/Extension/ExtensionManager",["require","exports","./Extension","./Extension.Definition",
"./Extension.Loader"],function(n,t,i,r,u){var f;return function(t){"use strict";function h(n){return new
s(u.create(n))}var r=i.LoadedExtensions,o=jQuery,c=window,e={extensionNotFound:1,loadCallbackThrew:2,
unloadCallbackThrew:3,manifestCallbackThrew:4,modifiedExtension:5},f=MsPortalFx.Base.Diagnostics.createLog(
n),l=MsPortalFx.Base.Diagnostics.Telemetry,s;t.initialize=h;s=function(){function n(n){this._manifestLoadCallbacks=
o.Callbacks();this._callbacks=o.Callbacks();this._unloadCallbacks=o.Callbacks();this._extensionLoader=
n;r.loadedExtensions=[]}return Object.defineProperty(n.prototype,"extensionLoader",{get:function(){return this.
_extensionLoader},enumerable:!0,configurable:!0}),n.prototype.getExtensions=function(){return r.loadedExtensions}
,Object.defineProperty(n.prototype,"hubsExtensionInitialized",{get:function(){return this.getExtensionByName(
MsPortalFx.Base.Constants.ExtensionNames.Hubs)},enumerable:!0,configurable:!0}),n.prototype.getViewModel=
function(n,t,i,r){return this.getExtensionByName(n).then(function(n){return t===0?n.getViewModel(i,r):
n.getPartViewModel(i,r)})},n.prototype.getManifestByName=function(n){var t=this;return this.extensionLoader.
manifestLoadStarted.then(function(){var r=(n||"").toLowerCase(),i=t.extensionLoader.getExtensions().
first(function(n){return n.name.toLowerCase()===r});if(!i)throw new Error("An extension with the name '{0}' does not exist.".
format(n));return i.getManifest()})},n.prototype.getExtensionByName=function(n,t){var i=this;return t===
void 0&&(t=!0),this._extensionLoader.manifestLoadStarted.then(function(){var r=i._extensionLoader.getExtensions(
).first(function(t){return t.name===n}),u,o,s;return r?(r.unloaded?t&&(s=r.loadAsync(),i._onExtensionLoaded(
s)):r.initializeRequired||i._onExtensionLoaded(r.extensionLoadedInternal),r.ensureInitialize(),r.isExtensionLoadedAsync(
).then(function(){return i._getLoadedExtensionByName(n)})):(u=Q.defer(),o="Extension with name '{0}' was not found.".
format(n),f.error(o,e.extensionNotFound),u.reject(o),u.promise)})},n.prototype.load=function(n){var i=
this,t;return f.verbose("Portal Load: Calling ExtensionLoader.loadAsync"),t=this._extensionLoader.loadAsync(
n),this._extensionLoader.getExtensions().forEach(function(n){n.getManifest().then(function(n){i._manifestLoadCallbacks.
fire(n)})}),t},n.prototype.unloadExtension=function(n){n.unload();r.removeLoadedExtension(n);this._unloadCallbacks.
fire(n.name)},n.prototype.onManifestLoad=function(n){var i=this,r=this.extensionLoader.getExtensions(
!0),t=function(r){try{n(r)||i._manifestLoadCallbacks.remove(t)}catch(u){f.error("onManifestLoad event callback has thrown an exception for extension '{0}'.".
format(r&&r.name),e.manifestCallbackThrew,u)}};this._manifestLoadCallbacks.add(t);r.forEach(function(
t){n(t.manifest)})},n.prototype.onLoad=function(n){var i=this,u=r.loadedExtensions.slice(0),t=function(
r){try{n(r)||i._callbacks.remove(t)}catch(u){f.error("onLoad event callback has thrown an exception.",
e.loadCallbackThrew,u)}};this._callbacks.add(t);u.forEach(function(t){n(t)})},n.prototype.onUnload=function(
n){var i=this,t=function(r){try{n(r)||i._unloadCallbacks.remove(t)}catch(u){f.error("onUnload event callback has thrown an exception.",
e.unloadCallbackThrew,u)}};this._unloadCallbacks.add(t)},n.prototype.dispose=function(){this._extensionLoader&&
(this._extensionLoader.dispose(),this._extensionLoader=null)},n.prototype._onExtensionLoaded=function(
n){var t=this;n.then(function(n){r.addLoadedExtension(n);var i=n.extension;i.resolveExtensionLoaded&&
i.resolveExtensionLoaded();t._callbacks.fire(n)})},n.prototype._getLoadedExtensionByName=function(n)
{return r.loadedExtensions.first(function(t){return t.name===n})},n}();t.ExtensionManagerImpl=s}(f||
(f={})),f});define("MsPortalImpl/Extension/Extension",["require","exports","../Base/Base.KnockoutTemplateSanitizer",
"../Base/Base.CssSanitizer","../Extension/DefinitionPreprocessor","./Extension.DefinitionValidator",
"../Extension/Extension.Definition","../Extension/Extension.Manifest","MsPortalImpl/Resources/ImplScriptResources",
"../Services/Services.GeneralSettings","../Services/Services.PortalIdentity","../UI/Hubs/UI.NotificationManager",
"../Prototype/ViewModelManager","MsPortalFx/Globalization","../Base/Languages"],function(n,t,i,r,u,f,
e,o,s,h,c,l,a,v,y){var b=MsPortalFx.Internal.Extension,p=MsPortalFx.Base.Rpc.Internal,k=MsPortalFx.Base.
Constants.ViewModelTypes,w;return function(t){"use strict";function ui(n){return new ci(n)}function fi(
n,t){return new hi(n,t)}function pt(n,t,i){return new li(n,t,i)}function ei(n){var t=!1;return e.features.
relex&&(n=n.toLowerCase(),ri.some(function(i){return n.indexOf(i)>=0&&(t=!0),t})),t}function oi(){var
n=h.settings.relexHost().split("/");return et.protocol+"//"+n[2]}function si(n){var t=document.createElement(
"a");return t.href=n,t.href}var ft,st;t.frameRemovalDelay=1e3;var nt=jQuery,g=window,et=g.location,wt=
et.hostname+":"+et.port,ht=nt("head"),bt=nt("body"),w=MsPortalFx.Base.Diagnostics.createLog(n),e=g.fx.
environment,ct=v.displayLanguage,lt=v.formatCulture,kt=!!e.trace.extensionmanager,tt=function(n){kt&&
w.verbose(n)},it=MsPortalFx.Base.getVersionFromString(e.sdkVersion),dt=function(){if(e.features.extloadtimeout)
{var n=parseInt(e.features.extloadtimeout);if(!!n)return n}return 6e4}(),gt=e.isDevelopmentMode?6e4:
15e3,ni=1e4,ti=3,ii={loadFailed:1},at=s.Shell,vt="data-extensionname",rt="ExtensionManager",yt="EXTENSIONMANIFEST_{0}",
ut=6,d=MsPortalFx.Base.Diagnostics.Telemetry,ri=function(){var n=[];return e.features.relex&&e.features.
relex.split(",").some(function(t){return t==="*"?(n=[""],!0):(n.push(t.toLowerCase()),!1)}),n}(),ot;
(function(n){function t(t){var i=n.loadedExtensions.first(function(n){return n.name===t.name});i||n.
loadedExtensions.push(t)}function i(t){var i=n.loadedExtensions.first(function(n){return n.name===t.
name});i&&n.loadedExtensions.remove(i)}n.loadedExtensions=[];n.addLoadedExtension=t;n.removeLoadedExtension=
i})(ot=t.LoadedExtensions||(t.LoadedExtensions={})),function(n){n[n.NotLoaded=0]="NotLoaded";n[n.FirstResponseReceived=
1]="FirstResponseReceived";n[n.ManifestReceived=2]="ManifestReceived";n[n.Initialized=3]="Initialized";
n[n.Error=4]="Error"}(t.ExtensionReadyState||(t.ExtensionReadyState={}));ft=t.ExtensionReadyState,function(
n){n[n.None=0]="None";n[n.FirstResponseNotReceived=1]="FirstResponseNotReceived";n[n.ManifestNotReceived=
2]="ManifestNotReceived";n[n.InvalidExtensionName=3]="InvalidExtensionName";n[n.InvalidIndicateLoaded=
4]="InvalidIndicateLoaded";n[n.InvalidManifest=5]="InvalidManifest";n[n.InvalidDefinition=6]="InvalidDefinition";
n[n.FailedToInitialize=7]="FailedToInitialize";n[n.TooManyRefreshes=8]="TooManyRefreshes";n[n.TooManyBootGets=
9]="TooManyBootGets";n[n.TimedOut=10]="TimedOut"}(st||(st={}));t.create=ui;t.createPreInitialized=fi;
t.createInitializedExtension=pt;var hi=function(){function n(n,t){this.unloaded=!1;this._extension=t;
this._extensionMetadata=n}return Object.defineProperty(n.prototype,"name",{get:function(){return this.
_extension.name},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uri",{get:function(
){return this._extensionMetadata.uri},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"manifest",{get:function(){return this._extension.manifest},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"extensionLoadedInternal",{get:function(){return Q(this._extension)},enumerable:!0,configurable:
!0}),n.prototype.loadAsync=function(){return Q(this._extension)},n.prototype.getManifest=function(){
return Q(this._extension.manifest)},n.prototype.isExtensionLoadedAsync=function(){return Q(this._extension)}
,n.prototype.getOrLoadWindow=function(){return null},n.prototype.processBootGetMessage=function(){return!1}
,n.prototype.getTrustedHost=function(){return null},n.prototype.getWindow=function(){return this._extension.
getWindow()},n.prototype.resolveExtensionLoaded=function(){},n.prototype.ensureInitialize=function()
{},n.prototype.indicateLoaded=function(){},n.prototype.unload=function(){},n.prototype.isOptimized=function(
){return!0},n.prototype.isPreview=function(){return!1},n}(),ci=function(){function n(n){var f;this._readyState=
0;this._errorState=0;this._extensionLoadedInternal=Q.defer();this._extensionLoaded=Q.defer();this._extensionManifestLoaded=
Q.defer();this._initializeRequired=!1;this._bootGetCount=0;this._relexHost=h.settings.relexHost;this.
_extensionMetadata=n;var t=this._extensionMetadata.name,u=new MsPortalFx.Base.UriBuilder(this._extensionMetadata.
uri),i=u.query,r=[];e.passThroughVariables&&(r=r.concat(e.passThroughVariables));e.extensionQueryParameters&&
(r=r.concat(e.extensionQueryParameters));r.forEach(function(n){var t=e[n];t!==undefined&&t!==null&&i.
setParameter(n,t)});e.extensionFlags&&(f=t.toLowerCase(),Object.keys(e.extensionFlags).forEach(function(
n){n.toLowerCase().indexOf(f+"_")===0&&i.setParameter(n,e.extensionFlags[n])}));i.setParameter(y.localeQueryStringName,
v.displayLanguage+y.localeDelimiter+v.formatCulture);i.setParameter("trustedAuthority",wt);i.setParameter(
"extensionName",t);this._exturi=u.toString();this._relexRedirectEnable=ei(t);this._relexRedirectEnable&&
!this._relexHost()&&(w.error("RelEx Extension {0} Redirect Error: RelEx Host NOT Set.".format(t)),this.
_relexRedirectEnable=!1);this._relexRedirectEnable?(this._exturi=si(this._exturi),this._uri=this._relexHost(
)+"?name="+t,this._trustedHost=oi()):(this._uri=this._exturi,this._trustedHost=this._extensionMetadata.
trustedHost||"*")}return Object.defineProperty(n.prototype,"initializeRequired",{get:function(){return this.
_initializeRequired},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"unloaded",{get:
function(){return!this._currentWindow},enumerable:!0,configurable:!0}),n.prototype.isOptimized=function(
){var n=this._extensionMetadata.features;return!n||!n.nonamd},n.prototype.isPreview=function(){var n=
this._extensionMetadata.features;return n&&n.preview&&n.preview.toLowerCase()==="true"},Object.defineProperty(
n.prototype,"name",{get:function(){return this._extensionMetadata.name},enumerable:!0,configurable:!0}),
Object.defineProperty(n.prototype,"legacy",{get:function(){return this._extensionMetadata.legacy},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"readyState",{get:function(){return this._readyState}
,enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uri",{get:function(){return this.
_uri},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"manifest",{get:function(){return this.
_extensionManifest},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"extensionLoadedInternal",
{get:function(){return this._extensionLoadedInternal.promise},enumerable:!0,configurable:!0}),n.prototype.
ensureInitialize=function(){this._initializeRequired=!0},n.prototype.getManifest=function(){return this.
_extensionManifestLoaded.promise},n.prototype.isExtensionLoadedAsync=function(){return this._extensionLoaded.
promise},n.prototype.resolveExtensionLoaded=function(){this._initializedExtension&&(this._extensionLoaded.
resolve(this._initializedExtension),this._initializedExtension=null)},n.prototype.indicateLoaded=function(
n){w.debug("indicateLoaded() called for extension {0}".format(n.name));var t=this._validateAndSetManifest(
n,!1);t&&(this._addManifestToCache(),this._initializeRequired?this._initializeExtension(n.name):this.
unload(),this._initializeRequired=!0)},n.prototype._performCompatibilityCheck=function(n){return n.name===
"WebsitesExtension"&&n.version&&n.version.match(/^1\./)?!1:g.fx.environment.isDevelopmentMode},n.prototype.
_initializeExtension=function(n){var t=this;b.initializeEndPoint.invoke(p.client,n,undefined).then(function(
){return b.getDefinitionEndPoint.invoke(p.client,n,undefined)}).then(function(i){var r,u,e;t._transitionStateTo(
3);r=f.validateDefinition(i,t._extensionManifest);r.valid?(tt("Definition for extension '{0}' has been validated.".
format(n)),u=t._preInitializeAndGetVerificationErrors(i),u?t._onError(6,"The extension could not be initialized: {0}".
format(u)):(e=pt(t,t._extensionManifest,i),t._initializedExtension=e,t._extensionLoadedInternal.resolve(
t._initializedExtension),t._postInitialize(),t.resolveExtensionLoaded(),t._extensionLoaded.promise.isFulfilled(
)&&ot.addLoadedExtension(e))):t._onError(6,"The extension definition has validation errors. Errors: {0}".
format(JSON.stringify(r.errors)))}).then(null,function(n){t._onError(7,n.message)})},n.prototype._preInitializeAndGetVerificationErrors=
function(t){var o=e.isDevelopmentMode?1:0,f;if(i.sanitizeDefinition(t,o),u.preprocessDefinition(t,this.
_extensionManifest),this._performCompatibilityCheck(t)&&MsPortalFx.Base.Amd.load("MsPortalImpl/Extension/Extension.Compatibility").
then(function(n){n.validateDefinitionCompatibility(t)}),t.styleSheets){if(f=r.sanitizeDefinition(t),
!f&&e.isDevelopmentMode)return"One or more CSS errors were found in the extension. See previous error log entries.";
n._injectStyleElements(t.name,t.styleSheets)}return null},n.prototype._postInitialize=function(){var
n=Date.now()-this._startTime;n>gt&&w.error("'{0}' extension took {1} seconds to load.".format(this.name,
n/1e3));this._clearExtensionStateMonitorHandle();this._extensionInitializedTraceKey=d.startTrace({source:
rt,action:"ExtensionInitialized",name:this.name})},n.prototype.getOrLoadWindow=function(){var n=this;
if(!this._currentWindow){this._bootGetCount=0;this._readyState=0;this._errorState=0;this._initialResponseTraceKey=
d.startTrace({source:rt,action:"InitialExtensionResponse",name:this.name});this._loadTraceKey=d.startTrace(
{source:rt,action:"LoadExtensions",name:this.name});this._relexRedirectEnable?w.warning("Loading RelEx extension {0} => {1}".
format(this._relexHost(),this.name)):w.verbose("Loading extension {0}".format(this.name));var l=e.trace.
nonsecure||this._extensionMetadata.features&&this._extensionMetadata.features.nonsecure==="true",f=nt(
"<iframe/>").addClass("fxs-extension-frame").attr({tabindex:-1}),r=f[0],s=0;l||f.attr({sandbox:"allow-same-origin allow-scripts"});
f.appendTo(bt);this._currentWindow=new p.RpcWindow({window:r.contentWindow,trustedHost:this._trustedHost,
initializationFunc:undefined});this._currentWindow.onDispose(function(){n._clearExtensionStateMonitorHandle(
);n._extensionLoaded.promise.isFulfilled&&n._extensionLoaded.promise.then(function(n){ot.removeLoadedExtension(
n)});n._extensionLoadedInternal=Q.defer();n._extensionLoaded=Q.defer();d.trace({source:rt,action:"ExtensionUnloaded",
name:n._extensionMetadata.name});n._extensionInitializedTraceKey&&(d.completeTrace(n._extensionInitializedTraceKey),
n._extensionInitializedTraceKey=null);var i="style[{0}='{1}']".format(vt,n.name);ht.remove(i);r.onload=
null;setTimeout(function(){nt(r).remove()},t.frameRemovalDelay);n._currentWindow=null});r.onload=function(
t){s++;s>ut?n._onError(8,"The iframe for extension '{0}' refreshed/reloaded more than '{1}' times and has been unloaded.".
format(n.name,ut)):n._relexRedirectEnable&&t.target.contentWindow.postMessage({uri:n._exturi,name:n.
_extensionMetadata.name,sessionId:e.sessionId,perTenantId:c.getSignedInUser().perTenantId},"*")};r.src=
this._uri;this._startTime=Date.now();var i=ni,h=0,u=0,o=function(){var s,t,c,f,e;if(h+=i,n._readyState===
0)u<ti?(u++,s="First response was not received after a time of {0} secs. Performing a retry.".format(
i/1e3),n._logWarningOrError(1,s),t=new MsPortalFx.Base.UriBuilder(n._uri),t.query.setParameter("retryAttempt",
u),r.src=t.toString(),i=i*2,n._extensionStateMonitorHandle=g.setTimeout(o,i)):(c="First response was not received after {0} attempts over {1} secs.".
format(u,h/1e3),n._onError(10,c));else if(i>=dt){switch(n._readyState){case 1:f=2;e="Manifest not received after {0} secs.";
break;case 2:f=10;e="Manifest was received, however failed to initialize the extension after {0} secs."}
n._onError(f,e.format(i/1e3))}else tt("The extension '{0}' is still loading.".format(n.name)),n._onExtensionLoadingRetry&&
n._onExtensionLoadingRetry(),n._extensionStateMonitorHandle=g.setTimeout(o,i)};this._extensionStateMonitorHandle=
g.setTimeout(o,i)}return this._currentWindow},n.prototype.getWindow=function(){return this._currentWindow?
this._currentWindow.getValue():null},n.prototype.getTrustedHost=function(){return this._trustedHost}
,n.prototype.loadAsync=function(n){return this.unloaded?(n&&this._validateAndSetManifest(n,!0)||(p.internalClient.
acquireWindow(this.name,0),this._extensionManifestLoaded.promise.isPending()||(this._extensionManifestLoaded=
Q.defer())),this._extensionLoadedInternal.promise):this.isExtensionLoadedAsync()},n.prototype.unload=
function(){this._currentWindow&&(this._currentWindow.dispose(),this._currentWindow=null)},n.prototype.
processBootGetMessage=function(n,t){var i,r;try{i=MsPortalFx.Base.getVersionFromString(n)}catch(u){w.
error("Invalid version information '{0}' specified by '{1}'.".format(n,this.name),u)}return(i&&it.major===
i.major&&it.minor===i.minor||(r="The '{0}' extension at '{1}' was compiled with version '{2}' of the SDK, whereas the shell is running on version '{3}'. You may see unexpected results.",
w.warning(r.format(this.name,this.uri,i,it))),this._readyState===0&&(this._readyState=1,this._initialResponseTraceKey&&
(d.completeTrace(this._initialResponseTraceKey),this._initialResponseTraceKey=null),this._manifestLoadTraceKey=
d.startTrace({source:rt,action:"ManifestLoad",name:this.name})),this._bootGetCount++,this._bootGetCount>
ut)?(this._onError(9,"The iframe '{0}' sent more than '{1}' handshake messages without making progress. it has been unloaded.".
format(this.name,ut)),!1):!this._tryLoadCachedManifest(t)},n._injectStyleElements=function(n,t){var i=
t.map(function(t){var i=document.createElement("style");return i.type="text/css",i.textContent=t,i.setAttribute(
vt,n),i});nt(i).appendTo(ht)},n.prototype._tryLoadCachedManifest=function(n){var i=!1,r,t;if(this._extVersion=
n,!this.initializeRequired&&!!n){r=yt.format(this.name);try{t=JSON.parse(g.localStorage.getItem(r))}
catch(u){w.error("Unable to get manifest for '{0}' from cache.".format(this.name),u)}if(t&&t.formatCulture===
lt&&t.displayLanguage===ct&&t.sdkVersion&&t.sdkVersion.major===it.major&&t.sdkVersion.minor===it.minor&&
n===t.extVersion&&(i=this._validateAndSetManifest(t.manifest,!0),this.unload(),this.ensureInitialize(
)),!i)try{g.localStorage.removeItem(r)}catch(f){}}return i},n.prototype._addManifestToCache=function(
){var n,t,i;if(this._extensionManifest)if(this._extVersion)if(this._extensionManifest.sdkVersion)try{
t=yt.format(this.name);i={manifest:this._extensionManifest,formatCulture:lt,displayLanguage:ct,extVersion:
this._extVersion,sdkVersion:it};g.localStorage.setItem(t,JSON.stringify(i))}catch(r){}else n="Unable to add manifest for '{0}' to cache since it has not specified the SDK version on which it was compiled. Specified version was '{1}'.",
w.warning(n.format(this.name,this._extensionManifest.sdkVersion));else w.warning("Unable to add manifest for '{0}' to cache since it has not specified a valid version. Specified version was '{1}'.".
format(this.name,this._extVersion));else w.warning("Unable to add manifest for '{0}' to cache since it is unavailable.".
format(this.name))},n.prototype._validateAndSetManifest=function(n,t){var i=!1,r=o.validate(n),u,f;return this.
_readyState!==0&&this._readyState!==1?(u="Extension.indicateLoaded was called at an incorrect point in time. Current extension state: ExtensionReadyState. "+
ft[this._readyState]+"This method should be called when the extension state is ExtensionReadyState.NotLoaded or ExtensionReadyState.FirstResponseReceived.",
this._onError(4,u)):r.valid?this.name.toLowerCase()!==n.name.toLowerCase()?(f="The extension name defined in the manifest '{0}' (obtained from the <Extension> tag in PDL) does not match the name '{1}' used to identify the extension with the portal. Ensure that the name you specify in the <Extension> tag in PDL matches the one used in the extensions.json file to identify the extension with the portal.",
this._onError(3,f.format(n.name,this.name))):(this._extensionManifest=n,this._transitionStateTo(2),this.
_extensionManifestLoaded.resolve(n),i=!0):(r.errors.forEach(function(n){w.error(n)}),this._onError(5,
"The extension manifest has validation errors.")),(i||!t)&&this._manifestLoadTraceKey&&(d.completeTrace(
this._manifestLoadTraceKey,t?"Cached":"NonCached"),this._manifestLoadTraceKey=null),i},n.prototype._logWarningOrError=
function(n,t,i){i===void 0&&(i=!1);var u="For more information, visit {0}".format("https://auxdocs.azurewebsites.net/en-us/documentation/articles/portalfx-creating-extensions"),
r="Failed to initialize extension '{0}' at '{1}'. ErrorState: {2}. Error: {3}.".format(this.name,this.
uri,st[n],t)+u;return i?w.error(r,ii.loadFailed):w.warning(r),r},n.prototype._onError=function(n,t){
var i=this._logWarningOrError(n,t,!0),r;this._extensionManifestLoaded.reject(i);this._extensionLoadedInternal.
reject(i);this._extensionLoaded.reject(i);this._readyState!==4&&(this._transitionStateTo(4,n),r=l.getNotificationManager(
),r&&r.addClientNotification({title:at.extensionError,description:at.loadingError.format(this.name),
status:2,timestamp:new Date}));this.unload()},n.prototype._transitionStateTo=function(n,t){tt("The extension '{0}' has been transitioned from the '{1}' state to the '{2}' state.".
format(this.name,ft[this._readyState],ft[n]));this._readyState=n;n===2?(this._loadTraceKey&&(d.completeTrace(
this._loadTraceKey),this._loadTraceKey=null),this._initializeTraceKey=d.startTrace({source:rt,action:
"InitializeExtensions",name:this.name})):n===3?this._initializeTraceKey&&(d.completeTrace(this._initializeTraceKey),
this._initializeTraceKey=null):n===4&&(this._loadTraceKey&&(d.cancelTrace(this._loadTraceKey),this._loadTraceKey=
null),this._initializeTraceKey&&(d.cancelTrace(this._initializeTraceKey),this._initializeTraceKey=null),
this._initialResponseTraceKey&&(d.cancelTrace(this._initialResponseTraceKey),this._initialResponseTraceKey=
null),this._manifestLoadTraceKey&&(d.cancelTrace(this._manifestLoadTraceKey),this._manifestLoadTraceKey=
null));t&&(this._errorState=t)},n.prototype._clearExtensionStateMonitorHandle=function(){this._extensionStateMonitorHandle&&
(g.clearTimeout(this._extensionStateMonitorHandle),this._extensionStateMonitorHandle=null)},n}(),li=
function(){function n(n,t,i){this.outstandingObjectCount=ko.observable(0);this.metadataCount=ko.observable(
0);this._proxiedObjects=[];this._extension=n;this.name=n.name;this.manifest=t;this.definition=i}return Object.
defineProperty(n.prototype,"extension",{get:function(){return this._extension},enumerable:!0,configurable:
!0}),n.prototype.getWindow=function(){return this._extension.getWindow()},n.prototype.processMessages=
function(){return MsPortalFx.Internal.Extension.pingEndPoint.invoke(p.client,this.name,undefined)},n.
prototype.unload=function(){this._extension.unload()},n.prototype.getViewModel=function(n,t,i){return this.
_getViewModel(0,n,t,i)},n.prototype.getPartViewModel=function(n,t,i){return this._getViewModel(1,n,t,
i)},n.prototype._getViewModel=function(n,t,i,r){var f=this,o=nt.Deferred(),e=null,u=n===1?k.PartViewModel:
k.ViewModel,h={type:u,name:t,initialState:i,createSelectable:r},s;return(tt("START Loading {0} '{1}' for extension '{2}'.".
format(u,t,this.name)),e=a.ViewModelManager.resolve(this,t,i,r),e)?(e.then(function(){tt("END Loading priviledged {0} '{1}' for extension '{2}'.".
format(u,t,f.name))}),e):(s=MsPortalFx.Internal.Extension.getViewModelsDefinition.acquireObject(MsPortalFx.
Base.Rpc.Internal.client,this.name,h).then(function(n){return f._proxiedObjects.push(n),n.getValue()}
),s.then(function(n){tt("END Loading {0} '{1}' for extension '{2}'.".format(u,t,f.name));o.resolve(n)}
,function(){var n="Couldn't retrieve {0} '{1}' for extension '{2}'.".format(u,t,f.name);w.error(n);w.
error(JSON.stringify(arguments));o.reject(n)}),o.promise())},n.prototype.releaseViewModel=function(n)
{var i=n.dispose,t;i&&typeof i=="function"&&n.dispose();t=this._proxiedObjects.firstIndex(function(t)
{return t.getValue()===n});t!==-1&&this._proxiedObjects.splice(t,1)[0].dispose()},n.prototype.isPreview=
function(){var n=this.definition.isPreview;return MsPortalFx.Util.isNullOrUndefined(n)?this.extension.
isPreview():n},n}()}(w||(w={})),w});define("MsPortalImpl/Extension/DefinitionPreprocessor",["require",
"exports","./PinBladeInferred","../ViewModels/ViewModels.BladeCaller"],function(n,t,i,r){var u;return function(
n){"use strict";function o(n,t){s(n,t);h(n);i.addPartDefinitions(n)}function s(n,t){t.assetTypes&&t.
assetTypes.forEach(function(t){var i=(n.blades||[]).first(function(n){return n.name===t.bladeName}),
r=(n.partsCatalog||[]).first(function(n){return n.name===t.partName});i&&(i.assetTypeDefinition=t);r&&
(r.assetTypeDefinition=t)})}function h(n){n.partsCatalog&&n.partsCatalog.forEach(function(n){t(n.details,
0);n.parameterProvider&&e(n)});n.startBoardParts&&n.startBoardParts.forEach(function(n){n.inline&&t(
n.inline.details,0)});n.commandGroups&&n.commandGroups.forEach(function(n){n.commands&&n.commands.forEach(
function(n){t([n.details],4)})});n.blades&&n.blades.forEach(function(n){n.lenses&&n.lenses.forEach(function(
i){i.partInstances&&i.partInstances.forEach(function(i){i.inline&&(i.parameterProvider&&e(i.inline),
t(i.inline.details,0));c(n,i.name,i)})})})}function t(n,t){n&&n.filter(function(n){return n&&!!n.parameterCollector}
).forEach(function(n){r.BladeCaller.addBladeCallerBindings(n.parameterCollector+".bladeCaller",n,t)}
)}function e(n){n.editScopeType=n.editScopeType||"PDLEditScope";n.inputs=n.inputs||[];n.inputs.push(
u);r.BladeCaller.addBladeCallablePartInputs(n)}function c(n,t,i){if(i.parameterProvider&&(r.BladeCaller.
addBladeCallableBindings(f+".bladeCallable",n,t,i),n.actionBar)){n.actionBar.bindings=n.actionBar.bindings||
[];var e=n.actionBar.bindings.some(function(n){return n.property==="input"});e||n.actionBar.bindings.
push({property:"input",valuesFrom:[{referenceType:0,part:t,property:f+".defaultActionBarInput"}]});(i.
inline||i.reference).bindings.push({property:u,valuesFrom:[{referenceType:2,property:"content.output"}]})}
}var u="internal_parameterProviderActionBarOutput",f="content.parameterProvider";n.preprocessDefinition=
o}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Extension/PinBladeInferred",
["require","exports","../UI/Compositions/UI.Composition.PropertyBinding","../Widgets/Widgets.Blade",
"../Prototype/ViewModelManager"],function(n,t,i,r,u){var f;return function(t){"use strict";function l(
n){var r,i;(n.blades||[]).forEach(function(u){r=e+u.name;u.pinnedPart||(u.pinnedPart=r);i={name:r,viewModel:
t.PinVMPrefix+u.name,partKind:20,inputs:u.inputs,initialSize:2,details:[{blade:u.name,isMultiple:!1,
invocationInputArguments:[{valuesFrom:[{property:"container.selectable.value",referenceType:0}]}],additionalInputArguments:
[]}],bindings:[],viewStateProperties:["container.selectable.isSelected"],commandGroup:u.commandGroup,
commandGroupReference:u.commandGroupReference,assetIdInputProperty:u.assetIdInputProperty,assetType:
u.assetType};(u.inputs||[]).forEach(function(n){i.bindings.push({property:o+n,valuesFrom:[{property:
n,referenceType:1}]})});u.viewModelInputs&&u.viewModelInputs.forEach(function(n){n.property===u.assetIdInputProperty&&
i.bindings.push(n)});n.partsCatalog.push(i)})}function a(){u.ViewModelManager.registerPrefix(t.PinVMPrefix,
"./MsPortalImpl/Extension/PinBladeInferred",function(n,t,i,r){return h(t,i,r)})}function h(n,t,i){return MsPortalFx.
Internal.ViewModels.Part.composePartViewModel(function(n){return new f(n,t,i)},{initialState:n,createSelectable:
!0})}var e="InferredBladePinPart",c=MsPortalFx.Base.Diagnostics.createLog(n),o="inferredBladePinPartInputs.",
v="content."+o,s={title:"title",shortTitle:"title",description:"subtitle",icon:"icon"},f;t.PinVMPrefix=
"Shell."+e;t.addPartDefinitions=l;f=function(n){function u(i,u,f){var e=this;n.call(this);this._subscriptions=
[];this._disposed=!1;this.inferredBladePinPartInputs=ko.observable();this._partContainer=i;this._extension=
f;this._bladeDefinition=f.definition.blades.first(function(n){return n.name===u.substr(t.PinVMPrefix.
length)});this.description=ko.observable();this.icon=ko.observable(MsPortalFx.Base.Images.Shell.DefaultBlade(
));this.size=ko.observable(2);this.title=ko.observable(r.getDefaultTitle(""));this.shortTitle=ko.observable(
);this._bladeDefinition&&(this.title(r.getDefaultTitle(this._bladeDefinition.name)),this.shortTitle(
this._bladeDefinition.name),this._bladeDefinition.viewModelName&&f.getViewModel(this._bladeDefinition.
viewModelName).done(function(n){var t,i;if(e._bladeViewModel=n,e._disposed)e.dispose();else if(Object.
keys(s).forEach(function(n){var r=s[n],t=e._bladeViewModel.content[r],i=e[n];ko.isObservable(t)&&ko.
isObservable(i)&&(i(t()),e._subscriptions.push(t.subscribe(function(n){i(n)})))}),e._bladeViewModel.
content&&e._bladeViewModel.content.onInputsSet&&(e.inferredBladePinPartInputs.subscribe(function(n){
var t=e._transformInputsToBladeProperties(n,e._bladeDefinition);e._bladeViewModel.content.onInputsSet(
t)}),t=e.inferredBladePinPartInputs(),t)){i=e._transformInputsToBladeProperties(t,e._bladeDefinition);
e._bladeViewModel.content.onInputsSet(i)}}))}return __extends(u,n),u.prototype.onInputsSet=function(
n){var t=Q.defer(),i,r;if(this.inferredBladePinPartInputs(n.inferredBladePinPartInputs),!this._partContainer.
selectable)throw new Error("Inferred pinned part container must have selectable declared.");return this.
_bladeDefinition?(this._bladeDefinition.inputs&&this._bladeDefinition.inputs.length?(i={},this._bladeDefinition.
inputs.forEach(function(n){i[n]=n}),r=this._createObjectFromInputs(n.inferredBladePinPartInputs,i,this.
_bladeDefinition),this._partContainer.selectable.selectedValue(r)):this._partContainer.selectable.selectedValue(
!0),t.resolve()):t.reject(),t.promise},u.prototype.dispose=function(){if(this._subscriptions.forEach(
function(n){n.dispose()}),this._subscriptions.length=0,this._bladeViewModel){var n=this._bladeViewModel.
content;n&&n.dispose&&typeof n.dispose=="function"&&n.dispose();this._bladeViewModel.container&&this.
_bladeViewModel.container.dispose&&typeof this._bladeViewModel.container.dispose=="function"&&this._bladeViewModel.
container.dispose();this._extension.releaseViewModel(this._bladeViewModel);this._bladeViewModel=null}
this._disposed=!0},u.prototype._createObjectFromInputs=function(n,t,r){var u={};return n=n||{},Object.
keys(t).forEach(function(f){var e=i.PropertyBinding.getModelValue(n,f),s=t[f],o;e.exists?u[s]=e.value:
(o="Pinned inferred part '{0}' for blade '{1}' did not receive required input '{2}'. Available Inputs: '{3}'.".
format(r.pinnedPart,r.name,f,ko.toJSON(n)),c.error(o))}),u},u.prototype._transformInputsToBladeProperties=
function(n,t){var i={};return(t.viewModelInputs||[]).forEach(function(n){n.valuesFrom.forEach(function(
t){t.referenceType!==5&&(i[t.property]=n.property)})}),this._createObjectFromInputs(n,i,t)},u}(MsPortalFx.
ViewModels.ButtonPart);t.ViewModel=f;t.registerViewModels=a;t.createViewModel=h}(f||(f={})),f});define(
"MsPortalImpl/Prototype/ViewModelManager",["require","exports"],function(){var n;return function(n){
"use strict";var t=function(){function n(){}return n.register=function(t,i,r){n._viewModels[t]={name:
t,modulePath:i,factory:r}},n.registerWithState=function(t,i,r){n._viewModelsWithState[t]={name:t,modulePath:
i,factoryWithState:r}},n.registerPrefix=function(t,i,r){n._viewModelPrefixes[t]={name:name,modulePath:
i,factoryWithPrefix:r}},n.resolve=function(t,i,r){var s=this,u=null,e=null,o=$.Deferred(),f;i in n._viewModels?
(u=n._viewModels[i].modulePath,e=n._viewModels[i].factory):i in n._viewModelsWithState&&(u=n._viewModelsWithState[
i].modulePath,e=function(t){return n._viewModelsWithState[i].factoryWithState(t,r)});for(f in this._viewModelPrefixes)
i.substr(0,f.length)===f&&(u=this._viewModelPrefixes[f].modulePath,e=function(n){return s._viewModelPrefixes[
f].factoryWithPrefix(n,r,i,t)});return u?(MsPortalFx.Base.Amd.load(u).then(function(n){o.resolve(e(n))}
,function(n){o.reject(n.message)}),o.promise()):null},n._viewModels={},n._viewModelsWithState={},n._viewModelPrefixes=
{},n}();n.ViewModelManager=t}(n||(n={})),n});define("MsPortalImpl/ViewModels/ViewModels.BladeCaller",
["require","exports"],function(){var n;return function(n){"use strict";var t="internal_bladeCallId",
i="internal_bladeCallerParams",r="internal_bladeCallerResult",u=function(){function n(){}return n.addBladeCallerBindings=
function(n,u,f){u.additionalInputArguments=u.additionalInputArguments||[];u.outputArguments=u.outputArguments||
[];u.additionalInputArguments.push({property:t,valuesFrom:[{referenceType:f,property:n+"."+t}]});u.additionalInputArguments.
push({property:i,valuesFrom:[{referenceType:f,property:n+"."+i}]});u.outputArguments.push({property:
r,valuesFrom:[{referenceType:1,property:r}]})},n.addBladeCallablePartInputs=function(n){n.inputs=n.inputs||
[];n.inputs.push(t,i)},n.addBladeCallableBindings=function(n,u,f,e){u.inputs=u.inputs||[];u.outputs=
u.outputs||[];u.bindings=u.bindings||[];var o;if(e.inline)o=e.inline.bindings=e.inline.bindings||[];
else if(e.reference)o=e.reference.bindings=e.reference.bindings||[];else throw new Error("Part is neither inline nor a reference, so cannot add blade callable bindings");
u.inputs.push(t);o.push({property:t,valuesFrom:[{referenceType:1,property:t}]});u.inputs.push(i);o.push(
{property:i,valuesFrom:[{referenceType:1,property:i}]});u.outputs.push(r);u.bindings.push({property:
r,valuesFrom:[{referenceType:0,property:n+"."+r,part:f}]})},n}();n.BladeCaller=u}(n||(n={})),n});define(
"MsPortalImpl/Extension/Extension.DefinitionValidator",["require","exports"],function(){var n;return function(
n){"use strict";function a(n,r){var e=new u;return n?(Object.keys(n).forEach(function(r){switch(r){case"name":
t("Extension name",n.name,e.errors);break;case"version":case"hash":case"schemaVersion":case"sdkVersion":
case"buildDescription":n[r]!==undefined&&t(r,n[r],e.errors);break;case"isPreview":r in n&&f(r,n[r],e.
errors);break;case"assetTypes":n[r]!==undefined&&i(r,n[r],e.errors);break;case"blades":v(n,e.errors);
break;case"startBoardParts":n.startBoardParts&&g(n.startBoardParts,e.errors);break;case"partsCatalog":
ot(n.partsCatalog,e.errors);break;case"commandsCatalog":et(n.commandsCatalog,e.errors);break;case"commandGroups":
ut(n.commandGroups,e.errors);break;case"htmlTemplates":n.htmlTemplates&&tt(n.htmlTemplates,e.errors);
break;case"styleSheets":n.styleSheets&&it(n.styleSheets,e.errors);break;case"galleryService":n.galleryService&&
rt(n.galleryService,e.errors);break;default:e.errors.push("Unexpected attribute '{0}' on definition.".
format(r))}}),r&&r.hubs&&r.hubs.forEach(function(t){t.htmlTemplate&&(n.htmlTemplates[t.htmlTemplate]||
e.errors.push("Html template for hub '{0}' not found.".format(t.name)))}),e):(e.errors.push("Definition is null or undefined."),
e)}function t(n,t,i){typeof t!="string"&&i.push("{0} is not a valid string.".format(n))}function f(n,
t,i){typeof t!="boolean"&&i.push("{0} is not a valid boolean.".format(n))}function i(n,t,i){var r=Array.
isArray(t);return r||i.push("The '{0}' property is not a valid array.".format(n)),r}function v(n,t){
!MsPortalFx.Base.Utilities.isNullOrUndefined(n.blades)&&i("blades",n.blades,t)&&n.blades.forEach(function(
i,r){y(n,i,r,t)})}function y(n,t,u,f){t.inputs&&i("Blade: {0}. Property: blades[{1}].inputs".format(
t.name,u),t.inputs,f);t.pinnedPart&&d(n,t,u,f);i("Blade: {0}. Property: blades[{1}].lenses".format(t.
name,u),t.lenses,f)&&t.lenses.forEach(function(n,r){var e="Blade: {0}. Lens: {1}. Property: blades[{2}].lenses[{3}].".
format(t.name,n.name,u,r);n.partInstances&&i(e,n.partInstances,f)&&n.partInstances.forEach(function(
i,e){var s="Blade: {0}. Lens: {1}. Part: {2}. Property: blades[{3}].lenses[{4}].partInstances[{5}]".
format(t.name,n.name,i.name,u,r,e);o(s,i,f)})});t.permissions&&i("Blade: {0}. Property: blades[{1}].permissions".
format(t.name,u),t.permissions,f)&&t.permissions.forEach(function(n,i){r("Blade: {0}. Property: blades[{1}].permissions[{2}]".
format(t.name,u,i),n,i,f)});p(t.toolbar,"Blade: {0}. Property: blades[{1}].toolbar".format(t.name,u),
f);w(t.actionBar,"Blade: {0}. Property: blades[{1}].actionBar".format(t.name,u),f)}function p(n,t,i)
{n&&(n.source?e(n.source,t+".source",i):i.push("Source not specified for toolbar. "+t))}function w(n,
t,i){n&&n.source&&e(n.source,t+".source",i)}function e(n,r,u){n.property&&t(r+".property",n.property,
u);n.optional&&typeof n.optional!="boolean"&&u.push("The attribute 'optional' should be of type boolean. "+
r);n.isIdentityInput&&typeof n.isIdentityInput!="boolean"&&u.push("The attribute 'isIdentityInput' should be of type boolean. "+
r);i(r+".valuesFrom",n.valuesFrom,u)&&n.valuesFrom.forEach(function(n,t){b(r+".valuesFrom[{0}]".format(
t),n,u)})}function b(n,i,r){switch(i.referenceType){case 0:case 1:case 2:case 3:case 4:case 5:case 6:
case 7:break;default:r.push("Unknown reference type '{0}' found for {1}.referenceType.".format(i.referenceType,
n))}t(n+".property",i.property,r);i.part&&t(n+".part",i.part,r)}function k(n,i,r){switch(i.sourceType)
{case 0:i.providerKey&&r.push("Asset ID source source type of FromInput with provider key (should be null) found for {0}.sourceType.".
format(n));break;case 1:i.providerKey||r.push("Asset ID source source type of FromProvider with missing provider key found for {0}.sourceType.".
format(n));t(n+".providerKey",i.providerKey,r);break;case 2:i.providerKey||r.push("Asset ID source source type of FromSourceProvider with missing provider key found for {0}.sourceType.".
format(n));t(n+".providerKey",i.providerKey,r);break;default:r.push("Unknown asset ID source source type '{0}' found for {1}.sourceType.".
format(i.sourceType,n))}t(n+".property",i.property,r)}function r(n,u,f,e){var o,s;switch(u.permissionType)
{case 0:o=u;o.extensionName&&t(n+".extensionName",o.extensionName,e);t(n+".assetType",o.assetType,e);
o.assetId?k(n+".assetId",o.assetId,e):e.push("Permission missing assetId found for {0}.assetId.".format(
n));t(n+".action",o.action,e);break;case 1:s=u;switch(s.requirement){case 0:case 1:break;default:e.push(
"Unknown permission set requirement '{0}' found for {1}.requirement.".format(s.requirement,n))}i(n+".permissions",
s.permissions,e)&&s.permissions.forEach(function(t,i){r("{0}.permissions[{1}]".format(n,i),t,i,e)});
break;default:e.push("Unknown permission type '{0}' found for {1}.permissionType.".format(u.permissionType,
n))}}function d(n,t,i,r){var u=n.partsCatalog&&n.partsCatalog.first(function(n){return n.name===t.pinnedPart}
),f;u?u.details&&u.details.length!==0?!u.details[0].blade||u.details[0].blade===t.name||(f=l.first(function(
i){return n.name===i.extension&&t.name===i.blade}),f||r.push("The pinnedPart '{0}' specified for blade '{1}' has a BladeAction that opens a different blade. Property: blades[{2}].pinnedPart.".
format(t.pinnedPart,t.name,i))):r.push("The pinnedPart '{0}' specified for blade '{1}' does not define the necessary BladeAction. Property: blades[{2}].pinnedPart.".
format(t.pinnedPart,t.name,i)):r.push("Unable to find the pinnedPart '{0}' specified for blade '{1}'. Property: blades[{2}].pinnedPart.".
format(t.pinnedPart,t.name,i))}function g(n,t){i("startBoardParts",n,t)&&n.forEach(function(n,i){o("startBoardParts[{0}]".
format(i),n,t)})}function o(n,t,i){t.reference||t.inline?t.reference&&t.inline?i.push("'reference' and 'inline' properties cannot be set at the same time on PartInstanceDefinition. Property: {0}".
format(n)):t.reference&&!t.reference.partTypeName?i.push("'partTypeName' property is required on part reference. Property: {0}".
format(n)):t.inline&&s(n,t.inline,i):i.push("'reference' or 'inline' property required on PartInstanceDefinition. Property: {0}".
format(n))}function s(n,t,u){t&&(nt(n,t.partState,u),t.permissions&&i("{0}.permissions".format(n),t.
permissions,u)&&t.permissions.forEach(function(t,i){r("{0}.permissions[{1}]".format(n,i),t,i,u)}))}function nt(
n,t,i){if(t){var e=t.inputIdentityProperties||[],f=t.sharedProperties||[],o=e.concat(f.map(function(
n){return n.property})),s=f.map(function(n){return n.key}),r=h(o),u=h(s);r&&r.length>0&&i.push("Part view model properties cannot be used in multiple part settings. Duplicated properties: '{0}'. Path: '{1}'.".
format(JSON.stringify(r),n));u&&u.length>0&&i.push("Shared key settings cannot be used in multiple part settings. Duplicated keys: '{0}'. Path: '{1}'.".
format(JSON.stringify(u),n))}}function h(n){var t={},i=[];return(n||[]).forEach(function(n){!t[n]||i.
push(n);t[n]=!0}),i}function tt(n,i){Object.keys(n).forEach(function(r){var u=n[r];typeof u!="string"&&
(t("htmlTemplates['{0}'].file".format(r),u.file,i),t("htmlTemplates['{0}'].content".format(r),u.content,
i))})}function it(n,i){Array.isArray(n)?n.forEach(function(n,r){t("StyleSheet at position {0}".format(
r),n,i)}):i.push("Invalid type for 'styleSheets' property on definition.")}function rt(n,i){Object.keys(
n).length>1&&i.push("Unexpected properties on 'galleryService' property of definition.");t("galleryService.serviceViewModel",
n.serviceViewModel,i)}function ut(n,t){n&&i("commandGroups",n,t)&&n.mapMany(function(n){return n.commands}
).forEach(function(n){n.reference&&ft(n,t)})}function ft(n,t){if(n&&n.reference){var i=Object.keys(n).
filter(function(n){return n!=="name"&&n!=="bindings"&&n!=="reference"});i.length>0?t.push("Command reference can only define 'name' and 'bindings' properties. Definition: {0}".
format(ko.toJSON(n))):n.reference.commandType||t.push("Command reference must specify the 'commandType' property. Definition: {0}".
format(ko.toJSON(n)))}}function et(n,t){n&&i("commandsCatalog",n,t)&&n.forEach(function(n){n.name||t.
push("Commands in 'commandsCatalog' must have names.");!n.reference||t.push("Commands in 'commandsCatalog' cannot specify a 'reference' property.")}
)}function ot(n,t){n&&i("partsCatalog",n,t)&&n.forEach(function(n){n.inputDefinitions&&i("PartType: {0}. Property: inputDefinitions".
format(n.name),n.inputDefinitions,t);n.reference&&st(n,t);s("PartType: {0}".format(n.name),n,t)})}function st(
n,t){(n.reference.bindings||[]).forEach(function(i){(i.valuesFrom||[]).forEach(function(i){i.referenceType!==
7&&i.referenceType!==5&&t.push("Adapted Part: {0} can only have Adapter binding and Constant binding for its referenced part.".
format(n.name))})})}var c=MsPortalFx.Base.Constants.ExtensionNames.Hubs,l=[{extension:c,blade:"BrowseAllBladeWithType"}],
u=function(){function n(){this.errors=[]}return Object.defineProperty(n.prototype,"valid",{get:function(
){return!(this.errors&&this.errors.length>0)},enumerable:!0,configurable:!0}),n}();n.ValidationResult=
u;n.validateDefinition=a;n.validateIsString=t;n.validateIsBoolean=f;n.validateIsArray=i}(n||(n={})),
n});define("MsPortalImpl/Extension/Extension.Definition",["require","exports"],function(){var n;return function(
n){"use strict";(function(n){n[n.Default=0]="Default";n[n.Part=1]="Part"})(n.ViewModelType||(n.ViewModelType=
{}));var t=n.ViewModelType}(n||(n={})),n});define("MsPortalImpl/Extension/Extension.Manifest",["require",
"exports","./Extension.DefinitionValidator"],function(n,t,i){var r;return function(n){"use strict";function t(
n){var t=new i.ValidationResult,f,e;return n?((typeof n.name!="string"||MsPortalFx.Base.Utilities.isNullOrWhiteSpace(
n.name)||n.name.indexOf("!")>=0)&&(e="The extension manifest should specify a valid name. This name is obtained from the <Extension> tag in PDL. This name should be a string and cannot be empty or whitespace. It also cannot contain the ! character. The recommended naming convention for an extension name is to follow the pattern {Company}_{BrandOrSuite}_{ProductOrComponent} (e.g. Microsoft_Azure_Insights).",
t.errors.push(e)),n.assetTypes&&i.validateIsArray("manifest.assetTypes",n.assetTypes,t.errors)&&n.assetTypes.
forEach(function(i){r(i,n.name,t.errors)}),n.hubs&&i.validateIsArray("manifest.hubs",n.hubs,t.errors)&&
n.hubs.forEach(function(i){u(i,n.name,t.errors)}),t):(f="Manifest was not specified for the extension. Ensure that you passing a valid manifest to the MsPortalFx.Extension.register/MsPortalFx.Extension.registerAmd call that is used to register your extension with the portal.",
t.errors.push(f),t)}function r(n,t,i){if(MsPortalFx.Base.Utilities.isNullOrWhiteSpace(n.name)&&i.push(
"The name for the asset type in manifest '{0}' was not specified.".format(t)),n.browseType!==undefined&&
typeof n.browseType!="number"&&i.push("The browse type for the asset type '{0}' in manifest '{1}' was not a number.".
format(n.name,t)),n.browseServiceViewModel&&typeof n.browseServiceViewModel!="string"&&i.push("The browse service view model for the asset type '{0}' in manifest '{1}' was not a string.".
format(n.name,t)),n.privateBrowse!==undefined&&typeof n.privateBrowse!="boolean"&&i.push("The private browse flag was present for the asset type '{0}' in manifest '{1}' was not a boolean.".
format(n.name,t)),n.browseType!==undefined){switch(n.browseType){case 0:n.browseServiceViewModel||i.
push("The browse for the asset type '{0}' in manifest '{1}' is set to use a service view model but there was no service view model.".
format(n.name,t));break;case 1:n.browseServiceViewModel&&i.push("The browse for the asset type '{0}' in manifest '{1}' is set to use the asset type's resource type but there was a service view model.".
format(n.name,t));break;case 2:n.browseServiceViewModel&&i.push("The browse for the asset type '{0}' in manifest '{1}' is set to use the asset type's blade but there was a service view model.".
format(n.name,t))}n.privateBrowse!==undefined&&n.browseType===undefined&&i.push("The private browse flag was present for the asset type '{0}' in manifest '{1}' but there was browse type.".
format(n.name,t));n.browseType!==0&&n.browseServiceViewModel&&i.push("The asset type '{0}' in manifest '{1}' has a browse service but doesn't have service view model browse type.".
format(n.name,t));MsPortalFx.Base.Utilities.isNullOrWhiteSpace(n.pluralDisplayName)&&MsPortalFx.Base.
Utilities.isNullOrWhiteSpace(n.text)&&i.push("The pluralDisplayName for the asset type '{0}' in manifest '{1}' was not specified and asset type was set to browse.".
format(n.name,t));MsPortalFx.Base.Utilities.isNullOrUndefined(n.icon)&&i.push("The icon for the asset type '{0}' in manifest '{1}' was not specified and asset type was set to browse.".
format(n.name,t))}else n.browseServiceViewModel!==undefined?n.browseType=0:n.privateBrowse!==undefined&&
i.push("The asset type '{0}' in manifest '{1}' has a private blade flag but no browse type.".format(
n.name,t));n.gridColumnsServiceViewModel&&typeof n.gridColumnsServiceViewModel!="string"&&i.push("The grid columns service view model for the asset type '{0}' in manifest '{1}' was not a string.".
format(n.name,t));n.resourceTypeServiceViewModel&&typeof n.resourceTypeServiceViewModel!="string"&&i.
push("The resource type service view model for the asset type '{0}' in manifest '{1}' was not a string.".
format(n.name,t));n.dynamicBladeServiceViewModel&&typeof n.dynamicBladeServiceViewModel!="string"&&i.
push("The dynamic blade service view model for the asset type '{0}' in manifest '{1}' was not a string.".
format(n.name,t));n.securityServiceViewModel&&typeof n.securityServiceViewModel!="string"&&i.push("The security service view model for the asset type '{0}' in manifest '{1}' was not a string.".
format(n.name,t));n.propertyProviderServiceViewModel&&typeof n.propertyProviderServiceViewModel!="string"&&
i.push("The property provider service view model for the asset type '{0}' in manifest '{1}' was not a string.".
format(n.name,t))}function u(n,t,i){MsPortalFx.Base.Utilities.isNullOrWhiteSpace(n.name)&&i.push("The name for the hub in manifest '{0}' was not specified.".
format(t));MsPortalFx.Base.Utilities.isNullOrWhiteSpace(n.title)&&i.push("The title for the hub in manifest '{0}' was not specified.".
format(t));MsPortalFx.Base.Utilities.isNullOrUndefined(n.icon)&&i.push("The icon for the hub in manifest '{0}' was not specified.".
format(t));MsPortalFx.Base.Utilities.isNullOrWhiteSpace(n.htmlTemplate)&&MsPortalFx.Base.Utilities.isNullOrUndefined(
n.details)&&i.push("The manifest '{1}' must have either the html template or blade details for the hub '{0}'.".
format(n.name,t));MsPortalFx.Base.Utilities.isNullOrWhiteSpace(n.htmlTemplate)&&n.details.length>1&&
i.push("The manifest '{1}' must have a single blade action when the html template is not specified for the hub '{0}'.".
format(n.name,t));n.viewModel&&typeof n.viewModel!="string"&&i.push("The view model for the hub '{0}' in manifest '{1}' was not a string.".
format(n.name,t))}n.validate=t}(r||(r={})),r});define("MsPortalImpl/Services/Services.PortalIdentity",
["require","exports","../Base/ClaimsIdentity"],function(n,t,i){var u=MsPortalFx.Base.Rpc.Internal,f=
HubsExtension.Internal.Azure,r;return function(t){"use strict";function s(n,t){var u;o=n;t?(u=new i.
ClaimsIdentity(!0),u.displayName=t.displayName,u.firstName=t.firstName,u.lastName=t.lastName,u.avatarUri=
t.avatarUri,u.tenantId=t.tenantId,u.perTenantId=t.perTenantId):u=r;e=u}function h(){return e}function c(
){var n=$.Deferred();return f.updateSubscriptionInfoEndPoint.register(u.client,[MsPortalFx.Base.Constants.
ExtensionNames.Hubs],function(t){n.resolve(t)}),n.promise()}function l(){var n=$.Deferred();return f.
updateTenantInfoEndPoint.register(u.client,[MsPortalFx.Base.Constants.ExtensionNames.Hubs],function(
t){n.resolve(t.tenantList)}),n.promise()}var a=window,v=MsPortalFx.Base.Diagnostics.createLog(n),r=new
i.ClaimsIdentity(!1),o,e=r;t.initialize=s;t.getSignedInUser=h;t.getSubscriptions=c;t.getTenants=l}(r||
(r={})),r});define("MsPortalImpl/Base/ClaimsIdentity",["require","exports"],function(){var n;return function(
n){"use strict";var t=function(){function n(n){this.isAuthenticated=n}return n.prototype.isAnonymous=
function(){return!this.isAuthenticated},n}();n.ClaimsIdentity=t}(n||(n={})),n});define("MsPortalImpl/Extension/Extension.Loader",
["require","exports","MsPortalImpl/Extension/CachedExtensionManifests","./Extension"],function(n,t,i,
r){var u;return function(t){"use strict";function y(n){return new c(n)}function p(n,t,i){var r={signature:
h,kind:t,data:i};n.getWindow().postMessage(r,"*")}function w(){return Q(i.manifests||{})}var l=jQuery,
u=window,b=l("body"),f=u.fx.environment,e=MsPortalFx.Base.Diagnostics.createLog(n),h=f.bootMessageSignature,
a="BOOTgetScripts;",o="BOOTreturn;",v=6e4,s=MsPortalFx.Base.Rpc.Internal,c;t.create=y;c=function(){function n(
n){var t=this;this._manifestLoadStarted=Q.defer();this._allManifestsLoaded=Q.defer();this._isRpcStarted=
!1;this._messageHandlers=[];this._preloadedExtensions=n;MsPortalFx.Internal.Extension.registerManifestDefinition.
register(s.client,null,function(n,i){var r=t._extensionList.first(function(n){return n.name===i.srcWindowId}
),s,e;r&&(s=r.initializeRequired&&r.isOptimized(),s&&r.getWindow().postMessage({boot:o,scripts:f.extensionScriptsForInitialize,
stopListening:!0},r.getTrustedHost()),s?(e=function(i){var f=t._getExtensionByWindow(i.source);i.data&&
i.data.startinitialize&&r===f&&(r.indicateLoaded(n),u.removeEventListener("message",e))},u.addEventListener(
"message",e,!1),t._messageHandlers&&t._messageHandlers.push(e)):r.indicateLoaded(n))});this._addExtensionBootReceiver(
)}return Object.defineProperty(n.prototype,"manifestLoadStarted",{get:function(){return this._manifestLoadStarted.
promise},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"manifestLoadComplete",{get:
function(){return!!this._extensionList&&!this._extensionList.some(function(n){return!n.manifest})},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"allManifestsLoaded",{get:function(){return e.
warning("This API is being deprecated and will be removed in a future release;"),this._allManifestsLoaded.
promise},enumerable:!0,configurable:!0}),n.prototype.startRpc=function(){var n=this;this._isRpcStarted||
(this._isRpcStarted=!0,s.start({originId:"fx",loadWindow:function(t){var i=n._extensionList.first(function(
n){return n.name===t});if(!i)throw new Error("Failed to load extension '{0}'.".format(t));return i.getOrLoadWindow(
)}}))},n.prototype.loadAsync=function(n){var t=this,i=n.map(function(n){var i=t._preloadedExtensions&&
t._preloadedExtensions.first(function(t){return t.name===n.name});return i?r.createPreInitialized(n,
i):r.create(n)}),u;return this._extensionList=i,this.startRpc(),i.first(function(n){return n.name===
MsPortalFx.Base.Constants.ExtensionNames.Hubs})&&s.internalClient.acquireWindow(MsPortalFx.Base.Constants.
ExtensionNames.Hubs),w().then(function(n){i.forEach(function(t){t.loadAsync(n[t.name])})}),this._manifestLoadStarted.
resolve(),u=this._extensionList.map(function(n){return n.getManifest()}),Q.allSettled(u).timeout(v,"Timed out waiting for the getManifest promise for one or more extensions.").
then(function(){t._allManifestsLoaded.resolve()},function(n){t._allManifestsLoaded.reject(n)}),this.
_allManifestsLoaded.promise},n.prototype.getExtensions=function(n){return n===void 0&&(n=!1),(this._extensionList||
[]).filter(function(t){return!n||!!t.manifest})},n.prototype.dispose=function(){this._messageHandlers&&
(this._messageHandlers.forEach(function(n){u.removeEventListener("message",n)}),this._messageHandlers=
null)},n.prototype._getExtensionByWindow=function(n){return this._extensionList.first(function(t){return t.
getWindow()===n})},n.prototype._addExtensionBootReceiver=function(){var i=this,n,t;e.debug("Setting up extension boot receiver");
n=function(n){i._onBoot(n)};t=function(n){i._onBootGetRequested(n)};u.addEventListener("message",n,!1);
u.addEventListener("message",t,!1);this._messageHandlers.push(n);this._messageHandlers.push(t)},n.prototype.
_onBoot=function(n){var i=this._getExtensionByWindow(n.source),t=n.data,r,u,f;if(i&&t&&t.signature===
h)switch(t.kind){case 0:r=t.data;u=i.processBootGetMessage(r.sdkVersion,r.extVersion);u&&p(i,1,{stopListening:
!0,scripts:[{kind:1,data:"MsPortalFx.Internal.startBoot()"}]});break;case 2:f=t.data;e.error("{0} Origin: {1}".
format(f.message,n.origin));break;default:e.error("Received a boot message from a source that isn't a recognized extension. Will ignore. Origin: {0}".
format(n.origin))}},n.prototype._onBootGetRequested=function(n){var h,c,r=0,t=this._getExtensionByWindow(
n.source),l,v,u,i,s;n.data&&(n.data&&n.data.boot===a&&(typeof n.data.sdkVersion=="string"&&typeof n.
data.extVersion=="string"?(h=n.data.sdkVersion,c=n.data.extVersion,r=n.data.bootVersion||2):(l="Invalid bootGet message specified. ExtensionName: {0}. Message: {1}. The bootGetMessage should contain the sdkVersion and extVersion attribute, both of type string.",
e.error(l.format(t&&t.name,JSON.stringify(n.data))))),r&&(t?(v=t.processBootGetMessage(h,c),v&&(r>=3?
(i=f.extensionScriptsForManifest,s=!1,t.isOptimized()||(i=i.concat(f.extensionScriptsForInitialize),
s=!0),u={boot:o,stopListening:s,scripts:i}):u=o+JSON.stringify(f.extensionScriptsForManifest.concat(
f.extensionScriptsForInitialize)),t.getWindow().postMessage(u,"*"))):e.error("Received a boot message from a source that isn't a recognized extension. Will ignore. Origin: {0}".
format(n.origin))))},n}()}(u||(u={})),u});define("MsPortalImpl/UI/UI.Initialize",["require","exports",
"../Base/Base.KnockoutExtensions.FxParameterCollector","../Base/Base.KnockoutTemplateSanitizer","../Base/Base.PopupClickBlocker",
"../Base/Base.Router","MsPortalImpl/Extension/CachedExtensionManifests","../Controls/Controls.Host",
"../Base/Base.DebugHelper","../Base/Base.DiagnosticsPopup","../Extension/ExtensionMetadataSource","MsPortalImpl.Controls/Controls/Base/Host",
"MsPortalImpl/Resources/ImplScriptResources","../Extension/PinBladeInferred","../Services/Services.AssetManagement",
"../Services/Services.AssetTypes","../Services/Services.Controller","../Services/Services.GalleryEndpoints",
"../Services/Services.GeneralSettings","../Services/Services.Permissions","../Services/Services.PortalIdentity",
"../Services/Services.SecurityTokens","../Services/Services.Storage","../Services/Services.ShellProvisioner",
"../Base/Telemetry","../Base/Themes","./Hubs/UI.BrowseManager","./Hubs/ViewModels/UI.Browse.ViewModelRegistration",
"./Commands/UI.CommandManager","./Compositions/UI.Composition.BladePair","./UI.ContextPane","./Hubs/UI.CreateLauncher",
"./Hubs/UI.CreateManager","./UI.DesktopManager","./UI.DesktopManagerImpl","./UI.DialogManager","./Hubs/ViewModels/UI.Gallery.ViewModelRegistration",
"./Hubs/UI.HubsManagerImpl","./Hubs/UI.HubsRpcCallbacks","./Hubs/UI.NotificationManager","./Hubs/ViewModels/UI.Notifications.ViewModelRegistration",
"./Hubs/UI.ResourceMapManager","./Hubs/ViewModels/UI.ResourceMap.ViewModelRegistration","./Hubs/ViewModels/UI.Settings.ViewModelRegistration",
"Viva.Controls/Controls/Balloon","../Widgets/Widgets.Portal","MsPortalImpl/Base/Base.KnockoutExtensions.Image",
"MsPortalImpl/Base/Base.KnockoutExtensions.Controls","MsPortalImpl/Base/Base.KnockoutExtensions.OverrideComputed",
"MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedAttrBinding","MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedCssBinding",
"MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedHtmlBinding","MsPortalImpl/Base/Base.KnockoutExtensions.TextLinesBinding",
"MsPortalImpl/Base/JQueryExtensions","MsPortalImpl/Controls/ControlBindings","MsPortalImpl/Controls/Controls.Wizard",
"MsPortalImpl/Controls/Forms/Controls.FileUpload","MsPortalImpl/Parts/Parts.Intrinsics"],function(n,
t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,lt,at,vt,yt,pt,wt,bt,kt,dt,
gt,ni,ti,ii,ri){var oi=MsPortalFx.ViewModels.Dialogs,si=MsPortalFx.Internal.Extension.ExtensionStatusCode,
ei=MsPortalFx.Base.Net,ui=MsPortalFx.Base.Rpc.Internal,fi;return function(t){"use strict";function ar(
n,t,i){if(n.length!==1)throw new Error("The portal element '"+n.selector+"' was either not found, or more than one element was found.");
if(t.length!==1)throw new Error("The splash screen element '"+t.selector+"' was either not found, or more than one element was found.");
return new tr(n,t,i)}function ir(n,t){t||(t=pi&&pi.now&&pi.now());t&&ci.trace({source:hi,action:n,actionModifier:
ci.ActionModifier.Complete,data:cr,duration:t})}var oi=MsPortalFx.Base.Resources.getAppRelativeUri("/"),
tr;oi.charAt(oi.length-1)!=="/"&&(oi=oi+"/");var at=window,yi=at.console,pi=at.performance,si=at.fx.
environment,rr=a.Shell,fi=a.Shell.Dialogs,li=jQuery,vi=MsPortalFx.Base.Diagnostics.createLog(n),ki=oi+
"SignOut",wi=oi+"Error",ur=MsPortalFx.Base.EventTypes,bi=si.isDevelopmentMode,fr=si.features.hideavatartenant===
"true",hi=rt.Source.Shell,ci=MsPortalFx.Base.Diagnostics.Telemetry,er="A".charCodeAt(0),or=5e3,sr=3e4,
hr=bi?3e4:5e3,di=6e4,gi,nr=!bi,ai,cr="CachedManifestCount: {0}".format(Object.keys(e.manifests||{}).
length),lr=si.features.consoletelemetry==="true";t.create=ar;tr=function(){function n(n,t,i){this._lifetime=
new MsPortalFx.Internal.Base.TriggerableLifetimeManager;this._initializationDeferred=Q.defer();this.
_portalDependencies=i;this._portalWidget=new ri.Widget(n,new ri.ViewModel);this._splashScreenElement=
t}return n.prototype.initialize=function(){function vr(){ci.completeTrace(gi);ir("TotalTimeToPortalReady")}
var n=this,ri=nt.extractBootStrapAuthState(si.bootstrapAuthorizationKey),e,sr;if(!ri){location.assign(
wi);return}ri.hash&&(window.location.hash=ri.hash);si.enableAnimations||li.enableAnimations(!1);u.createPopupClickBlocker(
);e=this._portalDependencies.settings;k.init(e);var fi=tt.create(),ai=yt.DialogManager.get(),cr=nt.createOAuthTokenProvier(
ri),w=nt.createSecurityTokensManager(cr),t=this._portalDependencies.extensionManager,tr=c.initialize(
this._portalDependencies.extensionsMetadata,e,fi,ai,this._splashScreenElement),a,pi=ko.observable(),
nr=ko.observableArray(),yr=new b.GalleryEndpointsService(Rpc.client,t,tr),or=function(){var t=h.getDiagnosticsData(
n._desktopManager,a,pi,nr,w);h.showDiagnosticsPopup(t)},ar={};t.onUnload(function(n){var t=ar[n];return t&&
t.dispose(),!0});l.host=new o.HostImpl;r.initialize(fi);ei.status.subscribe(function(t){n._handleShellOrExtensionStatus(
!0,w,t,hi,ai)});li(at.document).on({keydown:function(n){n.altKey&&n.ctrlKey&&n.which===er&&or()}});return MsPortalFx.
Base.Diagnostics.Telemetry.initialize(hi,!0),ir("TotalTimeToSplashScreen",MsPortalImpl.Performance.splashScreenLoadTime),
lr&&(sr=MsPortalFx.Services.getConsoleTelemetryEventProcessor(),MsPortalFx.Base.Diagnostics.Telemetry.
addProcessor(sr)),k.initialized.then(function(r){var nt;g.initialize(t,ri.user);var tt,yt,u,c,di,ir,
o,l,ei,ar=n._portalDependencies.editScopeManager,b=p.createAssetTypeService(t),vi=y.createAssetManager(
e,fi),h=gt.createResourceMapManager(t,vi,b),k=lt.createCreateManager(t,h),er=d.createPermissionsManager(
t,h),sr,cr=vt.getSettingsQuery(),lr=e.querySettings(cr),wi;try{yi.log(rr.buildThisLong);yi.log(si.version);
yi.log("Session: "+si.sessionId)}catch(yr){}ii.Widget.setDefaultAppendTo(".fxs-panorama");gi=ci.startTrace(
{source:hi,action:"InitialPageRender"});ei=g.getTenants();g.getSubscriptions().done(function(n){pi(n)}
);o=ft.createBrowseManager(t,e,ui.client);l=kt.createNotificationManager(ui.internalClient,t,o);MsPortalFx.
Internal.Extension.extensionStatusEndPoint.register(ui.client,null,function(t,i){t&&n._handleShellOrExtensionStatus(
!1,w,t,i.srcWindowId,ai)});n._portalWidget.options.exitCanModifyExtensionsMode=function(){MsPortalImpl.
Extension.unregisterAll().then(function(){n._redirect(oi)})};n._prepareExtensionsInfo(tr).then(function(
i){var f=i.testExtensionNames&&i.testExtensionNames.length>0||i.canModifyStamps,r,u;return n._portalWidget.
options.hasUntrustedExtensions(f),t.load(i.items),r=i.items.filter(function(n){return n.startBoardParts&&
n.startBoardParts.length>0}).map(function(n){return t.getManifestByName(n.name)}),u=Q.allSettled(r).
timeout(hr,"Timed out waiting for manifests for extensions with StartBoard parts.").catch(function()
{}),n._desktopManager.initialize(i,lr),Q.allSettled([u,n._desktopManager.initializationPromise,t.hubsExtensionInitialized])}
).then(function(){return n._router.route(at.location.hash)}).catch(function(){n._desktopManager.portalWidget.
showStartBoard()}).then(function(){n._splashScreenElement.hide();vr()});tt=n._portalWidget.getJumpBarWidget(
);yt=n._portalWidget.getPanorama();u=yt.getAvatarMenuWidget();di=p.createAssetTypeServiceRpc(ui.client,
b);ir=gt.createResourceMapManagerRpc(ui.client,h);n._contextPane=ht.create(n._portalWidget.contextPane);
a=li.extend({},n._portalDependencies,{dialogManager:ai,assetManager:vi,permissionsManager:er,assetTypeService:
b,browseManager:o,resourceMapManager:h,storageService:fi,bladePairManager:st.createBladePairManager(
),contextPane:n._contextPane});n._desktopManager=vt.createDesktopManager(n._portalWidget,a);n._desktopManager.
initializationPromise.finally(function(){n._initializationDeferred.resolve(null)});s.initialize(a,n.
_desktopManager);sr=it.ShellProvisionerFactory.create(n._desktopManager,ui.client);MsPortalFx.Base.Diagnostics.
ErrorReporter.initialize(function(){vt.logDiagnosticsData();n._handleShellOrExtensionStatus(!0,w,{code:
3},hi,ai)});c=ct.CreateLauncherFactory.create(t,e);k.initialize(n._desktopManager);n._router=f.createRouter(
n._desktopManager,a,c,l);i.initialize(n._desktopManager,k);u.options.signedInUser(g.getSignedInUser(
));u.options.hideTenant(fr);ei.done(function(n){nr(n);u.options.listOfTenants(n)});u.options.showDiagnostics=
function(){or()};nt=ut.createManager(n._lifetime,li("body"),r.currentTheme);n._portalWidget.element.
on(ur.fxrotatetheme,function(){nt.rotateTheme()});u.options.signedOut=function(){n._redirect(ki)};u.
options.switchedTenant=function(t,i){n._redirect(oi+i.tenant.domainName)};u.options.openSettingsBlade=
function(){MsPortalFx.Base.Diagnostics.Telemetry.trace({source:rt.Source.SettingsBlade,action:rt.Action.
SettingsBladeOpen});n._router.route("#blade/"+MsPortalFx.Base.Constants.ExtensionNames.Hubs+"/SettingsBlade")}
;u.options.openSupportBlade=function(){MsPortalFx.Base.Diagnostics.Telemetry.trace({source:rt.Source.
HelpBlade,action:rt.Action.HelpBladeOpen});n._router.route("#blade/"+MsPortalFx.Base.Constants.ExtensionNames.
Hubs+"/HelpAndSupportBlade")};u.options.enterOrganizeMode=function(){n._desktopManager.mode(1)};u.options.
isDropDownOpen(!!si.features.nodirectory);o.initialize();et.registerViewModels(o);pt.registerViewModels(
);dt.registerViewModels();ni.registerViewModels(h);ti.registerViewModels({desktopManager:n._desktopManager,
portalServices:a,redirectFn:function(t){n._redirect(t)},securityTokensManager:w,storageService:fi,subscriptions:
pi,userSettingsManager:e,tenants:nr,themeManager:nt});bt.registerRpcCallbacks(e,ui.client);v.registerViewModels(
);wi=wt.HubsManagerFactory.create(a,n._desktopManager,e,n._router,tt,n._portalDependencies.hubsMetadata,
l,k,c);n._portalWidget.getKeyboardShortcutHandler().registerHubsManager(wi);n._commandManager=ot.createCommandManager(
n._desktopManager);n._commandManager.startListeningForEvents();bi&&(at.portalImpl=n)}),MsPortalFx.Base.
Net.initialize(function(){return w.getSecurityToken("fx").then(function(n){return n&&n.header},function(
n){return n})}),this._initializationDeferred.promise.catch(function(){vi.error("Failed to initialize the desktop. Redirecting to error page.");
n._redirect(wi+"/LoadFailed")}).timeout(di).catch(function(){vi.error("Timed out waiting for the portal to load. Redirecting to error page after {0} seconds.".
format(di/1e3));n._redirect(wi+"/ClientTimeout")})},n.prototype.dispose=function(){MsPortalFx.Internal.
GlobalStateManager.resetGlobalState();this._portalDependencies.settings&&(this._portalDependencies.settings.
dispose(),this._portalDependencies.settings=null);this._portalDependencies.extensionManager&&(this._portalDependencies.
extensionManager.dispose(),this._portalDependencies.extensionManager=null);this._desktopManager&&(this.
_desktopManager.dispose(),this._desktopManager=null);this._portalWidget&&(this._portalWidget.dispose(
),this._portalWidget=null);this._commandManager&&(this._commandManager.dispose(),this._commandManager=
null);this._router&&(this._router.dispose(),this._router=null);this._lifetime&&(this._lifetime.dispose(
),this._lifetime=null);this._contextPane&&(this._contextPane.dispose(),this._contextPane=null)},n.prototype.
beforeUnload=function(){return ci.trace({source:hi,action:rt.Action.PortalUnload}),this._flushBuffer(
)},n.prototype._prepareExtensionsInfo=function(n){return Q().then(function(){return n.registerTestExtensionsFromUri(
location.href)}).catch(function(n){vi.error("registerTestExtensionsFromUri failed: "+(n?n.toString():
""))}).then(function(){return n.getExtensionsMetadata()})},n.prototype._flushBuffer=function(){var n=
li.Deferred();return w.flush(this._portalDependencies.settings).finally(function(){n.resolve()}),at.
setTimeout(function(){n.resolve()},or),n.promise()},n.prototype._redirect=function(n,t,i){t===void 0&&
(t=!0);i===void 0&&(i=null);var r=li.Deferred();ci.trace({source:hi,action:rt.Action.PortalRedirect,
actionModifier:rt.ActionModifier.Redirect,data:n});t?this._flushBuffer().finally(function(){r.resolve(
)}):r.resolve();(i||Q.resolve(null)).finally(function(){r.finally(function(){n?at.location.assign(n):
at.location.reload(!0)})})},n.prototype._handleShellOrExtensionStatus=function(n,t,i,r,u){var a=this,
h,f,e,o,c,l,v,s;if(!ai){switch(i.code){case 0:break;case 1:f=fi.newVersionMessageTitle;e=fi.newVersionMessageDescription;
o=fi.newVersionDefaultButtonText;h=n?rt.Action.ShellVersionChanged:rt.Action.ExtensionVersionChanged;
v=Q.delay(sr);ai=!0;break;case 2:f=fi.signedOutTitle;e=fi.signedOutDescription;o=fi.signedOutDefaultButtonText;
h=rt.Action.ExtensionSignedOut;l=!0;c=ki;ai=!0;break;case 3:if(nr)return;nr=!0;f=fi.tooManyErrorsTitle;
e=fi.tooManyErrorsDescription;o=fi.tooManyErrorsDefaultButtonText;h=rt.Action.ExtensionTooManyErrors;
break;default:vi.error("Recieved unknown extension event '{0}' for extension '{1}'.".format(i.code,r))}
if(f){if(ci.trace({source:hi,action:h,data:r}),t&&t.cancelPendingRefreshes(),ai&&this._initializationDeferred.
promise.isPending()){this._redirect(c,!l);return}s=Q.defer();this._desktopManager&&this._desktopManager.
mode(0);ai?u.showModalDialog({title:f,description:e,defaultButtonText:o,buttons:1,uiShield:{hidePromise:
s.promise}}).then(function(){a._splashScreenElement.show();s.resolve();a._redirect(c,!l,v)}):u.showModalDialog(
{title:f,description:e,defaultButtonText:o,buttons:2,uiShield:{hidePromise:s.promise}}).then(function(
n){n===4?a._redirect(c,l):s.resolve(null)})}}},n}()}(fi||(fi={})),fi});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl/Base/Base.KnockoutExtensions.FxParameterCollector",["require",
"exports","../Prototype/Extension.Definition.Locator","../UI/Hubs/ViewModels/UI.Gallery.CsmCommand",
"../Widgets/Widgets.WidgetBase"],function(n,t,i,r,u){var f;return function(t){"use strict";function h(
n,t){ko.bindingHandlers.fxParameterCollector={init:function(){return{controlsDescendantBindings:!1}}
,update:function(i,r){var u=ko.utils.unwrapObservable(r());u&&new f(s(i),u,n,t)}}}var c=window,o=MsPortalFx.
Base.Diagnostics.createLog(n),s=jQuery,e=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t}(u.ViewModel),f;t.ViewModel=e;f=function(n){function t(t,u,f,s){n.call(this,t,u,e);this._addDisposablesToCleanUp(
u.privatePcPrBI.triggerProvisioningInStartboardPart.subscribe(function(n){var t;if(n){var r=u.privatePcPrBI.
provisioningPartExtensionName(),e=u.privatePcPrBI.provisioningPartName(),o=i.Locator.forExtension(r).
withPartType(e);f.addPartToStartBoard({originPartLocator:o,model:n,initialSize:2});t=f.getActiveJourney(
);t&&u.privatePcPrBI.forceDiscardJourney()&&f.forceDiscardJourney(t.id)}}));this._addDisposablesToCleanUp(
u.privatePcPrBI.triggerProvisioningCommand.subscribe(function(){var n=new r.CsmCommand;u.privatePcPrBI.
provisioningCommand(n)}));this._addDisposablesToCleanUp(u.privatePcPrBI.provisioningAttempted.subscribe(
function(n){if(n){var t=f.getActiveJourney();t&&u.privatePcPrBI.forceDiscardJourney()&&f.forceDiscardJourney(
t.id)}}));this._addDisposablesToCleanUp(u.privatePcPrBI.provisioningStarted.subscribe(function(n){n&&
(n.galleryParameters?s.processResourceGroupChange(n.galleryParameters,n.configurationOptions,n.deploymentResponse).
then(function(){u.privatePcPrBI.provisioningCompleted({succeeded:!0})},function(n){u.privatePcPrBI.provisioningCompleted(
{succeeded:!1,statusUnavailable:n===MsPortalFx.Resources.Strings.Part.Provisioning.deploymentStatusUnavailable,
pollingFailed:n===MsPortalFx.Resources.Strings.Part.Provisioning.pollingFailed,errorMessage:n})}):o.
error("galleryParameters should be specified in the provisioningStarted object."))}))}return __extends(
t,n),t}(u.Widget);t.Widget=f;t.initialize=h}(f||(f={})),f});define("MsPortalImpl/Base/Base.PopupClickBlocker",
["require","exports"],function(){var n;return function(n){"use strict";function t(){return new i}n.createPopupClickBlocker=
t;var i=function(){function n(){this._body=$("body")}return n.prototype.start=function(){this._body.
on("mousedown click",this._mouseDownHandler=function(n){$.contains(document.body,n.target)&&$(n.target).
closest("[data-popup]").length>0&&n.stopImmediatePropagation()})},n.prototype.stop=function(){this._mouseDownHandler&&
(this._body.off("mousedown click",this._mouseDownHandler),this._mouseDownHandler=null)},n}()}(n||(n=
{})),n});define("MsPortalImpl/Controls/Controls.Host",["require","exports","../Base/Base.Sanitization",
"../Base/Base.KnockoutTemplateSanitizer","../Base/Base.ImageHelper","../UI/UI.DialogManager"],function(
n,t,i,r,u,f){var e;return function(n){"use strict";var h=window,c=jQuery,t=function(){function n(){}
return n.prototype.getImageData=function(n){return u.GetImageData(n)},n.prototype.getImageUri=function(
n){return u.GetImageUri(n)},n}(),e=function(){function n(){}return n.prototype.getContentUri=function(
n){return MsPortalFx.Base.Resources.getContentUri(n)},n.prototype.getAppRelativeUri=function(n){return MsPortalFx.
Base.Resources.getAppRelativeUri(n)},n}(),o=function(){function n(){}return n.prototype.sanitizeHTML=
function(n,t){return r.sanitizeHTML(n,t).sanitizedMarkup},n.prototype.sanitizeUri=function(n){return i.
sanitizeUri(n)},n}(),s=function(){function n(){this._images=new t;this._resources=new e;this._sanitizer=
new o;this._dialogManager=f.DialogManager.get()}return Object.defineProperty(n.prototype,"images",{get:
function(){return this._images},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"resources",
{get:function(){return this._resources},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"rpc",{get:function(){return this._rpc},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"sanitizer",{get:function(){return this._sanitizer},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"dialogManager",{get:function(){return this._dialogManager},enumerable:!0,configurable:!0}),
n}();n.HostImpl=s}(e||(e={})),e});define("MsPortalImpl/Base/Base.DebugHelper",["require","exports","./Base.Router",
"../Services/Services.Settings","./Base.UriHelper"],function(n,t,i,r,u){var f;return function(n){"use strict";
function ft(n,t){f=n;w=t;$(document).on(MsPortalFx.Base.EventTypes.keydown,b)}function et(){k();$(document).
off(MsPortalFx.Base.EventTypes.keydown,b)}function b(n){n.altKey&&n.ctrlKey&&n.which==="D".charCodeAt(
0)&&($(t).length>0?k():ot())}function ot(){kt();st()}function k(){d();tt()}function st(){d();$("body").
append("<style type='text/css' id='{0}'>{1}<\/style>".format(o,rt));$("*").each(ct);$(it).each(ht);$(
document).on(MsPortalFx.Base.EventTypes.mousedown,h,g);$(document).on(MsPortalFx.Base.EventTypes.mousedown,
e,nt)}function d(){$("#"+o).remove();$(a).remove();$(e).remove();$(document).off(MsPortalFx.Base.EventTypes.
mousedown,h,g);$(document).off(MsPortalFx.Base.EventTypes.mousedown,e,nt)}function ht(){var t=$(this),
n=ko.dataFor(t[0]),i=n&&n.commandDefinition&&n.commandDefinition.text,r=$("<span class='{0}' title='Click to log composition, widget, and definition info to console'>{1}<\/span>".
format(l,i));t.append(r)}function ct(){var f=$(this),n=f.data().MsPortalImplCompositionInstance,s,r;
if(n){var a=n.extension&&n.extension.name||n.locator.parent.name,g=n.bladeDefinition||n.partDefinition,
e=n._name,p=n.locator.name,w="{0}: {1} > {2}".format(e,a,p),t=$("<div class='{0}'><span class='{1}' title='Click to log composition, widget, and definition info to console'>{2}<\/span><\/div>".
format(o,v,w));if(f.append(t),e==="Blade"){s=i.getDeepLinkFromBladeComposition(n);r=$("<a style='width: 98%; overflow: hidden; text-overflow: ellipsis;' href='{0}' title='{0}' target='_blank'>{0}<\/a>".
format(s));r.on(MsPortalFx.Base.EventTypes.click,function(n){n.stopPropagation()});t.append("<br>").
append(r)}if(n.editScopeId&&n.editScopeId()){var b="<span class='{0}' title='Click to log unsaved edits to console' data-bind=\"text: title, css: { '{1}': dirty }, click: onEditsClicked\"><\/span>".
format(y,c),k=t.append("<br>").append($(b))[0],h=n.services.editScopeManager,l=n.editScopeId(),u=h.getDirtyObservable(
l),d={title:ko.computed(function(){return"EditScope has "+(u()?"":"no ")+"unsaved edits."}),dirty:u,
onEditsClicked:function(){u()&&h.logEditsToConsole(l)}};ko.applyBindings(d,k)}}}function g(n){n.preventDefault(
);n.stopPropagation();var e=$(this).parent().parent(),i=e.data(),t=i.MsPortalImplCompositionInstance,
r=i&&i.fxWidgetTypes&&i.fxWidgetTypes[0],u=t.bladeDefinition||t.partDefinition||t.actionBarDefinition,
o=r&&r.options,f={composition:t,definition:u,viewModel:o,viewModelName:u&&u.viewModel,widget:r,inputs:
t&&t._inputPropertyBindings&&t._inputPropertyBindings._targetModel};console.debug($(n.target).text()+
" (Stored globally as tempDebugInfo)\n",f);window.tempDebugInfo=f}function nt(n){var r,t,i;(n.preventDefault(
),n.stopPropagation(),r=$(this).parent(),t=ko.dataFor(r[0]),t)&&(i={command:t,definition:t.commandDefinition,
extensionName:t._extension&&t._extension.name,viewModelName:t.commandDefinition&&t.commandDefinition.
viewModel,widgetViewModel:t.widgetViewModel},console.debug($(n.target).text()+" (Stored globally as tempDebugInfo)\n",
i),window.tempDebugInfo=i)}function lt(){var i=[],t={},u,n;window.debugUserSettings=t;for(u in r.SettingStore)
i.push(u);n=0;i.forEach(function(i){isNaN(i)||(n++,f.settings.querySettings({store:i,keys:[]}).then(
function(n){var u=r.getSettingStoreName(i);t[u]=n;u==="Journeys"&&vt(n)}).finally(function(){n--;n||
console.debug("User settings (stored as window.debugUserSettings)",t)}))})}function at(n,t){for(var r=
t.split("."),u=r.length,i=0;i<u-1;i++)if(n=n[r[i]],!n)return null;return n[r[i]]}function vt(n){var t=
{},i={},r=n.Startboard.children;r.forEach(function(r){var u=n[r],f=u.locator.name+" - "+r;t[f]=u;at(
u,"partState.v.container.v.selectable.v.isSelected.v")&&(i[f]=u)});console.debug("StartBoard settings:",
{totalStartBoardParts:r.length,parts:t,selectedParts:i})}function yt(){var n="fxsettingsclearpending";
$(t).prepend("<div id='{0}'>Clearing user settings...<\/div>".format(n));f.settings.clearSettings().
then(function(){$("#"+n).remove()})}function pt(){var n="fxsettingssavepending";$(t).prepend("<div id='{0}'>Saving user settings...<\/div>".
format(n));f.settings.flushSettings().then(function(){$("#"+n).remove()})}function wt(){var n="fxtelemetryflushpending";
$(t).prepend("<div id='{0}'>Flushing telemetry...<\/div>".format(n));MsPortalFx.Base.Diagnostics.Telemetry.
flush().then(function(){$("#"+n).remove()})}function bt(){console.debug("Desktop Manager:\n",w);console.
debug("Portal Services:\n",f)}function kt(){var n,t,r,e;tt();n=new u.Uri(location.href);t="";n.getQueryStringValue(
"clientOptimizations")!=="false"&&(t='<a href="{0}">ClientOptimizations Off<\/a>'.format(n.setQueryStringValue(
"clientOptimizations","false").href));var o=$("<span>User Settings: <\/span>").append($("<a>Dump<\/a>").
on(MsPortalFx.Base.EventTypes.click,lt)).append(" | ").append($("<a id='fxsettingssave'>Save<\/a>").
on(MsPortalFx.Base.EventTypes.click,pt)).append(" | ").append($("<a id='fxsettingsclear'>Clear<\/a>").
on(MsPortalFx.Base.EventTypes.click,yt)),h=$("<a id='fxtelemetryflush'>Flush Telemetry<\/a>").on(MsPortalFx.
Base.EventTypes.click,wt),c=$("<a>Dump Portal Services<\/a>").on(MsPortalFx.Base.EventTypes.click,bt),
l=$("<div><\/div>").append(t).append("<br>").append(o).append("<br>").append(h).append("<br>").append(
c).append("<br>"),i=$("<div class='{0}'><\/div>".format(s)).append(l);if($("body").append("<style type='text/css' id='{0}'>{1}<\/style>".
format(s,ut)),$("body").append(i),f.extensionManager){r=[];f.extensionManager.getExtensions().forEach(
function(n){var t=$("<a title='Click to log extension info to console'>"+n.name+"<\/a><br>");t.on(MsPortalFx.
Base.EventTypes.click,function(){var i={definition:n.definition,extension:n,manifest:n.manifest};window.
tempDebugInfo=i;console.debug(t.text()+" (Stored globally as tempDebugInfo)\n",i)});i.append(t);n.definition&&
n.definition.blades&&n.definition.blades.forEach(function(t){if(t.pinnable!==!1&&t.pinnedPart){var i=
"#blade/"+n.name+"/"+t.name;t.inputs&&t.inputs.forEach(function(n){i+="/"+n+"/"});r.push(i)}})});e=$(
'<a title="Click to log all blade links">Blade Links<\/a><br>');e.on(MsPortalFx.Base.EventTypes.click,
function(){console.debug(r.join("\n"))});i.append(e)}}function tt(){$(t).remove();$("#"+s).remove()}
var it=".fxs-commandBar-item",l="debug-command-label",e="."+l,o="debug-composition-label",a="."+o,v=
"debug-composition-title",h="."+v,y="debug-composition-edits",p="."+y,c="debug-composition-has-edits",
s="debug-box",t="."+s,rt="{0}, {1} {background-color: yellow !important; color: black; padding: 3px; z-index: 99999; position: absolute; top: 0; left: 0; font-size: 12px; border: 1px solid grey; }".
format(a,e)+"{0}:hover, {1}.{2}:hover, {3}:hover {cursor: help; background-color: orange !important; z-index: 199999 !important;}".
format(h,p,c,e)+"{0}.{1} { background-color: #c84fd7 !important; font-weight: bold }".format(p,c),ut=
"{0} {color: black; position: fixed; font-size: 12px; bottom: 0; right: 0; background-color: yellow !important; opacity: 0.8; border: 1px solid grey;}".
format(t)+"{0} a {color: blue; text-decoration: underline; cursor: pointer;}".format(t),f,w;n.initialize=
ft;n.dispose=et}(f||(f={})),f});define("MsPortalImpl/Extension/ExtensionMetadataSource",["require","exports",
"MsPortalImpl/Resources/ImplScriptResources","../Services/Services.Settings","../Services/Services.Settings.Schema",
"../Services/Services.Storage","../UI/UI.DialogManager","../Base/Base.UriHelper"],function(n,t,i,r,u,
f,e,o){var s;return function(t){"use strict";function rt(n,t,i,r,u){var f=new l(n,t,i,r,u,d,s.isDevelopmentMode,
g);return MsPortalImpl.Extension=f,f}function a(n){return n?typeof n.name!="string"?(r.error("Invalid name specified for extension",
1,n),!1):typeof n.uri!="string"||!n.uri?(r.error("Invalid uri specified for extension",1,n),!1):!0:(
r.error("A metadata instance is required",1,n),!1)}function ut(n){if(!tt.test(n)){var t="Disallowed location for test extension: '{0}'. Test extensions registered by this method are only allowed on 'localhost'.".
format(n);return r.error(t,1),!1}return!0}function p(n,t,i){n!==null&&t!==null&&t.forEach(function(t)
{i&&i(t);v(n,t)})}function v(n,t){var i=n.first(function(n){return n.name===t.name});t.trustedHost||
(t.trustedHost="*");i?(i.name=t.name,i.uri=t.uri,i.features=t.features,i.trustedHost=t.trustedHost,i.
startBoardParts=t.startBoardParts):n.push(t)}function w(n,t){var i=n.firstIndex(function(n){return n.
name===t});return i>=0?(n.splice(i,1),!0):!1}var y,l;(function(n){n[n.GetExtensionsFailed=0]="GetExtensionsFailed";
n[n.InvalidMetadata=1]="InvalidMetadata";n[n.ListExtensionsFailed=2]="ListExtensionsFailed";n[n.NoModifiedExtensionsFound=
3]="NoModifiedExtensionsFound";n[n.RegisterExtensionFailed=4]="RegisterExtensionFailed";n[n.UnregisterAllExtensionsFailed=
5]="UnregisterAllExtensionsFailed";n[n.UnregisterExtensionFailed=6]="UnregisterExtensionFailed";n[n.
UsingModifiedExtensions=7]="UsingModifiedExtensions"})(y||(y={}));var b=jQuery,k=window,r=MsPortalFx.
Base.Diagnostics.createLog(n),s=k.fx.environment,f=i.Shell.Dialogs,h=u.testExtensionsKey,c=0,d=s.features.
canmodifyextensions==="true",g=s.features.canmodifystamps==="true",nt="testExtensions",tt=/^(https?:)?\/\/localhost(\:\d+)?(\/|$)/,
it=5e3;t.initialize=rt;l=function(){function n(n,t,i,r,u,f,e,o){o===void 0&&(o=!1);this._temporaryTestExtensions=
[];this._trustedExtensions=n;this._settingsManager=t;this._storageService=i;this._dialogManager=r;this.
_dialogContainer=u;this._canModifyExtensions=f;this._acceptWithoutPrompt=e;this._canModifyStamps=o}return n.
prototype.getExtensionsMetadata=function(){var n=this,t=[],i=JSON.parse(JSON.stringify(this._trustedExtensions));
return Q(i).then(function(t){return n._loadExtensionsFromServer(t).timeout(it,"Timed out fetching metadata for extensions from the server.").
then(function(n){return n.length>0&&p(t,n),t},function(){return t})}).then(function(i){return n._loadUntrustedExtensions(
).then(function(n){if(n.length>0){var u=function(n){r.warning("Extension '{0}' is running untrusted code from '{1}'".
format(n.name,n.uri),7,n)};t=n.map(function(n){return n.name});p(i,n,u)}return i})}).then(function(i)
{return{items:i,testExtensionNames:t,canModifyStamps:n._canModifyStamps}})},n.prototype.listTestExtensions=
function(){var n=this._temporaryTestExtensions.slice(0);return this._settingsManager.querySetting(c,
h).then(function(t){return Array.isArray(t)&&(n=n.concatUnique(t,function(n,t){return n.name===t.name}
)),n.filter(a)}).then(null,function(n){return r.error("Error listing extentions",2,n),[]})},n.prototype.
registerTestExtension=function(n,t){var i=this;return a(n)?t?(v(this._temporaryTestExtensions,n),Q.resolve(
null)):this.listTestExtensions().then(function(t){return v(t,n),i._settingsManager.setSetting(c,h,t).
then(function(){return i._settingsManager.flushSettings()})}).catch(function(t){r.error("Error registering extention",
4,{metadata:n,error:t})}):Q.reject()},n.prototype.registerTestExtensionsFromUri=function(n){var r=this,
u=new o.Uri(n),i=u.getHashQueryStringValue(nt),t;return i?(t=JSON.parse(decodeURIComponent(i)),Q.allSettled(
Object.getOwnPropertyNames(t).map(function(n){return r._registerTestExtensionFromUri({name:n,uri:t[n]})}
))):Q(null)},n.prototype.unregisterTestExtension=function(n){var t=this;return w(this._temporaryTestExtensions,
n),this.listTestExtensions().then(function(i){if(w(i,n))return t._settingsManager.setSetting(c,h,i).
then(function(){return t._settingsManager.flushSettings()})}).catch(function(t){r.error("Error unregistering extention",
6,{name:n,error:t})})},n.prototype.unregisterAll=function(){var n=this;return this.clearTemporaryTestExtensions(
),this._settingsManager.deleteSettings({store:c,keys:[h]}).then(function(){return n._settingsManager.
flushSettings()}).catch(function(n){r.error("Error registering all extentions",5,n)})},n.prototype.clearTemporaryTestExtensions=
function(){this._temporaryTestExtensions.splice(0,this._temporaryTestExtensions.length)},n.prototype.
_loadExtensionsFromServer=function(n){var t=s.extensionsUri,i;return t?(i={uri:t},Q(MsPortalFx.Base.
Net.postJSON(i,n))):Q([])},n.prototype._loadUntrustedExtensions=function(){var n=this;return this._canModifyExtensions?
this.listTestExtensions().then(function(t){return t.length===0?(n._canModifyExtensions&&r.verbose("No untrusted extensions were found. Will load the portal in normal mode.",
3),[]):n.prompt().then(function(n){return n?t:[]})}):Q([])},n.prototype.prompt=function(){var i=this,
r=4,u="loadUntrustedExtensions",o=1,s=this._storageService.getValue(r,u,o),n,t;return s||this._acceptWithoutPrompt?
Q(!0):(n=b("<div />"),t=new e.MessageBox(f.untrustedExtensionsTitle,f.untrustedExtensionsDescriptionFmt.
format(f.loadOnlySafeExtensionsButtonText),2),this._dialogContainer.prepend(n),t.defaultButtonText=f.
loadOnlySafeExtensionsButtonText,t.cancelButtonText=f.loadUnsafeExtensionsButtonText,this._dialogManager.
showDialog(n,t,null).then(function(t){var f=t===1;return i._dialogManager.dismissOpenDialog(),n.remove(
),f?i._storageService.setValue(r,u,"true",o):i._storageService.clearValue(r,u,o),f}))},n.prototype._registerTestExtensionFromUri=
function(n){return a(n)&&ut(n.uri)?this.registerTestExtension(n,!0):null},n}();t.ExtensionMetadataSourceImpl=
l}(s||(s={})),s});define("MsPortalImpl/Services/Services.AssetManagement",["require","exports","../Services/Services.Settings",
"./Services.Settings.Schema","../Services/Services.Storage","../Services/Services.PortalIdentity"],function(
n,t,i,r,u,f){var e=MsPortalFx.ViewModels.Services.ResourceTypes,o;return function(n){"use strict";function c(
n,i){return new t(f.getSignedInUser(),n,i,MsPortalFx.Base.Rpc.Internal.client)}var h="AssetMruList",
u=50,o=r.assetMruListKey,s=1,t,i;n.createAssetManager=c;t=function(){function n(n,t,i,r){var u=this;
this._assetDeletedCallbacks=$.Callbacks();this._deletedAssets={};this._storageService=i;this._settingsService=
t;this._portalIdentity=n;r&&MsPortalFx.Internal.AssetManager.notifyAssetDeletedDefinition.register(r,
null,function(n,t){u.handleAssetDeleted(t.srcWindowId,n.assetType,n.assetId)})}return n.prototype.onAssetDeleted=
function(n){this._assetDeletedCallbacks.add(n)},n.prototype.isAssetDeleted=function(t,i,r){var f=n._makeKeyForExtensionWithAssetType(
t,i),u=this._deletedAssets[f];return u&&u.first(function(n){return MsPortalFx.Base.Utilities.deepEquals(
n,r)})},n.prototype.markAssetDeleted=function(n,t,i){this.handleAssetDeleted(n,t,i)},n.prototype.handleAssetDeleted=
function(t,i,r){if(!this.isAssetDeleted(t,i,r)){var u=n._makeKeyForExtensionWithAssetType(t,i),f=this.
_deletedAssets[u]||(this._deletedAssets[u]=[]);f.push(r)}this._assetDeletedCallbacks.fire(t,i,r)},Object.
defineProperty(n.prototype,"assetMruList",{get:function(){var n=this;if(!this._assetMruList){this._assetMruList=
new i(this._portalIdentity,this._settingsService,this._storageService);this.onAssetDeleted(function(
t,i,r){return n._assetMruList.removeAssetEntry(t,i,r)})}return this._assetMruList},enumerable:!0,configurable:
!0}),n._makeKeyForExtensionWithAssetType=function(n,t){return n+":"+t},n}();n.AssetManagerImpl=t;i=function(
){function n(t,i,r,f,e){var o=this,s;this._list=new MsPortalFx.Base.LruMap(u);this._observableList=null;
this._storageService=r;this._settingsService=i;this._storageKey="{0}##{1}".format(h,t.perTenantId);this.
_logDelay=MsPortalFx.Base.Utilities.isNullOrUndefined(f)?n._defaultLogDelay:f;this._debouncer=new MsPortalFx.
Base.Debouncer(n._mergeNewAssetAccessEntries,function(n){return o._logAssetAccess(n)},this._logDelay);
this._cloudSyncDelay=e;MsPortalFx.Util.isNullOrUndefined(this._cloudSyncDelay)&&(s=n._maxCloudSyncInterval-
n._minCloudSyncInterval,this._cloudSyncDelay=Math.round(s*Math.random()+n._minCloudSyncInterval));this.
_cloudSettingsSyncScheduler=new MsPortalFx.Base.Debouncer(function(){return undefined},function(){return o.
_startSyncSettingsFromCloud()},this._cloudSyncDelay);this._restoreFromLocalStorage()}return n.prototype.
logAssetAccess=function(n,t,i,r){var u={extension:n,assetType:t,assetId:i,assetName:r,timeStamp:Date.
now()};this._logDelay?this._debouncer.execute([u]):this._logAssetAccess([u])},Object.defineProperty(
n.prototype,"mruList",{get:function(){return this._observableList||(this._observableList=ko.observableArray(
this._list.getList())),this._observableList},enumerable:!0,configurable:!0}),n.prototype.removeAssetEntry=
function(t,i,r){var u=n._getKey(t,i,r);this._list.remove(u);this.updateObservableList();this._writeToLocalStorage(
)},n.prototype.onCloudSyncFinished=function(n){this._cloudSyncCompletedCallback=n},n._mergeNewAssetAccessEntries=
function(n,t){return t},n.prototype._logAssetAccess=function(t){var i=this;return t.forEach(function(
t){var u=n._getKey(t.extension,t.assetType,t.assetId),r=i._list.getOrAdd(u,function(){return t});r.assetName=
t.assetName;r.timeStamp=t.timeStamp}),this.updateObservableList(),this._writeToLocalStorage(),this._queueSyncToUserSettings(
t),$.Deferred().resolve().promise()},n.prototype.updateObservableList=function(){this._observableList&&
this._observableList.splice.apply(this._observableList,[0,this._observableList().length].concat(this.
_list.getList()))},n.prototype._writeToLocalStorage=function(){this._storageService.setValue(3,this.
_storageKey,JSON.stringify(this._list.getList()),s)},n.prototype._queueSyncToUserSettings=function(n)
{this._cloudSyncDelay?this._cloudSettingsSyncScheduler.execute(n):this._startSyncSettingsFromCloud()}
,n.prototype._restoreFromLocalStorage=function(){var t;t=this._storageService.getValue(3,this._storageKey,
s);MsPortalFx.Util.isNullOrUndefined(t)?this._startSyncSettingsFromCloud():n._tryLoadLruList(JSON.parse(
t),this._list)&&this.updateObservableList()},n.prototype._startSyncSettingsFromCloud=function(){var t=
this,i=function(){return t._settingsService.setSetting(0,o,t._list.getList()).then(function(){t._cloudSyncCompletedCallback&&
t._cloudSyncCompletedCallback()})};return this._settingsService.querySetting(0,o).then(function(r){var
f=new MsPortalFx.Base.LruMap(u);return n._tryLoadLruList(r,f)&&(t._list.merge(f,function(n,t){return t.
timeStamp-n.timeStamp}),t.updateObservableList()),i()})},n._tryLoadLruList=function(t,i){var r=t;return r&&
Array.isArray(r)?(r.reverse().forEach(function(t){var r=n._getKey(t.extension,t.assetType,t.assetId);
i.addOrUpdate(r,t)}),!0):!1},n._getKey=function(n,t,i){var r=i;return e.isResourceId(r)?r=e.buildLowerCaseResourceId(
r):e.isResourceGroupId(r)?r=e.buildLowerCaseResourceGroupId(r):typeof i!="string"&&(r=MsPortalFx.Base.
Utilities.toSortedString(i)),n+":"+t+":"+r},n._defaultLogDelay=1e4,n._minCloudSyncInterval=24e4,n._maxCloudSyncInterval=
42e4,n}();n.AssetMruListImpl=i}(o||(o={})),o});define("MsPortalImpl/Services/Services.AssetTypes",["require",
"exports","../Base/Base.ItemCache","./Services.AssetTypes.Utils"],function(n,t,i,r){var u;return function(
t){"use strict";function b(n){return new a(n)}function k(n,t){return new v(n,t)}var d=MsPortalFx.ViewModels.
Services.DynamicBlade,o=MsPortalFx.Base.Utilities,u=MsPortalFx.ViewModels.Services.ResourceTypes,f=MsPortalFx.
Base.Diagnostics.createLog(n),y=MsPortalFx.Internal.Constants.RpcMethods,p=3e4,w=3e5,s=216e5,h=MsPortalFx.
Base.Constants.ExtensionNames.Hubs,c=MsPortalFx.Base.Constants.AssetNames.ResourceGroups,l,e,a,v;t.allAssetTypesRetrievalTimeout=
window.fx.environment.isDevelopmentMode?5e4:2e4;l=function(){function n(){}return n}();t.AssetType=l;
t.createAssetTypeService=b;t.createAssetTypeServiceRpc=k,function(n){n.getAssetTypeInformationOverride;
n.getResourceTypeAssetTypeInformationOverride;n.mapAssetIdToDynamicSelectionAndIconOverride}(e=t.Internal||
(t.Internal={}));a=function(){function n(n){this._extensionAssetTypes=ko.observableArray([]);this._assetTypePromises=
[];this._assetTypeFromResourceTypePromises=[];this._resourceTypeMappingPromises=[];this._selectionAndIconFromAssetIdPromises=
[];this._selectionAndIconFromResourceIdPromises=[];this._resourceReferencePromises=[];this._resourceMappingCache=
new i.LifetimeItemCache(p);this._resourceAssetIdCache=new i.ItemArrayCache(s);this._assetIdDynamicSelectionAndIconCache=
new i.ItemArrayCache(s);this._resourceIdDynamicSelectionAndIconCache=new i.ItemArrayCache(s);this._resourceReferenceCache=
new i.ItemCache(w);this._extensionManager=n;this._listenForExtensions();r.connectTelemetry()}return n.
prototype.dispose=function(){this._resourceMapProviderLifetimeManager&&(this._resourceMapProviderLifetimeManager.
dispose(),this._resourceMapProviderLifetimeManager=null);this._resourceReferenceCache.dispose();this.
_resourceIdDynamicSelectionAndIconCache.dispose();this._assetIdDynamicSelectionAndIconCache.dispose(
);this._resourceAssetIdCache.dispose();this._resourceMappingCache.dispose()},Object.defineProperty(n.
prototype,"assetTypes",{get:function(){return this._extensionAssetTypes},enumerable:!0,configurable:
!0}),n.prototype.getAssetType=function(n,t){return this._extensionAssetTypes().first(function(i){return i.
extension===n&&i.assetTypeManifest.name===t})},n.prototype.getAssetTypePromise=function(n,t){return this.
_getAssetType(n,t)},n.prototype.getAssetTypeFromResourceType=function(n){var t=n.toLowerCase();return this.
_extensionAssetTypes().first(function(n){return n.assetTypeManifest.resourceType&&n.assetTypeManifest.
resourceType.resourceTypeName.toLowerCase()===t})},n.prototype.getAssetTypeFromResourceTypePromise=function(
n){return this._getAssetTypeForResourceType(n)},n.prototype.getAssetTypeInformation=function(n,t){return e.
getAssetTypeInformationOverride?e.getAssetTypeInformationOverride(n,t):this.getAssetTypePromise(n,t).
then(function(n){return{browseType:n.assetTypeManifest.browseType!==undefined?n.assetTypeManifest.browseType:
-1,compositeDisplayName:n.compositeDisplayName,icon:n.icon,viewModel:n.assetTypeManifest.viewModel,contracts:
n.assetTypeManifest.contracts}})},n.prototype.getResourceTypeAssetTypeInformation=function(n){return this.
_getResourceTypeAssetTypeInformation(n,!0)},n.prototype.tryGetResourceTypeAssetTypeInformation=function(
n){return this._getResourceTypeAssetTypeInformation(n,!1)},n.prototype.mapAssetIdToResourceId=function(
n){return this.tryMapAssetIdToResourceId(n).catch(function(n){n&&f.error(n.message||n);throw n;})},n.
prototype.tryMapAssetIdToResourceId=function(n){var t=this;return r.timePromise("mapAssetIdToResourceId",
function(){var i=t._resourceAssetIdCache.first(function(t){return t.assetId.extensionName===n.extensionName&&
t.assetId.assetType===n.assetType&&o.deepEquals(t.assetId,n.assetId)});return i?Q.resolve(i.resourceId):
t._getAssetType(n.extensionName,n.assetType).then(function(i){if(!i.assetTypeManifest.resourceType)return Q.
reject("Asset type does not specify a resource type.");var r=function(i){return t._resourceAssetIdCache.
pushEntry({assetId:n,resourceId:i}),i};return n.extensionName===h&&n.assetType===c&&u.isResourceGroupId(
n.assetId)?r(n.assetId):u.isResourceId(n.assetId)?r(n.assetId):i.assetTypeManifest.resourceType.mappingViewModel?
t._getMappingViewModel(i).then(function(t){return t.mapAssetIdToResourceId(n.assetId).then(function(
n){return r(n)})}):Q.reject("Asset ID was not a resource ID but asset type does not provider mapping view model.")}
)})},n.prototype.mapResourceIdToAssetId=function(n){return this.tryMapResourceIdToAssetId(n).catch(function(
n){n&&f.error(n.message||n);throw n;})},n.prototype.tryMapResourceIdToAssetId=function(n){var t=this;
return r.timePromise("mapResourceIdToAssetId",function(){var i=t._resourceAssetIdCache.first(function(
t){return u.compareResourceId(t.resourceId,n)}),r;return i?Q.resolve(i.assetId):(r=u.buildResourceTypeFromResourceId(
n),t._getAssetTypeForResourceType(r).then(function(i){if(!i.assetTypeManifest.resourceType)return Q.
reject("Asset type does not specify a resource type.");var r=function(r){var u={extensionName:i.extension,
assetType:i.assetTypeManifest.name,assetId:r};return t._resourceAssetIdCache.pushEntry({assetId:u,resourceId:
n}),u};return i.assetTypeManifest.resourceType.mappingViewModel?t._getMappingViewModel(i).then(function(
t){return t.mapResourceIdToAssetId(n).then(function(n){return r(n)})}):r(n)}))})},n.prototype.mapAssetIdToDynamicSelectionAndIcon=
function(n,t){return this.tryMapAssetIdToDynamicSelectionAndIcon(n,t).catch(function(n){n&&f.error(n.
message||n);throw n;})},n.prototype.tryMapAssetIdToDynamicSelectionAndIcon=function(n,t){var i=this;
return r.timePromise("mapAssetIdToDynamicSelectionAndIcon",function(){var r=i._assetIdDynamicSelectionAndIconCache.
first(function(i){return i.assetId.extensionName===n.extensionName&&i.assetId.assetType===n.assetType&&
o.deepEquals(i.assetId.assetId,n.assetId)&&i.forceBladeSelection===t});return r?Q.resolve(r.selectionAndIcon):
i._getAssetType(n.extensionName,n.assetType).then(function(r){return r.assetTypeManifest.resourceType?
i.mapAssetIdToResourceId(n).then(function(u){return i._getDynamicSelectionAndIconFromResourceId(r,u,
n,t)}):i._getDynamicSelectionAndIconFromAssetId(r,n,t)}).then(function(r){return i._assetIdDynamicSelectionAndIconCache.
pushEntry({assetId:n,forceBladeSelection:t,selectionAndIcon:r}),r})})},n.prototype.mapResourceIdToDynamicSelectionAndIcon=
function(n,t){return this.tryMapResourceIdToDynamicSelectionAndIcon(n,t).catch(function(n){n&&f.error(
n.message||n);throw n;})},n.prototype.tryMapResourceIdToDynamicSelectionAndIcon=function(n,t){var i=
this;return r.timePromise("mapResourceIdToDynamicSelectionAndIcon",function(){var r=i._resourceIdDynamicSelectionAndIconCache.
first(function(i){return u.compareResourceId(i.resourceId,n)&&i.forceBladeSelection===t}),f;return r?
Q.resolve(r.selectionAndIcon):(f=u.buildResourceTypeFromResourceId(n),i._getAssetTypeForResourceType(
f).then(function(r){if(r.assetTypeManifest.resourceType)return i.mapResourceIdToAssetId(n).then(function(
u){return i._getDynamicSelectionAndIconFromResourceId(r,n,u,t)})}).then(function(r){return i._resourceIdDynamicSelectionAndIconCache.
pushEntry({resourceId:n,forceBladeSelection:t,selectionAndIcon:r}),r}))})},n.prototype.getRegisteredAssetTypesInformation=
function(){var r=this,n,i=Q.defer(),u="Timed out waiting for all the asset types information",f=Q(this.
_extensionManager.extensionLoader.allManifestsLoaded);return f.then(function(){n={assetTypesInformation:
r._getAssetTypeInformation(),isPartialSet:!1};i.resolve(n)},function(t){var u=r._getAssetTypeInformation(
);u&&u.length?(n={assetTypesInformation:u,isPartialSet:!0},i.resolve(n)):i.reject("Failed to get registered asset types information with an error...{0}".
format(t))}),Q.timeout(f,t.allAssetTypesRetrievalTimeout,u).catch(function(t){t&&t.code==="ETIMEDOUT"&&
t.message===u&&(n={assetTypesInformation:r._getAssetTypeInformation(),isPartialSet:!0},i.notify(n))}
),i.promise},n.prototype.getDiagnosticsData=function(){var n=[];return this.assetTypes().forEach(function(
t){var i={name:t.assetTypeManifest.name,hasIcon:!!t.icon,displayName:t.compositeDisplayName.plural,hasBrowseService:
!!t.assetTypeManifest.browseServiceViewModel,hasGridColumnService:!!t.assetTypeManifest.gridColumnsServiceViewModel,
hasDynamicBladeService:!!t.assetTypeManifest.dynamicBladeServiceViewModel,hasPropertyProviderService:
!!t.assetTypeManifest.propertyProviderServiceViewModel,hasResourceTypeService:!!t.assetTypeManifest.
resourceTypeServiceViewModel};t.assetTypeManifest.resourceType&&(i.resourceType=t.assetTypeManifest.
resourceType.resourceTypeName);n.push(i)}),{assetTypes:n}},n.prototype._getAssetType=function(n,t){var
u=this,r=this._assetTypePromises.first(function(i){return i.extension===n&&i.assetType===t}),i;return r?
r.promise:(i=this._getAssetTypePromise(function(){return u.getAssetType(n,t)}),this._assetTypePromises.
push({extension:n,assetType:t,promise:i}),i)},n.prototype._getAssetTypeForResourceType=function(n){var
r=this,i=this._assetTypeFromResourceTypePromises.first(function(t){return t.resourceType===n}),t;return i?
i.promise:(t=this._getAssetTypePromise(function(){return r.getAssetTypeFromResourceType(n)}),this._assetTypeFromResourceTypePromises.
push({resourceType:n,promise:t}),t)},n.prototype._getMappingViewModel=function(n){var i=this,t,r,u;return this.
_resourceMappingCache.hasEntry(n.id)?Q.resolve(this._resourceMappingCache.getEntry(n.id)):(t=this._resourceTypeMappingPromises.
first(function(t){return t.resourceType===n.assetTypeManifest.resourceType.resourceTypeName}),t)?t.promise:
(r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,u=this._getResourceTypeMappingPromiseForAssetType(
n,r).then(function(u){return i._resourceMappingCache.addEntry(n.id,u,r),t=i._resourceTypeMappingPromises.
first(function(t){return t.resourceType===n.assetTypeManifest.resourceType.resourceTypeName}),t&&i._resourceTypeMappingPromises.
remove(t),u}),this._resourceTypeMappingPromises.push({resourceType:n.assetTypeManifest.resourceType.
resourceTypeName,promise:u}),u)},n.prototype._buildDynamicAssetSelectionAndIcon=function(n,t){return{
icon:n.icon,selection:{extension:n.extension,assetType:n.assetTypeManifest.name,detailBladeInputs:{id:
t}}}},n.prototype._buildDynamicBladeSelectionAndIcon=function(n,t,i,r,u){return i===void 0&&(i=null),
r===void 0&&(r=null),u===void 0&&(u=null),{icon:u||n.icon,selection:{extension:r||n.assetTypeManifest.
bladeExtensionName||n.extension,detailBlade:i||n.assetTypeManifest.bladeName,detailBladeInputs:{id:t}}}}
,n.prototype._getDynamicSelectionAndIconFromAssetId=function(n,t,i){var u=this,f=this._buildDynamicAssetSelectionAndIcon(
n,t.assetId),e=this._buildDynamicBladeSelectionAndIcon(n,t.assetId),s=this._selectionAndIconFromAssetIdPromises.
first(function(n){return n.assetId.extensionName===t.extensionName&&n.assetId.assetType===t.assetType&&
o.deepEquals(n.assetId.assetId,t.assetId)&&n.flag===i}),r;return s?s.promise:(r=function(n){return u.
_selectionAndIconFromAssetIdPromises.push({assetId:t,flag:i,promise:n}),n},n.assetTypeManifest.dynamicBladeServiceViewModel)?
r(this._getDynamicBladeReference(n,t).then(function(r){return r?u._buildDynamicBladeSelectionAndIcon(
n,t.assetId,r.blade,r.extension):i?e:f})):r(Q.resolve(i?e:f))},n.prototype._getDynamicSelectionAndIconFromResourceId=
function(n,t,i,r){var e=this,f=this._buildDynamicAssetSelectionAndIcon(n,i.assetId),u=this._buildDynamicBladeSelectionAndIcon(
n,i.assetId),o,s;return n.extension===h&&n.assetTypeManifest.name===c?Q.resolve(f):(o=this._selectionAndIconFromResourceIdPromises.
first(function(n){return n.resourceId===t&&n.flag===r}),o)?o.promise:(s=this._getResourceReference(t).
then(function(t){if(t.error)throw t.error;return e._getResourceTypesCache().then(function(o){if(t.result.
kind){var h=t.result.type.toLowerCase(),c=t.result.kind.toLowerCase(),s=!1;if(o.some(function(n){return n.
resourceType.toLowerCase()===h?n.kinds.some(function(n){return n.kind.toLowerCase()===c?(n.icon&&(f.
icon={type:1,data:n.icon},u.icon={type:1,data:n.icon}),n.blade&&(u.selection.extension=n.blade.extension,
u.selection.detailBlade=n.blade.name,s=!0),!0):!1}):!1})&&s)return Q.resolve(u)}return n.assetTypeManifest.
dynamicBladeServiceViewModel?e._getDynamicBladeReference(n,i).then(function(t){return t?e._buildDynamicBladeSelectionAndIcon(
n,i.assetId,t.blade,t.extension,u.icon):r?u:f}):r?u:f})}),this._selectionAndIconFromResourceIdPromises.
push({resourceId:t,flag:r,promise:s}),s)},n.prototype._getResourceTypesCache=function(){return this.
_resourceTypesCachePromise?this._resourceTypesCachePromise:(this._resourceTypesCachePromise=this._getResourceMapProvider(
).then(function(n){return n.getResourceTypeCache()}),this._resourceTypesCachePromise)},n.prototype._getResourceReference=
function(n){var t=this,i,r;return this._resourceReferenceCache.hasEntry(n)?Q.resolve(this._resourceReferenceCache.
getEntry(n)):(i=this._resourceReferencePromises.first(function(t){return t.resourceId===n}),i)?i.promise:
(r=this._getResourceMapProvider().then(function(i){return i.getResource(n).then(function(i){t._resourceReferenceCache.
addEntry(n,i);var r=t._resourceReferencePromises.first(function(t){return t.resourceId===n});return r&&
t._resourceReferencePromises.remove(r),i})}),this._resourceReferencePromises.push({resourceId:n,promise:
r}),r)},n.prototype._getDynamicBladeReference=function(n,t){var i=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;
return this._getDynamicBladePromiseForAssetType(n,i).then(function(n){if(typeof n.onInputsSet!="function")
return null;var i=n.onInputsSet({assetId:t.assetId,usage:0});return i?i.then(function(){return n},function(
){return null}):n}).then(function(n){return n&&n.bladeName()?{blade:n.bladeName(),extension:n.extensionName(
)}:null}).finally(function(){i.dispose();i=null})},n.prototype._getDynamicBladePromiseForAssetType=function(
n,t){var i=this;return n.assetTypeManifest.dynamicBladeServiceViewModel?Q(this._extensionManager.getExtensionByName(
n.extension)).then(function(r){return Q(r.getViewModel(n.assetTypeManifest.dynamicBladeServiceViewModel)).
then(function(n){var u=!1;return(t.registerForDispose({dispose:function(){u=!0;i._releaseViewModel(r,
n)}}),!u)?n.content:Q.reject("The dynamic blade service view model was already disposed.")})}):Q.reject(
"The asset type does not have a dynamic blade service view model.")},n.prototype._getResourceMapProvider=
function(){var n=this;return this._resourceMapProviderPromise?this._resourceMapProviderPromise:(this.
_resourceMapProviderLifetimeManager||(this._resourceMapProviderLifetimeManager=new MsPortalFx.Internal.
Base.TriggerableLifetimeManager),Q(this._extensionManager.getExtensionByName(h)).then(function(t){return Q(
t.getViewModel("ResourceMap$ResourceMapProviderViewModel")).then(function(i){return(n._resourceMapProviderLifetimeManager.
registerForDispose({dispose:function(){n._releaseViewModel(t,i)}}),!0)?i.content:Q.reject("The dynamic blade service view model was already disposed.")}
)}))},n.prototype._getResourceTypeMappingPromiseForAssetType=function(n,t){var i=this;return!n.assetTypeManifest.
resourceType||!n.assetTypeManifest.resourceType.mappingViewModel?Q.reject("The resource type does not have a resource type mapping view model."):
Q(this._extensionManager.getExtensionByName(n.extension)).then(function(r){return Q(r.getViewModel(n.
assetTypeManifest.resourceType.mappingViewModel)).then(function(n){var u=!1;return(t.registerForDispose(
{dispose:function(){u=!0;i._releaseViewModel(r,n)}}),!u)?n.content:Q.reject("The resource type mapping view model was already disposed.")}
)})},n.prototype._getAssetTypeInformation=function(){var n=[];return this.assetTypes().forEach(function(
t){t.assetTypeManifest.resourceType&&n.push({resourceType:t.assetTypeManifest.resourceType.resourceTypeName,
extensionName:t.extension,assetType:t.assetTypeManifest.name,compositeDisplayName:t.compositeDisplayName,
browseType:t.assetTypeManifest.browseType,viewModel:t.assetTypeManifest.viewModel,contracts:t.assetTypeManifest.
contracts,icon:t.icon,dynamicBladeServiceViewModel:t.assetTypeManifest.dynamicBladeServiceViewModel})}
),n},n.prototype._getAssetTypePromise=function(n){var r,i=n(),u,t,f;return i?r=Q.resolve(i):(u=this.
_extensionManager.extensionLoader.getExtensions(),u&&u.length?(t=Q.defer(),f=[],u.forEach(function(r)
{var u=r.getManifest();f.push(u);u.then(function(){t.promise.isPending&&(i=n(),i&&t.resolve(i))})}),
Q.allSettled(f).then(function(){t.promise.isPending&&(i=n(),i?t.resolve(i):t.reject("Could not find the asset type after all extension manifests loaded."))}
,function(){t.promise.isPending&&t.reject("Could not find the asset type, error occurred.")}),r=t.promise):
r=Q.reject("Could not find the asset type, no extensions available.")),r},n.prototype._getResourceTypeAssetTypeInformation=
function(n,t){var o=this,r,u,i;return e.getResourceTypeAssetTypeInformationOverride?e.getResourceTypeAssetTypeInformationOverride(
n):(r=n,r.sort(),u=[],r.forEach(function(n){u.push(o.getAssetTypeFromResourceTypePromise(n).then(function(
t){return{resourceType:n,extensionName:t.extension,assetType:t.assetTypeManifest.name,browseType:t.assetTypeManifest.
browseType!==undefined?t.assetTypeManifest.browseType:-1,compositeDisplayName:t.compositeDisplayName,
icon:t.icon,viewModel:t.assetTypeManifest.viewModel,contracts:t.assetTypeManifest.contracts,dynamicBladeServiceViewModel:
t.assetTypeManifest.dynamicBladeServiceViewModel}},function(){return{resourceType:n,extensionName:null,
assetType:null,browseType:-1,compositeDisplayName:null,icon:null,viewModel:null,contracts:0}}))}),i=
Q.defer(),Q.all(u).then(function(n){i.resolve(n)},function(){i.reject();t&&f.error("Failed to resolve all the asset type promises in get resource type asset type information.")}
),i.promise)},n.prototype._listenForExtensions=function(){var t=this;this._extensionManager.onManifestLoad(
function(i){return i.assetTypes&&i.assetTypes.forEach(function(u){t._extensionAssetTypes.push({assetTypeManifest:
u,id:i.name+"_"+u.name,extension:i.name,compositeDisplayName:r.getBackwardCompatibleCompositeDisplayName(
u),icon:n._getAssetTypeIcon(u)})}),!0})},n._getAssetTypeIcon=function(n){return n&&n.icon?n.icon:MsPortalFx.
Base.Images.Blank()},n.prototype._releaseViewModel=function(n,t){MsPortalFx.Base.Utilities.disposeViewModelProperties(
t);n.releaseViewModel(t)},n}();v=function(){function n(n,t){MsPortalFx.Internal.Extension.getAssetTypeInformationEndPoint.
register(n,null,function(n){return t.getAssetTypeInformation(n.extensionName,n.assetType)});MsPortalFx.
Internal.Extension.getResourceTypeAssetTypeInformationEndPoint.register(n,null,function(n){return t.
getResourceTypeAssetTypeInformation(n)});MsPortalFx.Internal.Extension.mapAssetIdToDynamicSelectionAndIconEndPoint.
register(n,null,function(n){return t.mapAssetIdToDynamicSelectionAndIcon(n.assetId,n.forceBladeSelection)}
);n.registerObjectFactory(y.getRegisteredAssetTypesInformation,{allowedOrigin:[MsPortalFx.Base.Constants.
ExtensionNames.Hubs],allowRemoteChanges:!0,handler:function(){var n=t.getRegisteredAssetTypesInformation(
);return Q.resolve(ko.observable(n))}})}return n}()}(u||(u={})),u});define("MsPortalImpl/Base/Base.ItemCache",
["require","exports"],function(n){var t;return function(t){"use strict";var o=MsPortalFx.Base.Utilities,
i=window,h=MsPortalFx.Base.Diagnostics.createLog(n),r=1e3,u=12e4,s=function(){function n(n){var t=this;
n===void 0&&(n=u);this._cache={};this._cacheEntryMaximumAge=n;this._timeoutHandle=i.setTimeout(function(
){return t._reduceCache()},r)}return n.prototype.dispose=function(){this.flush()},n.prototype.hasEntry=
function(n){return!!this._cache[n]},n.prototype.getEntry=function(n){return this._cache[n]?(this._cache[
n].itemTimeInMillisecondsSinceEpoch=(new Date).getTime(),this._cache[n].item):undefined},n.prototype.
peekEntry=function(n){return this._cache[n]?this._cache[n].item:undefined},n.prototype.addEntry=function(
n,t){this._cache[n]&&this._deleteCacheEntry(n);this._cache[n]={itemTimeInMillisecondsSinceEpoch:(new
Date).getTime(),item:t}},n.prototype.removeEntry=function(n){this._cache[n]&&this._deleteCacheEntry(
n)},n.prototype.flush=function(){var n=this,t=Object.keys(this._cache);t.forEach(function(t){n._deleteCacheEntry(
t)})},n.prototype._deleteCacheEntry=function(n){delete this._cache[n]},n.prototype._calculateAge=function(
n){var t=(new Date).getTime();return t-n},n.prototype._isEntryExpired=function(n){return this._calculateAge(
this._cache[n].itemTimeInMillisecondsSinceEpoch)>this._cacheEntryMaximumAge},n.prototype._reduceCache=
function(){var n=this,t=Object.keys(this._cache);t.forEach(function(t){n._isEntryExpired(t)&&n._deleteCacheEntry(
t)})},n}(),f,e;t.ItemCache=s;f=function(){function n(n){var t=this;n===void 0&&(n=u);this._cache={};
this._cacheEntryMaximumAge=n;this._timeoutHandle=i.setTimeout(function(){return t._reduceCache()},r)}
return n.prototype.dispose=function(){this.flush()},n.prototype.hasEntry=function(n){return!!this._cache[
n]},n.prototype.getEntry=function(n){return this._cache[n]?(this._cache[n].itemTimeInMillisecondsSinceEpoch=
(new Date).getTime(),this._cache[n].item):undefined},n.prototype.peekEntry=function(n){return this._cache[
n]?this._cache[n].item:undefined},n.prototype.addEntry=function(n,t,i){this._cache[n]&&this._deleteCacheEntry(
n);this._cache[n]={itemTimeInMillisecondsSinceEpoch:(new Date).getTime(),item:t,lifetimeManager:i}},
n.prototype.removeEntry=function(n){this._cache[n]&&this._deleteCacheEntry(n)},n.prototype.flush=function(
){var n=this,t=Object.keys(this._cache);t.forEach(function(t){n._deleteCacheEntry(t)})},n.prototype.
_deleteCacheEntry=function(n){this._cache[n].lifetimeManager.dispose();delete this._cache[n]},n.prototype.
_calculateAge=function(n){var t=(new Date).getTime();return t-n},n.prototype._isEntryExpired=function(
n){return this._calculateAge(this._cache[n].itemTimeInMillisecondsSinceEpoch)>this._cacheEntryMaximumAge}
,n.prototype._reduceCache=function(){var n=this,t=Object.keys(this._cache);t.forEach(function(t){n._isEntryExpired(
t)&&n._deleteCacheEntry(t)})},n}();t.LifetimeItemCache=f;e=function(){function n(n){var t=this;n===void
0&&(n=u);this._cache=[];this._cacheEntryMaximumAge=n;this._timeoutHandle=i.setTimeout(function(){return t.
_reduceCache()},r)}return n.prototype.dispose=function(){this.clear()},n.prototype.first=function(n)
{var t=this._cache.first(function(t){return n(t.item)});return t&&(t.itemTimeInMillisecondsSinceEpoch=
(new Date).getTime()),t&&t.item},n.prototype.peekFirst=function(n){var t=this._cache.first(function(
t){return n(t.item)});return t&&t.item},n.prototype.pushEntry=function(n){this._cache.push({itemTimeInMillisecondsSinceEpoch:
(new Date).getTime(),item:n})},n.prototype.removeEntry=function(n){var t=this._cache.first(function(
t){return o.deepEquals(t.item,n)});t&&this._deleteCacheEntry(t)},n.prototype.removeFirst=function(n)
{var t=this._cache.first(function(t){return n(t.item)});t&&this._deleteCacheEntry(t)},n.prototype.clear=
function(){while(this._cache.length!==0)this._deleteCacheEntry(this._cache[0])},n.prototype._deleteCacheEntry=
function(n){var t=this._cache.indexOf(n);t!==-1&&this._cache.splice(t,1)},n.prototype._calculateAge=
function(n){var t=(new Date).getTime();return t-n},n.prototype._isEntryExpired=function(n){return this.
_calculateAge(n.itemTimeInMillisecondsSinceEpoch)>this._cacheEntryMaximumAge},n.prototype._reduceCache=
function(){var n=this,t=this._cache.slice();t.forEach(function(t){n._isEntryExpired(t)&&n._deleteCacheEntry(
t)})},n}();t.ItemArrayCache=e}(t||(t={})),t});define("MsPortalImpl/Services/Services.Controller",["require",
"exports"],function(){var t=MsPortalFx.Base.Diagnostics,n;return function(n){"use strict";function i(
n){var i=[n?n.flushSettings():Q.resolve(null),t.Telemetry.flush(),t.Upload.flush()];return Q.all(i)}
var r=window,u=jQuery;n.flush=i}(n||(n={})),n});define("MsPortalImpl/Services/Services.GalleryEndpoints",
["require","exports"],function(){var n;return function(n){"use strict";var t=window,i=["HubsExtension"],
r=function(){function n(n,r,u){var f=this;this._registeredEndpoints=[];this._extensionManager=r;this.
_extensionMetadataSource=u;MsPortalFx.Internal.Extension.getLocalGalleryPackagesEndpointsDefinition.
register(n,i,function(){return f._ensureAllTestExtensionsAreLoaded().then(function(){return f._registeredEndpoints.
slice(0)})});MsPortalFx.Internal.Extension.registerLocalGalleryPackagesEndpointDefinition.register(n,
null,function(n){var i=t.fx.environment;(i.isDevelopmentMode||i.features&&i.features.canmodifyextensions)&&
f._registeredEndpoints.indexOf(n)<0&&f._registeredEndpoints.push(n)})}return n.prototype._ensureAllTestExtensionsAreLoaded=
function(){var n=this;return this._extensionMetadataSource.listTestExtensions().then(function(t){return Q.
allSettled(t.map(function(t){return n._extensionManager.getExtensionByName(t.name)}))})},n}();n.GalleryEndpointsService=
r}(n||(n={})),n});define("MsPortalImpl/Services/Services.Permissions",["require","exports"],function(
){var t=MsPortalFx.ViewModels.Services.ResourceTypes,n;return function(n){"use strict";function o(n,
t){return new u(n,t)}var r=MsPortalFx.Base.Rpc.Internal,f=window,s=MsPortalFx.Internal.Constants.RpcMethods,
h=jQuery,c=MsPortalFx.Base.Diagnostics.Telemetry,e=!!f.fx.environment.isDevelopmentMode,l=MsPortalFx.
Base.Constants.ExtensionNames.Hubs,i,u;(function(n){n.hasPermissionOverride})(i=n.Internal||(n.Internal=
{}));n.createPermissionsManager=o;u=function(){function n(n,t){var i=this;this._extensionManager=n;this.
_resourceMapManager=t;MsPortalFx.Internal.Extension.hasPermissionsToShell.register(r.client,null,function(
n){return i.hasPermission(n.entityId,n.requestedActions)})}return n.prototype.hasPermission=function(
n,u){var h=this,f,s,o;return i.hasPermissionOverride?i.hasPermissionOverride(n,u):(f=function(t){return MsPortalFx.
Internal.Extension.hasPermissionsToHubs.invoke(r.client,MsPortalFx.Base.Constants.ExtensionNames.Hubs,
{entityId:n,requestedActions:u,providedActions:t})},!e||!t.isResourceId(n))?f():(s=t.buildResourceTypeFromResourceId(
n),!this._resourceMapManager.hasAssetTypeByResourceType(s))?f():(o=this._resourceMapManager.getAssetTypeByResourceType(
s),!o.assetTypeManifest.resourceType||!o.assetTypeManifest.resourceType.mappingViewModel||!o.assetTypeManifest.
securityServiceViewModel)?f():this._getAssetIdForResourceId(o,n).then(function(n){return h._getProvidedActionsFromAsset(
o,n)}).then(function(n){return f(n)},function(){return f()})},n.prototype._getAssetIdForResourceId=function(
n,t){var i=Q.defer();return this._extensionManager.getExtensionByName(n.extension).then(function(r){
r.getViewModel(n.assetTypeManifest.resourceType.mappingViewModel).then(function(n){var u=new MsPortalFx.
Internal.Base.TriggerableLifetimeManager,f;u.registerForDispose({dispose:function(){MsPortalFx.Base.
Utilities.disposeViewModelProperties(n);r.releaseViewModel(n)}});f=n.content;f?f.mapResourceIdToAssetId(
t).then(function(n){u.dispose();i.resolve(n)},function(){u.dispose();i.reject()}):(u.dispose(),i.reject(
))},function(){i.reject()})},function(){i.reject()}),i.promise},n.prototype._getProvidedActionsFromAsset=
function(n,t){var i=Q.defer();return this._extensionManager.getExtensionByName(n.extension).then(function(
r){r.getViewModel(n.assetTypeManifest.securityServiceViewModel).then(function(n){var f=new MsPortalFx.
Internal.Base.TriggerableLifetimeManager,u,e;f.registerForDispose({dispose:function(){MsPortalFx.Base.
Utilities.disposeViewModelProperties(n);r.releaseViewModel(n)}});u=n.content;u?(typeof u.onInputsSet==
"function"&&(e=u.onInputsSet({assetId:t})),e?e.then(function(){f.dispose();i.resolve(ko.utils.unwrapObservable(
u.actions))},function(){f.dispose();i.reject()}):(f.dispose(),i.resolve(ko.utils.unwrapObservable(u.
actions)))):(f.dispose(),i.reject())},function(){i.reject()})},function(){i.reject()}),i.promise},n}
()}(n||(n={})),n});define("MsPortalImpl/Services/Services.SecurityTokens",["require","exports"],function(
n){var t;return function(t){"use strict";function a(n){var t=i.sessionStorage.getItem(n),r=JSON.parse(
t);return i.sessionStorage.removeItem(n),r}function v(n){return new f(new s,n,6e4)}function y(n){return new
e(h.client,n)}var h=MsPortalFx.Base.Rpc.Internal,i=window,o=MsPortalFx.Base.Diagnostics.createLog(n),
p=MsPortalFx.Internal.Constants.RpcMethods,c="fx",r=jQuery,l=MsPortalFx.Base.Resources.getAppRelativeUri(
"/api/DelegationToken"),u=MsPortalFx.Base.Diagnostics.Telemetry,s,f,e;t.extractBootStrapAuthState=a;
t.createOAuthTokenProvier=v;t.createSecurityTokensManager=y;s=function(){function n(){}return n.prototype.
getToken=function(n,t){var f=r.Deferred(),s=JSON.stringify({extensionName:n,resourceName:"",portalAuthorization:
t}),e=u.startTrace({source:"Services.SecurityTokens",action:"Get",name:n}),h={uri:l,type:"POST",dataType:
"json",contentType:"application/json",data:s};return MsPortalFx.Base.Net.ajax(h).fail(function(t,r,s)
{if(t.status===403){o.error("Error portal access forbidden.");var h=t.getResponseHeader("Location")||
"Error/403";i.location.replace(h)}else o.error("Failed to get security tokens for extension '{0}'. {1} {2}".
format(n,r,s));u.cancelTrace(e);f.reject(new Error(r))}).done(function(n){u.completeTrace(e);f.resolve(
n)}),f.promise()},n}();f=function(){function n(n,t,i){this._cachedTokens={};this._pendingDeferreds={
};this._pendingRefreshes={};var u={value:t.oAuthToken,portalAuthorization:t.refreshToken};this._pendingPortalAuthorization=
r.Deferred().resolve(u.portalAuthorization).promise();this._client=n;this._minTokenLifetimeMilliseconds=
i;this._user=t.user;this.cacheToken(c,u)}return n.prototype.getToken=function(n){var t=this._cachedTokens[
n];return t?r.Deferred().resolve(t):this.getTokenIgnoreCache(n)},n.prototype.cancelPendingRefreshes=
function(){var n=this;Object.keys(this._pendingRefreshes).forEach(function(t){i.clearTimeout(n._pendingRefreshes[
t])});this._pendingRefreshes={}},n.prototype.getDiagnosticsData=function(){return{user:this._user}},
n.prototype.getTokenIgnoreCache=function(n){var i=this,t=this._pendingDeferreds[n];return t?t.promise(
):(t=r.Deferred(),this._pendingPortalAuthorization.then(function(r){i.getTokenIgnoreCacheWorker(n,r,
t)}),t.promise())},n.prototype.getTokenIgnoreCacheWorker=function(n,t,i){var f=this,u=r.Deferred();this.
_pendingDeferreds[n]=i;this._pendingPortalAuthorization=u;this._client.getToken(n,t).then(function(n)
{u.resolve(n.portalAuthorization);i.resolve(n)},function(n){u.reject(n);i.reject(n)});i.finally(function(
){delete f._pendingDeferreds[n]}).then(function(t){f.cacheToken(n,t)})},n.prototype.cacheToken=function(
n,t){var e=this,r=!1,u,f;return!t||!t.value||!t.value.authorizationHeader||t.value.expiresInMilliseconds===
undefined?r:(this._cachedTokens[n]=t,u=t.value.expiresInMilliseconds/2,u<this._minTokenLifetimeMilliseconds||
(f=this._pendingRefreshes[n],f&&(delete this._pendingRefreshes[n],i.clearTimeout(f)),this._pendingRefreshes[
n]=i.setTimeout(function(){e.getTokenIgnoreCache(n)},u),r=!0),r)},n}();t.CachingOAuthTokenProviderImpl=
f;e=function(){function n(n,t){var i=this;this._tokenProvider=t;MsPortalFx.Internal.Extension.getAuthorizationTokenEndPoint.
register(n,null,function(n,t){return i.getSecurityToken(t.srcWindowId)})}return n.prototype.getSecurityToken=
function(n){var i=this,t=r.Deferred();return this._tokenProvider.getToken(n).done(function(n){t.resolve(
i.getAuthorizationTokenFromOAuthToken(n))}).fail(function(n){t.reject(n)}).progress(function(){t.notify(
)}),t.promise()},n.prototype.cancelPendingRefreshes=function(){this._tokenProvider.cancelPendingRefreshes(
)},n.prototype.getDiagnosticsData=function(){return this._tokenProvider.getDiagnosticsData()},n.prototype.
getAuthorizationTokenFromOAuthToken=function(n){return{header:n.value?n.value.authorizationHeader:null}}
,n}();t.SecurityTokensManagerImpl=e}(t||(t={})),t});define("MsPortalImpl/Services/Services.ShellProvisioner",
["require","exports","../Prototype/Extension.Definition.Locator"],function(n,t,i){var r=MsPortalFx.Internal.
ViewModels.ParameterCollectionV3,u;return function(n){"use strict";var u=function(){function n(){}return Object.
defineProperty(n,"currentInstance",{get:function(){return n._currentInstance},enumerable:!0,configurable:
!0}),n.create=function(i,r){return n._currentInstance||(n._currentInstance=new t(i,r)),n._currentInstance}
,n}(),t;n.ShellProvisionerFactory=u;t=function(){function n(n,t){this.provisioningPromisesLookup={};
this._desktopManager=n;this._registerRpcCallbacks(t)}return n.prototype.processProvisioningRequest=function(
n){var r=this,i=!0,t;if(!n)throw new Error("The provisioning request is null or undefined.");if(!n.provisioningRefKey)
throw new Error("The provisioning request is missing the provisioning reference key.");if(!n.provisioningPromise)
throw new Error("The provisioning request is missing the provisioning promise.");if(n.startboardInfo)
{if(this.provisioningPromisesLookup[n.provisioningRefKey])throw new Error("A provisioning promise already exists with the same reference key.");
this.provisioningPromisesLookup[n.provisioningRefKey]=n.provisioningPromise;n.provisioningPromise.finally(
function(){delete r.provisioningPromisesLookup[n.provisioningRefKey]});this._addProvisioningPart(n)}
else n.provisioningPromise.catch(function(n){throw new Error(n);}),n.provisioningConfig&&!!n.provisioningConfig.
dontDiscardJourney&&(i=!1);return i&&(t=this._desktopManager.getActiveJourney(),t&&this._desktopManager.
forceDiscardJourney(t.id)),n.provisioningPromise},n.prototype._addProvisioningPart=function(n){var t=
n.startboardInfo,r=t.provisioningPart.extension,u=t.provisioningPart.name,f=i.Locator.forExtension(r).
withPartType(u),e={originalProvisioningData:n.originalProvisioningData,provisioningConfig:n.provisioningConfig,
provisioningRefKey:n.provisioningRefKey,startboardPart:n.startboardInfo.startboardPart};this._desktopManager.
addPartToStartBoard({originPartLocator:f,model:{initialData:e},initialSize:2})},n.prototype._registerRpcCallbacks=
function(n){var t=this;r.initiateProvisioningRequestEndPoint.registerObjectFactory(n,{allowedOrigin:
null,allowRemoteChanges:!0,handler:function(i,u){return i.provisionerId?i.provisioningRefKey?(r.getProvisioningRequestEndPoint.
acquireObject(n,u.srcWindowId,i).then(function(n){var i=n.getValue();t.processProvisioningRequest(i).
finally(function(){n.dispose()})},function(n){throw new Error(n);}),Q.resolve(i)):Q.reject("Cannot initiate the provisioning request. The 'provisioningRefKey' was not specified."):
Q.reject("Cannot initiate the provisioning request. The 'provisionerId' was not specified.")}});r.getProvisioningOperationEndPoint.
registerObjectFactory(n,{allowedOrigin:null,allowRemoteChanges:!0,handler:function(n){if(!n)return Q.
reject("Cannot return a provisioning operation. The 'provisioningRefKey' was not specified.");var i=
t.provisioningPromisesLookup[n];return i?Q.resolve({provisioningPromise:i}):Q.reject("Cannot return a provisioning operation. No request corresponds to 'provisioningRefKey': '{0}'.".
format(n))}})},n}();n.ShellProvisionerImpl=t}(u||(u={})),u});define("MsPortalImpl/Base/Themes",["require",
"exports","MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i){var r;return function(n){"use strict";
function e(n,t,i){return new u(n,t,i)}var f="fxs-theme-",t=MsPortalFx.Base.Resources,r=i.Themes.Names,
u;n.createManager=e;u=function(){function n(n,i,u){var s=this,e=u(),o;this._themes=[{colorCode:"#0078d7",
imageUri:t.getContentUri("Content/Images/MsPortalImpl/Themes/Theme_Azure.png"),name:"azure",title:r.
azure},{colorCode:"#3284ae",imageUri:t.getContentUri("Content/Images/MsPortalImpl/Themes/Theme_Blue.png"),
name:"blue",title:r.blue},{colorCode:"#fff",imageUri:t.getContentUri("Content/Images/MsPortalImpl/Themes/Theme_Light.png"),
name:"light",title:r.light},{colorCode:"#333",imageUri:t.getContentUri("Content/Images/MsPortalImpl/Themes/Theme_Dark.png"),
name:"dark",title:r.dark}];e&&this._isValidThemeName(e.name)||(e=this.getDefaultTheme());u(e);this.currentTheme=
u;ko.reactor(n,function(){var n=u(),t=(n||s._themes[0]).name;i.removeClass(o);o=f+t;i.addClass(o)});
n.registerForDispose({dispose:function(){i.removeClass(o)}})}return n.prototype.getThemes=function()
{return this._themes},n.prototype.rotateTheme=function(){var t=this.currentTheme(),n=0;t&&(n=this._themes.
firstIndex(function(n){return n.name===t.name}));n=(n+1)%this._themes.length;this.currentTheme(this.
_themes[n])},n.prototype._isValidThemeName=function(n){return this._themes.some(function(t){return t.
name===n})},n.prototype.getDefaultTheme=function(){return this._themes[0]},n}()}(r||(r={})),r});define(
"MsPortalImpl/UI/Hubs/ViewModels/UI.Browse.ViewModelRegistration",["require","exports","../../../Prototype/ViewModelManager",
"./UI.Hubs.Common"],function(n,t,i,r){var u=MsPortalFx.Internal.ViewModels.Part.composePartViewModel,
e=MsPortalFx.Internal.ViewModels.CompositionViewModel,f;return function(n){"use strict";function f(n)
{var f={browseManager:n};i.ViewModelManager.registerWithState("Browse$BrowseAllBlade$ServicesListPartViewModel",
t+"UI.BrowseAll.Part",function(n,t){return u(function(i){return new n.ServicesListPartViewModel(i,t,
f)},{initialState:t})});i.ViewModelManager.registerWithState("Browse$BrowseServiceBladeViewModel",t+
"UI.BrowseService.Blade",function(n,t){var i=new r.BladeContainerViewModel,u=new n.BrowseServiceBladeViewModel(
i,t,f);return new e(i,u,t)});i.ViewModelManager.registerWithState("Browse$BrowseServiceBlade$ServiceItemsListPartViewModel",
t+"UI.BrowseService.Part",function(n,t){return u(function(i){return new n.ServiceItemsListPartViewModel(
i,t,f)})});i.ViewModelManager.registerWithState("Browse$BrowseServiceTileViewModel",t+"UI.BrowseService.PinnedPart",
function(n,t){return u(function(i){return new n.BrowseServiceTileViewModel(i,t,f)})});i.ViewModelManager.
registerWithState("Browse$BrowseServiceTileViewModel$Websites",t+"UI.BrowseService.PinnedPart",function(
n,t){return u(function(i){var r=new n.BrowseServiceTileViewModel(i,t,f);return r.assetTypeId("WebsitesExtension_Website"),
r})});i.ViewModelManager.registerWithState("Browse$BrowseServiceTileViewModel$Subscriptions",t+"UI.BrowseService.PinnedPart",
function(n,t){return u(function(i){var r=new n.BrowseServiceTileViewModel(i,t,f);return r.assetTypeId(
"HubsExtension_Subscription"),r})})}var t="./MsPortalImpl/UI/Hubs/ViewModels/";n.registerViewModels=
f}(f||(f={})),f});define("MsPortalImpl/UI/Commands/UI.CommandManager",["require","exports","MsPortalImpl.Controls/Controls/Balloon",
"../../Interactions/Interactions.DismissHandler","../../Widgets/Dialogs/Widgets.MessageBox","./UI.Commands",
"../UI.DesktopManager","../../Widgets/Widgets.WidgetBase","../../Widgets/Widgets.Blade","../../Widgets/Widgets.ContextMenu"],
function(n,t,i,r,u,f,e,o,s,h){var c=MsPortalFx.Base.EventTypes,l;return function(t){"use strict";function p(
n){return new a(n)}var v=window,e=jQuery,l=MsPortalFx.Base.Diagnostics.createLog(n),y="<div class='fxs-commands-contextMenu'><\/div>",
a;t.createCommandManager=p;a=function(){function n(n){var t=this;this._lifetimeManager=new MsPortalFx.
Internal.Base.TriggerableLifetimeManager;this._body=e("body");this._desktop=n;this._initializeContextMenu(
);this._handleDesktopModeChange();this._dismissHandle={dismissFn:function(){u.cancelMessageBox(e(t.getForm(
)))},shouldDismissOnMouseDownFn:function(n){return!(t._balloonContentElement===n)&&!e.contains(t._balloonContentElement,
n)},shouldDismissOnMouseWheelFn:function(n){return!(t._balloonContentElement===n)&&!e.contains(t._balloonContentElement,
n)},restoreFocus:function(){if(!t._previouslyFocusedElement){l.warning("DismissHandle for '{0}': _previouslyFocusedElement was not defined.".
format(t._dismissHandle.logName));return}if(!t._previouslyFocusedElement.focus){l.error("DismissHandle for '{0}': _previouslyFocusedElement does not define 'focus'. _previouslyFocusedElement: {1}".
format(t._dismissHandle.logName,t._previouslyFocusedElement));return}if(typeof t._previouslyFocusedElement.
focus!="function"){l.error("DismissHandle for '{0}': _previouslyFocusedElement focus member is not a function. _previouslyFocusedElement.focus: {1}".
format(t._dismissHandle.logName,t._previouslyFocusedElement.focus));return}t._previouslyFocusedElement.
focus()},logName:"commandmanager"}}return n.prototype.dispose=function(){this.stopListeningForEvents(
);r.DismissHandler.Instance.unregister(this._dismissHandle);this._lifetimeManager.dispose()},n.prototype.
startListeningForEvents=function(){var n=this;this._body.on(c.fxcontextmenu,this._fxMenuEventHandler=
function(t,i){n._showContextMenu(t,i)}).on(c.contextmenu,this._browserMenuEventHandler=function(n){var
i,t;if(n.ctrlKey||(i=v.getSelection(),i.rangeCount&&!i.getRangeAt(0).collapsed)||e(n.target).filter(
"input,textarea").length)return!0;n.preventDefault();n.stopPropagation();t=e.Event(c.fxcontextmenurequest);
t.pageX=n.pageX;t.pageY=n.pageY;t.clientX=n.clientX;t.clientY=n.clientY;e(n.target).trigger(t)});this.
_desktop.portalWidget&&this._desktop.portalWidget.element?this._desktop.portalWidget.element.append(
this._contextMenuElement):this._body.append(this._contextMenuElement)},n.prototype.stopListeningForEvents=
function(){this._fxMenuEventHandler&&(this._body.off(c.fxcontextmenu,this._fxMenuEventHandler),this.
_fxMenuEventHandler=null);this._browserMenuEventHandler&&(this._body.off(c.contextmenu,this._browserMenuEventHandler),
this._browserMenuEventHandler=null);this._contextMenu.hide();this._contextMenuElement.detach()},n.prototype.
getForm=function(){if(!this._balloonContentElement){var n=e("<div/>");this._balloonViewModel=new MsPortalFx.
ViewModels.Controls.Balloon.ViewModel(this._lifetimeManager);this._balloonViewModel.position(0);this.
_balloonViewModel.content("<div><\/div>");e("body").append(n);new i.Widget(n,this._balloonViewModel);
n.addClass("fxs-dialogballoon");this._balloonContentElement=n.findByClassName("azc-balloon-content").
children()[0].children[0]}return this._balloonContentElement},n.prototype.showForm=function(n){this.
_balloonViewModel.box(n);this._balloonViewModel.visible(!0);this._previouslyFocusedElement=document.
activeElement;r.DismissHandler.Instance.register(this._dismissHandle)},n.prototype.hideForm=function(
){this._balloonViewModel&&(this._balloonViewModel.visible(!1),e(this._balloonContentElement).empty());
r.DismissHandler.Instance.unregister(this._dismissHandle)},n.prototype._initializeContextMenu=function(
){this._contextMenuElement=e(y);this._contextMenu=new h.Widget(this._contextMenuElement);this._contextMenu.
hide()},n.prototype._showContextMenu=function(n,t){var v=this,l=this._contextMenu.options.menuItems,
a,i,u,h=n.clientX,c=n.clientY,r;if(t.commands&&t.commands.length!==0){t.formTarget&&t.formTarget.length>
0&&(u=o.Widget.getWidget(t.formTarget,s.Widget));u||(u=this);this._hideContextMenu();l.splice(0,l().
length);do i=i?i.parentNode:n.target,a=e(i).data(f.Commands.CompositionInstanceDataName);while(!a&&i.
parentNode);t.commands.forEach(function(t){v._shouldShowCommand(t)&&(t.activate(),t.bind(new f.CompositionInstanceCommandContext(
n.target,u,a)),l.push(t))});h||c||(r=n.target.getClientRects()[0],h=r&&r.left||h,c=r&&r.bottom||c);this.
_contextMenu.show(h,c,t&&t.forceLeft)}},n.prototype._hideContextMenu=function(){this._contextMenu.hide(
)},n.prototype._handleDesktopModeChange=function(){var n=this;this._desktop.mode.subscribe(function(
t){t===1&&n.hideForm()})},n.prototype._shouldShowCommand=function(n){return this._desktop.mode()!==1||
!this._isExtensionCommand(n)},n.prototype._isExtensionCommand=function(n){return!!n._extension},n}();
t.PortalCommandManager=a}(l||(l={})),l});define("MsPortalImpl/UI/Compositions/UI.Composition.BladePair",
["require","exports","../../Prototype/Extension.Definition.Locator","MsPortalImpl/Resources/ImplScriptResources",
"./UI.Composition.BladeOpener"],function(n,t,i,r,u){var e=MsPortalFx.Blades.BladePairingMode,f;return function(
t){"use strict";function h(){var n={getBladeType:function(n){return n.locator.toString()},getPartFullIdentifier:
function(n){return n.toString()}},t=new f(n),i=new o(n);return new e(t,i)}var i=MsPortalFx.Base.Diagnostics.
createLog(n),s=function(){function n(n,t){this._masterBlade=n;this._detailsBlade=t}return Object.defineProperty(
n.prototype,"masterBlade",{get:function(){return this._masterBlade},enumerable:!0,configurable:!0}),
Object.defineProperty(n.prototype,"detailsBlade",{get:function(){return this._detailsBlade},enumerable:
!0,configurable:!0}),n.prototype.setDetailsBlade=function(n){if(!n)throw new Error("The details blade of a blade pair cannot be null or undefined.");
return this._detailsBlade===n?!1:(this._detailsBlade=n,!0)},n.prototype.toArray=function(){return[this.
masterBlade,this.detailsBlade]},n}(),f,e,o;t.BladePair=s;f=function(){function n(n){this._pairs=[];this.
_activePair=null;this._visibilityMap={};this._utility=n}return Object.defineProperty(n.prototype,"activePair",
{get:function(){return this._activePair},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"pairs",{get:function(){return this._pairs},enumerable:!0,configurable:!0}),n.prototype.add=function(
n,t){if(!n)throw new Error("The master blade of a blade pair cannot be null or undefined.");if(!t)throw new
Error("The details blade of a blade pair cannot be null or undefined.");var i=this._pairs.first(function(
t){return t.masterBlade===n});return i?i.setDetailsBlade(t):(i=new s(n,t),this._pairs.push(i)),i},n.
prototype.remove=function(n){var i=this,t=this._pairs.filter(function(t){return t.masterBlade===n||t.
detailsBlade===n});return t.forEach(function(n){return i._pairs.remove(n)}),t},n.prototype.activate=
function(n){if(!n)throw new Error("The blade pair cannot be null or undefined in order to be activated.");
this._activePair!==n&&(this._activePair&&this._activePair.toArray().filter(function(t){return t!==n.
masterBlade&&t!==n.detailsBlade}).forEach(function(n){n.pairing(0);n.pairingMode(0)}),this._activePair=
n,this._activePair.masterBlade.pairing(1),this._activePair.detailsBlade.pairing(2),this._activePair.
detailsBlade.pairInfo.windowed?(this._activePair.toArray().forEach(function(n){return n.pairingMode(
2)}),this._pairs.forEach(function(n){n.masterBlade.pairVisible(!0);n.detailsBlade.pairVisible(!0)})):
(this._activePair.toArray().forEach(function(n){return n.pairingMode(1)}),this._adjustMasterBladeVisibility(
this._activePair)))},n.prototype.deactivate=function(){this._activePair&&(this._activePair.toArray().
forEach(function(n){n.pairing(0);n.pairingMode(0);n.pairVisible(!0)}),this._activePair=null,this._pairs.
forEach(function(n){n.masterBlade.pairVisible(!0);n.detailsBlade.pairVisible(!0)}))},n.prototype.update=
function(n,t){var r,i;(this._pairs=n.length===0?[]:this._pairs.filter(function(t){return n.indexOf(t.
masterBlade)>=0||n.indexOf(t.detailsBlade)>=0}),t)||(n.length<=0?this.deactivate():(r=n[n.length-1],
i=this._pairs.first(function(n){return n.detailsBlade===r}),i?this.activate(i):this.deactivate()))},
n.prototype.toggleMasterBlade=function(n,t){var i=this._getVisibilityKey(n);this._visibilityMap[i]=t;
n.masterBlade.pairVisible(t)},n.prototype._getVisibilityKey=function(n){var t=this;return n.toArray(
).map(function(n){return t._utility.getBladeType(n)}).join(":")},n.prototype._adjustMasterBladeVisibility=
function(n){if(this._pairs.first(function(t){return t.detailsBlade===n.masterBlade})){var t=this._visibilityMap[
this._getVisibilityKey(n)];t=MsPortalFx.Base.Utilities.isNullOrUndefined(t)?!n.detailsBlade.pairInfo.
shouldHideMasterBlade:t;n.masterBlade.pairVisible(t)}else n.masterBlade.pairVisible(!this._activePair.
detailsBlade.pairInfo.shouldHideMasterBlade);n.detailsBlade.pairVisible(!0)},n}();t.BladePairRegistryImpl=
f;e=function(){function n(n,t){this._registry=n;this._helper=t}return n.prototype.pairBlades=function(
n){var i=this,t=n.map(function(n){return i._pair(n)});return t.length>0&&this._updateActivePair(t.last(
)),t},n.prototype.pairBlade=function(n){var t=this._pair(n);return this._updateActivePair(t),t||this.
_triggerDefaultSelection(n),t},n.prototype.update=function(n,t){this._registry.update(n,t)},n.prototype.
reset=function(){this._registry.update([])},n.prototype.toggleMasterBladeFromDetailsBlade=function(n,
t){var i=this._getPairOfDetailsBlade(n);if(!i)throw new Error("Blade '{0}' is not a details blade of a blade pair.".
format(n.locator.toString()));MsPortalFx.Base.Utilities.isNullOrUndefined(t)&&(t=!i.masterBlade.pairVisible(
));this._registry.toggleMasterBlade(i,t)},n.prototype.getMasterBladeInfoFromDetailsBladeAsync=function(
n){var i=this,t=this._getPairOfDetailsBlade(n);return t?Q(t.masterBlade.awaitComposed()).then(function(
){if(!n.pairInfo)return null;var r=i._getMasterVisibilityInfo(t.masterBlade,n),u=i._getMasterNavigationInfo(
t.masterBlade.getParts(),n.pairInfo);return Q.allSettled([r,u]).spread(function(n,t){return{visibility:
n.state==="fulfilled"?n.value:null,navigation:t.state==="fulfilled"?t.value:null}})}):Q.resolve(null)}
,n.prototype.activateBladePairByMasterBlade=function(n){var t=this._registry.pairs.first(function(t)
{return t.masterBlade===n});if(!t){this._registry.deactivate();return}t!==this._registry.activePair&&
this._registry.activate(t)},n.prototype._getMasterVisibilityInfo=function(n,t){var i=this;if(t.pairInfo.
windowed||!n.bladeDefinition.pairMasterInfo||!n.bladeDefinition.pairMasterInfo.toggleMasterCommand)return Q.
resolve(null);var u={hideText:r.ShellCommands.hideMasterBlade,showText:r.ShellCommands.showMasterBlade},
f=$.extend(u,n.bladeDefinition.pairMasterInfo.toggleMasterCommand),e={canExecute:ko.observable(!0),execute:
function(){return i.toggleMasterBladeFromDetailsBlade(t),Q.resolve(undefined)}},o={toggle:e},s=$.extend(
{visible:n.pairVisible},f,o);return Q.resolve(s)},n.prototype._getMasterNavigationInfo=function(n,t)
{var i=this;return this._helper.findNavigablePartAsync(n,t).then(function(n){return n?i._helper.getNavigationCommandsAsync(
n.part,n.details):null})},n.prototype._pair=function(n){var i=this,t;if(!n.masterContainer)throw new
Error("A blade cannot be added to blade pair if it does not have master container.");if(t=this._helper.
getPairedMasterBlade(n),t){n.onDispose(function(){return i._registry.remove(n)});return this._registry.
add(t,n)}return null},n.prototype._updateActivePair=function(n){n?this._registry.activate(n):this._registry.
deactivate()},n.prototype._triggerDefaultSelection=function(n){var t=this;n.defaultSelectionPromise=
Q(n.awaitComposed()).then(function(){var i=n.bladeDefinition.pairMasterInfo;return!i||!i.defaultBladeAction?
Q.resolve(!1):t._helper.findAutoSelectablePartAsync(n.getParts(),i).then(function(n){return n?n.part.
activateSelection(n.details,function(n){return t._helper.activateDefaultSelection(n)}):Q.resolve(!1)}
)})},n.prototype._getPairOfDetailsBlade=function(n){return this._registry.pairs.first(function(t){return t.
detailsBlade===n})},n.prototype._dump=function(){var t=function(n){return"({0} : {1})".format(n.masterBlade.
locator.toString(),n.detailsBlade.locator.toString())},r=this._registry.pairs.map(function(n){return t(
n)}).join(", "),i=this._registry.activePair,u=i?t(i):"NULL",n;console.debug("{0} Pairs: {1}, Active Pair: {2}".
format(this._registry.pairs.length,r,u));n=this._registry.pairs.filter(function(n){return n.masterBlade.
pairing()!==0&&n.detailsBlade.pairing()!==0});(this._registry.activePair&&n.length!==1&&this._registry.
activePair!==n[0]||!this._registry.activePair&&n.length>0)&&console.error("Incorrect active pairs found. {0}".
format(n.map(function(n){return t(n)}).join(", ")))},n}();t.BladePairManagerImpl=e;o=function(){function n(
n){this._utility=n}return n.prototype.getPairedMasterBlade=function(n){var t=this._convertToBlade(n.
masterContainer);return t&&!!n.pairInfo?t:null},n.prototype.findAutoSelectablePartAsync=function(n,t)
{return this._findSelectablePart(n,function(n){return n.instanceDefinition.name===t.defaultBladeAction.
partName?(n.partDefinition.details||[]).first(function(n){return n.name===t.defaultBladeAction.actionName}
):null})},n.prototype.findNavigablePartAsync=function(n,t){var r=this;return!t.actionName||!t.canNavigateMaster?
Q.resolve(null):this._findSelectablePart(n,function(n){return(n.partDefinition.details||[]).first(function(
n){return n.name&&n.name===t.actionName})}).then(function(n){return n&&!n.details.pairInfo&&i.error(
"Part '{0}': there is no pair child in blade action '{1}'.".format(r._utility.getPartFullIdentifier(
n.part),JSON.stringify(n.details))),n})},n.prototype.getNavigationCommandsAsync=function(n,t){var u=
this;return n.getSelectableAsync(t).then(function(f){if(!u._isSelectableSet(f))return i.error("Part '{0}': the selectable of blade action '{1}' must be a selectable set.".
format(u._utility.getPartFullIdentifier(n),t.name)),null;var e=f._msPortalFxCursor,o=e&&e()?e():null,
s={nextText:r.ShellCommands.goToNextItem,previousText:r.ShellCommands.goToPreviousItem},h=t.pairInfo?
t.pairInfo.navigateMasterCommands:{};return o?$.extend({},s,h,o):(i.error("Part '{0}': the selectable of blade action '{1}' must have a cursor object.".
format(u._utility.getPartFullIdentifier(n),t.name)),null)})},n.prototype.activateDefaultSelection=function(
n){return this._isSelectableSet(n)?this._activateDefaultSelectionForSelectableSet(n):this._isSelectable(
n)?this._activateDefaultSelectionForSelectable(n):this._activateDefaultSelection(n)},n.prototype._findSelectablePart=
function(n,t){if(n.length<=0)return Q.resolve(null);var i,u=0,r=Q.defer(),f=!1;return n.forEach(function(
e){e.awaitComposed().then(function(){i||(i=t(e))}).finally(function(){(u++,f)||(i?(f=!0,r.resolve({part:
e,details:i})):u===n.length&&r.resolve(null))})}),r.promise},n.prototype._isSelectableSet=function(n)
{return u.isSelectableSet(n)},n.prototype._isSelectable=function(n){return u.isSelectable(n)},n.prototype.
_activateDefaultSelectionForSelectableSet=function(n){var t=this;return $.isFunction(n.getDefaultSelection)?
this._activateSelection(n.getDefaultSelection(),function(i){t._activateSelectableSet(n,i)}):Q.reject(
new Error("The getDefaultSelection property of the selectable set must be a function."))},n.prototype.
_activateDefaultSelectionForSelectable=function(n){return u.isSelectableLocked(n)?(n.isSelected(!0),
Q(!0)):$.isFunction(n.getDefaultSelection)?this._activateSelection(n.getDefaultSelection(),function(
t){n.selectedValue(t);n.isSelected(!0)}):Q.reject(new Error("The getDefaultSelection property of the selectable must be a function."))}
,n.prototype._activateDefaultSelection=function(n){return!$.isFunction(n.getDefaultSelection)||!$.isFunction(
n.activateSelection)?Q.reject(new Error("The getDefaultSelection and activateSelection property of the selectable must be a function.")):
this._activateSelection(n.getDefaultSelection(),function(t){n.activateSelection(t)})},n.prototype._activateSelection=
function(n,t){var r=Q.defer();return n.then(function(n){t(n);r.resolve(!0)},function(n){i.error(n);r.
resolve(!1)}),r.promise},n.prototype._activateSelectableSet=function(n,t){var i=[];MsPortalFx.Util.isNullOrUndefined(
t)||i.push(t);n.selectedItems(i);n.activateAllSelectedItems()},n.prototype._convertToBlade=function(
n){return n.locator&&n.locator.type===1?n:null},n}();t.BladePairHelperImpl=o;t.createBladePairManager=
h}(f||(f={})),f});define("MsPortalImpl/UI/UI.ContextPane",["require","exports","../Interactions/Interactions.DismissHandler"],
function(n,t,i){var u=MsPortalFx.Base.EventTypes,r;return function(n){"use strict";function r(n){return new
t(n)}n.create=r;var t=function(){function n(n){var t=this;this._dismissHandle={dismissFn:function(){
t.close()},shouldDismissOnMouseDownFn:function(){return!1},shouldDismissOnMouseWheelFn:function(){return!1}
};this._widget=n;this._viewModel=n.options;n.element.on(u.fxcontextpaneclosing,this._closingHandler=
function(n){n.stopPropagation();var i=t.tryRemoveContent();i&&t.toggle(!1)});this._openedReactor=ko.
computed(function(){var n=i.DismissHandler.Instance;t._viewModel.opened()?n.register(t._dismissHandle):
n.unregister(t._dismissHandle)})}return n.prototype.dispose=function(){this._closingHandler&&(this._widget.
element.off(u.fxcontextpaneclosing,this._closingHandler),this._closingHandler=null);this._openedReactor&&
this._openedReactor.dispose()},n.prototype.toggle=function(n){this._viewModel.opened(n)},Object.defineProperty(
n.prototype,"opened",{get:function(){return this._viewModel.opened},enumerable:!0,configurable:!0}),
n.prototype.hasContent=function(n){return this._contentProvider===n},n.prototype.getContent=function(
){return this._contentProvider},n.prototype.clearContent=function(){this._contentProvider&&this._contentProvider.
onRemovingContent(this._widget);this._contentProvider=null},n.prototype.trySetContent=function(n){if(
this._contentProvider===n)return!0;var t=this.tryRemoveContent();if(t&&(this._contentProvider=n,n)){
this._previouslyFocusedElement=document.activeElement;n.onAddingContent(this._widget)}return t},n.prototype.
tryRemoveContent=function(){if(!this._contentProvider)return!0;var n=this._contentProvider.canRemoveContent(
);return n&&this.clearContent(),n},n.prototype.close=function(n){var t=!0;return n?this.clearContent(
):t=this.tryRemoveContent(),t&&(this.toggle(!1),this._restoreFocus()),t},n.prototype._restoreFocus=function(
){this._previouslyFocusedElement&&this._previouslyFocusedElement.focus()},n}();n.ContextPaneImpl=t}(
r||(r={})),r});define("MsPortalImpl/UI/Hubs/UI.CreateManager",["require","exports","../../Base/Telemetry",
"MsPortalImpl/Resources/ImplScriptResources","./UI.NotificationManager"],function(n,t,i,r,u){var f;return function(
t){"use strict";function l(n,t){return new h(n,t)}var o=MsPortalFx.ViewModels.Services.ResourceTypes,
a=window,s=jQuery,f=MsPortalFx.Base.Diagnostics.createLog(n),v=MsPortalFx.Base.Diagnostics.Telemetry.
trace,e=r.CreateManager,y=i.Source.CreateHub,p=i.Action,c=MsPortalFx.Base.Constants.ExtensionNames.Hubs,
h;t.createCreateManager=l;h=function(){function n(n,t){if(!n)throw new Error("extensionManager is null or undefined.");
if(!t)throw new Error("resourceMapManager is null or undefined.");this._extensionManager=n;this._resourceMapManager=
t}return n.prototype.initialize=function(n){this._desktopManager=n},n.prototype.processResourceGroupChange=
function(n,t,i){var u=this,e=s.Deferred(),l=o.buildResourceGroupIdFromSubscriptionAndResourceGroupName(
n.subscriptionId,n.resourceGroupName),h=n.primaryResourceId||n.resourceId,r={subscriptionId:n.subscriptionId,
resourceGroupName:n.resourceGroupName,deploymentName:n.deploymentName||t.deploymentName,assetId:h||l,
resourceGroupId:l,assetType:null,galleryItemDisplayName:t.galleryItem.itemDisplayName,selectedTemplateId:
n.selectedTemplateId,operationId:i.correlationId,timestamp:i.timestamp},a=function(t){u._extensionManager.
getExtensionByName(c).then(function(i){i.getViewModel("DeploymentStatusPoller").done(function(o){u._notifyInProgress(
r);o.content.startPolling(r).then(function(n){u._processResourceGroupChange(r).then(function(){h&&t?
u._getAssetIdByResourceId(h,t).done(function(i){u._notifySuccess(r,i,t,n)}).fail(function(){u._notifySuccess(
r,l,null,n)}):u._notifySuccess(r,r.assetId,t,n);e.resolve()},function(t){u._notifySuccess(r,l,null,n);
e.reject(t);f.error("Error executing getResourceGroupQueryResults for resourceGroupID [{0}]. Error Message: [{1}].".
format(l,t))})},function(t){var i=!1;e.reject(t);t!==MsPortalFx.Resources.Strings.Part.Provisioning.
deploymentStatusUnavailable&&(t===MsPortalFx.Resources.Strings.Part.Provisioning.pollingFailed?f.error(
"Polling for deployment status failed for resource group [{0}].".format(n.resourceGroupName)):(u._notifyError(
r),i=!0,f.error("Deployment failed for resource group [{0}].".format(n.resourceGroupName))));i||u._notifyWarning(
r,t)}).finally(function(){MsPortalFx.Base.Utilities.disposeViewModelProperties(o);i.releaseViewModel(
o)})}).fail(function(n){e.reject(n);f.error("Failed to get view model [DeploymentStatusPoller] from extension [HubsExtension]. Error Message: [{0}].".
format(n))})},function(){e.reject("Failed to get extension by name [HubsExtension].");f.error("Failed to get extension by name [HubsExtension].")}
)};return h?this._resourceMapManager.tryGetAssetTypeByResourceId(h).then(function(n){r.assetType=n;a(
n)},function(){var n="Unable to get the assetType associated with the resourceId: {0}".format(h);e.reject(
n);f.error(n)}):a(),e.promise()},n.prototype._processResourceGroupChange=function(n){var i=this,t=s.
Deferred(),u=n.subscriptionId,e=n.resourceGroupName,r=n.resourceGroupId;return this._resourceMapManager.
getResourceGroupQueryResults(r,!0).then(function(n){var e,s,u;try{e={};n.childResources.forEach(function(
n){var u=o.parseResourceDescriptor(n.id),r=o.buildResourceTypeFromResourceDescriptor(u),t;i._resourceMapManager.
hasAssetTypeByResourceType(r)&&(t=i._resourceMapManager.getAssetTypeByResourceType(r),e[t.id]?e[t.id].
resources.push(n.id):e[t.id]={assetType:t,resources:[n.id]})});s=Object.keys(e);u=s.length;s.forEach(
function(n){var o=e[n],r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;i._resourceMapManager.
getResourceTypeMappingPromiseForAssetType(o.assetType,r).then(function(i){i&&i.signalResourcesChanged?
i.signalResourcesChanged().finally(function(){r.dispose()}).then(function(){u--;u===0&&t.resolve()},
function(i){f.error("Error executing signalResourcesChanged for assetTypeId [{0}]. Error Message: {1}.".
format(n,i));t.reject(i)}):(r.dispose(),u--,u===0&&t.resolve())},function(i){u--;u===0&&t.resolve();
f.error("Error executing getResourceTypeMappingPromiseForAssetType for assetTypeId [{0}]. Error Message: {1}.".
format(n,i))})});i._resourceMapManager.processResourceGroupChange(r);u===0&&t.resolve()}catch(h){t.reject(
h&&h.toString());throw h;}},function(n){t.reject(n)}),t.promise()},n.prototype._getAssetIdByResourceId=
function(n,t){var i=s.Deferred(),r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;return this.
_resourceMapManager.getResourceTypeMappingPromiseForAssetType(t,r).then(function(u){if(u)try{u.mapResourceIdToAssetId(
n).then(function(n){i.resolve(n);r.dispose()},function(t){f.error("Error getting asset id from resource id [{0}]. Error Message: {1}, code: {2}.".
format(n,t.message,t.reason));i.reject(t.message);r.dispose()})}catch(e){i.reject(e);r.dispose();f.error(
"Error when trying to get asset id from resource id. Error: {0}".format(e))}else i.reject("No view model found for asset type [{0}]".
format(t)),r.dispose()},function(n){f.error("Error executing getResourceTypeMappingPromiseForAssetType for assetTypeId [{0}]. Error Message: {1}.".
format(t,n));i.reject(n)}),i.promise()},n.prototype._notifyInProgress=function(n){u.getNotificationManager(
).addClientNotification({title:e.resourceCreationInProgressLabel.format(n.galleryItemDisplayName),description:
e.resourceCreationInProgressMessage.format(n.galleryItemDisplayName,n.resourceGroupName),status:3,timestamp:
n.timestamp,correlationIds:[n.operationId]})},n.prototype._notifySuccess=function(n,t,i,r){var f;f=i?
{extensionName:i.extension,assetType:i.assetTypeManifest.name,assetId:t}:{extensionName:MsPortalFx.Base.
Constants.ExtensionNames.Hubs,assetType:"ResourceGroups",assetId:t};u.getNotificationManager().addClientNotification(
{title:e.resourceCreationSucceededLabel.format(n.galleryItemDisplayName),description:e.resourceCreationSucceededMessage.
format(n.galleryItemDisplayName,n.resourceGroupName),status:4,timestamp:r,correlationIds:[n.operationId],
asset:f})},n.prototype._notifyWarning=function(n,t){u.getNotificationManager().addClientNotification(
{title:MsPortalFx.Resources.Strings.Part.Provisioning.deploymentStatusUnavailable,description:t,status:
1,timestamp:n.timestamp,correlationIds:[n.operationId],asset:{extensionName:MsPortalFx.Base.Constants.
ExtensionNames.Hubs,assetType:"ResourceGroupEvents",assetId:n.resourceGroupId}})},n.prototype._notifyError=
function(n){u.getNotificationManager().addClientNotification({title:e.resourceCreationFailedLabel.format(
n.galleryItemDisplayName),description:e.resourceCreationFailedMessage.format(n.galleryItemDisplayName,
n.resourceGroupName),status:2,timestamp:n.timestamp,correlationIds:[n.operationId],asset:{extensionName:
MsPortalFx.Base.Constants.ExtensionNames.Hubs,assetType:"Deployments",assetId:"{0}/deployments/{1}".
format(n.resourceGroupId,n.deploymentName)}})},n}();t.CreateManagerImpl=h}(f||(f={})),f});define("MsPortalImpl/UI/UI.DesktopManagerImpl",
["require","exports","../Prototype/Extension.Definition.Locator","MsPortalImpl/Resources/ImplScriptResources",
"./Hubs/UI.NotificationManager","../Services/Services.Settings.Schema","../Services/Services.Settings",
"../Base/Telemetry","./Compositions/UI.Composition","./Compositions/UI.Composition.Base","./Compositions/UI.Composition.Blade",
"./Compositions/UI.Composition.Journey","./Compositions/UI.Composition.Part","./Compositions/UI.Composition.PropertyBinding",
"./Compositions/UI.Composition.StartBoard","./Compositions/UI.Composition.StartboardPart","./Compositions/UI.Composition.Util",
"./UI.DesktopManager","./UI.DesktopManagerView","./UI.DesktopModeManager","./UI.DialogManager","./UI.PartGalleryManager",
"./Compositions/UI.Composition.Base"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt){var rt=
MsPortalFx.ViewModels.Dialogs,tt=MsPortalFx.Base.EventTypes,it;return function(t){"use strict";function pt(
n,t){var u=k.create(n,t.contextPane),i,r;return ft=new ct(u,t),i=nt.createFactory(t.resourceMapManager,
t.extensionManager),r=d.createDesktopModeManager(ft,n,t.dialogManager,t.settings,i,t.contextPane),ft.
setModeManager(r),ft}function wt(){ft&&h.debug(ft.getDiagnosticsData())}function vt(){return{store:2,
keys:[]}}function bt(){return at.isDevelopmentMode?ft:null}var yt=window,h=MsPortalFx.Base.Diagnostics.
createLog(n),lt=MsPortalFx.Base.Diagnostics.Telemetry.trace,et=o.Source.Desktop,ut=o.Action,st=r.Desktop,
it={noActiveJourney:"Desktop has no active journey.",noBladeInJourney:"Blade '{0}' does not exist in the current journey.",
noTileInDesktop:"Tile with id '{0}' was not found on the desktop."},ht=f.startBoardSettingsKey,ot=f.
desktopSettingsKey,ft,rt=MsPortalFx.Base.Diagnostics.Telemetry,at=yt.fx.environment,ct;t.organizeModeModules=
{dragDrop:"MsPortalImpl/UI/UI.DragDropCompositionManager"};t.createDesktopManager=pt;t.logDiagnosticsData=
wt;t.getSettingsQuery=vt;t.getCurrent=bt;ct=function(){function n(n,t){this._savedJourneys=[];this._startBoardPartsLoaded=
!1;this._previousActiveJourney="";this._loadedStartBoardPartIds={};this._mode=ko.observable(0);this.
_dayZeroParts={};this._lifetime=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;this.cachedJourneys=
new MsPortalFx.Base.LruMap;this.cachedJourneysCapacity=10;this.commandsEnabled=ko.observable(!0);this.
_loadingJourneyGuid=null;this._view=n;this._portalServices=t;this._initDeferred=$.Deferred();this._sharedSettings=
new e.Internal.CachingSettingsManagerImpl(t.settings)}return Object.defineProperty(n.prototype,"mode",
{get:function(){return this._mode},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"initializationPromise",{get:function(){return this._initDeferred.promise()},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"isJourneyLoading",{get:function(){return this._loadingJourneyGuid!==
null},enumerable:!0,configurable:!0}),n.prototype.setModeManager=function(n){this._modeManager=n},n.
prototype.initialize=function(n,i,r){var u=this;r===void 0&&(r=null);this._setupOrganizeModeComponents(
r||t.organizeModeModules);this._extensionsMetadataInfo=n;this._loadAllStartBoardParts=this._extensionsMetadataInfo.
items.every(function(n){return!n.startBoardParts})&&at.isDevelopmentMode;this._portalServices.assetManager.
onAssetDeleted($.proxy(this._handleAssetDeleted,this));i.then(function(n){var t=rt.startTrace({source:
et,action:"LoadDesktop"});n&&n[ot]?u.load(n):(u._startBoard=y.create(u._createCompositionServices()),
u._view.composeStartBoard(u._startBoard),u._populateStartBoardFromManifests(),u._startBoardPartsLoaded=
!0,u._initDeferred.resolve());rt.completeTrace(t)},function(){u._initDeferred.reject()})},n.prototype.
resetStartBoard=function(n){var t=this,i;return i=n?Q(6):g.DialogManager.get().showModalDialog({title:
r.Startboard.resetConfirmationTitle,description:r.Startboard.resetConfirmationText,buttons:4}),i.then(
function(n){var r,i;if(n===6){for(r=t.startBoard.children,i=r.length-1;i>=0;i--)t.removeTile(r[i].id,
!0);t._populateStartBoardFromManifests()}})},n.prototype._populateStartBoardFromManifests=function()
{var n=this;this._portalServices.extensionManager.extensionLoader.getExtensions().forEach(function(t)
{var i=n._extensionsMetadataInfo.items.first(function(n){return n.name===t.name}).startBoardParts,r=
n._extensionsMetadataInfo.testExtensionNames&&n._extensionsMetadataInfo.testExtensionNames.indexOf(t.
name)>=0;(n._loadAllStartBoardParts||r||i&&i.length)&&t.getManifest().then(function(t){n._addStartBoardPartsFromManifest(
t,i);n.save()})})},n.prototype.createJourney=function(n,t){var r=this,u=this._startBoard.children.first(
function(t){return t.id===n}),f,e;return u?(f=$.Deferred(),e=MsPortalFx.Util.newGuid(),this._loadingJourneyGuid=
e,f.promise().finally(function(){r._loadingJourneyGuid===e&&(r._loadingJourneyGuid=null)}),u.awaitComposed(
).then(function(){var n;if(r.tryDeactivateJourney()){$(r).trigger(b.DesktopManagerEvents.journeyCreating,
t);var o=new i.DefinitionFinderImpl(r._portalServices.extensionManager),e=r._createCompositionServices(
o),s=rt.startTrace({source:et,action:ut.JourneyOpened,name:u.locator&&u.locator.toFriendlyString()});
r.setActiveJourney(l.create(e,u));n=c.create(e,t,r._startBoard);r._activeJourney.addChild(n);r._view.
composeJourney(r._activeJourney);r._startBoard.detailContainers=[n];r._view.addBlade(n,{assetType:t.
originAssetType,focus:!0,reusableWidget:t.reusableWidget});r._savedJourneys=r.getJourneysJson();r.cachedJourneys.
getOrAdd(r._activeJourney.id,function(){return!0});r._trimSavedJourneys();r._triggerActiveJourneyChanged(
);r.save();f.resolve(r._activeJourney);r._telemetryTrace(t&&t.locator,ut.JourneyOpened);$(r).trigger(
b.DesktopManagerEvents.journeyCreated);rt.completeTrace(s);Q.nextTick(function(){r._savedJourneys=r.
getJourneysJson();r.save()})}else f.reject("tryDeactivateJourney returned false")}),f.promise()):(h.
error(it.noTileInDesktop.format(n)),h.verbose(ko.toJSON(this.getDiagnosticsData(),null,2)),$.Deferred(
).reject())},n.prototype.createJourneyForAsset=function(n,t,r){var u=this,f=Q.defer(),o=this._portalServices.
extensionManager.extensionLoader.getExtensions().first(function(t){return t.name===n}),e=MsPortalFx.
Util.newGuid();return this._loadingJourneyGuid=e,f.promise.finally(function(){u._loadingJourneyGuid===
e&&(u._loadingJourneyGuid=null)}),o.getManifest().then(function(e){var s,c,o;if(!e.assetTypes){h.verbose(
"Failed creating journey for asset type: {0}. No assetTypes property defined for extension {1}".format(
t,n));f.reject();return}if(s=e.assetTypes.first(function(n){return n.name===t}),!s||!s.partName||!s.
bladeName){h.verbose("Failed creating journey for asset type: {0}. No assetType matched in extension {1}".
format(t,n));f.reject();return}c=i.Locator.forExtension(n).withPartType(s.partName);o||(o=u.addPartToStartBoard(
{originPartLocator:c,model:r,reuseExistingPart:!1,dontSetupWidget:!0}));o.isComposed&&o.isSelected()&&
u._activeJourney&&u._activeJourney.originTile===o?(u.portalWidget.showJourney(),f.resolve()):o.selectOnReady(
function(){return!o.isSelected()&&u.tryDeactivateJourney()}).then(function(t){t&&(lt({extension:n,source:
et,action:ut.JourneyOpened,assetType:s.name,name:s.bladeName}),u._savedJourneys=u.getJourneysJson(),
u.save(),$(u).trigger(b.DesktopManagerEvents.journeyCreated));f.resolve()}).fail(function(i){h.error(
"Failed to select part to start journey from asset. \nExtension: {0}. \nAsset: {1}. \nOrigin Part: {2}. \nReason: {3}".
format(n,t,o.toString(),i));f.reject()})},function(){f.reject()}),f.promise},n.prototype.openSingleBlade=
function(n,t){var r,i=$.Deferred();return r=this._openBlade(n,t,function(n,i){return i===0&&n.locator.
equals(t.locator)}),r.then(function(n){i.resolve(n)},function(){i.reject()}),i.promise()},n.prototype.
openMultipleBlades=function(n,t){var u=this,i=$.Deferred(),r;return t&&t.length!==0?(r=t.map(function(
t){return u._openBlade(n,t,function(n){return n.locator.equals(t.locator)&&t.model&&n.getViewModel()&&
s.deepSubset(n.getViewModel(),t.model)})}),$.when.apply($,r).done(function(){i.resolve([].splice.call(
arguments,0))}).fail(function(){i.reject()})):i.resolve([]),i.promise()},n.prototype.confirmBladesCanClose=
function(n){var t=this,i=(n||[]).first(function(n){return!t._canCloseBlade(n)});return!i?!0:this._view.
showConfirmDialog(st.confirmEditScopeDiscard)},n.prototype.forceCloseBlade=function(n,t){var r,i,u;if(
!this._activeJourney)throw new Error(it.noActiveJourney);r=this._findFirstItemIndex(this._activeJourney.
children,n,it.noBladeInJourney.format(n));i=this._activeJourney.children[r];this._startBoard.detailContainers.
length===1&&this._startBoard.detailContainers[0].id===i.id?this._discardJourney(this._activeJourney.
id):(i.masterContainer&&(u=i.masterContainer.detailContainers.indexOf(i),u>=0&&i.masterContainer.detailContainers.
splice(u,1)),this._closeBladeRecursive(i,r),this._portalServices.bladePairManager.update(this._activeJourney.
blades,!!t&&!!t.openBlade));this._triggerActiveJourneyChanged();this.save()},n.prototype.tryCloseBlade=
function(n){var t=this.confirmBladesCanClose([n]);return t&&this.forceCloseBlade(n),t},n.prototype.closeChildBlades=
function(n){var i=this.discardEditsOfBlade(n,{includeSelf:!1,includeDescendants:!0}),t;if(i.successful)
for(t=n.detailContainers.length-1;t>=0;t--)this.forceCloseBlade(n.detailContainers[t].id);return i},
n.prototype.discardEditsOfPart=function(n,t){var i=n.getPartsContainer(),r=n.journeyPath;return this.
_discardEditsOfContainer(i,t.force,function(r){var f=MsPortalFx.Base.Utilities.deepEquals(r.path,n.journeyPath),
e=!1,u;if(!f&&r.path.length>i.journeyPath.length){try{u=MsPortalFx.Base.Utilities.parseSortedString(
r.path[i.journeyPath.length])}catch(o){h.error("Failed to parse journey path segment for blade '{0)'. Path: '{1}'. Error: '{2}'.".
format(i.toString(),JSON.stringify(i.journeyPath),o.message))}e=u&&u.master&&u.master.part===n.id}return r.
value&&r.value.editScope&&(t.includeSelf&&f||t.includeDescendants&&e)})},n.prototype.discardEditsOfBlade=
function(n,t){return this._discardEditsOfContainer(n,t.force,function(i){var r=MsPortalFx.Base.Utilities.
deepEquals(i.path,n.journeyPath),u=!r&&(i.value.type===1||i.path.length>=n.journeyPath.length+2);return i.
value&&i.value.editScope&&(t.includeSelf&&r||t.includeDescendants&&u)})},n.prototype._discardEditsOfContainer=
function(n,t,i){var f=this,u=[],e=n,o=n instanceof y.Instance||e.isInitialized,r={confirmationRequired:
!1,successful:!1};if(!this._activeJourney)throw new Error(it.noActiveJourney);return o&&(u=this._activeJourney.
ambientSettings.getItemsInPath(n.journeyPath).filter(i)),r.confirmationRequired=!t&&u.length>0,(!r.confirmationRequired||
this._view.showConfirmDialog(st.confirmEditScopeDiscard))&&(r.successful=!0,u.forEach(function(n){f.
_activeJourney.ambientSettings.removeItem(n.path);f._portalServices.editScopeManager.onEditScopeDisposed(
n.value.editScope.editScopeId)})),r},n.prototype._canCloseBlade=function(n){var i,t;if(!this._activeJourney)
throw new Error(it.noActiveJourney);return i=this._findFirstItemIndex(this._activeJourney.children,n,
it.noBladeInJourney.format(n)),t=this._activeJourney.children[i],this._startBoard.detailContainers.length===
1&&this._startBoard.detailContainers[0].id===t.id?this._canDiscardJourney(this._activeJourney.id):this.
_canCloseBladeRecursive(t)},n.prototype.addPartToStartBoard=function(n){if(!n){h.error("options should be specified for adding a part to the startboard.");
return}if(!n.originPartLocator){h.error("options.originPartLocator should be specified for adding a part to the startboard.");
return}var r=new i.DefinitionFinderImpl(this._portalServices.extensionManager),u=this._createCompositionServices(
r),t;return n.reuseExistingPart!==!1&&(t=this._startBoard.children.first(function(t){return t.matchesLocatorAndModel(
r,n.originPartLocator,n.model)})),t||(t=p.create(u,n.originPartLocator,n.model),t.dontSetupWidget=!!n.
dontSetupWidget,MsPortalFx.Parts.PartSize[n.initialSize]&&(t.initialSize=n.initialSize),this._startBoard.
addChild(t),this._view.addPartToStartBoard(t),t.save(),this.save()),t},n.prototype.pinPartToStartboard=
function(n){var t=this,f=new i.DefinitionFinderImpl(this._portalServices.extensionManager),o=this._createCompositionServices(
f),r=$.Deferred(),u=n.partDefinition.supportedSizes,e;return e=n.cloneAs(function(t){return p.create(
o,n.locator,t)}),e.done(function(i){if(MsPortalFx.Parts.PartSizeHelper.isVariableSize(i.initialSize))
{var e;u&&u.length>0&&(e=u.first(function(n){return MsPortalFx.Parts.PartSizeHelper.isFixedSize(n)}),
e!==null&&e>=0?(i.initialSize=e,i.widgetState().NormalState.size=e):r.rejectWith(t))}t._pinPartComposition(
i,f);t._addPinNotification(n.getTitle());r.resolveWith(t,[i])}).fail(function(){h.error("Pin Part to Startboard Failed: The target part could not pinned. Part: {0}".
format(n.toString()))}),r.promise()},n.prototype._addPinNotification=function(n){var t=n?r.Shell.pinnedToStartBoardWithTitle.
format(n):r.Shell.pinnedToStartBoard,i=u.getNotificationManager();i&&(i.removeNotification(t),i.addClientNotification(
{title:t,description:t,status:0,timestamp:new Date,correlationIds:[t]}))},n.prototype.pinBladeToStartboard=
function(n,t,r){var u=this,f=new i.DefinitionFinderImpl(this._portalServices.extensionManager),e=this.
_createCompositionServices(f);f.locateAsync(n).done(function(i){if(i.pinnedPart){var s=n.getExtensionLocator(
).withPartType(i.pinnedPart),c=i.inputs||[],h=c.reduce(function(n,i){return n[i]=v.PropertyBinding.getModelValue(
t,i).value,n},{}),o=u._startBoard.children.first(function(n){return n.matchesLocatorAndModel(f,s,h)}
);o?(o.dontSetupWidget=!1,u._startBoardPartsLoaded&&o.addWidgetToUI(u._startBoard.widget)):(o=p.create(
e,s,h),u._pinPartComposition(o,f));u._addPinNotification(r)}}).fail(function(){h.error("Pin Blade Failed: The target blade could not be located. Locator: {0}".
format(n.toString()))})},n.prototype.removeTile=function(n,t){var i=this._startBoard.children.first(
function(t){return t.id===n}),u,f,e,o,r;i&&(u=i.editScopeId()&&this._portalServices.editScopeManager.
getDirtyObservable(i.editScopeId()),e=!u||!u(),this._activeJourney&&this._activeJourney.isStartedWithContextBlade(
)&&this._activeJourney.originTile===i?r=this._activeJourney.id:(f=this.getJourneysJson().first(function(
n){return n.originPartId===i.id}),r=f&&f.id),o=!r||this._canDiscardJourney(r),(t||e&&o||this._view.showConfirmDialog(
st.confirmEditScopeDiscard))&&(r&&this._discardJourney(r),this._startBoard.removeChild(i),i.dontSetupWidget||
h.warning("Part '{0}' is removed from the start board.".format(i)),this.save()))},n.prototype.replacePart=
function(n,t,r){var s=this,u,h=this.getJourneysJson().first(function(t){return n&&n.id===t.originPartId}
),w=new i.DefinitionFinderImpl(this._portalServices.extensionManager),l=this._createCompositionServices(
w),f=$.Deferred(),v=!0,e,y,o;return r=r||{},this._validateReplacePartArgs(n,t,r.newPartContainerModel,
function(n){y=n})?(n instanceof p.Instance?(u=p.create(l,t,r.newPartContainerModel,n.id),o=n,u.dontSetupWidget=
o.dontSetupWidget,v=!o.dontSetupWidget):u=a.create(l,t,n.id,r.newPartContainerModel),u.originalPartLocator=
n.originalPartLocator||n.locator,e=n.getPartsContainer(),n.dispose(!0),n.parent.replaceChild(n,u),u instanceof
p.Instance&&h?this.tryDiscardJourney(h.id):e.getPartsContainer().detailContainers.slice(0).reverse().
forEach(function(t){t.masterPartId===n.id&&s.tryCloseBlade(t.id)}),u.widgetState(n.widgetState()),u.
save(),v?(u.widget=n.widget,u.recompose(n.parent.widget)):u.compose(n.parent.widget),u.awaitComposed(
).then(function(){f.resolve(u);e instanceof c.Instance&&e.saveTemplate();!r.preventNewPartActivation&&
u.partDefinition.details&&u.partDefinition.details.length>0&&u.selectOnReady(function(){return!s._activeJourney}
)},function(){f.reject("Unable to compose the mutated part.")})):f.reject(y),f.promise()},n.prototype.
_validateReplacePartArgs=function(n,t,i,r){var u;return n&&t?n.isDisposed?u="Unable to replace part '{0}', it has already been disposed.".
format(n.toString()):n.getPartsContainer()?n.widget&&n.parent&&n.parent.widget||(u="Unable to replace part '{0}', the part or its parent have not been composed.".
format(n.toString())):u="Unable to replace part '{0}', it is not a child of a PartsContainerComposition.".
format(n.toString()):u="Replace part requires a part and a new locator.",u&&r&&r(u),!!u==!1},Object.
defineProperty(n.prototype,"portalWidget",{get:function(){return this._view.portalWidget},enumerable:
!0,configurable:!0}),n.prototype.getSettingCollection=function(){var t={},n=this._activeJourney;return t[
ot]=JSON.parse(JSON.stringify(this)),n&&n.children&&(t[n.id]=JSON.parse(JSON.stringify(n))),{store:2,
settings:t}},n.prototype.dispose=function(){this._lifetime&&(this._lifetime.dispose(),this._lifetime=
null);this._populateStartBoardFromSettingsHandler&&(this.portalWidget.element.off(tt.fxshowstartboard,
this._populateStartBoardFromSettingsHandler),this._populateStartBoardFromSettingsHandler=null);this.
_sharedSettings&&(this._sharedSettings.dispose(),this._sharedSettings=null)},n.prototype.save=function(
){var n=this;this.initializationPromise.finally(function(){n._portalServices.settings.setSettings(n.
getSettingCollection())})},n.prototype.load=function(n){var i=this,r,t;n=n||{};this._processSettings(
n);r=this._createCompositionServices();t=n[ot];t&&t.startBoardId&&n[t.startBoardId]?this._startBoard=
y.Instance.fromJSON(r,n,n[t.startBoardId]):(h.error("Unable to load StartBoard state from user settings, setting does not exist. Creating a default StartBoard."),
h.verbose("Current settings:\n"+ko.toJSON(n,null,2)),this._startBoard=y.create(r));this._savedJourneys=
(t&&t.savedJourneyIds||[]).map(function(t){var i=n[t];return i?i.ambientSettings=l.deserializeAmbientSettings(
i.ambientSettings):(h.error("Unable to load state for saved Journey '{0}' from user settings, setting does not exist.".
format(t)),h.verbose("Current settings:\n"+ko.toJSON(n,null,2))),i}).filter(function(n){return n&&i.
cachedJourneys.addOrUpdate(n.id,!0),!!n});this._trimSavedJourneys();this._removeOrphanedStartboardParts(
);this._view.composeStartBoard(this._startBoard);this._populateStartBoardFromSettings(t);this._initDeferred.
resolve();this._view.portalWidget.element.on(tt.fxshowstartboard,this._populateStartBoardFromSettingsHandler=
function(){i._startBoard.children.forEach(function(n){i._displayPartOnStartBoardIfAvailable(n)});i._startBoard.
discardWidgetStateOfUnusedChildren();i._startBoardPartsLoaded=!0;i._view.portalWidget.element.off(tt.
fxshowstartboard,i._populateStartBoardFromSettingsHandler)});$(this).trigger(b.DesktopManagerEvents.
settingsLoaded)},n.prototype._removeOrphanedStartboardParts=function(){var t=this,n={};this._savedJourneys.
forEach(function(t){n[t.originPartId]=!0});this.startBoard.children.slice(0).forEach(function(i){i.dontSetupWidget&&
!n[i.id]&&(h.warning("Hidden part '{0}' is not an origin of any saved journey and will be removed.".
format(i.toString())),t.startBoard.removeChild(i))})},Object.defineProperty(n.prototype,"startBoard",
{get:function(){return this._startBoard},enumerable:!0,configurable:!0}),n.prototype.getActiveJourney=
function(){return this._activeJourney},n.prototype.setActiveJourney=function(n){this._activeJourney=
n},n.prototype.setSharedSettingsManager=function(n){this._sharedSettings=n},n.prototype.getJourneysMetadata=
function(){var r=this,n=[],t,i=!1,u=function(n,t){return n.id===t.id||n.originPartId&&n.originPartId===
t.originPartId};return this._activeJourney&&(t=this._activeJourney.toJSON()),this._savedJourneys.forEach(
function(f){if(t&&!t.firstBladeInContextPane&&u(t,f))n.push(r._activeJourney),i=!0;else{var e={title:
ko.observable(f.firstBladeTitle),icon:ko.observable(f.icon),subtitle:ko.observable(""),openInContextPane:
f.firstBladeInContextPane},o={title:ko.observable(f.lastBladeTitle),icon:ko.observable(),subtitle:ko.
observable("")};n.push({id:f.id,firstBlade:ko.observable(e),lastBlade:ko.observable(o),ambientSettings:
f.ambientSettings,lastModifiedTime:ko.observable(f.lastModifiedTime)})}}),this._activeJourney&&!i&&n.
push(this._activeJourney),n},n.prototype.getJourneysJson=function(){var r=this,t=this._savedJourneys.
slice(0),n,i;return this._activeJourney&&!this._activeJourney.isStartedWithContextBlade()&&(this._activeJourney.
originTile&&this._activeJourney.originTile.partState&&this._activeJourney.originTile.getViewModel()!==
a.EmptyViewModel&&(this._activeJourney.originPartStateWhenActive=ko.toJS(this._activeJourney.originTile.
partState)),n=this._activeJourney.toJSON(),i=t.firstIndex(function(t){return t.id===n.id?!0:t.originPartId===
n.originPartId?(r._discardJourney(t.id),!0):!1}),i>=0?t[i]=n:t.push(n)),t},n.prototype.getSavedJourneys=
function(){return this._savedJourneys},n.prototype.setSavedJourneys=function(n){this._savedJourneys=
n},n.prototype.tryDeactivateJourney=function(){if(this._activeJourney){var t=this._activeJourney.id,
n;n=rt.startTrace({source:et,action:ut.JourneyDiscarded,name:this._activeJourney.originTile&&this._activeJourney.
originTile.locator&&this._activeJourney.originTile.locator.toFriendlyString()});this._savedJourneys=
this.getJourneysJson();this._activeJourney.save();this._closeActiveJourney(!0);this.cachedJourneys.addOrUpdate(
t,!0);this._trimSavedJourneys();this.save();$(this).trigger(b.DesktopManagerEvents.journeyDeactivated);
rt.completeTrace(n)}else this._startBoard&&(this._startBoard.detailContainers=[]);return!0},n.prototype.
forceDiscardJourney=function(n){this._discardJourney(n)},n.prototype.updateTileSelection=function(n)
{this._modeManager.updateTileSelection(n)},n.prototype.tryDiscardJourney=function(n){var t=!1;return(
this._canDiscardJourney(n)||this._view.showConfirmDialog(st.confirmEditScopeDiscard))&&(this._discardJourney(
n),t=!0),t},n.prototype._triggerActiveJourneyChanged=function(){var n=this._activeJourney?JSON.stringify(
this._activeJourney):"";this._previousActiveJourney!==n&&($(this).trigger(b.DesktopManagerEvents.activeJourneyChanged),
this._previousActiveJourney=n,rt.setJourneyId(this._activeJourney?this._activeJourney.id:""))},n.prototype.
_trimSavedJourneys=function(){var n=this;this.cachedJourneys.trim(this.cachedJourneysCapacity);this.
_savedJourneys.length>this.cachedJourneysCapacity&&this._savedJourneys.filter(function(t){return!n.cachedJourneys.
contains(t.id)}).forEach(function(t){return n.forceDiscardJourney(t.id)})},n.prototype._canDiscardJourney=
function(n){var t=this.getJourneysMetadata().first(function(t){return t.id===n}),i=t&&t.ambientSettings.
getItems().some(function(n){return n.value&&n.value.editScope&&n.value.editScope.dirty()&&n.value.editScope.
disposeOnJourneyDiscard});return!t||!i},n.prototype._discardJourney=function(n){var t=this._savedJourneys.
first(function(t){return t.id===n}),r=!1,u,i,f;this.cachedJourneys.remove(n);this._deleteJourneySettings(
n);t&&(u=this._savedJourneys.indexOf(t),this._savedJourneys.splice(u,1),r=!0,this._activeJourney&&this.
_activeJourney.id===n||(i=t.originPartId&&this.startBoard.getChildById(t.originPartId),f=t.ambientSettings.
getItems().reduce(function(n,t){return t.value&&t.value.editScope&&n.push(t.value.editScope),n},[]),
this._disposeEditScopes(f),i&&i.dontSetupWidget&&this.removeTile(i.id)));this._activeJourney&&this._activeJourney.
id===n&&(this.isJourneyLoading||this.portalWidget.showStartBoard(),this._closeActiveJourney(),r=!0);
r&&(this._triggerActiveJourneyChanged(),this.save(),$(this).trigger(b.DesktopManagerEvents.journeyDiscarded))}
,n.prototype._deleteJourneySettings=function(n){return this._sharedSettings.deleteSettings({store:2,
keys:[n]})},n.prototype._disposeEditScopes=function(n){var t=this;(n||[]).forEach(function(n){if(n.disposeOnJourneyDiscard)
t._portalServices.editScopeManager.onEditScopeDisposed(n.editScopeId)})},n.prototype.activateJourney=
function(n){var i=this,o=this._savedJourneys.first(function(t){return t.id===n}),t=$.Deferred(),r,u,
f=MsPortalFx.Util.newGuid(),s=function(r){i._activateJourneyFromSettings(n,r).then(function(n){t.resolve(
n)},function(n){t.reject(n)})},e=function(){i._journeySettingsPromise=r=i._portalServices.settings.querySettings(
vt());r.then(function(u){i._journeySettingsPromise!==r?t.reject("Aborted retrieval of settings for journey '{0}'.".
format(n)):s(u)})};return this._loadingJourneyGuid=f,t.promise().finally(function(){i._loadingJourneyGuid===
f&&(i._loadingJourneyGuid=null)}),this._activeJourney&&this._activeJourney.id===n?(t.resolve(this._activeJourney),
this._activeJourney.isStartedWithContextBlade()||this.portalWidget.showJourney()):o?this._activeJourney&&
this._activeJourney.isStartedWithContextBlade()?this.tryDiscardJourney(this._activeJourney.id)?e():t.
reject("Unable to discard current journey."):this.tryDeactivateJourney()?e():t.reject("Unable to deactivate current journey."):
(u="Unable to activate journey '{0}', not found in saved journeys.".format(n),h.error(u),t.reject(u)),
t.promise()},n.prototype._activateJourneyFromSettings=function(n,t){var e=this,s=this._createCompositionServices(
),f=t&&t[n],u=$.Deferred(),i,o,r;return f?(o=rt.startTrace({source:et,action:ut.JourneyActivated,name:
f.originPartId}),this.setActiveJourney(l.Instance.fromJSON(s,t,f,this._startBoard)),this._activeJourney?
($(this).trigger(b.DesktopManagerEvents.journeyActivating),this._view.composeJourney(this._activeJourney),
this._activeJourney.children.forEach(function(n,t){var i=t===e._activeJourney.children.length-1;e._view.
addBlade(n,{assetType:undefined,focus:i})}),r=this._activeJourney.originTile,r&&(this._displayPartOnStartBoardIfAvailable(
r),r.notifyDetailBladesRehydrated(this._activeJourney.blades),r.awaitComposed().done(function(){var n=
f.originPartStateWhenActive;MsPortalFx.Base.Utilities.Internal.Serialization.isSerializedObject(n)&&
(n=MsPortalFx.Base.Utilities.Internal.Serialization.fromSerializableObject(n));r.loadState(n)})),this.
_triggerActiveJourneyChanged(),this.save(),u.resolve(this._activeJourney),$(this).trigger(b.DesktopManagerEvents.
journeyActivated)):(i="Unable to activate journey '{0}', deserialization of journey settings failed.".
format(n),h.error(i),u.reject(i)),rt.completeTrace(o)):(i="Unable to activate journey '{0}', settings for this journey are not found in user settings.".
format(n),h.error(i),u.reject(i)),u.fail(function(){e.forceDiscardJourney(n)}),u.promise()},n.prototype.
toJSON=function(){var r=this,i={},n,t;return Object.keys(this._dayZeroParts).forEach(function(n){i[n]=
r._dayZeroParts[n].map(function(n){return JSON.parse(JSON.stringify(n))})}),n={startBoardId:this._startBoard?
this._startBoard.id:null,savedJourneyIds:(this._savedJourneys||[]).map(function(n){return n.id}),dayZeroParts:
i},t=this._activeJourney&&this._activeJourney.id,t&&n.savedJourneyIds.indexOf(t)<0&&n.savedJourneyIds.
push(t),n},n.prototype._addStartBoardPartsFromManifest=function(t,r){var e=this,f=t.name,u=t.startBoardParts,
o=i.Locator.forExtension(f);r||(r=u.map(function(n){return n.name}));u&&u.length&&r.forEach(function(
n){var t=u.first(function(t){return t.name===n}),i;t&&(i=o.withStartboardPartInstance(t.name),e.addPartToStartBoard(
{originPartLocator:i,initialSize:t.initialSize}))});this._dayZeroParts[f]=n._getDayZeroStartboardParts(
t,r)},n.prototype._createCompositionServices=function(n){var t=$.extend({},this._portalServices);return t.
finder=n||new i.DefinitionFinderImpl(this._portalServices.extensionManager),t.desktop=this,t.sharedSettings=
this._sharedSettings,t},n.prototype._findPartContainer=function(n){var t;if(this._startBoard&&this._startBoard.
id===n)t=this._startBoard;else if(this._activeJourney)t=this._findFirstItem(this._activeJourney.children,
n,it.noBladeInJourney.format(n));else throw new Error(it.noActiveJourney);return t},n.prototype._openBlade=
function(n,t,i){var u=this._findPartContainer(n),o=u instanceof y.Instance,f=$.Deferred(),r,e,s=this.
_createCompositionServices();return u?((u.detailContainers||[]).forEach(function(n,u){n.locator.equals(
t.locator)&&n.masterPartId===t.masterPartId&&n.masterInvocationProperty===t.masterInvocationProperty&&
i(n,u)&&(r=n,f.resolve(r))}),r?(r.widget&&r.widget.trigger(MsPortalFx.Base.EventTypes.fxensureviewportvisible,
null,{widget:r.widget}),b.isTraceEnabled&&h.verbose("[DesktopManager] Found a previously opened detail blade."+
"\n  Existing blade: {0}. Model: {1}.".format(r.toString(),ko.toJSON(r.getInputsOnlyViewModel()))+"\n  Requested Descriptor: {0}.".
format(ko.toJSON(t)))):($(this).trigger(b.DesktopManagerEvents.bladeOpening,{masterContainerId:n,bladeDescriptor:
t}),o&&u.detailContainers.length===0?this.createJourney(t.masterPartId,t).finally(function(n){n&&n.children&&
n.children.length>0?f.resolve(n.children[0]):f.reject()}):(r=c.create(s,t,u),u.detailContainers.unshift(
r),e=o?0:1+this._findFirstItemIndex(this._activeJourney.children,u.id,it.noBladeInJourney.format(u.id)),
this._activeJourney.addChild(r,e),this._view.addBlade(r,{assetType:t.originAssetType,alignToStart:t.
masterDetailsDefinition&&t.masterDetailsDefinition.asSubJourney,index:e,reusableWidget:t.reusableWidget,
focus:!t.reusableWidget}),this._triggerActiveJourneyChanged(),this.save(),f.resolve(r),this._telemetryTrace(
t&&t.locator,ut.BladeOpened)))):f.reject(),f.promise()},n.prototype._canCloseBladeRecursive=function(
n){var i=this._activeJourney.ambientSettings,t=function(n){return n.isInitialized&&i.getItemsInPath(
n.journeyPath).some(function(n){return n.value.editScope&&n.value.editScope.dirty()})?!0:n.detailContainers&&
n.detailContainers.length!==0?(n.detailContainers||[]).some(function(n){return t(n)}):!1};return!t(n)}
,n.prototype._closeBladeRecursive=function(n,t,i){this._removeBladesFromUIRecursive(n);this._disposeBladesRecursive(
n,t,i)},n.prototype._removeBladesFromUIRecursive=function(n){for(var t=n.detailContainers.length-1;t>=
0;t--)this._removeBladesFromUIRecursive(n.detailContainers[t]);this._telemetryTrace(n&&n.locator,ut.
BladeClosed);this._view.removeBlade(n)},n.prototype._disposeBladesRecursive=function(n,t,i){var f=this,
r=n.parent,u=r.children.indexOf(n,t);i?n.dispose(!0):r.removeChildAt(u);n.detailContainers.forEach(function(
n){f._disposeBladesRecursive(n,u,i)})},n.prototype._closeActiveJourney=function(n){var i=this,t=this.
_activeJourney;this.setActiveJourney(null);this._startBoard.detailContainers=[];t&&(t.children.slice(
0).forEach(function(t){t.isDisposed||i._closeBladeRecursive(t,0,n)}),t.originTile&&t.originTile.dontSetupWidget&&
!n&&this.removeTile(t.originTile.id),t.dispose(n));this._view.removeAllBlades(function(n){h.error("DesktopManager: Found un-tracked blade '{0}' in view after closing active journey. It will be forcefully removed.".
format(n))})},n.prototype._findFirstItem=function(n,t,i){var r=this._findFirstItemIndex(n,t,i);return n[
r]},n.prototype._findFirstItemIndex=function(n,t,i){var r=n.firstIndex(function(n){return n.id===t});
if(r===-1){h.verbose(ko.toJSON(this.getDiagnosticsData(),null,2));throw new Error(i);}return r},n.prototype.
_pinPartComposition=function(n){n.save();this._startBoard.addChild(n);this._view.addPartToStartBoard(
n);this.save()},n.prototype._telemetryTrace=function(n,t){n&&lt({extension:n.getExtensionLocator().name,
source:et,action:t,name:n.toFriendlyString()})},n.prototype._handleAssetDeleted=function(n,t,i){var f=
this,r=this._startBoard?this._startBoard.getComposedParts():[],u;this._activeJourney&&this._activeJourney.
blades&&(r=r.concat(this._activeJourney.blades.mapMany(function(t){var i=[];return t.extension.name===
n&&i.push(t),i.concat(t.getComposedParts().filter(function(t){return t.extension.name===n}))})),u=this.
_activeJourney.blades.first(function(n){return!f._canCloseBlade(n.id)}));r.forEach(function(n){n.getAssetInstanceMetadataAsync(
).done(function(r){if(r&&r.type===t&&MsPortalFx.Base.Utilities.deepEquals(r.id,i)){var f=u||n.isDirty;
n.disableForAssetDeleted(!f)}})})},n._getDayZeroStartboardParts=function(n,t){var r=i.Locator.forExtension(
n.name);return t=t||[],(n.startBoardParts||[]).filter(function(n){return t.indexOf(n.name)>=0}).map(
function(n){return r.withStartboardPartInstance(n.name)})},n.prototype.isStartBoardPartLoaded=function(
n,t){return typeof t=="boolean"?this._loadedStartBoardPartIds[n]=t:!!this._loadedStartBoardPartIds[n]}
,n.prototype._displayPartOnStartBoardIfAvailable=function(n){var t=this;if(!this.isStartBoardPartLoaded(
n.id)){this.isStartBoardPartLoaded(n.id,!0);var i=n.locator.getExtensionLocator()&&n.locator.getExtensionLocator(
).name,f=i.toLowerCase(),r=function(i){h.warning(i.format(n));t._startBoard.removeChild(n);t._startBoard.
removeChildWidget(n.id)},u=function(i,u){var f=!1;return i===0?(u||t._view.addPartToStartBoard(n),f=
!0):i===1&&(r("[Definition Change] Part '{0}' no longer exists in pre-loaded extension definition and will be removed."),
f=!0),f},e=function(i,u){(i.startBoardParts||[]).some(function(t){return t.name===n.locator.name})?u||
t._view.addPartToStartBoard(n):r("[Definition Change] Part '{0}' no longer exists in force-loaded extension definition and will be removed.")}
;this._extensionsMetadataInfo.items.some(function(n){return n.name.toLowerCase()===f})?u(n.definitionExists(
),n.isComposed||n.dontSetupWidget)||(this._view.addPartToStartBoard(n),n.locator.type===7?this._portalServices.
extensionManager.getManifestByName(i).then(function(n){e(n,!0)}):this._portalServices.extensionManager.
getExtensionByName(i).then(function(){u(n.definitionExists(),!0)})):r("[Definition Change] Part '{0}' will be removed because the extension it belongs to is no longer known by the portal.")}
},n.prototype._populateStartBoardFromSettings=function(n){this._getDayZeroPartLocatorsInSettings(n&&
n.dayZeroParts);this._loadMissingDayZeroParts()},n.prototype._getDayZeroPartLocatorsInSettings=function(
n){var t=this,r=function(n){try{return i.Locator.fromJSON(n)}catch(t){return h.error("addNewExtensionParts: Failed to deserialize a startboard part locator. '{0}'".
format(t)),null}};Array.isArray(n)?n.forEach(function(n){var u=r(n),i;u&&(i=u.getExtensionLocator().
name,t._dayZeroParts[i]||(t._dayZeroParts[i]=[]),t._dayZeroParts[i].push(u))}):Object.keys(n||{}).forEach(
function(i){var u=n[i]||[];t._dayZeroParts[i]=u.map(r).filter(function(n){return!!n})})},n.prototype.
_loadMissingDayZeroParts=function(){var t=this;this._portalServices.extensionManager.onManifestLoad(
function(i){var r=t._extensionsMetadataInfo.items.first(function(n){return n.name===i.name}).startBoardParts,
u=t._extensionsMetadataInfo.testExtensionNames&&t._extensionsMetadataInfo.testExtensionNames.indexOf(
i.name)>=0;!r&&(t._loadAllStartBoardParts||u)&&(r=i.startBoardParts.map(function(n){return n.name}));
var f=t._dayZeroParts[i.name]||[],e=t._dayZeroParts[i.name]=n._getDayZeroStartboardParts(i,r),o=e.filter(
function(n){return!f.some(function(t){return n.equals(t)})});return o.forEach(function(n){h.warning(
"Adding missing day zero part to startboard: '{0}'".format(n.toString()));t.addPartToStartBoard({originPartLocator:
n,initialSize:i.startBoardParts.first(function(t){return t.name===n.name}).initialSize})}),!0})},n.prototype.
getDiagnosticsData=function(){return{startboard:this._startBoard&&this._startBoard.getDiagnosticsData(
),activeJourney:this._activeJourney&&this._activeJourney.getDiagnosticsData()}},n.prototype.getAssetDiagnosticsData=
function(){return this._activeJourney?this._dumpCompositionAssets(this._activeJourney):Q.resolve("No journey")}
,n.prototype._dumpCompositionAssets=function(n){var r=this,t={location:n.locator?n.locator.toString(
):"ROOT",assetId:"no asset ID"},i=Q.defer();return w.getCompositionAssetId(n).then(function(n){t.assetId=
n},function(){}).then(function(){if(n.children&&n.children.length){var u=[];t.children=[];n.children.
forEach(function(n,i){u.push(r._dumpCompositionAssets(n).then(function(n){t.children[i]=n}))});Q.all(
u).then(function(){i.resolve(t)})}else i.resolve(t)}),i.promise},n.prototype._processSettings=function(
t){var u=this,i=[],r=[],f=[],e=[];return t[ht]&&(e=t[ht].children||[]),t[ot]&&(f=t[ot].savedJourneyIds||
[]),Object.keys(t).forEach(function(o){if(f.indexOf(o)>-1){var s=n._createAggregatedSetting(o,t);t[o]=
s;i.push(u._sharedSettings.setSetting(2,o,s))}else e.indexOf(o)>-1||(a.isPartSetting(o)?i.push(u._sharedSettings.
migrateSetting(2,3,o,t[o])):typeof t[o]=="object"&&Object.keys(t[o]).length===1&&Object.keys(t[o]).indexOf(
"collapsed")>=0?i.push(u._sharedSettings.migrateSetting(2,4,o,t[o])):o!==ot&&o!==ht&&r.push(o))}),r.
length&&(h.warning("Removing the following Journey settings not referred by Startboard or Desktop: {0}".
format(r.join(","))),i.push(this._sharedSettings.deleteSettings({store:2,keys:r}))),Q.all(i)},n._createAggregatedSetting=
function(t,i){var r=i[t];return r&&!r.childSettings&&r.children&&r.children.length&&(r.childSettings=
{},r.children.forEach(function(t){p.isStartboardPartSetting(i[t])||(r.childSettings[t]=n._createAggregatedSetting(
t,i))})),r},n.prototype._setupOrganizeModeComponents=function(n){var t=this,i=this.mode.subscribe(function(
r){r===1&&MsPortalFx.Base.Amd.load(n.dragDrop).then(function(n){n.create(t._lifetime,t,t.portalWidget.
element);i.dispose()})});this._lifetime.registerForDispose(i)},n}();t.DesktopManagerImpl=ct}(it||(it=
{})),it});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Compositions/UI.Composition.Blade",
["require","exports","../../Prototype/Extension.Definition.Locator","MsPortalImpl/Resources/ImplScriptResources",
"../../Interactions/Interactions.FlowLayoutDragDrop","../../Interactions/Interactions.FocusHandler",
"../../Services/Services.Settings","../../Base/Telemetry","./UI.Composition.DefinitionChangeMonitor",
"../Commands/UI.CommandBarManager","../Commands/UI.Commands","./UI.Composition","./UI.Composition.Base",
"./UI.Composition.BladeOpener","./UI.Composition.BladeTemplateManager","./UI.Composition.CompositionAwaiter",
"./UI.Composition.CompositionBinder","./UI.Composition.Lens","./UI.Composition.LensAddition","./UI.Composition.PropertyBinding",
"./UI.Composition.Security","../UI.DesktopManager","../UI.DialogManager","../Commands/UI.ShellCommands",
"../../Widgets/Widgets.Blade","../../Widgets/Widgets.CommandBar","../../Widgets/Widgets.LayoutBase",
"../../Widgets/Widgets.UIElementBase"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,
ut,ft,et){var yt=MsPortalFx.Blades.BladePairingMode,st=MsPortalFx.Base.Diagnostics.Telemetry,pt=MsPortalFx.
ViewModels.Dialogs,ot=MsPortalFx.Base.EventTypes,lt=MsPortalFx.ViewModels.Services.ResourceTypes,at=
MsPortalFx.Base.Utilities.Internal.Serialization,ht=st.ActionModifier,ct=rt.Widget,wt=MsPortalFx.Internal.
ViewModels.CompositionState,vt;return function(t){"use strict";function kt(n,t,i){var r=new yt(n,t.locator),
u={},f=function(){return!t.masterDetailsDefinition||!t.masterDetailsDefinition.pairInfo?null:{actionName:
t.masterDetailsDefinition.name,shouldHideMasterBlade:t.masterDetailsDefinition.pairInfo.shouldHideMasterBlade,
canNavigateMaster:!!t.masterDetailsDefinition.pairInfo.navigateMasterCommands,windowed:t.masterDetailsDefinition.
pairInfo.windowed}};if(!i)throw new Error("masterContainer is required when creating a blade.");return t.
reusableWidget&&(r.id=t.reusableWidget.options.id),r.masterContainer=i,r.masterCommandName=t.masterCommandName,
r.masterPartId=t.masterPartId,r.masterInvocationProperty=t.masterInvocationProperty,r.masterInputKeys=
t.masterInputKeys,r.masterDetailsDefinition=t.masterDetailsDefinition,r.openInContextPane=t.masterDetailsDefinition&&
t.masterDetailsDefinition.openInContextPane,r.setInputsViewModel(w.CompositionBinder.createObservableModel(
t.model)),r.bindings=t.bindings||[],r.pairInfo=f(),n.finder.tryLocate(t.locator,u)&&(r.bladeDefinition=
u.value,r.extension=n.finder.locate(t.locator.getExtensionLocator())),r}var ft=jQuery,wt=window,e=MsPortalFx.
Base.Diagnostics.createLog(n),vt=r.Asset,pt="__{0}_StatusBarCommandDefinitionName__",bt=!!wt.fx.environment.
trace.bladerebind,yt;t.bladeSerializationKeyLimit=256;t.bladeName="Blade";t.create=kt;yt=function(n)
{function yt(i,r,u,f,e){var o=this;n.call(this,i,r,u,f,e);this._widgetReadyToDisplayAwaiter=ft.Deferred(
);this._partAwaiter=new p.CompositionAwaiter(!0);this._containerAwaiter=new p.CompositionAwaiter;this.
_bindingResult=ko.observable();this._disabled=!1;this._rebinding=!1;this._composing=!1;this._displayStateChangesCounter=
0;this._initialized=!1;this._inputKeys=[];this._rebindingCallbacks=ft.Callbacks();this._reboundCallbacks=
ft.Callbacks();this._initialOnInputsSetDeferred=Q.defer();this._compositionDeferred=new ft.Deferred;
this._lastInputsSetDeferred=Q.defer();this._lastInputsSetProperties={};this._restoredFromJson=!1;this.
_lensAddition=new k.LensAddition(this);this._isEligibleForPartManagement=ko.observable(!1);this.masterContainer=
null;this.masterInputKeys=[];this.masterDetailsDefinition=null;this.detailContainers=[];this.bindings=
[];this.editScopeId=ko.observable();this.title=ko.observable("");this.subtitle=ko.observable("");this.
description=ko.observable("");this.helpUri=ko.observable();this.icon=ko.observable(MsPortalFx.Base.Images.
Shell.DefaultBlade());this.titleImageUri=ko.observable();this.contentState=ko.observable(0);this.contentStateDisplayText=
ko.observable();this.pairing=ko.observable(0);this.pairingMode=ko.observable(0);this.pairInfo=null;this.
pairVisible=ko.observable(!0);this.pairParentWidth=ko.observable(0);this.rebindThrottler=new nt.ConsecutiveCallsThrottler(
1e3);this.assetId=ko.observable();this._name=t.bladeName;this._shellViewModel={};this.title(rt.getDefaultTitle(
r&&r.name));this._templateManager=new y.BladeTemplateManager(i);this._isEligibleForPartManagement.subscribe(
this,function(n){o.widget&&o.widget.options.partManagementEnabled(n)})}return __extends(yt,n),Object.
defineProperty(yt.prototype,"initialOnInputsSetPromise",{get:function(){return this._initialOnInputsSetDeferred.
promise},enumerable:!0,configurable:!0}),Object.defineProperty(yt.prototype,"isEligibleForPartManagement",
{get:function(){return this._isEligibleForPartManagement},enumerable:!0,configurable:!0}),yt.prototype.
getViewModel=function(n,t){var i,u,r;n=MsPortalFx.Base.Utilities.isNullOrUndefined(n)?1:n;switch(n){
case 1:i=this._shellViewModel;break;case 3:if(this.isComposed)this.bladeDefinition.viewModelName||e.
error("Blade '{0}' does not define an extension view model.".format(this.locator.toString()));else throw new
Error("Blade '{0}' needs to be composed before retrieving its extension view model.".format(this.toString(
)));i=this._extensionViewModel;break;case 2:if(this.isComposed)this.actionBar?i=this.actionBar.getViewModel(
):(e.error("Blade '{0}' does not have an action bar.".format(this.locator.toString())),i={});else throw new
Error("Blade '{0}' needs to be composed before retrieving its action bar's view model.".format(this.
toString()));break;case 4:u=this._getCommands();r=l.findCommand(u,t,this.toString());i=r&&r.getViewModel(
);break;default:e.error("Invalid model type '{0}' for blade '{1}'.".format(n,this.locator.toString()))}
return i||{}},yt.prototype.getViewModelAsync=function(n,t){var i=this;return this._compositionDeferred.
then(function(){if(n===4){var u=i._getCommands(),r=l.findCommand(u,t,i.toString());return r&&r.getViewModelAsync(
)}return n===3?i._extensionViewModelPromise:i.getViewModel(n)})},yt.prototype.setInputsViewModel=function(
n){this._shellViewModel=n},Object.defineProperty(yt.prototype,"isInitialized",{get:function(){return this.
_initialized},enumerable:!0,configurable:!0}),Object.defineProperty(yt.prototype,"eligibleForBinding",
{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(yt.prototype,"templateKey",
{get:function(){return this._templateKey||(this._templateKey=this._buildTemplateKey(this._shellViewModel)),
this._templateKey},enumerable:!0,configurable:!0}),Object.defineProperty(yt.prototype,"templateManager",
{get:function(){return this._templateManager},enumerable:!0,configurable:!0}),Object.defineProperty(
yt.prototype,"journeyPath",{get:function(){return this._journeyPath||(this._journeyPath=this._buildJourneyPath(
)),this._journeyPath},enumerable:!0,configurable:!0}),Object.defineProperty(yt.prototype,"isDirty",{
get:function(){return this.services.editScopeManager.getDirtyObservable(this.editScopeId())()},enumerable:
!0,configurable:!0}),yt.prototype.getCompositionType=function(){return 5},yt.prototype.isDefaultTitle=
function(){return rt.getDefaultTitle(this.locator.name)===this.title()},yt.prototype.toJSON=function(
){var t=n.prototype.toJSON.call(this),i=this.getInputsOnlyViewModel();return t.bindings=this.bindings,
t.masterBladeId=this.masterContainer?this.masterContainer.id:undefined,t.masterCommandName=this.masterCommandName,
t.masterPartId=this.masterPartId,t.masterInvocationProperty=this.masterInvocationProperty,t.masterInputKeys=
this.masterInputKeys,t.openInContextPane=this.openInContextPane,t.initialized=this._initialized,t.inputKeys=
this._inputKeys,t.pairInfo=this.pairInfo,t.pairVisible=this.pairVisible.peek(),t.pairParentWidth=this.
pairParentWidth.peek(),t.viewModel=at.toSerializableObject(i),t},yt.prototype.getInputsOnlyViewModel=
function(){var n=this._shellViewModel;return this.bladeDefinition&&this.bladeDefinition.outputs&&this.
bladeDefinition.outputs.length>0&&(n=ft.extend({},this._shellViewModel),this.bladeDefinition.outputs.
forEach(function(t){delete n[t]})),n},yt.prototype.onAddingContent=function(n){this.compose(n)},yt.prototype.
onRemovingContent=function(n){n.clear()},yt.prototype.canRemoveContent=function(){return this.services.
desktop.tryCloseBlade(this.id)},yt.fromJSON=function(n,t,i){return l.createCompositionFromJSON(i,function(
){return yt._fromJSON(n,t,i)},function(t,r){var u=new yt(n,t,null,null,i.id);return u.unrecoverableErrorMessage=
r,u})},yt._fromJSON=function(n,t,r){var f=a.getChildrenSettings(JSON.stringify(r.locator),Object.keys(
r.childSettings),r.childSettings).map(function(i){return b.Instance.fromJSON(n,t,i)}),u=new yt(n,i.Locator.
fromJSON(r.locator),f,r.widgetState,r.id);return u.loadFromJson(r),u._restoredFromJson=!0,u.bindings=
w.CompositionBinder.bindingsFromJSON(r.bindings),u.masterCommandName=r.masterCommandName,u.masterPartId=
r.masterPartId,u.masterInvocationProperty=r.masterInvocationProperty,u.masterInputKeys=r.masterInputKeys,
u.openInContextPane=r.openInContextPane,u._initialized=r.initialized,u._inputKeys=r.inputKeys,u.pairInfo=
r.pairInfo,u.pairVisible(MsPortalFx.Base.Utilities.isNullOrUndefined(r.pairVisible)||r.pairVisible),
u.pairParentWidth(MsPortalFx.Base.Utilities.isNullOrUndefined(r.pairParentWidth)?0:r.pairParentWidth),
u._shellViewModel=at.isSerializedObject(r.viewModel)?at.fromSerializableObject(r.viewModel):w.CompositionBinder.
deprecated_deserializeModel(JSON.parse(r.viewModel||null)),u},Object.defineProperty(yt.prototype,"isDisabled",
{get:function(){return this._disabled},enumerable:!0,configurable:!0}),yt.prototype.isPinnable=function(
){return!this.bladeDefinition||this.bladeDefinition.pinnable===!1?!1:this.bladeDefinition.pinnable===
!0?!0:!this.bladeDefinition.locked},Object.defineProperty(yt.prototype,"containsBladeColumns",{get:function(
){if(!this.bladeDefinition)throw new Error("BladeDefintion for Blade '{0}' cannot be null.".format(this.
toString()));return this.bladeDefinition.locked&&this.bladeDefinition.orientation===0},enumerable:!0,
configurable:!0}),yt.prototype.getAssetInstanceMetadataAsync=function(){var n=this;return this.awaitComposed(
).then(function(){var t;return n._hasAssetId()&&!n.isDisabled&&!n.isDisposed&&(t=n._tryGetAssetIdFast(
n._shellViewModel,n.locator.toString()),t.exists)?{id:t.value,type:n.assetType}:undefined})},Object.
defineProperty(yt.prototype,"assetType",{get:function(){return this.bladeDefinition&&this.bladeDefinition.
assetType},enumerable:!0,configurable:!0}),yt.prototype.offRebind=function(n,t){n&&this._rebindingCallbacks.
remove(n);t&&this._reboundCallbacks.remove(t)},yt.prototype.onRebind=function(n,t){n&&this._rebindingCallbacks.
add(n);t&&this._reboundCallbacks.add(t)},yt.prototype.save=function(){return this._composing||this._rebinding||
!this._validateStateForSettings()?ft.Deferred().reject().promise():n.prototype.save.call(this)},yt.prototype.
saveTemplate=function(){return this._currentTemplate=n.prototype.saveTemplate.call(this),this._currentTemplate}
,yt.prototype.getTemplate=function(){var t=n.prototype.getTemplate.call(this),i=this.services.finder.
locate(this.locator);return s.ChangeMonitor.recordChanges(t,this,i),this.services.desktop.mode()===1&&
this._removeTransientChildren(t),t},yt.prototype._removeTransientChildren=function(n){var t=this._lensAddition.
getTransientChildren();t.forEach(function(t){var r=n.children,i;r.remove(r.first(function(n){return n.
widgetId===t.id}));i=n.widgetState.NormalState.layoutSettings.positions;i.remove(i.first(function(n)
{return n.id===t.id}));n.addedChildren.remove(t.locator.name)})},yt.prototype.addNewDefinitionLenses=
function(n){var t=this,i=this.bladeDefinition,r=this.children.map(function(n){return n.locator.name}
),u=i.lenses.map(function(n){return n.name}),f=s.ChangeMonitor.getRemovedChildren(n),o=u.filter(function(
n){return r.indexOf(n)===-1&&f.indexOf(n)===-1});o.forEach(function(n){var r=t.locator.withLens(n),i=
b.create(t.services,r);e.warning("[Definition Change] Lens '{0}' has been added to extension definition and will be added to the blade.".
format(i));t.addChild(i)})},yt.prototype.removeDeletedDefinitionLenses=function(){var n=this,t=this.
bladeDefinition,i=t.lenses.map(function(n){return n.name}),r=this.children.filter(function(n){return i.
indexOf(n.locator.name)===-1});r.forEach(function(t){e.warning("[Definition Change] Lens '{0}' has been removed from extension definition and will be remove from the blade.".
format(t));n.removeChild(t)})},yt.prototype.rebindAsync=function(n){var t=this,r,i,f,u;return this._bladeRebindEndTelemetry(
ht.Cancel),this._bladeRebindMarker=this._bladeStartTelemetry(o.Action.BladeRebind,l.tryGetAssetType(
n)),r=this.widget.element.prev(),r.length&&r.trigger(ot.fxactivatepairmaster),this.widget.trigger(ot.
fxensureviewportvisible,null,{widget:this.widget}),f=l.deepSubset(this._shellViewModel,n),u=function(
n){t._logRebindOperation("Rebind COMPLETED.");t._rebinding=!1;t.save();ft(t.services.desktop).trigger(
nt.DesktopManagerEvents.bladeRebound);t.widget.options.loaded(!0);t.services.desktop.commandsEnabled(
!0);ut.toggleTemporarilyDisabledCommands(!1);t._bladeRebindEndTelemetry(n)},this._logRebindOperation(
"Rebind STARTED.",n),this._waitForTemplatePromise=null,this._waitToRebindPromise=null,f?(this._logRebindOperation(
"Updated properties are empty or are equal to the current blade properties. Aborting rebind.",n),this.
rebindThrottler.rejectPendingPromise(),u(ht.Cancel),i=Q({})):(this._rebinding=!0,this._hasPermissionsDeferred=
Q.defer(),this.bladeDefinition&&!this.bladeDefinition.locked&&this.widget.options.loaded(!1),ut.toggleTemporarilyDisabledCommands(
!0),this.services.desktop.commandsEnabled(!1),i=this._waitToRebindPromise=this.rebindThrottler.throttle(
).then(function(){return t._logRebindOperation("Rebind after throttle.",n),i===t._waitToRebindPromise?
t._rebindAsync(n).finally(function(){i===t._waitToRebindPromise&&u(ht.Complete)}):Q.reject()})),this.
widget.setFocus(),i},yt.prototype._bladeOpenEndTelemetry=function(n){var t=this._bladeOpenMarker;t&&
(this._bladeOpenMarker=null,st.endTrace(t,n))},yt.prototype._bladeRebindEndTelemetry=function(n){var
t=this._bladeRebindMarker;t&&(this._bladeRebindMarker=null,st.endTrace(t,n))},yt.prototype._bladeStartTelemetry=
function(n,t){var i,r;return this._bladeOpenEndTelemetry(ht.Cancel),i=!this.bladeDefinition?o.Data.IncludesExtensionLoadTime:
o.Data.ExtensionAlreadyLoaded,r=this.locator&&this.locator.toFriendlyString(),n===o.Action.BladeLoaded&&
(this._bladeOpenMarker=st.startTrace({source:o.Source.Shell,action:o.Action.BladeOpened,data:i,name:
r,assetType:t})),st.startTrace({source:o.Source.Shell,action:n,data:i,name:r,assetType:t})},yt.prototype.
_rebindAsync=function(n){var t=this,i=Q.defer(),r=this._waitForTemplatePromise=this._getRebindTemplateAsync(
n),u=function(i){Object.keys(n||{}).forEach(function(n){d.PropertyBinding.setModelValue(t._shellViewModel,
n,i?i[n]:undefined)});i&&(t._templateKey=t._buildTemplateKey(n),t._journeyPath=t._buildJourneyPath())}
;return r.fail(function(){i.reject()}).done(function(f){var s=t._bindingsToExtensionViewModel&&t._bindingsToExtensionViewModel.
properties.map(function(n){return n.compositionBindingDefinition}),o,e;t._lastInputsSetDeferred.reject(
);t._lastInputsSetDeferred=Q.defer();t._lastInputsSetProperties=d.mapSourceModelToTargetModel(n,s,1);
t._shouldWaitForInputsSet(n)||t._lastInputsSetDeferred.resolve();try{t.isDisposed?i.reject():r&&r!==
t._waitForTemplatePromise?i.reject():(t._logRebindOperation("Updating blade properties.",n),t._rebindingCallbacks.
fire(n),u(undefined),t._clearEditScopeId(),o=t._tryUpdateChildrenFromTemplate(f),e=Q({}),u(n),t._setEditScope(
),o&&(e=Q(t._composeAndRestoreLayout())),Q.allSettled([t._lastInputsSetDeferred.promise,e]).finally(
function(){t._logRebindOperation("Inputs set promise completed.",n);t.save();t._reboundCallbacks.fire(
n);i.resolve()}),t.bladeDefinition.viewModelInputs||t._hasPermissionsDeferred.resolve())}catch(h){i.
reject(h)}}),i.promise},yt.prototype._shouldWaitForInputsSet=function(n){var i=this,t;return this._bindingsToExtensionViewModel?
(t=this._bindingsToExtensionViewModel.properties.filter(function(n){var t=n.compositionBindingDefinition;
return t&&t.source&&t.source.modelType===1}),t.length===0)?!1:t.some(function(t){var r=ko.utils.unwrapObservable(
i._shellViewModel[t.sourceProperty]),u=ko.utils.unwrapObservable(n[t.sourceProperty]);return!MsPortalFx.
Base.Utilities.deepEquals(r,u)}):!1},yt.prototype._logRebindOperation=function(n,t){bt&&e.verbose("[BladeRebinding] {0} Blade: {1}. Updated Properties: {2}".
format(n,this.toString(),ko.toJSON(t,null,2)||"N/A"))},yt.prototype._compose=function(n,t,i){var r=this,
u,f,e;this._composing=!0;this.widget=this._buildWidget(n,i);this._showLoadingIndicator();u=this._bladeStartTelemetry(
o.Action.BladeLoaded,i&&i.assetType);this._compositionDeferred.then(function(){t.resolve();r._setupCommandBarAndContextMenu(
r.widget,n);r._initializeLensAddition();st.completeTrace(u)},function(){t.reject();st.cancelTrace(u)}
);this.unrecoverableErrorMessage?this._composeErrorBlade(this.unrecoverableErrorMessage):this.extension&&
this.bladeDefinition?this._composeBlade(this.extension,this.bladeDefinition):(f=this.services.finder.
locateAsync(this.locator),e=this.services.finder.locateAsync(this.locator.getExtensionLocator()),ft.
when(e,f).done(function(n,t){r.extension=n;r.bladeDefinition=t;r.isDisposed||r._composeBlade(r.extension,
r.bladeDefinition)}).fail(function(n){r._composeErrorBlade(n)}))},yt.prototype._showLoadingIndicator=
function(){var n=this;this.widget&&this.widget.options.loaded(!1);this._hasPermissionsDeferred=Q.defer(
);this.defaultSelectionPromise||(this.defaultSelectionPromise=Q.resolve(!1));Q.allSettled([this._hasPermissionsDeferred.
promise,this._compositionDeferred.promise(),this.defaultSelectionPromise]).finally(function(){n.widget&&
(n.widget.options.loaded(!0),n._widgetReadyToDisplayAwaiter.resolve())})},yt.prototype._rejectPermissionsPromise=
function(){this._hasPermissionsDeferred?this._hasPermissionsDeferred.reject():this.widget&&this.widget.
options.loaded(!0)},yt.prototype._validateStateForSettings=function(){return!!this.masterContainer},
yt.prototype._validateRebindProperties=function(n){var t="",i=this.bladeDefinition.templateKeyInputs||
[];return i.some(function(t){return!n.hasOwnProperty(t)})?t="Properties to rebind must include all blade inputs marked as keys.":
i.some(function(t){return Array.isArray(n[t])})&&(t="Properties to rebind cannot be of Array type."),
t&&e.error("[Blade Rebind] "+t+" Rebind properties:'{0}', Blade keys:'{1}'.".format(JSON.stringify(n),
JSON.stringify(i))),!t},yt.prototype._composeBlade=function(n,t){var i=this;if(MsPortalFx.Base.Utilities.
isNullOrUndefined(t.orientation)||this.widget.options.stackLayoutOptions.orientation(t.orientation),
!t.assetType||this.widget.options.showBladeIcon(!0),!this._tryInitialize()){this._composeErrorBlade(
"Unable to initialize blade from definition.");return}if(this._journey=this.services.desktop.getActiveJourney(
),this._setupViewModel(),this._setupEditScopeReactor(),this._setupInputBindings(),this._setupExtensionViewModel(
),this._setupUnauthorizedListener(),this._setupPreviewListener(n),this._trackAssetIdChange(),this._restoredFromJson)
{var r=(this.bindings||[]).map(function(n){return n.targetProperty}).concat(this.masterInputKeys),u=
t.inputs||[],f=u.some(function(n){return r.indexOf(n)<0});if(f&&this._journey.children.indexOf(this)>=
0){e.warning("[Definition Change] Bindings for blade '{0}' have been changed in definition and will be removed from the journey.".
format(this));this.services.desktop.forceCloseBlade(this.id);return}}t.locked?this._composeBladeWithTemplate(
null):this.templateManager.getTemplateAsync(this.templateKey).then(function(n){i._composeBladeWithTemplate(
n)},function(n){e.error("Failed to get Blade Template. Compose the blade with the default one. Error details: {0}.".
format(n));i._composeBladeWithTemplate(undefined)});this._logAssetAccessToAssetMruList();this.onRebind(
null,function(){i._logAssetAccessToAssetMruList()})},yt.prototype._composeBladeWithTemplate=function(
n){var t=this,i=this.widget;this.isDisposed||this.isDisabled||this._handleDefinitionChanges(n).finally(
function(){t._currentTemplate=n;i.initializeLayout();t._setupFocusListener();i.options.locked(t.bladeDefinition.
locked||!1);t._composeAndRestoreLayout().then(function(){t._saveTemplateOnWidgetStateChanged(t);t.detailContainers.
forEach(function(n){n.notifyContainer(t)});t.masterContainer&&t.masterContainer.notifyContainer(t);t.
_doPartLocationTelemetry(t.extension,t.bladeDefinition);t.save();t.actionBar?t.actionBar.awaitComposed(
).then(function(){t._compositionDeferred.resolve()}):t._compositionDeferred.resolve()},function(){t.
_compositionDeferred.reject()})})},yt.prototype._handleDefinitionChanges=function(n){return n?this.templateManager.
mergeFromTemplate(this,n):(this._restoredFromJson&&(this.removeDeletedDefinitionLenses(),this.children.
forEach(function(n){var t=n;t.addNewDefinitionParts();t.removeDeletedDefinitionParts()}),this.addNewDefinitionLenses(
)),ft.Deferred().resolve().promise())},yt.prototype._setupEditScopeReactor=function(){this.bladeDefinition&&
this.bladeDefinition.editScopeType&&this._journey&&this._journey.observeEditScopeChanges({editScopeObservable:
this.editScopeId,ownerType:this.locator.type,ownerLocatable:this,disposeOnSelectionChange:!1})},yt.prototype.
_saveTemplateOnWidgetStateChanged=function(n){var t=this;n.awaitComposed().done(function(){if(!t.isDisposed)
{var i=n.widgetState.subscribe(t,function(){t.isComposed&&!t.isDisabled&&!t.isDisposed&&!t._rebinding&&
t._displayStateChangesCounter<1&&(t._syncLensOrder(),t.saveTemplate())});n.onDispose(function(){i.dispose(
)})}})},yt.prototype._syncLensOrder=function(){var n=this.widget.getChildIdComparator();n&&this.sortChildren(
function(t,i){return n(t.id,i.id)})},yt.prototype._tryInitialize=function(){var t=this._validateDefinition(
this.bladeDefinition),n;return!this._initialized&&t&&(n=this.widget,this._inputKeys=this.bladeDefinition.
templateKeyInputs||[],this._initializeWidgetFromDefinition(n.options),this.bindings=this.bindings.concat(
w.CompositionBinder.mapInputBindingDefinitions(this.bladeDefinition.bindings,this,function(n){n.source.
scope===0&&(n.autoRebindWhenSourceDisposes=!0)})),this._createChildrenFromDefinition(this.bladeDefinition),
this._initialized=!0,this.save()),this._initialized},yt.prototype._buildTemplateKey=function(n){var r,
i;if(!this._initialized)throw new Error("Blade '{0}' needs to be initialized from definition once in order to build its template key.".
format(this.toString()));return this._inputKeys&&this._inputKeys.length&&(r={},this._inputKeys.forEach(
function(t){r[t]=n[t]}),n=r),i=MsPortalFx.Base.Utilities.toSortedString(ko.toJS(n),this._inputKeys||
[]),i.length>t.bladeSerializationKeyLimit&&e.warning("The length of the serialization key '{0}' for blade '{1}' is '{2}'. It is beyond the '{3}' limit.".
format(i,this.locator.toString(),i.length,t.bladeSerializationKeyLimit)),"{0}-{1}".format(this.locator.
toString(),i)},yt.prototype._buildJourneyPath=function(){var t=this,i=this.masterContainer&&this.masterContainer.
journeyPath||[],n={model:{}};return this.masterInputKeys&&this.masterInputKeys.forEach(function(i){n.
model[i]=ko.utils.unwrapObservable(t._shellViewModel[i])}),i.concat([v.getBladeOpenerJourneyPathSegment(
this),MsPortalFx.Base.Utilities.toSortedString(n),this.locator.toString()])},yt.prototype._buildWidget=
function(n,t){var u=this,r,i;return t&&t.reusableWidget?(i=t.reusableWidget,r=i.options,r.maximizeOrRestoreEnabled(
!0),r.minimizeEnabled(r.pairing.peek()===0),r.actionsButtonEnabled(!0)):(r=new rt.ViewModel(this.id,
this.widgetState()),this.bladeDefinition&&!this._initialized&&this._initializeWidgetFromDefinition(r),
i=new ct(ft("<section/>"),r),t&&t.index>=0?n.insertChild(i,t.index):n.addChild(i)),i.commandBar.options.
itemSelected=function(n,t){u._itemSelectedHandler(i,t)},i.options.maximizeOrRestore=function(){u._bladeDisplayStateChangeHandler(
i)},i.options.minimize=function(){var n=it.BladeDisplayStateCommandCollection[0];n.activate();n.bind(
new c.CompositionInstanceCommandContext(i.element[0],i,u));n.execute(!1)},i.element.data(c.Commands.
CompositionInstanceDataName,this),this._attachEventHandlers(i),this.widgetState(i.saveViewSettings()),
ko.computed(this,function(){r.pairVisible(u.pairVisible())}),ko.computed(this,function(){r.pairing(u.
pairing())}),ko.computed(this,function(){r.pairingMode(u.pairingMode())}),ko.computed(this,function(
){r.pairParentWidth(u.pairParentWidth())}),i},yt.prototype._initializeWidgetFromDefinition=function(
n){var r=MsPortalFx.Base.Utilities.isNullOrUndefined(this.bladeDefinition.width)?1:this.bladeDefinition.
width,i=MsPortalFx.Base.Utilities.isNullOrUndefined(this.bladeDefinition.initialDisplayState)?1:this.
bladeDefinition.initialDisplayState,t;t=MsPortalFx.Base.Utilities.isNullOrUndefined(this.bladeDefinition.
pairMasterInfo)||MsPortalFx.Base.Utilities.isNullOrUndefined(this.bladeDefinition.pairMasterInfo.width)?
0:this.bladeDefinition.pairMasterInfo.width;n.bladeWidth(r);this.pairParentWidth(t);n.pairParentWidth(
t);i!==0&&n.displayState(i);n.displayState()!==2&&this._widgetReadyToDisplayAwaiter.resolve();MsPortalFx.
Base.Utilities.isNullOrUndefined(this.bladeDefinition.style)||ft.trim(MsPortalFx.Blades.BladeStyle[this.
bladeDefinition.style])?n.bladeStyle(this.bladeDefinition.style):e.error("Blade: {0} has invalid blade style value {1}".
format(this.locator.toString(),this.bladeDefinition.style))},yt.prototype._composeErrorBlade=function(
n){var t=this.widget.options;t.disabled(!0);t.title("Error");t.subtitle("");t.description("");t.helpUri(
"");t.icon(MsPortalFx.Base.Images.Blank());t.titleImageUri(undefined);t.contentState(0);t.contentStateDisplayText(
"");t.disabledMessageTitle("Error");t.disabledMessageSubtitle(MsPortalFx.Base.Utilities.htmlEncode(n));
this._compositionDeferred.reject();this._rejectPermissionsPromise();e.error("Blade '{0}' has been turned to error mode. Details: {1}".
format(this.toString(),n||"N/A"))},yt.prototype.disableForAssetDeleted=function(n){var t,i,r;if(!n){
for(this._disabled=!0,this._releaseResources(),i=this.children.length-1;i>=0;i--)this.removeChild(this.
children[i]);this.widget&&this.widget.options&&(r=MsPortalFx.Base.Utilities.htmlEncode(vt.deletedTitle),
t=this.widget.options,t.disabled(!0),t.title(r),t.subtitle(""),t.description(""),t.helpUri(""),t.icon(
MsPortalFx.Base.Images.Blank()),t.titleImageUri(undefined),t.contentState(0),t.contentStateDisplayText(
""),t.disabledMessageTitle(r),t.disabledMessageSubtitle(MsPortalFx.Base.Utilities.htmlEncode(vt.deletedSubTitle)),
t.contextMenu&&t.contextMenu.menuItems&&t.contextMenu.menuItems.splice(0,t.contextMenu.menuItems().length));
this.bindings=[];this._compositionDeferred.reject();this._rejectPermissionsPromise()}else this.services.
desktop.forceCloseBlade(this.id);this.save()},yt.prototype.resetLayout=function(n){var t=this;this.awaitComposed(
).then(function(){var i,f;t.bladeDefinition&&(n?i=Q(6):(f=new tt.MessageBox(r.Blade.resetConfirmationTitle,
r.Blade.resetConfirmationText,4),i=tt.DialogManager.get().showDialog(ft(t.widget.getForm()),f,t.locator)),
i.then(function(n){var i,r,f;if(n===6){if(i=t.services.desktop.discardEditsOfBlade(t,{includeSelf:!0,
includeDescendants:!0,force:!0}),!i.successful){e.error("Unexpectedly failed to discard changes on the blade with id: '{0}'".
format(t.id));return}if(r=t.services.desktop.closeChildBlades(t),!r.successful){e.error("Unexpectedly failed to close child blades of the blade with id: '{0}'".
format(t.id));return}t.widget.options.loaded(!1);t.removeChildren();t._createChildrenFromDefinition(
t.bladeDefinition);f=t._composeChildren();t.save();t.services.sharedSettings.deleteSettings({store:1,
keys:[t.templateKey]});t.services.desktop.mode()===1&&u.FlowLayoutDragDrop.Instance.enableDragDropTargets(
);f.then(function(){t.widget.options.loaded(!0)})}}))})},yt.prototype._itemSelectedHandler=function(
n,t){var i=t.item,u,r;i&&i.enabled()&&(u=t.popupTarget?{getForm:function(){return t.popupTarget},showForm:
null,hideForm:null}:n,i.bind(new c.CompositionInstanceCommandContext(n.element[0],u,this)),i.execute(
!1),r=t.item.commandDefinition,r&&r.details&&this._ensureBladeInView(function(n){return n.masterCommandName===
r.name}))},yt.prototype._bladeDisplayStateChangeHandler=function(n){var t;switch(n.options.displayState(
)){case 2:case 0:t=it.BladeDisplayStateCommandCollection[1];break;case 1:t=it.BladeDisplayStateCommandCollection[
2]}t.activate();t.bind(new c.CompositionInstanceCommandContext(n.element[0],n,this));t.execute(!1)},
yt.prototype._setupCommandBarAndContextMenu=function(n){this._commandBarManager&&this._commandBarManager.
dispose();this._commandBarManager=h.create(this,this.services);this.registerForDispose(this._commandBarManager);
this._commandBarManager.initialize(this._shellViewModel);this._composeShellCommands(n.options.contextMenu.
menuItems,this.bladeDefinition.locked,this.bladeDefinition.pinnable,n.options.displayState)},yt.prototype.
_setupInputBindings=function(){var n=this;w.CompositionBinder.setupPropertyBindings(this,this.getInputPropertyBindings(
),this.bindings);this.getInputPropertyBindings().addPropertyChangedHandler(function(){n.save()})},yt.
prototype._initializeLensAddition=function(){var n=this,t=this.services.desktop.mode,i=this.widget.options.
displayState,r=function(){var r=!n.bladeDefinition.locked&&t()===1&&i()===1;n._lensAddition.update(r)}
;t.subscribe(this,r);i.subscribe(this,r)},yt.prototype.getComposedParts=function(){return this._partAwaiter.
resolvedCompositions},yt.prototype.getParts=function(){return[].concat(this.children.mapMany(function(
n){return n.children}))},yt.prototype.getInputPropertyBindings=function(){return this._inputPropertyBindings||
(this._inputPropertyBindings=new d.PropertyBindings(this.toString(),this._shellViewModel)),this._inputPropertyBindings}
,yt.prototype.awaitComposedPart=function(n,t){return this._partAwaiter.await(n,t)},yt.prototype.notifyPartComposed=
function(n){this._partAwaiter.resolve(n)},yt.prototype.awaitWidgetReadyToDisplay=function(){return this.
_widgetReadyToDisplayAwaiter.promise()},yt.prototype.getWaitingCompositions=function(){return this._partAwaiter.
waitingCompositions},yt.prototype.dispose=function(t){var i=this,r=st.startTrace({source:o.Source.Shell,
action:o.Action.BladeClosed,name:this.locator&&this.locator.toFriendlyString(),journeyId:this._journey?
this._journey.id:""});this._releaseResources(t);this.masterContainer&&!this.masterContainer.isDisposed&&
this.masterPartId&&this.masterContainer.awaitComposedPart(null,function(n){return n.id===i.masterPartId}
).done(function(n){n.notifyDetailBladeClosed(i)});n.prototype.dispose.call(this,t);st.completeTrace(
r)},yt.prototype._releaseResources=function(n){this._removeEventHandlers();[this._inputPropertyBindings,
this._bindingsToBladeWidgetModel,this._bindingsToExtensionViewModel].forEach(function(n){n&&(n.unbind(
),n=null)});n||this._disposeEditScopes();this._extensionViewModel&&this.extension&&(this._extensionViewModel.
content&&this._extensionViewModel.content.dispose&&typeof this._extensionViewModel.content.dispose==
"function"&&this._extensionViewModel.content.dispose(),this._extensionViewModel.container&&this._extensionViewModel.
container.dispose&&typeof this._extensionViewModel.container.dispose=="function"&&this._extensionViewModel.
container.dispose(),this.extension.releaseViewModel(this._extensionViewModel),this._extensionViewModel=
null);this._rebindingCallbacks.empty();this._reboundCallbacks.empty();this._journey=null},yt.prototype.
awaitContainer=function(n,t){return this._containerAwaiter.await(n,t)},yt.prototype.notifyContainer=
function(n){this._containerAwaiter.resolve(n)},yt.prototype.getDiagnosticsData=function(){return ft.
extend(n.prototype.getDiagnosticsData.call(this),{title:ko.toJSON(this.title),detailBlades:this.detailContainers.
map(function(n){return n.id}),bindings:w.CompositionBinder.mapBindingsToFriendlyObjects(this.bindings)})}
,yt.prototype.getAssetId=function(){var n=this;if(!this.bladeDefinition||!this.bladeDefinition.assetIdInputProperty)
return Q.reject();var i=function(t){var i=n._tryGetAssetIdFromBinding();i&&i.exists?t.resolve(ko.utils.
unwrapObservable(i.value)):t.reject()},r=function(t){n._bindingResult().allInputsSet()?i(t):n._bindingResult(
).allInputsSet.subscribe(n,function(n){n&&!t.promise.isFulfilled()&&i(t)})},t=Q.defer();return this.
_bindingResult()?r(t):this._bindingResult.subscribe(this,function(n){n&&!t.promise.isFulfilled()&&r(
t)}),t.promise},yt.prototype._trackAssetIdChange=function(){var n=this;ko.computed(this,function(){var
i=n._bindingResult(),t;i&&i.allInputsSet()&&(t=n._tryGetAssetIdFromBinding(),t&&t.exists&&n.assetId(
ko.utils.unwrapObservable(t.value)))})},yt.prototype._tryGetAssetIdFromBinding=function(){var t=this,
n=this._bindingResult().propertyBindings.properties.first(function(n){return n.targetProperty===t.bladeDefinition.
assetIdInputProperty});return n?d.PropertyBinding.getModelValue(n.sourceModel,n.sourceProperty):null}
,yt.prototype._setupViewModel=function(){var n=this;(this.bladeDefinition.outputs||[]).forEach(function(
t){n._shellViewModel.hasOwnProperty(t)||(n._shellViewModel[t]=ko.observable(undefined))});this._setEditScope(
)},yt.prototype._setEditScope=function(){if(this.bladeDefinition.editScopeType){var n=this._journey&&
this._journey.ambientSettings.getItem(this.journeyPath);if(n&&n.value&&n.value.editScope)this.editScopeId(
n.value.editScope.editScopeId);else{this.editScopeId(MsPortalFx.Util.newGuid());this.services.editScopeManager.
onEditScopeCreated(this.editScopeId())}this._shellViewModel[l.EditScopeIdPropertyName]||(this._shellViewModel[
l.EditScopeIdPropertyName]=ko.observable());this._shellViewModel[l.EditScopeIdPropertyName](this.editScopeId(
))}},yt.prototype._updateForHasPermissions=function(n){var r=this,i,t;this.isComposed&&!this.isDisposed?
(i=this._extensionViewModel.container,n?(i.unauthorizedMessage(null),this._hasPermissionsDeferred.resolve(
)):(t=i.unauthorized(),t&&t.finally?t.finally(function(){r._hasPermissionsDeferred.reject()}):this._hasPermissionsDeferred.
reject())):e.warning("Blade '{0}' not composed when checking permissions.".format(this.locator.toString(
)))},yt.prototype._setupExtensionViewModel=function(){var n=this,r=this.widget,u,t,f;this.bladeDefinition.
viewModelName?(this.bladeDefinition._internal_viewModelExtensionName?(f=i.Locator.forExtension(this.
bladeDefinition._internal_viewModelExtensionName),t=this.services.finder.locateAsync(f)):t=ft.Deferred(
).resolve(this.extension).promise(),this._extensionViewModelPromise=t.then(function(t){return t.getViewModel(
n.bladeDefinition.viewModelName)}).done(function(t){var r="{0}-[{1}]".format(n.toString(),n.bladeDefinition.
viewModelName),s=n.toString()+"-[WidgetModel]",i=t.content,o,f;n._extensionViewModel=t;n.isDisposed?
n._releaseResources():n.isDisabled||(n.bladeDefinition.viewModelInputs?(u={bindableTarget:{viewModelName:
r,viewModel:t},inputs:n.bladeDefinition.viewModelInputs,referenceComposition:n,inputsSetCalled:function(
t,i){i.finally(function(){(ft.isEmptyObject(n._lastInputsSetProperties)||l.deepSubset(t,n._lastInputsSetProperties))&&
n._lastInputsSetDeferred.resolve();n._initialOnInputsSetDeferred.resolve()})},customInputBindingValidator:
function(n){if(n.valuesFrom[0].referenceType!==1&&n.valuesFrom[0].referenceType!==5&&!n.optional)return"Blade view model binding can only use 'BladeInput' and 'Constant' reference types."}
,beforeViewModelPropertyUpdate:function(t){if(n.bladeDefinition.permissions){var i=Q.defer();return g.
checkPermissions(n.bladeDefinition.permissions,0,t,n.bladeDefinition.assetType,n.extension.name,n.services).
then(function(t){n._updateForHasPermissions(t);i.resolve(t)},function(){e.warning("Failed check permissions for the '{0}' blade.".
format(n.locator.toString()));n._updateForHasPermissions(!0);i.resolve(!0)}),i.promise}return n._hasPermissionsDeferred.
resolve(),ft.Deferred().resolve(!0).promise()}},o=w.CompositionBinder.bindViewModelInputs(u),n._bindingsToExtensionViewModel=
o.propertyBindings,n._bindingResult(o)):n._hasPermissionsDeferred.resolve(),n._bindingsToBladeWidgetModel=
new d.PropertyBindings(s,n.widget.options),f=rt.widgetProperties,n._bindBladeToWidgetProperty(n._bindingsToBladeWidgetModel,
r,i,f.title,n.title,rt.getDefaultTitle(n.locator.name)),n._bindBladeToWidgetProperty(n._bindingsToBladeWidgetModel,
r,i,f.subtitle,n.subtitle,""),n._bindBladeToWidgetProperty(n._bindingsToBladeWidgetModel,r,i,f.description,
n.description,""),n._bindBladeToWidgetProperty(n._bindingsToBladeWidgetModel,r,i,f.helpUri,n.helpUri,
""),n._bindBladeToWidgetProperty(n._bindingsToBladeWidgetModel,r,i,f.icon,n.icon,rt.defaultSvg),n._bindBladeToWidgetProperty(
n._bindingsToBladeWidgetModel,r,i,f.titleImage,n.titleImageUri,undefined),i.statusBar?(n._statusBarCommand=
c.createOpenBladeCommand(n,n,n.bladeDefinition,n.extension,pt.format(n.bladeDefinition.name)),n._listenToStatusChange(
n._statusBarCommand.viewModel.container,i.statusBar,n.widget.options)):(n._bindBladeToWidgetProperty(
n._bindingsToBladeWidgetModel,r,i,f.contentState,n.contentState,0),n._bindBladeToWidgetProperty(n._bindingsToBladeWidgetModel,
r,i,f.contentStateDisplayText,n.contentStateDisplayText,"")))}).fail(function(t){e.error("Unable to get extension view model for blade '{0}'. Error: {1}".
format(n.locator.toString(),t));r.options.title(rt.getDefaultTitle(n.locator.name));n._hasPermissionsDeferred.
resolve()})):(r.options.title(rt.getDefaultTitle(this.locator.name)),this._initialOnInputsSetDeferred.
resolve({}),this._hasPermissionsDeferred.resolve())},yt.prototype._listenToStatusChange=function(n,t,
i){var r=this,f=function(t){var u=r.detailContainers.first(function(n){return n.masterCommandName===
pt.format(r.bladeDefinition.name)&&n.masterPartId===r.id});u&&r.services.desktop.forceCloseBlade(u.id);
t.selection&&n.selectable.selectedValue(t.selection);i.contentState(t.state);i.contentStateDisplayText(
t.text);i.statusBar.activatable(!!t.selection)},u=function(n){n&&n.state!==0||(n={text:"",state:0,selection:
null});f(n)};u(t.peek());t.subscribe(this,function(n){u(n)});ko.reactor(this,function(){var t=n.selectable.
isSelected();i.statusBar.activated(t)})},yt.prototype._setupUnauthorizedListener=function(){var n=this;
this._extensionViewModelPromise&&this._extensionViewModelPromise.done(function(t){var i=t.container,
r=function(t){MsPortalFx.Base.Utilities.isNullOrUndefined(t)||n._disableForUnauthorized()};i.unauthorizedMessage.
subscribe(n,r);r(i.unauthorizedMessage())})},yt.prototype._setupPreviewListener=function(n){var i=this,
t=this.widget.options;n.isPreview()?t.previewTag.show(!0):this._extensionViewModelPromise&&this._extensionViewModelPromise.
then(function(n){var r=n.container;r.preview.subscribe(i,t.previewTag.show);t.previewTag.show(r.preview(
))})},yt.prototype._disableForUnauthorized=function(){var n,i,t;for(this._disabled=!0,this._releaseResources(
),i=this.children.length-1;i>=0;i--)this.removeChild(this.children[i]);this.widget&&this.widget.options&&
(n=this.widget.options,n.contentState(0),n.contentStateDisplayText(""),n.title(vt.unauthorizedMessage),
n.subtitle(""),n.contextMenu&&n.contextMenu.menuItems&&n.contextMenu.menuItems.splice(0,n.contextMenu.
menuItems().length),t=new MsPortalFx.ViewModels.Controls.Notice.ViewModel(this.widget.lifetimeManager),
t.header(MsPortalFx.Base.Utilities.htmlEncode(vt.unauthorizedHeader)),t.title(MsPortalFx.Base.Utilities.
htmlEncode(vt.unauthorizedMessage)),t.description(MsPortalFx.Base.Utilities.htmlEncode(vt.unauthorizedDescription)),
t.imageType(3),n.unauthorizedNoticeVm(t));this.bindings=[];this._compositionDeferred.reject();this.save(
)},yt.prototype._setupFocusListener=function(){this.children.length===1&&this.children[0].children.length===
1&&f.FocusHandler.Instance.registerAutofocus(this.widget)},yt.prototype._bindBladeToWidgetProperty=function(
n,t,i,r,u,f){r in i?n.addProperty(r).bind(t,i,!0,function(){var n=ko.utils.unwrapObservable(i[r]);u(
n||f)}):e.warning("The Blade VM with id {0} is missing the {1} field.".format(t,r))},yt.prototype._disposeEditScopes=
function(){var n=this;if(this.editScopeId())this.services.editScopeManager.onEditScopeDisposed(this.
editScopeId());this._journey&&(this._journey.ambientSettings.getItemsInPath(this.journeyPath).forEach(
function(t){if(t.value&&t.value.editScope)n.services.editScopeManager.onEditScopeDisposed(t.value.editScope.
editScopeId)}),this._journey.ambientSettings.removeItemsInPath(this.journeyPath))},yt.prototype._isAssetDeleted=
function(n,t){var i;return this._hasAssetId()&&(n=n||this.locator.toString(),t=t||this._shellViewModel,
i=this._tryGetAssetIdFast(t,n),i.exists)?this.services.assetManager.isAssetDeleted(this.extension.name,
this.bladeDefinition.assetType,i.value):!1},yt.prototype._hasAssetId=function(){return!!(this.bladeDefinition.
viewModelInputs&&this.bladeDefinition.assetIdInputProperty&&this.bladeDefinition.assetType)},yt.prototype.
_tryGetAssetIdFast=function(n,t){var u=this,i,r={exists:!1,value:undefined};return this._hasAssetId(
)&&(i=this.bladeDefinition.viewModelInputs.first(function(n){return n.property===u.bladeDefinition.assetIdInputProperty}
),i&&i.valuesFrom&&i.valuesFrom.length>0&&i.valuesFrom[0].referenceType===1&&i.valuesFrom[0].property&&
(r=d.PropertyBinding.getModelValue(n,i.valuesFrom[0].property),r.exists?r.value=ko.utils.unwrapObservable(
r.value):e.error("Asset id property '{0}' does not exist in model for composition '{1}'. Model='{2}'".
format(i.valuesFrom[0].property,t,ko.toJSON(n))))),r},yt.prototype._clearEditScopeId=function(){if(this.
bladeDefinition.editScopeType){var n=this.editScopeId()&&this.services.editScopeManager.getDirtyObservable(
this.editScopeId());if(n&&n()===!1)this.services.editScopeManager.onEditScopeDisposed(this.editScopeId(
));this.editScopeId(undefined);this._shellViewModel[l.EditScopeIdPropertyName](undefined)}},yt.prototype.
_createChildrenFromDefinition=function(n){var i=this,t;n.lenses&&(t=[],n.lenses.forEach(function(n){
var r=i.locator.withLens(n.name),u=b.create(i.services,r);t.push(u)}),this.addChildren(t))},yt.prototype.
_composeChildren=function(n){var i=this,t;return n===void 0&&(n=this.children),t=[],n&&n.forEach(function(
n){n.compose(i.widget);t.push(n.awaitComposed());n.children.concat([n]).forEach(function(n){i._saveTemplateOnWidgetStateChanged(
n);t.push(n.awaitComposed())})}),this._restoredFromJson&&this.discardWidgetStateOfUnusedChildren(),ft.
when.apply(ft,t)},yt.prototype._composeAndRestoreLayout=function(){var n=this,r=this.widget,i,u,t;return this.
_composeChildren().then(function(){n._bladeOpenEndTelemetry(ht.Complete)}).finally(function(){n._composing=
!1;n.save()}),i=ft.Deferred().resolve().promise(),!this._rebinding&&this.bladeDefinition.actionBar&&
(u=this.locator.withBladeActionBar(this.bladeDefinition.actionBar.name),t=ft.Deferred(),i=t.promise(
),MsPortalFx.Base.Amd.load("MsPortalImpl/UI/Compositions/UI.Composition.BladeActionBar").then(function(
i){n.actionBar=i.create(n.services,u);n.actionBar.parent=n;n.actionBar.compose(n.widget);t.resolve()}
,function(){t.reject()})),r.options.displayState()===2&&r.options.displayState.valueHasMutated(),i},
yt.prototype._tryUpdateChildrenFromTemplate=function(n){var t=!!(n||this._currentTemplate);return t&&
(this.removeChildren(),n?this.templateManager.createFromTemplate(this,n):(this._createChildrenFromDefinition(
this.bladeDefinition),this.widgetState(new rt.ViewModel(this.id).getViewSettings()),this.widget.options.
applyViewSettings(this.widgetState(),{isLayoutTemplateSettings:!0}))),this._currentTemplate=n,t},yt.
prototype._getRebindTemplateAsync=function(n){var t=this;return ft.Deferred(function(i){t.awaitComposed(
).then(function(){if(t._validateRebindProperties(n))if(!t.bladeDefinition.locked){var r=t._buildTemplateKey(
n);t.templateManager.getTemplateAsync(r).then(function(n){i.resolve(n)})}else i.resolve(null);else i.
reject()})}).promise()},yt.prototype._getCommands=function(){if(!this.isComposed||!this.widget)throw new
Error("Blade '{0}' needs to be composed before retrieving its commands.".format(this.toString()));var
n=this.widget;return n.options.commandBar.menuItems()},yt.prototype._attachEventHandlers=function(n)
{var t=this,i;n.options.close=function(){var n=t.services.desktop.tryCloseBlade(t.id);return t._bladeOpenEndTelemetry(
ht.Cancel),n};i=n.element;n.options.pinblade=function(){var r=new it.PinBlade(t.services);r.bind(new
c.CompositionInstanceCommandContext(i[0],n,t));r.execute(!1)};i.on(et.Widget.viewSettingsChanged,this.
_viewSettingsUpdateHandler=function(n,i){t.widgetState(i);t.save();n.stopPropagation()});i.on(ct.displayStateChangingEventName,
this._displayStateChangingEventHandler=function(n){t._displayStateChangesCounter++;n.stopPropagation(
)});i.on(ct.displayStateChangedEventName,this._displayStateChangedEventHandler=function(n){if(t._displayStateChangesCounter<
1)throw new Error("Unbalanced '{0}' event.".format(ct.displayStateChangedEventName));t._displayStateChangesCounter--;
n.stopPropagation()});i.on(ot.fxactivatepairmaster,this._activateBladePairEventHandler=function(n){t.
services.bladePairManager.activateBladePairByMasterBlade(t);n.stopPropagation()});i.on(ot.fxunpin,this.
_tileUnpinHandler=function(n,i){t.tryUnpinPart(i.tileId);n.stopPropagation()});i.on(ot.fxremovewidget,
this._removeHandler=function(n,i){var r=t.getChildById(i.id);t._handleRemoveLensByUI(r,!!i.force);n.
stopPropagation()});i.on(ot.fxensurebladevisible,this._ensureBladeVisibleHandler=function(n,i){t._ensureBladeInView(
function(n){return!n.masterCommandName&&n.masterPartId===i.masterPartId})});i.on(ot.fxaddparts,this.
_addPartsHandler=function(n,i){i.extensionName=t.extension&&t.extension.name;i.assetType=t.assetType;
i.assetId=t._assetMetadata&&t._assetMetadata.id;i.mappingViewModelName=t.extension&&l.getMappingViewModelName(
t.extension.manifest,t.assetType)});i.on(ot.fxbladestatusbarclicked,function(){t._statusBarCommand&&
t._statusBarCommand.execute(!1)})},yt.prototype.tryUnpinPart=function(n){var t=!1,r=this.children.some(
function(i){return i.getChildById(n)?(t=i.tryUnpinPart(n),!0):!1}),i;return r||(i="The part with id: '{0}' to be unpinned could not be found on the blade: '{1}'.".
format(n,this.locator.toString()),e.error(i)),t},yt.prototype._handleRemoveLensByUI=function(n,t){var
f=this,i,u;!t&&n.children.length>0?(i=(n.widget.options.title()||"").trim(),u=i?r.Lens.removeConfirmationTextWithName.
format(i):r.Lens.removeConfirmationText,tt.DialogManager.get().showDialog(ft(this.widget.getForm()),
new tt.MessageBox(r.Lens.removeConfirmationTitle,u,4),n.locator).then(function(t){t===6&&f._removeLensByUI(
n)})):this._removeLensByUI(n)},yt.prototype._removeLensByUI=function(n){var r,t,i,u;for(r=n.locator.
type===12?this.locator.toFriendlyString()+"/CustomLens":n.locator.toFriendlyString(),st.trace({source:
o.Source.Lens,action:o.Action.LensRemoved,name:r}),t=n.children.length-1;t>=0;t--)if(i=n.children[t].
id,u=n.tryUnpinPart(i,!0),!u){e.error("Unexpectedly failed to unpin the part with id: '{0}'".format(
i));return}this.removeChild(n)},yt.prototype._removeEventHandlers=function(){if(this.widget){var n=this.
widget.element;this._viewSettingsUpdateHandler&&(n.off(et.Widget.viewSettingsChanged,this._viewSettingsUpdateHandler),
this._viewSettingsUpdateHandler=null);this._displayStateChangingEventHandler&&(n.off(ct.displayStateChangingEventName,
this._displayStateChangingEventHandler),this._displayStateChangingEventHandler=null);this._displayStateChangedEventHandler&&
(n.off(ct.displayStateChangedEventName,this._displayStateChangedEventHandler),this._displayStateChangedEventHandler=
null);this._activateBladePairEventHandler&&(n.off(ot.fxactivatepairmaster,this._activateBladePairEventHandler),
this._activateBladePairEventHandler=null);this._tileUnpinHandler&&(n.off(ot.fxunpin,this._tileUnpinHandler),
this._tileUnpinHandler=null);this._removeHandler&&(n.off(ot.fxremovewidget,this._removeHandler),this.
_removeHandler=null);this._ensureBladeVisibleHandler&&(n.off(ot.fxensurebladevisible,this._ensureBladeVisibleHandler),
this._ensureBladeVisibleHandler=null);this._addPartsHandler&&(n.off(ot.fxaddparts,this._addPartsHandler),
this._addPartsHandler=null)}},yt.prototype._composeShellCommands=function(n,t,i,r){var u=[],f,e;this.
services.contextPane.hasContent(this)?this.widget.options.maximizeDisabled(!0):(this.isPinnable()&&(
e=new it.PinBlade(this.services),e.activate(),this.widget.options.pinActionEnabled(!0)),f=it.BladeDisplayStateCommandCollection.
filter(function(n){return n.displayStateTarget!==2&&n.displayStateTarget!==0}),Array.prototype.push.
apply(u,f),u.push(it.ResetLayoutCommand.create(t,r,this.services)),u.push(new it.EnterOrganizeMode(this.
services,t)),u.push(new it.ExitOrganizeMode(this.services)),u.push(new it.AddParts(this.services)),this.
widget.options.maximizeDisabled(!1));ko.utils.arrayPushAll(n,u)},yt.prototype._doPartLocationTelemetry=
function(n,t){var r=this,u=n?n.name:null,f=t?t.assetType:null,i=1;this.children.forEach(function(n){
n.children.forEach(function(n){st.trace({extension:u,source:r.locator.toFriendlyString(),action:o.Action.
PartPosition,assetType:f,name:n.locator.toFriendlyString(),data:i});i++})})},yt.prototype._validateDefinition=
function(n){var t=!0,i=[],u=function(t){return n.templateKeyInputs&&n.templateKeyInputs.indexOf(t)>=
0},r;return n.assetType&&!n.assetIdInputProperty?(i.push("'assetIdInputProperty' is required if 'assetType' is defined on blade definition."),
t=!1):w.CompositionBinder.modelHasProperties(this.toString(),n.inputs,this.getViewModel())?n.inputs&&
n.outputs&&(t=!n.inputs.some(function(t){var r=n.outputs.indexOf(t)>=0;return r&&i.push("Property '{0}' cannot be marked as input and output.".
format(t)),r})):t=!1,t=t&&w.CompositionBinder.validateInputBindings(this,n.bindings,i,function(n){if(
n.valuesFrom[0].referenceType===1)return"Blade bindings cannot reference BladeInputs."}),this._restoredFromJson||
(t&&!!n.editScopeType&&(r="A blade cannot be the owner of an edit scope and also receive an edit scope id from an external source.",
this.masterInputKeys&&this.masterInputKeys.indexOf(l.EditScopeIdPropertyName)>=0?(t=!1,i.push("Declaring an 'editScopeType' and receiving an '"+
l.EditScopeIdPropertyName+"' from invocation values is not supported. "+r+" Invocation Properties: {0}.".
format(JSON.stringify(this.masterInputKeys)))):this.bindings&&this.bindings.some(function(n){return n.
targetProperty===l.EditScopeIdPropertyName})&&(t=!1,i.push("Declaring an 'editScopeType' and an input binding with '"+
l.EditScopeIdPropertyName+"' as a target property is not supported. "+r+" Bindings: {0}.".format(JSON.
stringify(this.bindings))))),t&&this.bindings&&this.bindings.some(function(n){return u(n.targetProperty)}
)&&(t=!1,i.push("Blade input keys can only be modified by the master invocation values. "+"Input bindings that target a blade input key are not supported. Keys: '{0}'. Bindings: '{1}'.".
format(ko.toJSON(n.templateKeyInputs),ko.toJSON(this.bindings))))),t&&w.CompositionBinder.modelHasPropertiesWithValue(
this.toString(),n.templateKeyInputs,this.getViewModel()),i.length&&e.error("{0} Blade:'{1}'.".format(
i[0],this.locator.toString())),t},yt.prototype._logAssetAccessToAssetMruList=function(){var n=this;this.
_assetMruLoggerSubscriptionLifetime&&(this._assetMruLoggerSubscriptionLifetime.dispose(),this._assetMruLoggerSubscriptionLifetime=
null);this.bladeDefinition.assetType&&this.bladeDefinition.assetIdInputProperty&&this.getAssetInstanceMetadataAsync(
).then(function(t){var r,i;t?(n._assetMetadata=t,r=l.isBladeEligibleForPartManagement(n.bladeDefinition,
t,n.extension.manifest),n._isEligibleForPartManagement(r),i=function(i){n.services.assetManager.assetMruList.
logAssetAccess(n.extension.name,t.type,t.id,i)},lt.isResourceId(t.id)?i(lt.parseResourceDescriptor(t.
id).resource):lt.isResourceGroupId(t.id)?i(lt.parseResourceGroupDescriptor(t.id).resourceGroup):n.services.
resourceMapManager.tryMapAssetIdToResourceId({extensionName:n.extension.name,assetType:t.type,assetId:
t.id}).then(function(n){i(lt.parseResourceDescriptor(n).resource)},function(){n._assetMruLoggerSubscriptionLifetime=
n.createChildLifetime();ko.computed(n._assetMruLoggerSubscriptionLifetime,function(){n._bindingResult(
)&&n._extensionViewModel&&n._bindingResult().allInputsSet()&&n._extensionViewModel.state&&n._extensionViewModel.
state()===0&&i(n.title())})})):e.error("logAssetAccessToMruList: Failed to get asset id for asset type '{0}' in blade '{1}'".
format(n.bladeDefinition.assetType,n.locator.toString()))}).catch(function(t){e.error("logAssetAccessToMruList: Failed to get asset id for asset type '{0}' in blade '{1}'.  Reason: {2}".
format(n.bladeDefinition.assetType,n.locator.toString(),t))})},yt.prototype._ensureBladeInView=function(
n){for(var i,t=this.detailContainers.length-1;t>=0;t--)if(i=this.detailContainers[t],n(i)){this.widget.
element.trigger(ot.fxensureviewportvisible,{widget:i.widget});break}},yt}(a.Instance);t.Instance=yt}
(vt||(vt={})),vt});define("MsPortalImpl/Interactions/Interactions.FlowLayoutDragDrop",["require","exports",
"../Interactions/Interactions.DismissHandler","../Widgets/Widgets.WidgetBase","../Widgets/Widgets.FlowLayout",
"../Widgets/Widgets.UIElementBase"],function(n,t,i,r,u,f){var e=MsPortalFx.Widgets.AzureGrid,o=MsPortalFx.
Base.EventTypes,s;return function(n){"use strict";var s=window,t=jQuery,c="fxs-drag-surface",l="fxs-flowlayout-drop-placeholder",
h=".fxs-tile:not(.fxs-tilesize-herowidefitheight):not(.fxs-tilesize-fullwidthfitheight):not(.fxs-tilesize-fittocontainer)",
a=function(){function n(){if(n._singleton)throw new Error("FlowLayoutDragDrop operates as a singleton.");
n._singleton=this}return n.prototype.dispose=function(){this.disableDragDropTargets();n._resetManager(
);n._singleton=null},Object.defineProperty(n,"Instance",{get:function(){return n._singleton||(n._singleton=
new n),n._singleton},enumerable:!0,configurable:!0}),n.prototype.enableDragDropTargets=function(){this.
getDragDropLayouts().forEach(function(i){i.on(o.mouseenter,h,function(){var i=t(this);i.hasClass("ui-draggable")||
i.addClass("fxs-drag-disableTouchAction").draggable(n._draggableOptions)})})},n.prototype.disableDragDropTargets=
function(){this.getDragDropLayouts().forEach(function(n){n.off(o.mouseenter,h)});t(".ui-draggable:not(.ui-draggable-dragging)").
removeClass("fxs-drag-disableTouchAction").draggable("destroy")},n.prototype.getDragDropLayouts=function(
){var i=t(".fxs-flowlayout"),n=[];return i.each(function(i,f){var e=r.Widget.getWidget(t(f),u.Widget);
e.options.allowReorder&&!e.options.locked()&&n.push(e.element.findByClassName("fxs-flowlayout-childcontainer"))}
),n},n._createDropPlaceholder=function(n){var i=t("<div class='"+l+"'><\/div>"),r=n.position();return i.
css({width:n.outerWidth(!1),height:n.outerHeight(!1),top:r.top,left:r.left}),i},n._startElementDrag=
function(f,e){var o=f.target,s=t(o),c,h;n._draggingInProgress&&n._draggingInProgress.htmlTarget!==o||
(n._draggingInProgress={htmlTarget:o,elementObject:s},n._draggingInProgress&&n._draggingInProgress.htmlTarget!==
o)||(n._prevGrid=n._srcGrid=n._tgtGrid=r.Widget.getWidget(s.closest(".fxs-flowlayout"),u.Widget),c=n.
_createDropPlaceholder(s),n._prevGrid.dropPlaceholder=c,n._fixedDraggableSurfaceElement.appendTo(t(o).
parent()),h=n._fixedDraggableSurfaceElement.parent(),e.helper.css({position:"fixed",top:e.offset.top,
left:e.offset.left,marginTop:0-h.scrollTop(),marginLeft:0-h.scrollLeft(),pointerEvents:"none"}),s.hide(
),n._srcGridPos=n._tgtGridPos=n._getTargetGridPosition(e.helper),i.DismissHandler.Instance.register(
n._dismissHandle,!0))},n._stopElementDrag=function(t,r){var u=n._draggingInProgress.elementObject,f=
u.draggable("option","revert");i.DismissHandler.Instance.unregister(n._dismissHandle);f&&u.draggable(
{revert:!1});n._clearDropPreviewSetTimeoutHandle();f?n._revertTargetGrid():n._updateTargetGrid(r.helper);
u.show();n._tgtGrid?n._tgtGrid===n._srcGrid?n._dropInSourceGrid(r.helper):n._dropInTargetGrid(r.helper):
n._cancelDrag();n._fixedDraggableSurfaceElement.remove();n._resetManager()},n._cancelElementDrag=function(
){n._draggingInProgress.elementObject.draggable({revert:!0}).trigger(MsPortalFx.Base.EventTypes.mouseup)}
,n._dragElement=function(t,i){var r,u=null;n._updateTargetGrid(i.helper);n._tgtGrid&&(r=n._getTargetGridPosition(
i.helper),(r.col!==n._tgtGridPos.col||r.row!==n._tgtGridPos.row)&&(n._clearDropPreviewSetTimeoutHandle(
),n._tgtGridPos=r,n._prevGrid!==n._tgtGrid&&(n._prevGrid&&(u=n._prevGrid.dropPlaceholder,n._prevGrid.
dropPlaceholder=null),n._prevGrid=n._tgtGrid,n._prevGrid.dropPlaceholder=u),n._tgtGrid.moveDropPlaceholder(
r),n._dropPreviewSetTimeoutHandle=s.setTimeout(function(){n._dropPreviewSetTimeoutHandle=null;n._draggingInProgress.
elementObject.show();n._tgtGrid.moveChild(n._draggingInProgress.elementObject,n._tgtGridPos.col,n._tgtGridPos.
row,!1);n._draggingInProgress.elementObject.hide()},n._dropPreviewTimeoutMillis)))},n._clearDropPreviewSetTimeoutHandle=
function(){n._dropPreviewSetTimeoutHandle&&(s.clearTimeout(n._dropPreviewSetTimeoutHandle),n._dropPreviewSetTimeoutHandle=
null)},n._updateTargetGrid=function(t){var i=n._getTargetGrid(t);n._tgtGrid&&n._tgtGrid!==i&&this._revertTargetGrid(
);n._tgtGrid=i},n._revertTargetGrid=function(){n._tgtGrid&&(n._clearDropPreviewSetTimeoutHandle(),n.
_tgtGrid.refreshLayout(!0))},n._getTargetGrid=function(i){var f=i.offset(),o=n._fixedDraggableSurfaceElement.
parent(),l=o.scrollTop(),a=o.scrollLeft(),v=f.left-a+Math.floor(n._gridCellCoverageSnappingRatio*e.GridSpacingWidth),
y=f.top-l+Math.floor(n._gridCellCoverageSnappingRatio*e.GridSpacingHeight),s,h,c;return c=n._fixedDraggableSurfaceElement.
css("z-index"),n._fixedDraggableSurfaceElement.css("z-index",-1),s=t(document.elementFromPoint(v,y)),
n._fixedDraggableSurfaceElement.css("z-index",c),h=s.closest(".fxs-flowlayout"),r.Widget.getWidget(h,
u.Widget)},n._getTargetGridPosition=function(t){var i=n._tgtGrid.element.offset(),r=t.offset(),o=r.left-
i.left,s=r.top-i.top,u,f;return u=Math.floor((o+n._gridCellCoverageSnappingRatio*e.GridSpacingWidth)
/e.GridSpacingWidth),f=Math.floor((s+n._gridCellCoverageSnappingRatio*e.GridSpacingHeight)/e.GridSpacingHeight),
{col:u,row:f}},n._cancelDrag=function(){n._srcGrid.moveChild(n._draggingInProgress.elementObject,n._srcGridPos.
col,n._srcGridPos.row,!0)},n._dropInSourceGrid=function(t){n._tgtGridPos=n._getTargetGridPosition(t);
n._srcGrid.moveChild(n._draggingInProgress.elementObject,n._tgtGridPos.col,n._tgtGridPos.row,!0)},n.
_dropInTargetGrid=function(t){n._tgtGrid.refreshLayout(!0);n._tgtGridPos=n._getTargetGridPosition(t);
var i=f.Widget.getId(n._draggingInProgress.elementObject),r=n._srcGrid.element.closest(".fxs-lens"),
u=n._tgtGrid.element.closest(".fxs-lens"),e=n._tgtGrid.element.closest(".fxs-startboard"),s=f.Widget.
getId(r),h=f.Widget.getId(u),c=f.Widget.getId(e),l=h||c;n._tgtGrid.trigger(o.fxrearrange,null,{partId:
i,sourceId:s,targetId:l,col:n._tgtGridPos.col,row:n._tgtGridPos.row})},n._resetManager=function(){n.
_srcGrid=null;n._tgtGrid=null;n._srcGridPos=null;n._tgtGridPos=null;n._prevGrid&&(n._prevGrid.dropPlaceholder&&
n._prevGrid.dropPlaceholder.remove(),n._prevGrid=null);n._draggingInProgress=null},n._draggingInProgress=
null,n._dropPreviewSetTimeoutHandle=null,n._dropPreviewTimeoutMillis=250,n._gridCellCoverageSnappingRatio=
.33,n._fixedDraggableSurfaceElement=t("<div class='"+c+"'><\/div>"),n._draggableOptions={start:n._startElementDrag,
drag:n._dragElement,stop:n._stopElementDrag,helper:"clone",appendTo:n._fixedDraggableSurfaceElement,
opacity:.85,distance:15},n._dismissHandle={dismissFn:function(){n._cancelElementDrag()},shouldDismissOnMouseDownFn:
function(){return!1},shouldDismissOnMouseWheelFn:function(){return!1}},n}();n.FlowLayoutDragDrop=a}(
s||(s={})),s});define("MsPortalImpl/UI/Compositions/UI.Composition.DefinitionChangeMonitor",["require",
"exports"],function(){var n;return function(n){"use strict";var t=function(){function n(){}return n.
recordChanges=function(t,i,r){var e=n._getChildDefinitions(r)||[],u=i.children.map(function(n){return n.
locator.name}).unique(),f=e.map(function(n){return n.name});t.addedChildren=u.filter(function(n){return f.
indexOf(n)===-1});t.removedChildren=f.filter(function(n){return u.indexOf(n)===-1})},n.getDefinitionChanges=
function(t,i,r){var u=n._getChildDefinitions(r);if(!u)return{added:[],removed:[]};var o=t.children.map(
function(n){return n.locator.name}).unique(),s=n.getAddedChildren(i),f=o.concat(n.getRemovedChildren(
i)).filter(function(n){return s.indexOf(n)===-1}),e=u.map(function(n){return n.name});return{added:e.
filter(function(n){return f.indexOf(n)===-1}),removed:f.filter(function(n){return e.indexOf(n)===-1}
)}},n.getAddedChildren=function(n){return n&&n.addedChildren||[]},n.getRemovedChildren=function(n){return n&&
(n.removedChildren||n.removedParts)||[]},n._getChildDefinitions=function(n){return n&&(n.lenses||n.partInstances)
||undefined},n}();n.ChangeMonitor=t}(n||(n={})),n});define("MsPortalImpl/UI/Commands/UI.CommandBarManager",
["require","exports","../../Generated/SvgDefinitions","./UI.Commands","../Compositions/UI.Composition.PropertyBinding",
"../../Widgets/Widgets.CommandBar"],function(n,t,i,r,u,f){var s=MsPortalFx.Base.Images,h=i.Content.SvgLibrary.
Shell,e=MsPortalFx.ViewModels.Toolbars,o;return function(t){"use strict";function c(n,t){return new o(
n,t)}var l=window,a=jQuery,i=MsPortalFx.Base.Diagnostics.createLog(n),o;t.create=c;o=function(){function n(
n,t){this._bladePairItems=ko.observableArray();this._blade=n;this._services=t;this._lifetimeManager=
new MsPortalFx.Internal.Base.TriggerableLifetimeManager}return n.prototype.dispose=function(){this._lifetimeManager&&
(this._lifetimeManager.dispose(),this._lifetimeManager=null)},n.prototype.initialize=function(n){if(
MsPortalFx.Blades.BladeStyleHelper.canHaveCommands(this._blade.bladeDefinition.style)){this._initializeBladePairItems(
);var t=r.getCommandGroupForDefinitionItem(this._services.finder,this._blade.extension.name,this._blade.
bladeDefinition);t?this._initializeFromCommandGroup(t,n):this._initializeFromToolbar()}},n.prototype.
_initializeFromCommandGroup=function(n,t){var i=this,u=this._blade.widget,f=[];n.commands.forEach(function(
n){var e=new r.ExtensionCommandMenuItemImpl(i._blade.extension,i._blade,n,i._blade.bladeDefinition,i.
_services,t);e.activate();u.options.contextMenu.menuItems.push(e);f.push(e)});ko.reactor(this._lifetimeManager,
function(){var n=i._bladePairItems().concat(f);u.options.commandBar.menuItems(n)});u.commandBar.show(
)},n.prototype._initializeFromToolbar=function(){var r=this,t=this._blade.bladeDefinition.toolbar?this.
_blade.bladeDefinition.toolbar.source.valuesFrom[0]:null,e=this._blade.widget,n;t?(n=this._blade.children.
mapMany(function(n){return n.children}).first(function(n){return n.locator.name===t.part}),n.awaitComposed(
).then(function(){var a=n.getViewModel(0),h=u.PropertyBinding.getModelValue(a,t.property),o,s,c,l;h.
exists?(o=h.value,ko.isObservable(o.items)&&Array.isArray(o.items())?(s=o.items.map(function(t){return f.
createItem(t,n.locator)}),r._lifetimeManager.registerForDispose(s),ko.reactor(r._lifetimeManager,function(
){var n=r._bladePairItems(),t=s();e.options.commandBar.menuItems(n.concat(t))}),e.commandBar.show()):
(c="Invalid view model for the toolbar at '{0}' in part '{1}'. It is missing the items property",i.error(
c.format(t.property,n.locator.toFriendlyString())))):(l="Unable to find the view model for the toolbar at '{0}' in part '{1}'.",
i.error(l.format(t.property,n.locator.toFriendlyString())))})):this._blade.pairInfo&&this._lifetimeManager.
registerForDispose(ko.computed(function(){var n=r._bladePairItems();e.options.commandBar.menuItems(n);
e.commandBar.show()}))},n.prototype._initializeBladePairItems=function(){var n=this;this._services.bladePairManager.
getMasterBladeInfoFromDetailsBladeAsync(this._blade).then(function(t){var i,c,l,a,r,u,o;t&&(i=[],t.visibility&&
t.visibility.toggle&&(r=new e.CommandButton,r.command=t.visibility.toggle,ko.reactor(n._lifetimeManager,
function(){var n=t.visibility.visible();r.label(n?t.visibility.hideText:t.visibility.showText);r.icon(
n?h.fullView:h.splitView)}),c=new f.CommandButton(r,n._blade.locator,"ToggleParentBladeVisibility"),
i.push(c)),t.navigation&&(t.navigation.previous&&(u=new e.CommandButton,u.label(t.navigation.previousText),
u.icon(s.ArrowUp()),u.command=t.navigation.previous,l=new f.CommandButton(u,n._blade.locator,"GoToPreviousParentBladeItem"),
i.push(l)),t.navigation.next&&(o=new e.CommandButton,o.label(t.navigation.nextText),o.icon(s.ArrowDown(
)),o.command=t.navigation.next,a=new f.CommandButton(o,n._blade.locator,"GoToNextParentBladeItem"),i.
push(a))),ko.reactor(n._lifetimeManager,function(){var i=n._blade.pairing(),t=i===2;c&&c.visible(t);
l&&l.visible(t);a&&a.visible(t)}),n._bladePairItems(i))})},n}()}(o||(o={})),o});define("MsPortalImpl/UI/Compositions/UI.Composition.BladeTemplateManager",
["require","exports","../../Prototype/Extension.Definition.Locator","./UI.Composition.DefinitionChangeMonitor",
"./UI.Composition.Lens","./UI.Composition.Part","../../Services/Services.Settings","../../Widgets/Widgets.Lens"],
function(n,t,i,r,u,f,e,o){var s;return function(t){"use strict";var e=MsPortalFx.Base.Diagnostics.createLog(
n),s={},h=function(){function n(n){this._services=n}return n.prototype.createFromTemplate=function(n,
t){var e=this;if(this._validateTemplate(n,t)){var s={},c=r.ChangeMonitor.getAddedChildren(t),h={isLayoutTemplateSettings:
!0,transformId:function(n){return s[n]||n}};t.children.forEach(function(t){var l=i.Locator.fromJSON(
t.locator),v=e._services.finder.tryLocate(l,{}),r,a;(v||c.indexOf(l.name)!==-1)&&(r=new u.Instance(e.
_services,l),a=new o.ViewModel(r.id),t.children.forEach(function(n){var u=i.Locator.fromJSON(n.locator),
h=e._services.finder.tryLocate(u,{}),o,t;h&&(o=n.modelJson?JSON.parse(n.modelJson):null,t=f.create(e.
_services,u,null,o),t.widgetState(ko.toJS(n.widgetState)),s[n.widgetId]=t.id,r.addChild(t))}),a.applyViewSettings(
ko.toJS(t.widgetState),h),r.widgetState(a.getViewSettings()),s[t.widgetId]=r.id,e._addNewPartsToLens(
t,r),n.addChild(r))});n.addNewDefinitionLenses(t);n.widget.options.applyViewSettings(ko.toJS(t.widgetState),
h);n.widgetState(n.widget.options.getViewSettings())}},n.prototype.mergeFromTemplate=function(n,t){var
f=this,c;if(!this._validateTemplate(n,t))return $.Deferred().resolve().promise();var l={},a=[],e={},
v={},s={},y={isLayoutTemplateSettings:!0,transformId:function(n){return s[n]||n}},p=r.ChangeMonitor.
getAddedChildren(t),w=r.ChangeMonitor.getRemovedChildren(t),h=[];return n.children.forEach(function(
n){var u={},s=f._services.finder.tryLocate(n.locator,u),o,r,i;if(s&&w.indexOf(u.value.name)===-1)if(
o=t.children.filter(function(t){return n.templateKey===t.key}).length>0,o)for(l[n.templateKey]=n,r=n.
children.length-1;r>=0;r--)i=n.children[r],n.removeChildAt(r,!0),e[i.templateKey]?e[i.templateKey].push(
i):e[i.templateKey]=[i];else n.children.forEach(function(n){v[n.locator.name]=n});else a.push(n)}),c=
function(){t.children.forEach(function(t){var r=l[t.key],c,h;(r||p.indexOf(t.locator.name)===-1||(c=
i.Locator.fromJSON(t.locator),r=u.create(f._services,c),n.addChild(r)),r)&&(t.children.forEach(function(
t){var i=f._getOrCreatePartCorrespondingToTemplate(n,t,e,v);i&&(r.addChild(i),i.widgetState(ko.toJS(
t.widgetState)),s[t.widgetId]=i.id)}),h=new o.ViewModel(r.id),s[t.widgetId]=r.id,h.applyViewSettings(
ko.toJS(t.widgetState),y),r.widgetState(h.getViewSettings()),f._addNewPartsToLens(t,r))});a.forEach(
function(t){var i=n.children.indexOf(t);i>=0&&n.removeChildAt(i,!1)});n.sortChildren(f._createChildComparator(
t));Object.keys(e).forEach(function(t){e[t].forEach(function(t){t.dispose();f._closeChildBlades(n,function(
n){return n.masterPartId===t.id})})});n.widget.options.applyViewSettings(ko.toJS(t.widgetState),y);n.
widgetState(n.widget.options.getViewSettings())},t.children.mapMany(function(n){return n.children}).
forEach(function(n){var t=i.Locator.fromJSON(n.locator);f._services.finder.tryLocate(t,{})||h.push(f.
_services.finder.locateAsync(t))}),h.length?Q.allSettled(h).then(function(){c()}):(c(),$.Deferred().
resolve().promise())},n.prototype._validateTemplate=function(n,t){return!t||!Array.isArray(t.children)?
(e.warning("Template for blade '{0}' is invalid and will be ignored. Template: {1}".format(n.toString(
),ko.toJSON(t)||"N/A")),!1):!0},n.prototype._createChildComparator=function(n){var t=n.children.reduce(
function(n,t,i){return n[t.key]=i,n},{}),r=Math.pow(2,32)-1,i=function(n){return n in t?t[n]:r};return function(
n,t){return i(n.templateKey)-i(t.templateKey)}},n.prototype._getOrCreatePartCorrespondingToTemplate=
function(n,t,r,u){var o=null,h=r[t.key],c=h&&h.pop(),l=u[t.locator.name],a,v,y,p;return c?(h.length===
0&&delete r[t.key],o=c):l?(delete u[t.locator.name],n.children.forEach(function(n){for(var i=n.children.
length-1;i>=0;i--)n.children[i].locator.name===t.locator.name&&n.removeChildAt(i,!0)}),o=l):(a=i.Locator.
fromJSON(t.locator),v=t.modelJson?JSON.parse(t.modelJson):null,o=f.create(this._services,a,null,v),t.
originalPartLocator&&(o.originalPartLocator=i.Locator.fromJSON(t.originalPartLocator))),y=this._services.
finder.tryLocate(o.locator,s),p=this._services.finder.tryLocate(o.locator.getExtensionLocator(),s),y||
!p?o:(e.warning("[Definition Change] Part '{0}' defined in template for blade '{1}' does not exist in extension definition and will be removed".
format(o.toString(),n.toString())),null)},n.prototype.getTemplateAsync=function(n){return this._services.
sharedSettings.querySetting(1,n).then(function(n){return n},function(){return e.error("Failed to get Blade Template for templateKey: {0}. Using the default instead.".
format(n)),Q.resolve(undefined)})},n.prototype._closeChildBlades=function(n,t){for(var i,r=n.detailContainers.
length-1;r>=0;r--)i=n.detailContainers[r],(!t||t(i))&&this._services.desktop.forceCloseBlade(i.id)},
n.prototype._addNewPartsToLens=function(n,t){t.addNewDefinitionParts(n)},n}();t.BladeTemplateManager=
h}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Compositions/UI.Composition.Lens",
["require","exports","../../Prototype/Extension.Definition.Locator","../../Services/Services.Settings",
"./UI.Composition.DefinitionChangeMonitor","./UI.Composition","./UI.Composition.Base","./UI.Composition.Part",
"../../Widgets/Widgets.Lens","../../Widgets/Widgets.UIElementBase"],function(n,t,i,r,u,f,e,o,s,h){var
c;return function(t){"use strict";function w(n,t){var i=n.finder.locate(t),u=new l(n,t),r;return i&&
i.partInstances&&(r=[],i.partInstances.forEach(function(i){var u=o.create(n,t.withPartInstance(i.name),
null,null);r.push(u)}),u.addChildren(r)),u}var c=MsPortalFx.Base.EventTypes,r=MsPortalFx.Base.Diagnostics.
createLog(n),v=MsPortalFx.Base.Utilities,y=window,a=Object.keys(y.fx.environment.trace.lenssettings||
{}),p=a.length>0,l;t.lensName="Lens";t.lensSettingsPrefix="[LensSettings]";l=function(n){function l(
i,r,u,f,e){var o=this;n.call(this,i,r,u,f,e);this.disableSaveSettings=!1;this._isTracingEnabled=!1;this.
_isRestoredFromJson=!1;this._name=t.lensName;p&&(this._isTracingEnabled=a.indexOf(this.locator.name.
toLowerCase())>=0);ko.reactor(this,function(){var t=i.contextPane.opened(),n=o.widget;n&&n.setEnableAddParts(
!t)})}return __extends(l,n),l.prototype.getCompositionType=function(){return 3},l.fromJSON=function(
n,t,r){return f.createCompositionFromJSON(r,function(){var u=e.getChildrenSettings(JSON.stringify(r.
locator),Object.keys(r.childSettings),r.childSettings).map(function(t){return o.Instance.fromJSON(n,
t)}),t=new l(n,i.Locator.fromJSON(r.locator),u,r.widgetState,r.id);return t.loadFromJson(r),t._isRestoredFromJson=
!0,t},function(t,i){var u=new l(n,t,null,null,r.id);return u.unrecoverableErrorMessage=i,u})},l.prototype.
_compose=function(n,t){var u=this,i,f=this._lenSettingsPrefixedLocator(this.locator.toString()),e=this.
parent&&this.getPartsContainer(),o=Q({});i=new s.ViewModel(this.id,this.widgetState());e&&e.containsBladeColumns&&
(o=this.services.sharedSettings.querySetting(4,f).then(function(n){v.isNullOrUndefined(n)||i.collapsed(
n.collapsed)}),this._logVerbose("Fetching lens collapse/expand state",f));this._parentLockedReactor=
ko.computed(function(){i.locked(n.options.locked())});this.widget=new s.Widget($("<div/>"),i);this._attachEventHandlers(
);this._isSummary()?n.setSummary(this.widget.element):n.addChild(this.widget);this.services.finder.locateAsync(
this.locator.getExtensionLocator()).done(function(n){var f=u.services.finder.locate(u.locator),t;f&&
f.title&&(t=f.title,t?(i.defaultTitle(t),MsPortalFx.Util.isNullOrUndefined(i.title())&&i.title(t)):r.
error("Lens {0} in extension {1} is missing title.".format(u.locator.toString(),n.name)))});this.children&&
this.children.forEach(function(n){n.compose(u.widget)});this._isRestoredFromJson&&this.discardWidgetStateOfUnusedChildren(
);this.save();o.then(function(){t.resolve()})},l.prototype.resetLayout=function(){var n=this,t=this.
services.finder.locate(this.locator);t&&t.partInstances&&(this.removeChildren(),t.partInstances.forEach(
function(t){var r=n.locator.withPartInstance(t.name),i=o.create(n.services,r,null,null),u={partId:i.
id,sourceId:n.id,targetId:n.id,isNewPart:!0};n.addChildren([i]);i.compose(n.widget);n.widget.trigger(
c.fxrearrange,null,u)}));this.save()},l.prototype.getTemplate=function(){var t=n.prototype.getTemplate.
call(this),i=this.services.finder.locate(this.locator);return u.ChangeMonitor.recordChanges(t,this,i),
t},l.prototype.isOrganizable=function(){return!this._isSummary()},l.prototype.dispose=function(t){this.
_parentLockedReactor&&(this._parentLockedReactor.dispose(),this._parentLockedReactor=null);this._removeEventHandlers(
);n.prototype.dispose.call(this,t)},l.prototype.freezeWidgetState=function(){this.disableSaveSettings=
!0;this._frozenWidgetState=$.extend(!0,{},this.widgetState())},l.prototype.restoreWidgetState=function(
){this._frozenWidgetState&&this.widget&&(this.widgetState(this._frozenWidgetState),this.widget.options.
applyViewSettings(this.widgetState()));this.disableSaveSettings=!1},l.prototype.addNewDefinitionParts=
function(n){var t=this,f=this.services.finder.locate(this.locator),e=u.ChangeMonitor.getDefinitionChanges(
this,n,f),i=e.added.map(function(n){var i=t.locator.withPartInstance(n);return r.warning("[Definition Change] Part '{0}' has been added to extension definition and will be added to lens.".
format(i)),o.create(t.services,i,null,null)});i.length>0&&this.addChildren(i)},l.prototype.removeDeletedDefinitionParts=
function(){var n=this,t=this.services.finder.locate(this.locator),i=u.ChangeMonitor.getDefinitionChanges(
this,null,t);i.removed.forEach(function(t){var i=n.locator.withPartInstance(t),u=n.children.filter(function(
n){return n.locator.equals(i)});u.forEach(function(t){r.warning("[Definition Change] Part '{0}' has been removed from extension definition and will be removed from lens.".
format(t));n.removeChild(t)})})},l.prototype.tryUnpinPart=function(n,t){var o=this,i=this.getChildById(
n),f=!1,s={includeSelf:!0,includeDescendants:!0,force:!!t},e,u;return i?this.services.desktop.discardEditsOfPart(
i,s).successful&&(u=this.getPartsContainer(),u&&u.detailContainers.filter(function(t){return t.masterPartId===
n}).forEach(function(n){o.services.desktop.forceCloseBlade(n.id)}),this.removeChild(i),f=!0):(e="The part with id: '{0}' to be unpinned could not be found on the lens: '{1}'.".
format(n,this.locator.toString()),r.error(e)),f},l.prototype._attachEventHandlers=function(){var n=this;
this._attachWidgetErrorEvent();this.widget.element.on(h.Widget.viewSettingsChanged,this._viewSettingsUpdateHandler=
function(t,i){(t.stopPropagation(),n.disableSaveSettings)||(n.widgetState(i),n.save())});this.widget.
element.on(c.collapsedStateUpdated,this._collapsedStateUpdateHandler=function(t,i){var r={collapsed:
i},u=n._lenSettingsPrefixedLocator(n.locator.toString());t.stopPropagation();n.services.sharedSettings.
setSetting(4,u,r);n._logVerbose("Save collapse/expand state",r,u)})},l.prototype._removeEventHandlers=
function(){this._viewSettingsUpdateHandler&&(this.widget.element.off(h.Widget.viewSettingsChanged,this.
_viewSettingsUpdateHandler),this._viewSettingsUpdateHandler=null);this._collapsedStateUpdateHandler&&
(this.widget.element.off(c.collapsedStateUpdated,this._collapsedStateUpdateHandler),this._collapsedStateUpdateHandler=
null)},l.prototype._lenSettingsPrefixedLocator=function(n){return"{0}{1}".format(t.lensSettingsPrefix,
n)},l.prototype._logVerbose=function(n,i,u){if(this._isTracingEnabled){if(u){var f={};f[u]=i;i=f}r.verbose(
"{0} {1} Lens: {2}.\nSettings: {3}".format(t.lensSettingsPrefix,n,this.locator.toString(),ko.toJSON(
i)))}},l.prototype._isSummary=function(){var n=this.services.finder.locate(this.locator);return n&&n.
isSummary},l}(e.Instance);t.Instance=l;t.create=w}(c||(c={})),c});define("MsPortalImpl/UI/Compositions/UI.Composition.CompositionAwaiter",
["require","exports"],function(){var n;return function(n){"use strict";var t=jQuery,i={pending:"pending"},
r=function(){function n(n,i){this.deferred=t.Deferred();this.targetId=n;this.isSource=i}return n}(),
u=function(){function n(n){this._awaitableCompositions=[];this.resolvedCompositions=[];this._trackResolvedCompositions=
n}return n.prototype.await=function(n,t){var f=this,u=new r(n&&n.toString(),t),e=this.resolvedCompositions.
firstIndex(function(n){return t(n)});if(e>=0)u.deferred.resolve(this.resolvedCompositions[e]);else if(
this._awaitableCompositions.push(u),n)n.onDispose(function(){var n;u.deferred.state()===i.pending&&(
u.deferred.reject(),n=f._awaitableCompositions.indexOf(u),n>=0&&f._awaitableCompositions.splice(n,1))}
);return u.deferred.promise()},n.prototype.resolve=function(n){var r=this,t,i;if(this._trackResolvedCompositions)
{this.resolvedCompositions.push(n);n.onDispose(function(){var t=r.resolvedCompositions.indexOf(n);t>=
0&&r.resolvedCompositions.splice(t,1)})}for(t=this._awaitableCompositions.length-1;t>=0;t--)i=this._awaitableCompositions[
t],i.isSource(n)&&(i.deferred.resolve(n),this._awaitableCompositions.splice(t,1))},Object.defineProperty(
n.prototype,"waitingCompositions",{get:function(){return this._awaitableCompositions.map(function(n)
{return n.targetId})},enumerable:!0,configurable:!0}),n}();n.CompositionAwaiter=u}(n||(n={})),n});define(
"MsPortalImpl/UI/Compositions/UI.Composition.LensAddition",["require","exports","../../Base/Telemetry",
"./UI.Composition.Lens","../../Widgets/Widgets.Blade"],function(n,t,i,r,u){var e=MsPortalFx.Base.Diagnostics.
Telemetry.trace,f;return function(n){"use strict";var t=function(){function n(n){this._installed=!1;
this._emptyLensCallbacks=$.Callbacks();this._lensesAdded=[];this._blade=n}return n.prototype.update=
function(n){n&&!this._installed?this._install():!n&&this._installed&&this._uninstall()},n.prototype.
getTransientChildren=function(){for(var t,i=this._getOrganizableChildren(),r=[],n=i.length-1;n>=0;n--)
if(t=i[n],this._isEmptyLens(t))r.push(t);else break;return r},n.prototype._install=function(){var n=
this,i=this._blade.subscribeChildren(function(){n._ensureEmptyLensAvailable()}),t=function(){n._emptyLensCallbacks.
remove(t);i.dispose()};this._emptyLensCallbacks.add(t);this._getOrganizableChildren().forEach(function(
t){n._attachEmptyLensHandlers(t)});this._ensureEmptyLensAvailable();this._installed=!0},n.prototype.
_uninstall=function(){this._emptyLensCallbacks.fire();this._removeEmptyLensesAtEnd();MsPortalFx.Util.
isNullOrUndefined(this._ensureEmptyLensAvailableTimeout)||(clearTimeout(this._ensureEmptyLensAvailableTimeout),
this._ensureEmptyLensAvailableTimeout=null);this._installed=!1;this._runTelemetry()},n.prototype._runTelemetry=
function(){for(var n=0;n<this._lensesAdded.length;n++)e({source:i.Source.Lens,action:i.Action.LensAdded});
this._lensesAdded=[]},n.prototype._ensureEmptyLensAvailable=function(){var n=this;MsPortalFx.Util.isNullOrUndefined(
this._ensureEmptyLensAvailableTimeout)&&(this._ensureEmptyLensAvailableTimeout=setTimeout(function()
{var t=n._getOrganizableChildren();t.length>0&&n._isEmptyLens(t[t.length-1])?t.length>1&&n._isEmptyLens(
t[t.length-2])&&n._removeEmptyLensesAtEnd(t.length-2):(t.length===0||n._isInitializedLens(t[t.length-
1]))&&n._addEmptyLens();n._getOrganizableChildren().forEach(function(t,i,r){n._isInitializedLens(t)&&
t.widget.setEnableRemove(i<r.length-1)});n._ensureEmptyLensAvailableTimeout=null}))},n.prototype._addEmptyLens=
function(){var t=this._blade.locator.withCustomLens(MsPortalFx.Util.newGuid()),n=r.create(this._blade.
services,t);this._blade.widget.element.trigger(u.Widget.displayStateChangingEventName);try{this._blade.
addChild(n);n.compose(this._blade.widget)}finally{this._blade.widget.element.trigger(u.Widget.displayStateChangedEventName)}
this._blade._saveTemplateOnWidgetStateChanged(n);this._blade.save();this._attachEmptyLensHandlers(n);
this._lensesAdded.push(n)},n.prototype._attachEmptyLensHandlers=function(n){var i=this,r=function(){
i._ensureEmptyLensAvailable()},u=n.widget.options.title.subscribe(r),f=n.subscribeChildren(r),t=function(
){n.offDispose(t);i._emptyLensCallbacks.remove(t);u.dispose();f.dispose()};n.onDispose(t);this._emptyLensCallbacks.
add(t)},n.prototype._removeEmptyLensesAtEnd=function(n){for(var i,r=this._getOrganizableChildren(),t=
r.length-1;t>=0;t--)if(i=r[t],this._isEmptyLens(i)){if(MsPortalFx.Util.isNullOrUndefined(n)||t!==n){
this._blade.widget.element.trigger(u.Widget.displayStateChangingEventName);try{this._blade.removeChild(
i)}finally{this._blade.widget.element.trigger(u.Widget.displayStateChangedEventName)}this._lensesAdded.
remove(i)}}else break},n.prototype._isEmptyLens=function(n){return this._isInitializedLens(n)&&!n.widget.
options.title()&&n.children.length===0},n.prototype._isInitializedLens=function(n){return!!n.widget}
,n.prototype._getOrganizableChildren=function(){return this._blade.children.filter(function(n){return n.
isOrganizable()})},n}();n.LensAddition=t}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl/UI/Compositions/UI.Composition.Journey",["require","exports","./UI.Composition",
"./UI.Composition.Base","./UI.Composition.Blade","../../Widgets/Widgets.Journey"],function(n,t,i,r,u,
f){var e;return function(t){"use strict";function h(n){if(n instanceof MsPortalFx.Base.SerializableHierarchyMap)
return n;var t=new o;return new MsPortalFx.Base.SerializableHierarchyMap(t,n)}function c(n,t){var i=
new s(n,t);return i.save(),i}var e=MsPortalFx.Base.Diagnostics.createLog(n),o,s;t.journeyName="Journey";
o=function(){function n(){}return n.prototype.toJSON=function(n){var t={type:n.type};return n.editScope&&
(t.editScope={editScopeId:n.editScope.editScopeId,dirty:!!ko.utils.unwrapObservable(n.editScope.dirty),
disposeOnSelectionChange:n.editScope.disposeOnSelectionChange,disposeOnJourneyDiscard:!!n.editScope.
disposeOnJourneyDiscard}),JSON.stringify(t)},n.prototype.fromJSON=function(n){var t=JSON.parse(n),i=
t.editScope&&{editScopeId:t.editScope.editScopeId,dirty:ko.observable(t.editScope.dirty),disposeOnSelectionChange:
t.editScope.disposeOnSelectionChange,disposeOnJourneyDiscard:t.editScope.disposeOnJourneyDiscard};return{
editScope:i,type:t.type}},n}();s=function(n){function s(i,r,u,f,e,s){var h=this;n.call(this,i,null,u,
f,e);this.firstBlade=ko.observable();this.lastBlade=ko.observable();this.lastModifiedTime=ko.observable(
(new Date).getTime());this._name=t.journeyName;this.originTile=r;this._updateBladesMetadata();this._journeyAmbientSettings=
s||new MsPortalFx.Base.SerializableHierarchyMap(new o);this._journeyAmbientSettings.getObservable().
subscribe(this,function(){h.save()});this._setupOriginPartEditScopeReactor(this.originTile);i.bladePairManager.
pairBlades(this.blades)}return __extends(s,n),Object.defineProperty(s.prototype,"ambientSettings",{get:
function(){return this._journeyAmbientSettings},enumerable:!0,configurable:!0}),s.prototype.getCompositionType=
function(){return 6},s.fromJSON=function(n,t,r,u){return i.createCompositionFromJSON(r,function(){return s.
_fromJSON(n,t,r,u)},function(t,i){var r=new s(n,null);return r.unrecoverableErrorMessage=i,r})},s._fromJSON=
function(n,t,i,f){if(!f||!f.children)throw new Error("Unable to reconstitute Journey startboard parts are undefined.");
var c=r.getChildrenSettings("ActiveJourney",Object.keys(i.childSettings),i.childSettings).map(function(
i){return u.Instance.fromJSON(n,t,i)}),l=f.children.first(function(n){return n.id===i.originPartId}),
o=null,a=[],v=!1;return l?Object.keys(i.childSettings)&&Object.keys(i.childSettings).length!==0?c.length!==
Object.keys(i.childSettings).length?e.error("Failed to rehydrate journey '{0}'. Unable to locate settings for at least one blade. Settings: {1}. Children: [{2}]".
format(i.id,JSON.stringify(i),JSON.stringify(c))):v=c.every(function(n){var r=i.childSettings[n.id],
t;return r.masterBladeId===f.id?(n.masterContainer=f,a.push(n),!0):(t=c.first(function(n){return n.id===
r.masterBladeId}),t?(n.masterContainer=t,t.detailContainers.push(n),!0):(e.error("Failed to rehydrate journey '{0}'. Could not find master container '{1}' for blade '{2}'. Available blades are: [{3}]".
format(i.id,r.masterBladeId,n.toString(),JSON.stringify(c))),!1))}):e.error("Failed to rehydrate journey '{0}'. Journey settings does not have any blades. Settings: {1}".
format(i.id,JSON.stringify(i))):e.error("Failed to rehydrate journey '{0}'. Could not find the origin tile '{1}'. The StartBoard tiles available are: [{2}]".
format(i.id,i.originPartId,f.children.map(function(n){return n.toString()}).join(", "))),!!l&&v&&(f.
detailContainers=f.detailContainers.concat(a),o=new s(n,l,c,i.widgetState,i.id,h(i.ambientSettings)),
o.loadFromJson(i),o.setBladeTitles(i.firstBladeTitle,i.lastBladeTitle),o.originPartStateWhenActive=i.
originPartStateWhenActive,o.originPartStateWhenActive=MsPortalFx.Base.Utilities.Internal.Serialization.
isSerializedObject(i.originPartStateWhenActive)?MsPortalFx.Base.Utilities.Internal.Serialization.fromSerializableObject(
i.originPartStateWhenActive):i.originPartStateWhenActive,o._loadBladeMetadataFromSettings(i)),o},s.prototype.
setBladeTitles=function(n,t){this._firstBladeTitle=n;this._lastBladeTitle=t},s.prototype.isStartedWithContextBlade=
function(){var n=this.children;return n.length>0&&n[0].openInContextPane},s.prototype.observeEditScopeChanges=
function(n){this._observeEditScopeChanges(n,!0)},s.prototype._observeEditScopeChanges=function(n,t){
var i=this;ko.computed(this,function(){var r=n.editScopeObservable&&n.editScopeObservable(),f=r&&i.services.
editScopeManager.getDirtyObservable(r),e=f&&f(),u;r&&(u=n.ownerLocatable.journeyPath,e?i._journeyAmbientSettings.
itemExists(u)||i._journeyAmbientSettings.addItem(u,{type:n.ownerType,editScope:{editScopeId:r,dirty:
f,disposeOnSelectionChange:n.disposeOnSelectionChange,disposeOnJourneyDiscard:t}}):i._journeyAmbientSettings.
removeItem(u))})},s.prototype.addChild=function(t,i){n.prototype.addChild.call(this,t,i);this.services.
bladePairManager.pairBlade(t)},s.prototype.removeChildAt=function(t,i){n.prototype.removeChildAt.call(
this,t,i);this._updateBladesMetadata()},s.prototype._addChildrenInternal=function(t,i){n.prototype._addChildrenInternal.
call(this,t,i);this._updateBladesMetadata()},s.prototype._setupOriginPartEditScopeReactor=function(n)
{var t=this;n&&n.awaitComposed().done(function(){if(!t.isDisposed&&n.partDefinition.editScopeType){var
i={editScopeObservable:n.editScopeId,ownerType:n.locator.type,ownerLocatable:n,disposeOnSelectionChange:
!1};t._observeEditScopeChanges(i,!1)}})},s.prototype._updateBladesMetadata=function(){var n,t;this.children.
length>0&&(n=this.children[0],t=this.children[this.children.length-1]);this.firstBlade&&this.firstBlade(
)!==n&&this.firstBlade(n);this.lastBlade&&this.lastBlade()!==t&&this.lastBlade(t)},s.prototype.toJSON=
function(){var t=n.prototype.toJSON.call(this);return this.firstBlade&&this.firstBlade()&&(t.icon=this.
firstBlade().icon(),t.firstBladeTitle=this.firstBlade().isComposed||!this._firstBladeTitle?this.firstBlade(
).title():this._firstBladeTitle,t.firstBladeInContextPane=this.firstBlade().openInContextPane),this.
lastBlade&&this.lastBlade()&&(t.lastBladeTitle=this.lastBlade().isComposed||!this._lastBladeTitle?this.
lastBlade().title():this._lastBladeTitle),t.originPartStateWhenActive=MsPortalFx.Base.Utilities.Internal.
Serialization.toSerializableObject(this.originPartStateWhenActive),t.lastModifiedTime=this.lastModifiedTime&&
this.lastModifiedTime(),t.ambientSettings=this._journeyAmbientSettings,t.originPartId=this.originTile&&
this.originTile.id,t},s.prototype._compose=function(n,t){var i;if(!!n.getJourneyWidget()){t.resolve(
);return}i=new f.ViewModel(this.id);this.widget=new f.Widget(n.getJourneyArea(),i);t.resolve()},s.prototype.
dispose=function(t){this._originPartEditScopeSubscription&&(this._originPartEditScopeSubscription.dispose(
),this._originPartEditScopeSubscription=null);this._journeySettingsInsertedHandler&&(this.services.settings.
removeSettingsInsertedHandler(this._journeySettingsInsertedHandler),this._journeySettingsInsertedHandler=
null);this._journeySettingsDeletedHandler&&(this.services.settings.removeSettingsDeletedHandler(this.
_journeySettingsDeletedHandler),this._journeySettingsDeletedHandler=null);this.services.bladePairManager.
reset();n.prototype.dispose.call(this,t)},Object.defineProperty(s.prototype,"blades",{get:function()
{return this.children},enumerable:!0,configurable:!0}),s.prototype._loadBladeMetadataFromSettings=function(
n){var r=this.blades&&this.blades.length>0,t=r&&this.blades[0],i=r&&this.blades[this.blades.length-1];
n=n||{};t&&(n.firstBladeTitle&&t.title(n.firstBladeTitle),n.icon&&t.icon(n.icon),this.firstBlade(t));
i&&(n.lastBladeTitle&&i.title(n.lastBladeTitle),this.lastBlade(i))},s}(r.Instance);t.Instance=s;t.deserializeAmbientSettings=
h;t.create=c}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}
for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Compositions/UI.Composition.StartBoard",
["require","exports","../../Services/Services.Settings.Schema","../../Base/Telemetry","./UI.Composition",
"./UI.Composition.Base","./UI.Composition.CompositionAwaiter","./UI.Composition.StartboardPart","../Commands/UI.ShellCommands",
"../../Widgets/Widgets.StartBoard","../../Widgets/Widgets.UIElementBase"],function(n,t,i,r,u,f,e,o,s,
h,c){var a=MsPortalFx.Base.EventTypes,v=MsPortalFx.Base.Diagnostics.Telemetry.trace,l;return function(
t){"use strict";function p(n){var t=new l(n);return t.save(),t}var y=MsPortalFx.Base.Diagnostics.createLog(
n),l;t.startboardName="Startboard";l=function(n){function l(r,u,f){n.call(this,r,null,u,f,i.startBoardSettingsKey);
this._partAwaiter=new e.CompositionAwaiter(!0);this._containerAwaiter=new e.CompositionAwaiter;this.
masterContainer=null;this.detailContainers=[];this._name=t.startboardName}return __extends(l,n),l.prototype.
getCompositionType=function(){return 7},l.fromJSON=function(n,t,i){return u.createCompositionFromJSON(
i,function(){return l._fromJSON(n,t,i)},function(t,i){var r=new l(n);return r.unrecoverableErrorMessage=
i,r})},l.prototype.toJSON=function(){var t=n.prototype.toJSON.call(this);return t.children=this.children.
map(function(n){return n.id}),t},l._fromJSON=function(n,t,i){var u=f.getChildrenSettings("Startboard",
i.children,t).map(function(t){return o.Instance.fromJSON(n,t)}),e=new l(n,u,i.widgetState);return u.
forEach(function(n){var t=n&&n.widgetState(),i=t&&t.NormalState?MsPortalFx.Parts.PartSize[t.NormalState.
size]:"";v({extension:n.locator.getExtensionLocator().name,source:r.Source.StartBoardPart,action:r.Action.
PartLoaded,name:n.locator.toFriendlyString(),data:i})}),e.loadFromJson(i),e},l.prototype._compose=function(
n,t){var i=this,r;r=new h.ViewModel(this.id,this.widgetState());ko.utils.arrayPushAll(r.commands,this.
_getShellCommands());this.widget=new h.Widget(n.getStartBoardArea(),r);this.widget.element.on(c.Widget.
viewSettingsChanged,this._viewSettingsUpdateHandler=function(n,t){i.widgetState(t);i.save();n.stopPropagation(
)});this.widget.element.on(a.fxunpin,this._tileUnpinHandler=function(n,t){var r=i.children.first(function(
n){return n.id===t.tileId});r&&(y.warning("Part '{0}' is about to be removed due to user unpin operation.".
format(r)),i.services.desktop.removeTile(r.id))});t.resolve()},l.prototype.resetLayout=function(){this.
services.desktop.resetStartBoard()},l.prototype.dispose=function(){this._viewSettingsUpdateHandler&&
this.widget.element.off(c.Widget.viewSettingsChanged,this._viewSettingsUpdateHandler);this._tileUnpinHandler&&
this.widget.element.off(a.fxunpin,this._tileUnpinHandler);this._viewSettingsUpdateHandler=null;this.
_tileUnpinHandler=null;y.warning("UI.Composition.Startboard.dispose() has been called.");n.prototype.
dispose.call(this,!0)},Object.defineProperty(l.prototype,"journeyPath",{get:function(){return[]},enumerable:
!0,configurable:!0}),l.prototype.getComposedParts=function(){return this._partAwaiter.resolvedCompositions}
,l.prototype.awaitComposedPart=function(n,t){return this._partAwaiter.await(n,t)},l.prototype.notifyPartComposed=
function(n){this._partAwaiter.resolve(n)},l.prototype.awaitContainer=function(n,t){return this._containerAwaiter.
await(n,t)},l.prototype.notifyContainer=function(n){this._containerAwaiter.resolve(n)},l.prototype.getDiagnosticsData=
function(){return $.extend(n.prototype.getDiagnosticsData.call(this),{detailBlades:this.detailContainers.
map(function(n){return n.toString()})})},l.prototype._getShellCommands=function(){var n=[];return n.
push(new s.ResetStartBoardCommand(this.services)),n.push(new s.EnterOrganizeMode(this.services)),n.push(
new s.ExitOrganizeMode(this.services)),n},l}(f.Instance);t.Instance=l;t.create=p}(l||(l={})),l});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Compositions/UI.Composition.StartboardPart",
["require","exports","../../Prototype/Extension.Definition.Locator","./UI.Composition","./UI.Composition.CompositionBinder",
"./UI.Composition.Part","../Commands/UI.ShellCommands","MsPortalImpl/Resources/ImplScriptResources"],
function(n,t,i,r,u,f,e,o){var s;return function(t){"use strict";function h(n,i,r,u){var e=new s(n,i,
null,u);return e.calculateInitialSize(),e.containerModel=f.prepareContainerModel(r)||{},e.validateBindings(
r)||(t.log.error("Unable to create instance of startboard part '{0}', check log for errors.".format(
i.toString())),e.locator.name="##INVALID##"),e.save(),e}function c(n){return n&&!!n.editScopeId}t.startboardPartName=
"StartboardPart";t.log=MsPortalFx.Base.Diagnostics.createLog(n);var s=function(n){function f(i,r,u,f)
{n.call(this,i,r,u,f,null,100);this.dontSetupWidget=!1;this.containerModel={};this._name=t.startboardPartName}
return __extends(f,n),f.fromJSON=function(n,t){return r.createCompositionFromJSON(t,function(){var r=
new f(n,i.Locator.fromJSON(t.locator),t.widgetState,t.id);return r.loadPropertiesFromJson(t),r._storedEditScopeId=
t.editScopeId,r.dontSetupWidget=t.dontSetupWidget,r.containerModel=r.containerModel||{},r},function(
i,r){var u=new f(n,i,null,t.id);return u.unrecoverableErrorMessage=r,u})},f.prototype.getCompositionType=
function(){return 2},f.prototype.composeShellCommands=function(n){this._removeShellCommands(n);Array.
prototype.push.apply(n,this._getShellCommands())},f.prototype.register=function(t){var i=this;if(n.prototype.
register.call(this,t),this._part)this._part.onStartboard(!0);this.editScopeId()&&this.partDefinition.
partKind===17&&(this._editScopeDirtySubscription=this.services.editScopeManager.getDirtyObservable(this.
editScopeId()).subscribe(function(n){n&&(i.dontSetupWidget=!1,i.addWidgetToUI(i.getPartsContainer().
widget))}))},f.prototype.dispose=function(t){this._editScopeDirtySubscription&&(this._editScopeDirtySubscription.
dispose(),this._editScopeDirtySubscription=null);n.prototype.dispose.call(this,t)},f.prototype.toJSON=
function(){var t=n.prototype.toJSON.call(this);return t.editScopeId=this.editScopeId(),t.dontSetupWidget=
this.dontSetupWidget,t},f.prototype.save=function(){return this._saveInternal()},f.prototype._deleteSetting=
function(){this._deleteSettingInternal()},f.prototype.validateBindings=function(n){var r=this,t,i;return this.
bindings&&this.bindings.length>0?(t=this.bindings.filter(function(n){return n.source.id!==r.id}),i=t.
map(function(n){return n.source.property}),u.CompositionBinder.modelHasProperties(this.toString(),i,
n)):!0},f.prototype.matchesLocatorAndModel=function(n,t,i){return!this.locator.equals(t)&&!this._matchesPartReferenceLocator(
n,t)?!1:r.deepSubset(this.containerModel,i||{})},f.prototype.addWidgetToUI=function(t){if(!this.dontSetupWidget)
{var i=this.widget;this.composeShellCommands(i.options.commands);n.prototype.addWidgetToUI.call(this,
t);this.save()}},f.prototype.disableForAssetDeleted=function(i){i?(t.log.warning("Part '{0}' is about to be removed because the associated asset is deleted.".
format(this)),this.services.desktop.removeTile(this.id),this.save()):n.prototype.disableForAssetDeleted.
call(this,i)},f.prototype._getEditScopeIdFromSettings=function(){return this._storedEditScopeId},f.prototype.
_setupJourneyEditScopeReactor=function(){},f.prototype._disposeEditScope=function(){var n=this.editScopeId(
);if(n)this.services.editScopeManager.onEditScopeDisposed(n)},f.prototype._getBladeOpenerConfig=function(
){var i=this,r=n.prototype._getBladeOpenerConfig.call(this),u=function(){var n=i.getPartsContainer().
detailContainers;return n&&n.length>0&&n[0]};return r.onBladesOpening=function(){i.isDisposed&&i.dontSetupWidget&&
t.log.error("Cannot open new blades for part '{0}', it has already been disposed and removed from the starboard.".
format(i.toString())+" If this part was created from a Hub action, make sure it doesn't change the target blade after it has been opened.")}
,r.getCloseOwnedDetailBladesHandler=function(n){var r,f=n&&n.source&&n.source.property,t=u();return t&&
t.masterPartId===i.id&&t.masterInvocationProperty===f&&!t.masterCommandName&&(r=function(){var n=i.services.
desktop.getActiveJourney();return n?i.services.desktop.tryDiscardJourney(n.id):i.services.desktop.tryDeactivateJourney(
)}),r},r.getCloseOtherDetailBladesHandler=function(n){var r,f=n&&n.source&&n.source.property,t=u();return t&&
(t.masterPartId!==i.id||t.masterInvocationProperty!==f)&&(r=function(){var n=i.services.desktop.getActiveJourney(
);return n.isStartedWithContextBlade()?i.services.desktop.tryDiscardJourney(n.id):i.services.desktop.
tryDeactivateJourney()}),r},r},f.prototype._getActions=function(){var n=this,t=new e.UnpinFromStartboard(
this.services).createAction(this),i=new e.OpenContextMenu(function(){return n._getShellCommands()}).
createAction(this);return[i,t]},f.prototype._getShellCommands=function(){var n=[],t=new e.UnpinFromStartboard(
this.services);return t.text(o.ShellCommands.unpinFromStartboard),t.icon(MsPortalFx.Base.Images.Unpin(
)),n.push(t),n.push(new e.EnterOrganizeMode(this.services)),Array.prototype.push.apply(n,e.CreatePartSizeCommandCollection(
this.services)),n.push(new e.ExitOrganizeMode(this.services)),n},f.prototype._matchesPartReferenceLocator=
function(n,t){var u=!1,f={},r,e,o;return this.locator.type===7&&n.tryLocate(this.locator,f)&&(r=f.value,
r&&r.reference&&(e=r.reference.extension?i.Locator.forExtension(r.reference.extension):this.locator.
getExtensionLocator(),o=e.withPartType(r.reference.partTypeName),u=t.equals(o))),u},f}(f.Instance);t.
Instance=s;t.create=h;t.isStartboardPartSetting=c}(s||(s={})),s});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.StartBoard",["require","exports","MsPortalImpl/Interactions/Interactions.RightClick",
"./Widgets.FlowLayout","./Widgets.LayoutBase","./Widgets.Tile","./Widgets.UIElementBase"],function(n,
t,i,r,u,f,e){var o;return function(t){"use strict";var p=window,l=jQuery,a=MsPortalFx.Base.Diagnostics.
createLog(n),o="fxs-theme-context-start",s="fxs-startboard",h="fxs-startboard-layout",v="<div class='"+
h+" fxs-scrollbar-transparent fxs-scrollbar-default-hover'><\/div>",y=function(n){function t(t,i){n.
call(this,t);this.commands=[];this.locked(!1);this.flowLayoutOptions=new r.ViewModel("fxs-flowlayout-instanceid");
this.flowLayoutOptions.allowReorder=!0;this.flowLayoutOptions.allowOverflow=!0;this.flowLayoutOptions.
orientation=0;this.flowLayoutOptions.childWidgetType=f.Widget;this.flowLayoutOptions.minColumns(4);this.
flowLayoutOptions.minRows(6);this.flowLayoutOptions.maxRows(6);this.flowLayoutOptions.locked(!1);this.
applyViewSettings(i)}return __extends(t,n),t.prototype.getViewSettings=function(){return{NormalState:
{layoutSettings:this.flowLayoutOptions.getViewSettings()}}},t.prototype.applyViewSettings=function(n)
{n&&n.NormalState&&n.NormalState.layoutSettings&&this.flowLayoutOptions.applyViewSettings(n.NormalState.
layoutSettings)},t}(e.ViewModel),c;t.ViewModel=y;c=function(n){function t(t,u){n.call(this,t,u);this.
_layout=null;this.element.addClass(o).addClass(s).html(v);this._layout=new r.Widget(this.element.findByClassName(
h),this.options.flowLayoutOptions);this._attachEventHandlers();this._rightClickInteraction=new i.RightClick(
this.element,u.commands)}return __extends(t,n),t.prototype.dispose=function(){this._removeEventHandlers(
);this._layout.dispose();this._cleanElement(s,o);this._rightClickInteraction.dispose();n.prototype.dispose.
call(this)},Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),t.prototype.addChild=function(n){if(!n)throw new Error("Can't add null child.");
this._layout.addChild(n)},t.prototype.removeChild=function(n){return this._layout.removeChild(n)},t.
prototype.createChild=function(n,t){var i=new f.ViewModel(n,t);return i.locked(this.options.locked()),
new f.Widget(l("<div />"),i)},t.prototype.saveViewSettings=function(){return this.options.getViewSettings(
)},t.prototype.discardStateOfUnusedChildren=function(){return a.assert(!!this._layout,"FlowLayout not defined."),
this._layout?this._layout.discardStateOfUnusedChildren():{stateDiscarded:!1}},t.prototype._attachEventHandlers=
function(){var n=this;this.element.on(u.Widget.layoutUpdatedEventName,this._layoutUpdatedEventHandler=
function(t){n.element.trigger(e.Widget.viewSettingsChanged,n.saveViewSettings());t.stopPropagation()}
)},t.prototype._removeEventHandlers=function(){this.element.off(u.Widget.layoutUpdatedEventName,this.
_layoutUpdatedEventHandler);this._layoutUpdatedEventHandler=null},t}(e.Widget);t.Widget=c}(o||(o={})
),o});define("MsPortalImpl/UI/Compositions/UI.Composition.Util",["require","exports","../../Prototype/Extension.Definition.Locator"],
function(){var n;return function(n){"use strict";function t(n){return n.locator&&(n.locator.type===1||
n.locator.type===5||n.locator.type===7)?n.getAssetId():Q.reject()}n.getCompositionAssetId=t}(n||(n={
})),n});define("MsPortalImpl/UI/UI.DesktopManagerView",["require","exports","../Prototype/Extension.Definition.Locator",
"./UI.DesktopManager","../Widgets/Widgets.ModalDialog"],function(n,t,i,r,u){var f=MsPortalFx.Base.EventTypes,
e;return function(t){"use strict";function o(n,t){var r=new i(n,t),u=[f.fxhubclicking,f.fxavatarmenutoggling].
join(" ");n.element.on(u,function(n){var i=t.close();i||n.preventDefault()});return r}var s=window,e=
MsPortalFx.Base.Diagnostics.createLog(n),h=jQuery,i=function(){function n(n,t){this._portalWidget=n;
this._panoramaWidget=n.getPanorama();this._contextPane=t}return Object.defineProperty(n.prototype,"portalWidget",
{get:function(){return this._portalWidget},enumerable:!0,configurable:!0}),n.prototype.composeJourney=
function(n){n&&(n.compose(this._panoramaWidget),n.isStartedWithContextBlade()||this._portalWidget.showJourney(
))},n.prototype.composeStartBoard=function(n){n&&n.compose(this._panoramaWidget)},n.prototype.addPartToStartBoard=
function(n){n.compose(this._panoramaWidget.getStartBoardWidget())},n.prototype.addBlade=function(n,t)
{this._traceBladeAction("Adding blade to desktop.",n);n.openInContextPane?(this._contextPane.trySetContent(
n),this._contextPane.toggle(!0)):(n.compose(this._panoramaWidget.getJourneyWidget(),t),t&&t.focus&&n.
awaitWidgetReadyToDisplay().done(function(){n.widget.element.trigger(f.fxensureviewportvisible,{widget:
n.widget,alignStart:t.alignToStart})}))},n.prototype.removeBlade=function(n){this._traceBladeAction(
"Removing blade from desktop.",n);this._contextPane.hasContent(n)?this._contextPane.close(!0):this._panoramaWidget.
removeChild(n.id)},n.prototype.removeAllBlades=function(n){this._panoramaWidget.getJourneyWidget().removeChildren(
n);var t=this._contextPane.getContent();t&&t.locator&&t.locator.type===1&&this._contextPane.close(!0)}
,n.prototype.ensureCompositionInViewport=function(n){n.widget&&n.widget.element.trigger(f.fxensureviewportvisible,
{widget:n.widget})},n.prototype.showConfirmDialog=function(n){var t;return u.confirmLegacy(n).then(function(
n){t=n}),t},n.prototype._traceBladeAction=function(n,t){r.isTraceEnabled&&e.verbose("[DesktopManager] {0}\n  {1}\n  Model: {2}.".
format(n,t.toString(),ko.toJSON(t.getInputsOnlyViewModel())))},n}();t.DesktopManagerViewImpl=i;t.create=
o}(e||(e={})),e});define("MsPortalImpl/Widgets/Widgets.ModalDialog",["require","exports"],function()
{var n;return function(n){"use strict";function r(n){var u=!!t.confirm(n),r=i.Deferred();return r.resolve(
u),r.promise()}var t=window,i=jQuery;n.confirmLegacy=r}(n||(n={})),n});define("MsPortalImpl/UI/UI.DesktopModeManager",
["require","exports","../Interactions/Interactions.DismissHandler","../Interactions/Interactions.FlowLayoutDragDrop",
"./UI.DesktopManager","../Widgets/Widgets.WidgetBase","../Widgets/Widgets.Blade","../Widgets/Widgets.Common",
"../Widgets/Widgets.PartGallery","../Widgets/Widgets.Tile"],function(n,t,i,r,u,f,e,o,s,h){var c=MsPortalFx.
Base.EventTypes,l;return function(n){"use strict";function y(n,i,r,o,s,l){var y=new u(n,i,r,o,s,l);i.
element.on(c.fxexitorganizemode,function(){n.mode(0)});i.element.on(c.click,v,function(n){var r=t(n.
target).closest(a),s=r.closest(".fxs-blade"),i=f.Widget.getWidget(r,h.Widget),u=f.Widget.getWidget(s,
e.Widget),o;u&&u.options.locked()||(o=i.options.selected(),i.options.selected(!o),y.updateTileSelection(
i))});i.element.on(c.dragstart,".ui-draggable",function(i){var u,r;n.mode()===1&&(u=t(i.target).closest(
a),r=f.Widget.getWidget(u,h.Widget),r&&!r.options.selected()&&(r.options.selected(!0),y.updateTileSelection(
r)))});i.element.on(c.fxaddparts,function(n,t){n.stopPropagation();y.startPartManagment(t)});i.element.
on(c.fxpartcreated,function(n,t){n.stopPropagation();var i=t.widget;i.options.selected(!0);y.updateTileSelection(
i)});return y}var t=jQuery,l=f.Widget.widgetRemoveEvent,v="."+h.overlayClassName,a="."+h.widgetClassName,
u;n.organizeModeClassName="fxs-desktop-organize";n.createDesktopModeManager=y;u=function(){function u(
n,i,r,u,f,e){var s=this;this._dismissHandle={dismissFn:function(){s._desktop.mode(0)},shouldDismissOnMouseDownFn:
function(n,i){if(i.which===3)return!1;var r=t(n),u=o.getBrowserScrollbarWidth(),f=function(){var n=r.
outerHeight();return i.pageY>n-u&&i.pageY<n};return r.hasClass("fxs-startboard-layout")||r.hasClass(
"fxs-panorama-homearea")||r.hasClass("fxs-portal-content")&&!f()},shouldDismissOnMouseWheelFn:function(
){return!1}};this._selectedTile=null;this._desktop=n;this._portalWidget=i;this._dialogManager=r;this.
_userSettingsManager=u;this._partGalleryManagerFactory=f;this._contextPane=e;this._handleModeChange(
)}return Object.defineProperty(u.prototype,"selectedTile",{get:function(){return this._selectedTile}
,enumerable:!0,configurable:!0}),u.prototype.updateTileSelection=function(n){var t=this;if(this._deselectCurrentTile(
),n.options.selected()&&(this._selectedTile=n),this._selectedTile)this._selectedTile.element.on(l,this.
_tileRemoveHandler=function(n){n.target===t._selectedTile.element[0]&&t._deselectCurrentTile()})},u.
prototype.startPartManagment=function(n){var t=this._contextPane.trySetContent(this);t&&(this._desktop.
mode(1),this._contextPane.toggle(!0),this._partGalleryManager=this._partGalleryManagerFactory.create(
this._partGallery),this._partGalleryManager.loadParts(n.extensionName,n.assetType,n.assetId,n.mappingViewModelName))}
,u.prototype.onAddingContent=function(n){this._partGallery=s.create(t("<div class='fxs-theme-context-menu'><\/div>"));
n.addChild(this._partGallery.element)},u.prototype.onRemovingContent=function(n){n.clear();this._disposePartGallery(
)},u.prototype.canRemoveContent=function(){return!0},u.prototype._enterOrganizeMode=function(){var t=
this._portalWidget;t.element.addClass(n.organizeModeClassName);t.toggleJumpBar(!1);i.DismissHandler.
Instance.register(this._dismissHandle);r.FlowLayoutDragDrop.Instance.enableDragDropTargets();t.element.
find(".ui-sortable").sortable("enable")},u.prototype._enterDefaultMode=function(){var t=this._portalWidget;
r.FlowLayoutDragDrop.Instance.disableDragDropTargets();t.element.find(".ui-sortable").sortable("disable");
t.element.removeClass(n.organizeModeClassName);t.toggleJumpBar(!0);this._contextPane.close(!0);this.
_deselectCurrentTile();this._userSettingsManager.flushSettings();i.DismissHandler.Instance.unregister(
this._dismissHandle)},u.prototype._handleModeChange=function(){var n=this;this._desktop.mode.subscribe(
function(t){switch(t){case 1:n._dialogManager.dismissOpenDialog();n._enterOrganizeMode();break;case 0:
default:n._enterDefaultMode()}})},u.prototype._deselectCurrentTile=function(){this._selectedTile&&(this.
_selectedTile.element.off(l,this._tileRemoveHandler),this._tileRemoveHandler=null,this._selectedTile.
options.selected(!1),this._selectedTile=null)},u.prototype._disposePartGallery=function(){this._partGalleryManager.
dispose();this._partGalleryManager=null;this._partGallery.dispose();this._partGallery=null},u}();n.DesktopModeManagerImpl=
u}(l||(l={})),l});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.PartGallery",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","../Interactions/Interactions.DismissHandler",
"../Interactions/Interactions.PartGalleryDragDrop","../Base/Telemetry","./Widgets.WidgetBase"],function(
n,t,i,r,u,f,e){var o=MsPortalFx.Base.Diagnostics.Telemetry,h=MsPortalFx.Base.EventTypes,s;return function(
n){"use strict";function ft(n){return new c(n)}var et=window,a=jQuery,k=199,v="fxs-partgallery",d="fxs-partgallery-category",
g="fxs-partgallery-part-thumbnail",y="fxs-partgallery-part-thumbnailstretch-",nt="fxs-partgallery-partscontainer",
tt="fxs-partgallery-noparts",it="fxs-partgallery-failed",rt="fxs-partgallery-topcontainer",ut="fxs-partgallery-categories",
t=function(){function n(){this.id=ko.observable();this.name=ko.observable()}return n}(),p,w,b,s,c,l;
n.ItemViewModel=t;p=function(n){function t(){n.apply(this,arguments);this.extensionName=ko.observable(
);this.assetType=ko.observable();this.assetIdType=ko.observable()}return __extends(t,n),t}(t);n.ResourceItemViewModel=
p;w=function(n){function t(){n.apply(this,arguments);this.selected=ko.observable(!1)}return __extends(
t,n),t}(t);n.CategoryItemViewModel=w;b=function(n){function t(){n.apply(this,arguments);this.thumbnail=
ko.observable();this.thumbnailStretch=ko.observable(0);this.resourceId=ko.observable();this.inputs=ko.
observableArray();this.partType=ko.observable();this.extensionName=ko.observable();this.assetType=ko.
observable();this.assetIdType=ko.observable();this.initialSize=ko.observable()}return __extends(t,n),
t.prototype.getThumbnailStretchCssClass=function(){var n=this.thumbnailStretch();switch(n){case 1:return y+
"fill";case 0:default:return y+"none"}},t}(t);n.PartItemViewModel=b;s=function(n){function t(t){n.call(
this);this.loading=ko.observable(!1);this.itemDragging=ko.observable(!1);this.categories=ko.observableArray(
[]);this.category=ko.observable();this.parts=ko.observableArray([]);this.text=i.PartGallery;this.failed=
ko.observable(!1);this._lifespan=t;this.resources=new MsPortalFx.ViewModels.Forms.DropDown.ViewModel(
t,{});this._init()}return __extends(t,n),t.prototype.getStatusCssClass=function(){return this.failed(
)?it:this._noParts()?tt:""},t.prototype._init=function(){var n=this;this.resource=ko.computed(this._lifespan,
function(){return n.resources.value()});ko.reactor(this._lifespan,function(){var t=n.resources.options(
).length>0;n.resources.disabled(n.loading()||!t||n.itemDragging())});this._noParts=ko.computed(this.
_lifespan,function(){return!!n.resources.value()&&n.parts().length<=0});this.messageVisible=ko.computed(
this._lifespan,function(){return n.failed()||n._noParts()});this.messageTitle=ko.computed(this._lifespan,
function(){var r=n._noParts(),u=n.failed(),t="";return u?t=i.PartGallery.errorMessageTitle:r&&(t=i.PartGallery.
noPartsMessageTitle),t});this.messageSubtitle=ko.computed(this._lifespan,function(){var u=n._noParts(
),f=n.failed(),r,t="";return f?t=i.PartGallery.errorMessageSubtitle:u&&(r=n.resources.value(),t=i.PartGallery.
noPartsMessageSubtitle.format(r.name())),t});this.category.subscribe(this._lifespan,function(n){n&&n.
selected(!1)},this,"beforeChange");this.category.subscribe(this._lifespan,function(n){n&&n.selected(
!0)})},t}(e.ViewModel);n.ViewModel=s;c=function(n){function t(t){var i=new MsPortalFx.Internal.Base.
TriggerableLifetimeManager,r=new s(i);n.call(this,t,r);this.lifetimeManager.registerForDispose(i);this.
element.html("<{0} class='{0}' params='viewModel: data'><\/{0}>".format(v));this._bindDescendants()}
return __extends(t,n),t.prototype.dispose=function(){this._cleanElement();n.prototype.dispose.call(this)}
,Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),t}(e.Widget);n.Widget=c;n.create=ft;l=function(){function n(n,t,i){this._element=n;this._viewModel=
t;this._dragdrop=i;this._$topContainer=this._element.findByClassName(rt);this._$categoriesContainer=
this._$topContainer.findByClassName(ut);this._$partsContainer=this._element.findByClassName(nt);this.
_registerEventHandlers();this._enableThumbnailDragDrop()}return n.prototype._registerEventHandlers=function(
){var n=this;this._$topContainer.on(h.click,".{0}".format(d),function(t){t.preventDefault();var i=ko.
dataFor(t.target);n._viewModel.category(i)})},n.prototype._enableThumbnailDragDrop=function(){var n=
this,t=function(t){n._initThumbnailDragDrop(t)};this._$partsContainer.on(h.mouseenter,".{0}".format(
g),function(n){n.preventDefault();t(a(this))})},n.prototype._initThumbnailDragDrop=function(n){var t=
this,i,u;n.hasClass("ui-draggable")||(u={dismissFn:function(){n.draggable({revert:!0}).trigger(MsPortalFx.
Base.EventTypes.mouseup)},shouldDismissOnMouseDownFn:function(){return!1},shouldDismissOnMouseWheelFn:
function(){return!1}},n.draggable({opacity:.85,helper:"clone",zIndex:k,start:function(n,e){var s=ko.
dataFor(e.helper.context);i=o.startTrace({source:f.Source.PartGallery,action:f.Action.AddPartByDragDrop,
assetType:s.assetType(),data:{resourceId:s.resourceId(),partType:s.partType(),extension:s.extensionName(
)}});t._dragdrop.start(e.helper);t._viewModel.itemDragging(!0);r.DismissHandler.Instance.register(u,
!0)},drag:function(n,i){t._dragdrop.drag(i.helper)},stop:function(f,e){var h=n.draggable("option","revert"),
s;r.DismissHandler.Instance.unregister(u);h?(n.draggable({revert:!1}),t._dragdrop.cancel()):s=t._dragdrop.
drop(e.helper);s?o.completeTrace(i,s):o.cancelTrace(i);t._viewModel.itemDragging(!1)}}))},n}();n.PartGallery=
l;ko.components.register(v,{viewModel:{createViewModel:function(n,t){var r=t.element,i=n.viewModel,f=
u.createPartGalleryDragDrop(),e=new l(a(r),i,f);return{data:i,func:e}}},template:MsPortalImpl.Templates.
widgetsPartGallery})}(s||(s={})),s});define("MsPortalImpl/Interactions/Interactions.PartGalleryDragDrop",
["require","exports","../Widgets/Widgets.WidgetBase","../Widgets/Widgets.FlowLayout","../Widgets/Widgets.UIElementBase"],
function(n,t,i,r,u){var f=MsPortalFx.Widgets.AzureGrid,o=MsPortalFx.Base.EventTypes,e;return function(
n){"use strict";function p(n){return new c(n||new h)}function w(){return new h}var s=window,t=jQuery,
e=.33,l="fxs-flowlayout-drop-placeholder",a="fxsId",v="fxs-partgallery-droppreview-id",y=250,c,h;n.createPartGalleryDragDrop=
p;n.createDragDropHelper=w;c=function(){function n(n){this._helper=n}return n.prototype.start=function(
n){var i=ko.dataFor(n.context).initialSize(),t=MsPortalFx.Parts.PartSizeHelper.getSize(i);MsPortalFx.
Base.Utilities.isNullOrUndefined(t)&&(t=MsPortalFx.Parts.PartSizeHelper.getDefaultSize());this._$preview=
this._createDropPreview(t).hide();n.append(this._$preview)},n.prototype.drag=function(n){var t=this,
i,r=null,u=ko.dataFor(n.context).initialSize(),f=MsPortalFx.Base.Utilities.isNullOrUndefined(u)?MsPortalFx.
Parts.PartSizeHelper.getDefaultSize():MsPortalFx.Parts.PartSizeHelper.getSize(u);(this._updateTargetGrid(
n),this._targetGrid)&&((i=this._getTargetGridPosition(this._targetGrid,n),this._helper.isSamePosition(
this._targetGridPos,i))||(s.clearTimeout(this._dropPreviewSetTimeoutHandle),this._targetGridPos=i,this.
_prevTargetGrid!==this._targetGrid&&(this._prevTargetGrid&&this._prevTargetGrid.dropPlaceholder?(r=this.
_prevTargetGrid.dropPlaceholder,this._prevTargetGrid.dropPlaceholder=null):r=this._createDropPlaceholder(
n,f),this._prevTargetGrid=this._targetGrid,this._prevTargetGrid.dropPlaceholder=r),this._targetGrid.
moveDropPlaceholder(i),this._dropPreviewSetTimeoutHandle=s.setTimeout(function(){t._targetGrid&&(t._$preview.
show(),t._targetGrid.moveChild(t._$preview,t._targetGridPos.col,t._targetGridPos.row,!1),t._$preview.
hide())},y)))},n.prototype.drop=function(n){var i=this._getTargetGrid(n),r,f,e,u;return i&&(f=this._helper.
getLensId(i),r=this._getTargetGridPosition(i,n),u=t.Event(o.fxcreatepart),i.trigger(o.fxcreatepart,u,
{targetId:f,row:r.row,col:r.col,data:ko.dataFor(n.context)}),e=u.result),this._cleanup(),e},n.prototype.
cancel=function(){this._restoreTargetGrid();this._cleanup()},n.prototype._cleanup=function(){this._targetGrid=
null;this._targetGridPos=null;this._prevTargetGrid&&this._prevTargetGrid.dropPlaceholder&&this._prevTargetGrid.
dropPlaceholder.remove();this._prevTargetGrid=null},n.prototype._createDropPlaceholder=function(n,t)
{var i=n.position();return this._helper.createDropPlaceholder(t.size.width,t.size.height,i.left,i.top)}
,n.prototype._createDropPreview=function(n){return this._helper.createDropPreview(n.size.width,n.size.
height)},n.prototype._updateTargetGrid=function(n){var t=this._getTargetGrid(n);this._targetGrid&&this.
_targetGrid!==t&&this._restoreTargetGrid();this._targetGrid=t},n.prototype._restoreTargetGrid=function(
){this._targetGrid&&(s.clearTimeout(this._dropPreviewSetTimeoutHandle),this._targetGrid.refreshLayout(
!0))},n.prototype._getTargetGrid=function(n){var t=n.offset(),i=t.left+Math.floor(e*f.GridSpacingWidth),
r=t.top+Math.floor(e*f.GridSpacingHeight);return this._helper.getTargetGrid(n,i,r)},n.prototype._getTargetGridPosition=
function(n,t){return this._helper.getGridPosition(n.element.offset(),t.offset())},n}();h=function(){
function n(){}return n.prototype.getLensId=function(n){var t=n.element.closest(".fxs-lens");return u.
Widget.getId(t)},n.prototype.getTargetGrid=function(n,u,f){var s,o,h,e;return(h=n.css("z-index"),n.css(
"z-index",-1),s=t(document.elementFromPoint(u,f)),n.css("z-index",h),o=s.closest(".fxs-flowlayout"),
o.hasClass("fxs-startboard-layout"))?null:(e=i.Widget.getWidget(o,r.Widget),e&&e.options&&e.options.
allowReorder&&!e.options.locked())?e:null},n.prototype.createDropPreview=function(n,i){return t("<div><\/div>").
css({width:n,height:i}).data(a,v)},n.prototype.createDropPlaceholder=function(n,i,r,u){return t("<div class='{0}'><\/div>".
format(l)).css({width:n,height:i,top:u,left:r})},n.prototype.getGridPosition=function(n,t){var u=t.left-
n.left,o=t.top-n.top,i,r;return i=Math.floor((u+e*f.GridSpacingWidth)/f.GridSpacingWidth),r=Math.floor(
(o+e*f.GridSpacingHeight)/f.GridSpacingHeight),{col:i,row:r}},n.prototype.isSamePosition=function(n,
t){return n&&t&&n.col===t.col&&n.row===t.row?!0:!1},n}()}(e||(e={})),e});define("MsPortalImpl/UI/UI.PartGalleryManager",
["require","exports","../Widgets/Widgets.PartGallery","MsPortalImpl/Resources/ImplScriptResources","../Base/Telemetry"],
function(n,t,i,r,u){var f=MsPortalFx.ViewModels.Services.ResourceTypes,o=MsPortalFx.Base.Diagnostics.
Telemetry,e;return function(t){"use strict";function y(n,t){return new s(n,t)}var v=jQuery,e=MsPortalFx.
Base.Diagnostics.createLog(n),l=r.PartGallery.allCategoryText,a="ResourceGroups",s,h,c;t.createFactory=
y;s=function(){function n(n,t){this._resourceMapManager=n;this._extensionManager=t}return n.prototype.
create=function(n){var t=new h(this._resourceMapManager,this._extensionManager);return new c(n,t)},n}
();t.PartGalleryManagerFactoryImpl=s;h=function(){function n(n,t){this._resourceMapManager=n;this._extensionManager=
t}return n.prototype.getResourceGroupId=function(n,t,i,r){return MsPortalFx.Base.Utilities.isNullOrUndefined(
i)?Q.reject(new Error("The asset id cannot be null/undefined.")):t!==a?this.getResourceId(n,i,r).then(
function(n){var t=f.parseResourceDescriptor(n);return f.buildResourceGroupIdFromResourceDescriptor(t)}
):Q.resolve(i)},n.prototype.getResourceId=function(n,t,i){var f=this,r,u;return Q(this._extensionManager.
getExtensionByName(n)).then(function(n){return r=n,Q(n.getViewModel(i))}).then(function(n){var i=n.content;
return u=n,Q(i.mapAssetIdToResourceId(t))}).finally(function(){f._releaseViewModel(r,u)})},n.prototype.
getResources=function(n){var t=this;return Q(this._resourceMapManager.getResourceGroupQueryResults(n,
!1)).then(function(n){var i=t._getAssetTypeInfos(n);return t._getResourceInfosFromAssetTypeInfos(i)}
)},n.prototype.getResource=function(n){var t=this._getAssetType(n),i={assetType:t,resourceId:n};return this.
_getResourceInfosFromAssetTypeInfos([i]).then(function(n){return n.length>0?n[0]:null})},n.prototype.
getPartTypesForAsset=function(n,t){var i=this;return this._extensionManager.getExtensionByName(n).then(
function(n){return i._filterPartTypesForResource(n.definition.partsCatalog,t)})},n.prototype._getAssetType=
function(n){var t=f.buildResourceTypeFromResourceId(n);return this._resourceMapManager.getAssetTypeByResourceType(
t)},n.prototype._getAssetTypeInfos=function(n){var t=[];return this._iterateResources(n.childResources,
n.linkedResources,function(n,i){var r={resourceId:n,assetType:i};t.push(r)}),t},n.prototype._getResourceInfosFromAssetTypeInfos=
function(n){var f=this,t=Q.defer(),i=[],r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,u=
[];return(n||[]).forEach(function(n){i.push(f._getResourceInfo(n.assetType,r,n.resourceId))}),Q.allSettled(
i).then(function(n){n.forEach(function(n){n.state==="fulfilled"&&u.push(n.value)});t.resolve(u)}).finally(
function(){r.dispose()}),t.promise},n.prototype._iterateResources=function(n,t,i){var e=this,o={},s,
h,u,c,r,l,a;n.forEach(function(t){(h=f.buildLowerCaseResourceId(t.id),o[h])||(o[h]=!0,s=f.parseResourceDescriptor(
t.id),s.types.length===1)&&(u=f.buildResourceTypeFromResourceDescriptor(s),e._resourceMapManager.hasAssetTypeByResourceType(
u)?(r=e._resourceMapManager.getAssetTypeByResourceType(u),c=!r.assetTypeManifest.resourceType||r.assetTypeManifest.
resourceType.hideOnResourceMap):c=!0,c?n.forEach(function(n){(l=f.buildLowerCaseResourceId(n.id),a=f.
parseResourceDescriptor(n.id),n.id.indexOf(t.id)===0&&a.types.length===s.types.length+1)&&(o[l]||(o[
l]=!0,u=f.buildResourceTypeFromResourceDescriptor(a),e._resourceMapManager.hasAssetTypeByResourceType(
u))&&(r=e._resourceMapManager.getAssetTypeByResourceType(u),r.assetTypeManifest.resourceType&&!r.assetTypeManifest.
resourceType.hideOnResourceMap&&i(n.id,r)))}):i(t.id,r))});t.forEach(function(n){(h=f.buildLowerCaseResourceId(
n.id),o[h])||(o[h]=!0,s=f.parseResourceDescriptor(n.id),u=f.buildResourceTypeFromResourceDescriptor(
s),e._resourceMapManager.hasAssetTypeByResourceType(u))&&(r=e._resourceMapManager.getAssetTypeByResourceType(
u),i(n.id,r))})},n.prototype._getResourceInfo=function(n,t,i){return Q(this._resourceMapManager.getResourceTypeServicePromiseForAssetType(
n,t,i)).then(function(t){return{name:t.name(),resourceId:i,extensionName:n.extension,assetType:n.assetTypeManifest.
name,assetTypeDisplayName:n.compositeDisplayName.plural,mappingViewModelName:n.assetTypeManifest.resourceType&&
n.assetTypeManifest.resourceType.mappingViewModel,assetIdType:n.assetTypeManifest.assetIdType}})},n.
prototype._filterPartTypesForResource=function(n,t){var i=this;return n.filter(function(n){return n.
partGalleryInfo&&n.assetType&&n.assetType===t&&i._isSingleAssetIdInput(n.inputDefinitions)})},n.prototype.
_isSingleAssetIdInput=function(n){if(!n)return!1;var t=n.filter(function(n){return!!n.isAssetId||!n.
optional});return t.length===1&&!!t[0].isAssetId},n.prototype._releaseViewModel=function(n,t){n&&t&&
(MsPortalFx.Base.Utilities.disposeViewModelProperties(t),n.releaseViewModel(t))},n}();t.PartGalleryHelperImpl=
h;c=function(){function n(n,t){this._loading=!1;this._isPreloadingSuccessful=!1;this._partGallery=n;
this._partGalleryViewModel=this._partGallery.options;this._helper=t;this._lifespan=new MsPortalFx.Internal.
Base.TriggerableLifetimeManager;this._setUpPartGallery()}return n.prototype.dispose=function(){this.
_lifespan.dispose()},n.prototype.loadParts=function(n,t,i,r){var f=this,e,s;return this._loading?Q():
(e=o.startTrace({source:u.Source.PartGallery,action:u.Action.PartGalleryItemsLoaded,name:n+"-"+t}),this.
_setLoading(!0),this._preloadResource(n,t,i,r).then(function(u){return s=u,f._helper.getResourceGroupId(
n,t,i,r)}).then(function(n){return f._setResourceGroupId(n,s)}).catch(function(u){f._onGettingResourceGroupIdFailed(
n,t,i,r,u)}).finally(function(){f._setLoading(!1);o.completeTrace(e,f._resourceGroupId)}))},n.prototype.
_preloadResource=function(n,t,i,r){var u=this,f;return t===a?Q(null):this._helper.getResourceId(n,i,
r).then(function(n){return f=n,u._helper.getResource(n)}).then(function(n){return u._convertToResourceItemViewModelOption(
n)}).then(function(n){var t=u._partGalleryViewModel.resources;t.options([n]);t.value(n.value);u._isPreloadingSuccessful=
!0}).then(function(){return f})},n.prototype._setResourceGroupId=function(n,t){return this._resourceGroupId===
n?Q():(this._resourceGroupId=n,this._onResourceGroupIdChanged(t))},n.prototype._onGettingResourceGroupIdFailed=
function(n,t,i,r,u){var f={extension:n,assetType:t,assetId:i,mappingViewModel:r};e.error("Failed to get the resource group id for '{0}' and the reason is '{1}'".
format(JSON.stringify(f),u.stack||u.message||u));this._isPreloadingSuccessful||this._partGalleryViewModel.
failed(!0);this._resourceGroupId=null;this._resourceId=null;this._extensionName=null;this._assetIdType=
null;this._partTypes=null;this._isPreloadingSuccessful=!1},n.prototype._setLoading=function(n){this.
_loading!==n&&(this._loading=n,this._partGalleryViewModel.loading(n))},n.prototype._setUpPartGallery=
function(){var n=this,t=this._partGalleryViewModel;t.resource.subscribe(this._lifespan,function(t){n.
_onResourceChanged(t)});t.category.subscribe(this._lifespan,function(t){n._onCategoryChanged(t)})},n.
prototype._onResourceGroupIdChanged=function(n){var t=this;return this._resourceGroupId?this._helper.
getResources(this._resourceGroupId).then(function(i){t._populateResources(i,n)}).catch(function(n){e.
error("Failed to get the resource group {0} and the reason is {1}".format(t._resourceGroupId,n.stack||
n.message||n))}):Q()},n.prototype._populateResources=function(n,t){var u=this,i=this._partGalleryViewModel.
resources,f=function(n){return t&&n.resourceId.toLowerCase()===t.toLowerCase()?!1:(n.name||e.error("Resource '{0}' must have a name to show up in part gallery.".
format(n.resourceId)),!!n.name)},o=n.filter(function(n){return f(n)}),s=o.sort(function(n,t){return n.
name.localeCompare(t.name)}),r=s.map(function(n){return u._convertToResourceItemViewModelOption(n)});
t?i.options.push.apply(i.options,r):i.options(r);i.options.peek().length>0&&i.value(i.options.peek()[
0].value)},n.prototype._onResourceChanged=function(n){var t=this,r,u;if(!n){this._partGalleryViewModel.
category(null);return}r=n.extensionName();u=n.assetType();this._resourceId=n.id();this._assetIdType=
n.assetIdType();this._extensionName=r;this._helper.getPartTypesForAsset(r,u).then(function(n){var u=
t._createCategories(n),r=new i.CategoryItemViewModel;t._partTypes=n;r.name(l);u.splice(0,0,r);t._partGalleryViewModel.
categories(u);t._partGalleryViewModel.category(r)}).catch(function(n){e.error("Failed to get the part types for the asset type '{0}' in the extension '{1}' and the reason is {2}".
format(u,r,n.stack||n.message||n))})},n.prototype._onCategoryChanged=function(n){var r=this,t,i;(this.
_partGalleryViewModel.parts.removeAll(),n)&&(t=n.name(),i=[],(this._partTypes||[]).forEach(function(
n){(t===l||n.partGalleryInfo.category===t)&&i.push(r._convertToPartItemViewModel(n))}),this._partGalleryViewModel.
parts(i))},n.prototype._convertToResourceItemViewModelOption=function(n){var t=new i.ResourceItemViewModel;
return t.id(n.resourceId),t.name("{0} ({1})".format(n.name,n.assetTypeDisplayName)),t.extensionName(
n.extensionName),t.assetType(n.assetType),t.assetIdType(n.assetIdType),{text:t.name,value:t}},n.prototype.
_convertToPartItemViewModel=function(n){var t=new i.PartItemViewModel,r=n.partGalleryInfo,u=MsPortalFx.
Base.Utilities.isNullOrUndefined(r.thumbnailStretch)?0:r.thumbnailStretch;return t.resourceId(this._resourceId),
t.name(r.title),t.inputs(n.inputDefinitions.slice(0)),t.partType(n.name),t.extensionName(this._extensionName),
t.assetType(n.assetType),t.assetIdType(this._assetIdType),t.thumbnail(r.thumbnail),t.thumbnailStretch(
u),t.initialSize(n.initialSize),t},n.prototype._createCategories=function(n){var t=[];return n.forEach(
function(n){var r=n.partGalleryInfo.category,u;v.trim(r).length<=0||t.some(function(n){return n.name.
peek()===r})||(u=new i.CategoryItemViewModel,u.name(r),t.push(u))}),t.sort(function(n,t){return n.name.
peek().localeCompare(t.name.peek())}),t},n}();t.PartGalleryManagerImpl=c}(e||(e={})),e});define("MsPortalImpl/UI/Hubs/ViewModels/UI.Gallery.ViewModelRegistration",
["require","exports","../../../Prototype/ViewModelManager"],function(n,t,i){var r;return function(n)
{"use strict";function r(){i.ViewModelManager.register("Gallery$CsmCommand",t+"UI.Gallery.CsmCommand",
function(n){return new n.CsmCommand})}var t="./MsPortalImpl/UI/Hubs/ViewModels/";n.registerViewModels=
r}(r||(r={})),r});define("MsPortalImpl/UI/Hubs/UI.HubsManagerImpl",["require","exports","./UI.BillingHub",
"./UI.BrowseHub","./UI.CreateHub","./UI.ExtensionDefinedHub","./UI.HubBase","./UI.JourneysHub","./UI.NotificationHub"],
function(n,t,i,r,u,f,e,o,s){var h;return function(t){"use strict";var y=window,a=jQuery,c=MsPortalFx.
Base.Constants,e=c.HubNames,l=MsPortalFx.Base.Diagnostics.createLog(n),v=function(){function n(){}return n.
create=function(n,t,i,r,u,f,e,o,s){var c=a.extend({desktop:t,sharedSettings:i,router:r},n);return new
h(c,u,f,e,o,s)},n}(),h;t.HubsManagerFactory=v;h=function(){function n(n,t,i,r,u,f){var e=this;if(this.
_hubs=[],!t)throw new Error("jumpBar is null or undefined.");if(!i)throw new Error("hubs is null or undefined.");
this._jumpBar=t;this._listenToEvent(this._jumpBar.options,MsPortalFx.Base.EventTypes.fxclosehub,function(
){e._unselectAllHubs();e._currentOpenedHub=null});this._loadHubsInJumpBar(n,i,t,r,u,f)}return n.prototype.
getRegisteredHubNames=function(){return this._hubs.map(function(n){return n.name})},n.prototype.showHub=
function(n){if(this._currentOpenedHub===n)this.hideHub();else{var t=this.findHub(n),i=this._hubs.filter(
function(n){return n!==t});return t?(i.forEach(function(n){n.getJumpBarButton().options.selected(!1)}
),this._openedHubWidget=t.createContent(),this._openedHubWidget?(t.getJumpBarButton().options.selected(
!0),this._jumpBar.openHubPane(t.getTitle(),this._openedHubWidget),this._currentOpenedHub=n):(this._jumpBar.
closeHubPane(),t.getJumpBarButton().options.selected(!1),this._currentOpenedHub=null,l.verbose("The hub '"+
n+"' does not provide content, not opening hub pane")),!0):(l.error("Could not find the hub by name: "+
n+"."),!1)}},n.prototype.hideHub=function(){this._unselectAllHubs();this._jumpBar.closeHubPane();this.
_currentOpenedHub=null;this._openedHubWidget&&(this._openedHubWidget.then(function(n){var t=n.options;
typeof t.dispose=="function"&&t.dispose()}),this._openedHubWidget=null)},n.prototype._loadHubsInJumpBar=
function(n,t,i,r,u,f){var e=this;this._hubs=(t||[]).map(function(t){return e._createHub(n,t,i,r,u,f)}
);MsPortalFx.Base.Utilities.isDiagnosticsEnabled?MsPortalFx.Base.Amd.load("MsPortalImpl/UI/Hubs/UI.DebugHub").
then(function(t){e._hubs.push(t.create(n.desktop,n.extensionManager))}).finally(function(){e._populateJumpBar(
)}):this._populateJumpBar()},n.prototype.findHub=function(n){var t;return this._hubs.forEach(function(
i){i.name===n&&(t=i)}),t},n.prototype._unselectAllHubs=function(){this._hubs.forEach(function(n){n.getJumpBarButton(
).options.selected(!1)})},n.prototype._populateJumpBar=function(){var n=this;this._hubs.forEach(function(
t){t.setHubsManager(n);switch(t.getJumpBarButtonLocation()){case 1:n._jumpBar.options.navBar.bottomButtons.
push(t.getJumpBarButton());break;default:n._jumpBar.options.navBar.middleButtons.push(t.getJumpBarButton(
))}})},n.prototype._listenToEvent=function(n,t,i){var r=null;typeof n[t]=="function"&&(r=n[t]);n[t]=
function(){return r&&r.apply(this,arguments),i.apply(this,arguments)}},n.prototype._createHub=function(
n,t,h,l,a,v){var y,k=n.assetManager,d=n.browseManager,p=n.desktop,w=n.extensionManager,g=n.settings,
b=n.assetTypeService;if(t.extensionName===c.Shell)switch(t.name){case e.Notifications:y=s.createNotificationHub(
l,p,g,b,h);break;case e.Browse:y=r.createBrowseHub(p,d,k,b,h);break;case e.Journeys:y=o.createJourneysHub(
p,h);break;case e.Billing:y=i.BillingHubFactory.create(w,p,h);break;case e.Create:y=u.CreateHubFactory.
create(w,a,h,p,v)}return y||f.create(n,t)},n}();t.HubsManagerImpl=h}(h||(h={})),h});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Hubs/UI.BillingHub",["require","exports","MsPortalImpl/Resources/ImplScriptResources",
"../../Base/Telemetry","./UI.HubBase","../../Widgets/Widgets.BillingHub","../../Widgets/Widgets.DefaultHubIcon"],
function(n,t,i,r,u,f,e){var o=MsPortalFx.Base.Constants.ExtensionNames.Billing,h=MsPortalFx.Base.Diagnostics.
Telemetry.trace,s;return function(n){"use strict";var a=window,s=jQuery,c=function(){function n(n,t)
{var i=this;this.title="";this.billingSummaryData=ko.observable();this.loadingSubscriptions=ko.observable(
!0);this.doesUserHaveSubscriptions=ko.observable(null);this.widgetViewModel=new f.ViewModel;this.widgetViewModel.
subscriptions=ko.observableArray([]);this._desktopManager=n;this._jumpBarWidget=t;ko.computed(function(
){var n=i.billingSummaryData();n&&i.widgetViewModel.subscriptions(n.subscriptions())});this.widgetViewModel.
browseClick=function(){i._showBrowse()};this.widgetViewModel.newSubscriptionClick=function(){i._showNoSubscriptionsBlade(
)};this.widgetViewModel.billingClick=function(n,t){i._showSubscriptionDetailBlade(t.subscription.id(
),t.subscription.subscriptionDetailBladeTypeName())}}return n.prototype.createContent=function(){var
n=this,i=ko.computed(function(){if(n.loadingSubscriptions())return!0;if(!n.doesUserHaveSubscriptions(
))return!1;var t=n.billingSummaryData();return!t||!t.dataLoaded()||!t.billingDataAvailable()?!0:!1}),
t;return this.widgetViewModel.loading=i,t=new f.Widget(s("<div/>"),this.widgetViewModel),t._addDisposablesToCleanUp(
i),Q.resolve(t)},n.prototype._showBrowse=function(){this._jumpBarWidget.closeHubPane();this._desktopManager.
createJourneyForAsset(o,"BrowseBillingSubscriptions")},n.prototype._showNoSubscriptionsBlade=function(
){this._desktopManager.createJourneyForAsset(o,"ShowBillingNoSubscriptionsBlade")},n.prototype._showSubscriptionDetailBlade=
function(n,t){var i="Show"+t;this._desktopManager.createJourneyForAsset(o,i,{id:n})},n}(),l,t;n.BillingHubOptions=
c;l=function(){function n(){}return n.create=function(n,i,r){return new t(n,i,r)},n}();n.BillingHubFactory=
l;t=function(n){function t(t,i,r){var u=this,f="Billing$BillingSummaryViewModel";this._options=new c(
i,r);this._initialize();n.call(this,MsPortalFx.Base.Constants.HubNames.Billing,MsPortalFx.Base.Constants.
Shell,this._options);t.hubsExtensionInitialized.then(function(){t.getExtensionByName(o).then(function(
n){n.getViewModel(f).done(function(n){var t=n.content;u._options.billingSummaryData(t)})})});t.getExtensionByName(
MsPortalFx.Base.Constants.ExtensionNames.Hubs).then(function(n){n.getViewModel("Help$HasSubscriptionViewModel").
then(function(t){if(t&&t.content&&typeof t.content.subscriptionsLoaded=="function")var i=ko.computed(
function(){t.content.subscriptionsLoaded()&&(u._options.loadingSubscriptions(!1),u._options.doesUserHaveSubscriptions(
t.content.hasSubscription()),i&&i.dispose(),MsPortalFx.Base.Utilities.disposeViewModelProperties(t),
n.releaseViewModel(t))})},function(){u._options.loadingSubscriptions(!1);u._options.doesUserHaveSubscriptions(
!0)})})}return __extends(t,n),t.prototype._initialize=function(){var t=this,u=i.BillingHub,n=new e.ViewModel,
f;n.icon(MsPortalFx.Base.Images.Shell.JumpBar.Billing());n.label(u.title);n.click=function(){var n=t.
_getHubsManager();if(!n)throw new Error("The hubs manager was not set on this hub instance.");h({source:
r.Source.BillingHub,action:r.Action.Opened});n.showHub(t.name)};f=new e.Widget(s("<div />"),n);this.
_options.title=u.title;this._setJumpBarButton(f)},t}(u.HubInstance);n.BillingHub=t}(s||(s={})),s});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.BillingHub",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","./Widgets.WidgetBase","./Widgets.Hub"],
function(n,t,i,r,u){var e=MsPortalFx.Base.EventTypes,f;return function(n){"use strict";var y=window,
t=jQuery,f="fxs-billingHub",s="<div><\/div>",h="<!-- ko with: value --><div class='fxs-hub-statusIcon' data-bind='image: icon'><\/div><!-- /ko -->",
c="<!-- ko with: value --><div class='fxs-hub-itemIcon' data-bind='image: icon'><\/div><!-- /ko -->",
l="<!-- ko with: value --><div class='fxs-hub-item' data-bind='attr: { title: tooltip }'><div class='fxs-hub-textTitle' data-bind='text: label'><\/div><div class='fxs-hub-textDescription' data-bind='text: description'><\/div><\/div><!-- /ko -->",
a="<!-- ko with: value --><!-- ko ifnot: isLoaded --><div class='fxs-hub-item'><div class='fxs-billingHub-loadingStatus'>"+
MsPortalFx.Base.Utilities.htmlEncode(i.Blade.loading)+"<\/div><\/div><!-- /ko --><div class='fxs-hub-item' data-bind='visible: isLoaded()'><div class='fxs-hub-textTitle' data-bind='text: label'><\/div><div class='fxs-hub-textDescription' data-bind='text: description'><\/div><\/div><!-- /ko -->",
v=function(n){function r(){n.apply(this,arguments);this.text=i.BillingHub;this.uri=MsPortalFx.Base.Resources.
getImages(MsPortalImpl.Resources.Images.BillingHub);this.subscriptions=ko.observableArray([]);this.browseClick=
t.noop;this.billingClick=t.noop;this.newSubscriptionClick=t.noop;this.loading=ko.observable(!1)}return __extends(
r,n),r}(r.ViewModel),o;n.ViewModel=v;o=function(n){function t(t,i){n.call(this,t,i);this.element.html(
s).addClass(f);this._gridItems=ko.observableArray();this._attachEventHandlers();this._initializeComputeds(
);new u.Widget(this.element.find("div"),this._getHubViewModel())}return __extends(t,n),t.prototype.dispose=
function(){this._removeEventHandlers();this._cleanElement(f);n.prototype.dispose.call(this)},Object.
defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),t.prototype._attachEventHandlers=function(){var n=this;this.element.on(e.click,".fxs-hub-nodata-content a",
this._subscriptionClickHandler=function(t){n.trigger("newSubscriptionClick");t.preventDefault()})},t.
prototype._removeEventHandlers=function(){this._subscriptionClickHandler!==null&&(this.element.off(e.
click,this._subscriptionClickHandler),this._subscriptionClickHandler=null)},t.prototype._initializeComputeds=
function(){var n=this;this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.subscriptions(
),i=t.map(function(t){return{image:{icon:t.subscriptionIcon},content:{item:t,label:t.subscriptionName,
description:t.subscriptionTypeInfo,tooltip:n.options.text.idFormat.format(t.id&&t.id())},status:{icon:
t.subscriptionStatusIcon},money:{label:t.formattedAmountDueOrCredit,description:t.amountDueOrCreditInfo,
creditStatus:t.creditStatus,isLoaded:t.isLoaded}}});n._gridItems(i)}))},t.prototype._getHubViewModel=
function(){var t=this,n=new u.ViewModel;return MsPortalFx.Base.Utilities.extend(n.text,{browse:this.
options.text.details,nothingDescription:this.options.text.nothingDescriptionPart,nothingDescriptionLink:
this.options.text.nothingLink}),n.gridItemClick=function(n,i){var r=i.gridItem.content;t.trigger(MsPortalFx.
Base.EventTypes.fxbillingClick,null,{subscription:r.item})},n.gridItems=this._gridItems,n.gridColumns=
[{itemKey:"status",format:1e3,formatOptions:{htmlBindingsTemplate:h,htmlBindingsType:0},cssClass:"fxs-billingHub-cellStatus"},
{itemKey:"image",format:1e3,formatOptions:{htmlBindingsTemplate:c,htmlBindingsType:0},cssClass:"fxs-billingHub-cellImage"},
{itemKey:"content",format:1e3,formatOptions:{htmlBindingsTemplate:l,htmlBindingsType:0},cssClass:"fxs-billingHub-cellContent"},
{itemKey:"money",format:1e3,formatOptions:{htmlBindingsTemplate:a,htmlBindingsType:0},cssClass:"fxs-billingHub-cellMoney"}],
n.browseClick=function(){t.trigger("browseClick")},n.loading=this.options.loading,n},t}(r.Widget);n.
Widget=o}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Hubs/UI.BrowseHub",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","../../Base/Telemetry","./UI.BrowseManager",
"./UI.HubBase","../../Widgets/Widgets.BrowseHub","../../Widgets/Widgets.DefaultHubIcon"],function(n,
t,i,r,u,f,e,o){var s;return function(n){"use strict";function k(n,t,i,r,u){return new y(n,t,i,r,u)}var
w=MsPortalFx.Base.Utilities,b=MsPortalFx.Base.Constants.ExtensionNames.Hubs,t=MsPortalFx.Base.Diagnostics.
Telemetry.trace,d=window,l=jQuery,c=i.BrowseHub,s=r.Source.BrowseHub,h=r.Action,a=5,v=function(){function n(
n,t,i,r,u){var f=this;this.title="";this._mruBladeIconUnits=[];this._desktopManager=n;this._browseManager=
t;this._jumpBarWidget=u;this._assetManager=i;this._assetTypeService=r;this.widgetViewModel=new e.ViewModel;
this.widgetViewModel.browseClick=function(){f._openBrowseBlade()};this.widgetViewModel.browseItemClick=
function(n,t){f._openBladeForAsset(t.assetType,t.assetId)};this.widgetViewModel.browseRecentItemDiscardClick=
function(n,t){f._removeItemFromRecent(t.assetType,t.assetId);f._assetManager.assetMruList.removeAssetEntry(
t.assetType.extension,t.assetType.assetTypeManifest.name,t.assetId);f._populateMruItems()};this._populateGridItemsFromAssetTypes(
);this._assetTypesSubscription=t.browseAssetTypes.subscribe(function(){f._populateGridItemsFromAssetTypes(
)});MsPortalFx.Services.Rpc.registerCallback("getMruAssetsList",function(){var r=f._assetManager.assetMruList.
mruList().slice(0),t=[],n=Q.defer(),i=[];return r.forEach(function(n){var e=n.extension+"_"+n.assetType,
u,o,r;f._browseManager.hasAssetTypeById(e)&&(u=f._browseManager.getAssetTypeById(e),u.assetTypeManifest.
browseType===1&&(o={extensionName:u.extension,assetType:n.assetType,assetId:n.assetId},r={id:n.assetId,
icon:null,name:n.assetName,resourceType:u.assetTypeManifest.resourceType.resourceTypeName,dynamicSelection:
null},i.push(f._assetTypeService.mapAssetIdToDynamicSelectionAndIcon(o,!1).then(function(t){r.icon=t.
icon;r.name=n.assetName;r.resourceType=u.assetTypeManifest.resourceType.resourceTypeName;r.dynamicBladeExtension=
t.selection.extension;r.dynamicBlade=t.selection.detailBlade||"";r.dynamicSelection=t.selection},function(
){})),t.push(r)))}),Q.allSettled(i).then(function(){n.resolve(t)},function(){n.reject()}),n.promise}
)}return n.prototype.createContent=function(){return this._populateMruItems(),Q.resolve(new e.Widget(
l("<div/>"),this.widgetViewModel))},n.prototype.dispose=function(){this._assetTypesSubscription&&(this.
_assetTypesSubscription.dispose(),this._assetTypesSubscription=null)},n.prototype._openBladeForAsset=
function(n,i){if(t({extension:n.extension,source:s,action:h.ResultOpened,assetType:n.assetTypeManifest.
name,data:i}),i){n.assetTypeManifest.dynamicBladeServiceViewModel?this._desktopManager.createJourneyForAsset(
b,"BrowseDynamicAsset",{assetId:i,extensionName:n.extension,assetType:n.assetTypeManifest.name}):this.
_desktopManager.createJourneyForAsset(n.extension,n.assetTypeManifest.name,{id:i});return}if(u.nonServiceAssetTypeNames.
first(function(t){return t.toLowerCase()===n.assetTypeManifest.name.toLowerCase()})){this._desktopManager.
createJourneyForAsset(n.extension,n.assetTypeManifest.name);return}u.launchBrowseForAssetType(this._desktopManager,
n)},n.prototype._removeItemFromRecent=function(n,i){t({extension:n.extension,source:s,action:h.BrowseRecentItemRemoved,
assetType:n.assetTypeManifest.name});this._assetManager.assetMruList.removeAssetEntry(n.extension,n.
assetTypeManifest.name,i);this._populateMruItems()},n.prototype._openBrowseBlade=function(){this._jumpBarWidget.
closeHubPane();t({source:s,action:h.SeeAll});u.launchBrowseForAssetType(this._desktopManager,null)},
n.prototype._populateGridItemsFromAssetTypes=function(){var n=this,t=[],i;this._browseManager.getFilteredAssetTypes(
).forEach(function(i){var r={image:{icon:ko.observable(u.getAssetTypeIcon(i))},content:{title:ko.observable(
i.compositeDisplayName.plural),assetType:i},itemGroup:n._getItemGroup(i.assetTypeManifest.name)};t.push(
r)});i=this.widgetViewModel.browseItems().slice(0);i.forEach(function(t){t.itemGroup!==1&&n.widgetViewModel.
browseItems().remove(t)});t.forEach(function(t){n.widgetViewModel.browseItems.push(t)});this._populateMruItems(
)},n.prototype._populateMruItems=function(){var n=this,i=this._assetManager.assetMruList.mruList().slice(
0),t=[],r=this.widgetViewModel.browseItems().slice(0);r.forEach(function(t){t.itemGroup===1&&n.widgetViewModel.
browseItems().remove(t)});i.length>0&&(i.stableSort(function(n,t){return n.timeStamp=t.timeStamp}),i.
every(function(i){var r;if(t.length<a&&(r=i.extension+"_"+i.assetType,n._browseManager.hasAssetTypeById(
r))){var u=n._browseManager.getAssetTypeById(r),f=ko.observable(null),e={extensionName:u.extension,assetType:
i.assetType,assetId:i.assetId};n._attachIconProcessor(e,f);t.push({image:{icon:f},content:{title:ko.
observable(i.assetName),assetType:u,assetId:i.assetId},itemGroup:1,showDiscardButton:ko.observable(!0)})}
return t.length<a}),t.forEach(function(t){n.widgetViewModel.browseItems.push(t)}));t.length===0&&this.
widgetViewModel.browseItems.push({image:{icon:ko.observable(MsPortalFx.Base.Images.Blank())},content:
{title:ko.observable(c.noRecentItemsMessage),assetType:null},itemGroup:1})},n.prototype._attachIconProcessor=
function(n,t){var r=this,i=this._mruBladeIconUnits.first(function(t){return t.matchesAsset(n)});i||(
i=new p(n),this._mruBladeIconUnits.push(i));i.addCallbackFromPromise(function(n){return r._assetTypeService.
mapAssetIdToDynamicSelectionAndIcon(n,!1)},function(n){t(n.icon)})},n.prototype._getItemGroup=function(
n){return u.nonServiceAssetTypeNames.first(function(t){return t.toLowerCase()===n.toLowerCase()})?3:
2},n}(),y,p;n.BrowseHubOptions=v;n.createBrowseHub=k;y=function(n){function i(t,i,r,u,f){this._options=
new v(t,i,r,u,f);n.call(this,MsPortalFx.Base.Constants.HubNames.Browse,MsPortalFx.Base.Constants.Shell,
this._options);this._initialize()}return __extends(i,n),i.prototype.dispose=function(){this._options.
dispose()},Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),i.prototype._initialize=function(){var i=this,n,r;t({source:s,action:h.Opened});
n=new o.ViewModel;n.icon(MsPortalFx.Base.Images.Shell.JumpBar.Browse());n.label(c.title);n.click=function(
){var n=i._getHubsManager();if(!n)throw new Error("The hubs manager was not set on this hub instance.");
n.showHub(i.name)};r=new o.Widget(l("<div />"),n);this._options.title=c.title;this._setJumpBarButtonAndLocation(
r,0)},i}(f.HubInstance);p=function(){function n(n){this._assetId=n}return n.prototype.matchesAsset=function(
n){return w.deepEquals(n,this._assetId)},n.prototype.addCallbackFromPromise=function(n,t){this._promise||
(this._promise=n(this._assetId));this._promise.then(function(n){t(n)})},n}()}(s||(s={})),s});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.BrowseHub",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","./Widgets.WidgetBase","./Widgets.Hub"],
function(n,t,i,r,u){var f;return function(n){"use strict";var p=window,t=jQuery,f="fxs-browseHub",e=
"fxs-browseHub-discardButtonLink",h="<div><\/div>",c=i.BrowseHub.discardRecentItem,l="<!-- ko with: value --><div class='fxs-hub-itemIcon' data-bind='image: icon'><\/div><!-- /ko -->",
a="<!-- ko with: value --><div class='fxs-hub-item'><div class='fxs-hub-textTitle'><div class='fxs-browseHub-label' data-bind='text: title'><\/div><\/div><\/div><!-- /ko -->",
v="<!--ko if: value && value() --><div class='fxs-browseHub-discardButton'><a class='"+e+"' href='#' title='"+
c+"'><div data-bind='image: MsPortalFx.Base.Images.Shell.Close()'><\/div><\/a><\/div><!-- /ko -->",y,
o,s;(function(n){n[n.Mru=1]="Mru";n[n.Asset=2]="Asset";n[n.Other=3]="Other"})(n.ItemGroup||(n.ItemGroup=
{}));y=n.ItemGroup;o=function(n){function r(){n.apply(this,arguments);this.browseClick=t.noop;this.browseItems=
ko.observableArray([]);this.text=i.BrowseHub;this.browseItemClick=t.noop;this.browseRecentItemDiscardClick=
t.noop}return __extends(r,n),r}(r.ViewModel);n.ViewModel=o;s=function(n){function r(t,i){n.call(this,
t,i);this.element.html(h).addClass(f);this._gridItems=i.browseItems;new u.Widget(this.element.find("div"),
this._getHubViewModel())}return __extends(r,n),r.prototype.dispose=function(){this._cleanElement(f);
n.prototype.dispose.call(this)},Object.defineProperty(r.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),r.prototype._getHubViewModel=function(){var t=this,n=new u.
ViewModel;return MsPortalFx.Base.Utilities.extend(n.text,{browse:this.options.text.bladeLink,nothingDescription:
this.options.text.nothingDescription,nothingDescriptionLink:null}),n.gridItems=this._gridItems,n.browseClick=
function(){t.trigger("browseClick")},n.gridViewModel=this._getGridViewModel(),n},r.prototype._getGridViewModel=
function(){var u=this,r=i.BrowseHub,f=[{value:1,format:1e3,formatOptions:{htmlBindingsTemplate:"<div class='fxs-hub-item fxs-browseHub-subTitle'>"+
r.recentCategoryTitle+"<\/div>"}},{value:2,format:1e3,formatOptions:{htmlBindingsTemplate:"<div class='fxs-hub-item fxs-browseHub-subTitle'>"+
r.manageCategoryTitle+"<\/div>"}},{value:3,format:1e3,formatOptions:{htmlBindingsTemplate:"<div class='fxs-hub-item fxs-browseHub-subTitle'>"+
r.jumpToCategoryTitle+"<\/div>"}}],o=MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow|
MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.RightClickableRow|MsPortalFx.ViewModels.Controls.
Lists.Grid.Extensions.Groupable,s={selectableRow:{selectionMode:1,itemMatchesSelection:t.noop,createSelection:
t.noop,rowSelect:function(n,i){if(i.selected){i.selected.selected(!1);var r=i.selected.item.content;
t(n.originalEvent.target).closest("."+e).length?u.trigger(MsPortalFx.Base.EventTypes.fxbrowserecentitemdiscardclick,
null,r):u.trigger(MsPortalFx.Base.EventTypes.fxbrowseitemclick,null,{assetType:r.assetType,assetId:r.
assetId})}}},groupable:{groupKey:ko.observable("itemGroup"),groups:ko.observableArray(f),sortOrder:ko.
observable(0),noGroupLabelFormat:2}},n=new MsPortalFx.ViewModels.Controls.Lists.Grid.ViewModel(this.
lifetimeManager,this._gridItems,o,s),h=[{itemKey:"image",width:ko.observable("60px"),format:1e3,formatOptions:
{htmlBindingsTemplate:l,htmlBindingsType:0},cssClass:"fxs-browseHub-cellImage"},{itemKey:"content",width:
ko.observable("278px"),format:1e3,formatOptions:{htmlBindingsTemplate:a,htmlBindingsType:0},cssClass:
"fxs-browseHub-cellContent"},{itemKey:"showDiscardButton",width:ko.observable("30px"),format:1e3,formatOptions:
{htmlBindingsTemplate:v,htmlBindingsType:0},cssClass:"fxs-browseHub-cellClose"}];return this._addDisposablesToCleanUp(
ko.computed(function(){n.items().forEach(function(t){var i=n.getRowMetadata(t);t.content.assetType||
i.disabled(!0)})})),n.showHeader=!1,n.columns=ko.observableArray(h),n},r}(r.Widget);n.Widget=s}(f||(f=
{})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Hubs/UI.ExtensionDefinedHub",
["require","exports","../../Prototype/Extension.Definition.Locator","../../UI/Compositions/UI.Composition.BladeOpener",
"../../UI/Compositions/UI.Composition.PropertyBinding","./UI.HubBase","../../Widgets/Widgets.WidgetBase",
"../../Widgets/Widgets.DefaultHubIcon","../../Base/Telemetry"],function(n,t,i,r,u,f,e,o,s){var c=MsPortalFx.
Base.Diagnostics.Telemetry.trace,h;return function(t){"use strict";function b(n,t){return new k(new l(
n,t))}var nt=window,a=jQuery,p=s.Source.ExtensionDefinedHub,w=s.Action,h=MsPortalFx.Base.Diagnostics.
createLog(n),v="fxs-extensiondefinedhub",y,l;(function(n){n[n.NoTemplateOrBladeAction=1]="NoTemplateOrBladeAction";
n[n.ManifestError=2]="ManifestError";n[n.LaunchJourneyError=3]="LaunchJourneyError"})(y||(y={}));t.create=
b;l=function(){function n(n,t){this.title="";this.bladeOpeningCallbacks=new MsPortalFx.Base.Callbacks;
this._services=n;this.metadata=t}return n.prototype.createContent=function(){var n=this,t=this.getHubManifest(
),i=this._getExtension();return t.then(function(t){return n.title=t.title,i.then(function(i){return i.
getViewModel(t.viewModel).then(function(r){var e=t.htmlTemplate?i.definition.htmlTemplates[t.htmlTemplate].
content:null,f=new g(a("<div/>"),new d(r,e)),u=n._createStartboardPart(i,t),o=n._createBladeOpener(i,
t,u,r,function(){u=null},!0),s=[o,{dispose:function(){i.releaseViewModel(t.viewModel)}},{dispose:function(
){u&&(n._services.desktop.removeTile(u.id),u,u=null)}}];return f.lifetimeManager.registerForDispose(
s),f})})})},n.prototype.getHubManifest=function(){var n=this.metadata.name,t=this.metadata.extensionName;
return this._services.extensionManager.getManifestByName(t).then(function(t){var i=t.hubs||[],r=i.first(
function(t){return t.name===n}),u;if(!r){u=i.map(function(n){return n.name});throw new Error("Unknown extension hub manifest'{0}'. Known manifest names are '{1}'".
format(n,u.join("', '")));}return r})},n.prototype.launchJourney=function(){var n=this,t=this.getHubManifest(
),i=this._getExtension();return t.then(function(t){var r=n.metadata.extensionName;if(t.htmlTemplate)
throw t.name,r;if(!t.details||t.details.length!==1||!t.details[0])throw t.name,r;return i.then(function(
i){return i.getViewModel(t.viewModel).then(function(r){var u=n._createStartboardPart(i,t),f=n._createBladeOpener(
i,t,u,r,null,!1),o=t.details[0],e=f.createBladeModelForSelectedItem(o,r),s={masterPartId:u.id,locator:
e.locator,model:e.model};return f.dispose(),n.bladeOpeningCallbacks.fire(null),n._services.desktop.createJourney(
u.id,s)})})})},n.prototype._getExtension=function(){return this._services.extensionManager.getExtensionByName(
this.metadata.extensionName)},n.prototype._createStartboardPart=function(n,t){return this._services.
desktop.addPartToStartBoard({originPartLocator:i.Locator.forExtension(n.name).withPartType(t.viewModel+
"HubPart"),reuseExistingPart:!1,dontSetupWidget:!0})},n.prototype._createBladeOpener=function(n,t,i,
f,e,o){var c=this,l="{0}\\{1}".format(n.name,t.viewModel),s=this._services.desktop,a={services:this.
_services,masterModelId:l,masterModel:f,referenceComposition:i,referenceExtension:n,invocationThrottleDuration:
25,intialViewModelState:{},isBladeOpenedByMaster:function(n){return n.masterPartId===i.id},configureBladeDescriptor:
function(n){n.masterPartId=i.id;n.bindings&&n.bindings.forEach(function(t){t.source&&t.source.id===i.
id&&(n.model[t.targetProperty]=ko.toJS(u.PropertyBinding.getModelValue(f,t.source.property).value))}
)},onBladesOpening:function(n){var t=s.startBoard.id;return s.openMultipleBlades(t,n),e&&e(),c.bladeOpeningCallbacks.
fire(null),!1}},h=new r.BladeOpener(a);return o&&t.details.forEach(function(n){h.registerInvocationProperty(
n)}),h},n}();t.Options=l;var k=function(n){function t(t){var r=this,u,i,f,e;this._options=t;n.call(this,
t.metadata.name,t.metadata.extensionName,this._options);u=function(){var n=r._getHubsManager();if(!n)
throw new Error("The hubs manager was not set on this hub instance.");t.bladeOpeningCallbacks.remove(
u);n.hideHub()};i=new o.ViewModel;i.label("");i.loading(!0);t.getHubManifest().then(function(n){i.label(
n.title);i.icon(n.icon);i.loading(!1);i.click=function(){var e=r._getHubsManager(),o=r._options.metadata,
i=o.extensionName,f=o.name;if(!e)throw new Error("The hubs manager was not set on this hub instance.");
c({source:p,action:w.Opened,data:{hub:f,extension:i}});t.bladeOpeningCallbacks.add(u);n.htmlTemplate?
e.showHub(r.name):n.details&&n.details.length===1?t.launchJourney().catch(function(n){h.error("Unable to launch journey from '{0}/{1}' '{2}'",
3,i,f,n)}):h.error("Hub manifest '{0}/{1}' does not have expected Template or Blade Action.",1,i,f)}
}).catch(function(n){h.error("Failed to load hub manifest. '{0}/{1}' '{2}'",2,t.metadata.extensionName,
t.metadata.name,n);i.loading(!1);i.icon(MsPortalFx.Base.Images.Error())});f=new o.Widget(a("<div />"),
i);e=t.metadata.pinToBottom?1:0;this._setJumpBarButtonAndLocation(f,e)}return __extends(t,n),t}(f.HubInstance),
d=function(n){function t(t,i){n.call(this);this.viewModel=t;this.htmlTemplate=i}return __extends(t,n),
t}(e.ViewModel),g=function(n){function t(t,i){n.call(this,t,i);this.element.addClass(v).html(i.htmlTemplate);
this._bindDescendants(i.viewModel.content)}return __extends(t,n),t.prototype.dispose=function(){this.
_cleanElement(v);n.prototype.dispose.call(this)},Object.defineProperty(t.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),t}(e.Widget)}(h||(h={})),h});__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Hubs/UI.JourneysHub",["require",
"exports","MsPortalImpl/Resources/ImplScriptResources","../../Base/Telemetry","../UI.DesktopManager",
"./UI.HubBase","../../Base/Base.UriHelper","../../Widgets/Widgets.JourneysHub","../../Widgets/Widgets.NotificationHubIcon"],
function(n,t,i,r,u,f,e,o,s){var h=MsPortalFx.Base.Diagnostics.Telemetry.trace,c;return function(n){"use strict";
function p(n,t){return new y(n,t)}var c=window,t=jQuery,l=r.Source.JourneysHub,a=r.Action,v=function(
){function n(n,i){var r=this;this.title="";this.isHubOpened=!1;this._desktopManager=n;this._jumpBarWidget=
i;this.widgetViewModel=new o.ViewModel;this._journeysActivatedTelemetryCounter=0;this.populateJourneys(
);t(this._desktopManager).on([u.DesktopManagerEvents.journeyDeactivated,u.DesktopManagerEvents.journeyActivated,
u.DesktopManagerEvents.journeyDiscarded,u.DesktopManagerEvents.journeyCreated,u.DesktopManagerEvents.
settingsLoaded].join(" "),this._desktopManagerEventsHandler=function(){r.populateJourneys()});this.widgetViewModel.
journeyClick=function(n,t){r._activateJourney(t.journey.id)};this.widgetViewModel.journeyDiscardClick=
function(n,t){r._discardJourney(t.journey.id)};this.widgetViewModel.hubDestroyed=function(){r._onWidgetClosed(
)}}return n.prototype.dispose=function(){this._desktopManagerEventsHandler&&(t(this._desktopManager).
off({journeyActivated:"journeyActivated",journeyDeactivated:"journeyDeactivated",journeyDiscarded:"journeyDiscarded",
journeyCreated:"journeyCreated",settingsLoaded:"settingsLoaded"},this._desktopManagerEventsHandler),
this._desktopManagerEventsHandler=null)},n.prototype.createContent=function(){return this.isHubOpened=
!0,Q.resolve(new o.Widget(t("<div/>"),this.widgetViewModel,this._desktopManager))},n.prototype.populateJourneys=
function(){var n=this._desktopManager.getJourneysMetadata().filter(function(n){var t=n.firstBlade.peek(
);return t&&!t.openInContextPane}).sort(function(n,t){return t.lastModifiedTime()-n.lastModifiedTime(
)});this.widgetViewModel.journeys(n)},n.prototype._activateJourney=function(n){h({source:l,action:a.
JourneyActivated});e.updateAddressBar(new e.Uri(c.location.href).setHashQueryStringValue("journeyId",
n).href,!0)},n.prototype._discardJourney=function(n){h({source:l,action:a.JourneyDiscarded});this._desktopManager.
tryDiscardJourney(n)},n.prototype._onWidgetClosed=function(){this.isHubOpened=!1},n}(),y;n.JourneysHubOptions=
v;n.createJourneysHub=p;y=function(n){function r(t,i){this._desktopManager=t;this._hubIconViewModel=
new s.ViewModel;this._options=new v(t,i);n.call(this,MsPortalFx.Base.Constants.HubNames.Journeys,MsPortalFx.
Base.Constants.Shell,this._options);this._initialize()}return __extends(r,n),r.prototype.dispose=function(
){this._options.dispose();this._desktopManagerEventsHandler&&(t(this._desktopManager).off(u.DesktopManagerEvents.
journeyDeactivated,this._desktopManagerEventsHandler),this._desktopManagerEventsHandler=null)},Object.
defineProperty(r.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),r.prototype._journeySaved=function(){var n=this;this._options.isHubOpened||(this._hubIconViewModel.
cssClass("fx-bg-info fx-text-white"),this._timeoutHandle=c.setTimeout(function(){n._hubIconViewModel.
cssClass("fxs-notificationHubIcon-default fx-text-title");c.clearTimeout(n._timeoutHandle)},r._transientIconTimeoutMillis))}
,r.prototype._initialize=function(){var n=this,r=i.JourneysHub,f;this._hubIconViewModel.icon(MsPortalFx.
Base.Images.Shell.JumpBar.Journey());this._hubIconViewModel.label(r.title);t(this._desktopManager).on(
u.DesktopManagerEvents.journeyDeactivated,this._desktopManagerEventsHandler=function(){n._journeySaved(
)});this._hubIconViewModel.click=function(){var t=n._getHubsManager();if(!t)throw new Error("The hubs manager was not set on this hub instance.");
h({source:l,action:a.Opened});n._options.populateJourneys();t.showHub(n.name)};f=new s.Widget(t("<div />"),
this._hubIconViewModel);this._options.title=r.title;this._setJumpBarButtonAndLocation(f,0)},r._transientIconTimeoutMillis=
750,r}(f.HubInstance)}(c||(c={})),c});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl/Widgets/Widgets.JourneysHub",["require","exports","./Widgets.WidgetBase","./Widgets.Hub",
"MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r,u){var f;return function(n){"use strict";
var y=window,t=jQuery,s=MsPortalFx.Base.Images.Shell.DefaultBlade(),f="fxs-journeysHub",e="fxs-journeysHub-discardButtonLink",
h="<div><\/div>",c="<!-- ko with: value --><div class='fxs-hub-itemIcon' data-bind='image: icon, css: {\"fxs-br-active\": active}'><\/div><!-- /ko -->",
l="<!-- ko with: value --><div class='fxs-hub-item'><div class='fxs-hub-textTitle'><span class='msportalfx-tooltip-overflow fxs-journeysHub-journeyBladeTitle' data-bind='text: label().firstBladeTitle'><\/span><span class='fxs-journeysHub-arrowImage' data-bind='image: MsPortalFx.Base.Images.Shell.TripleArrow(), visible: label().hasMultipleBlades'><\/span><span class='msportalfx-tooltip-overflow fxs-journeysHub-journeyBladeTitle' data-bind='text: label().lastBladeTitle, visible: label().hasMultipleBlades'><\/span><\/div><div class='fxs-hub-textTime' data-bind='with: new Date(item.lastModifiedTime())'><time data-bind='attr: { datetime: toString({ year: \"numeric\", month: \"2-digit\", day: \"numeric\", hour: \"numeric\", minute: \"numeric\", second: \"numeric\" }) }, text: toRelativeString()'><\/time><\/div><\/div><!-- /ko -->",
a="<!-- ko with: value --><div class='fxs-journeysHub-discardButton'><a class='"+e+"' href='#' data-bind='attr: { title: text.discard }'><div data-bind='image: MsPortalFx.Base.Images.Shell.Close()'><\/div><\/a><\/div><!-- /ko -->",
v=function(n){function i(){n.apply(this,arguments);this.journeys=ko.observableArray([]);this.text=u.
JourneysHub;this.journeyClick=t.noop;this.journeyDiscardClick=t.noop;this.hubDestroyed=t.noop}return __extends(
i,n),i}(i.ViewModel),o;n.ViewModel=v;o=function(n){function i(t,i,u){n.call(this,t,i);this._journeyComputeds=
[];this.element.html(h).addClass(f);this._gridItems=ko.observableArray();this._desktopManager=u;this.
_initializeComputeds();new r.Widget(this.element.find("div"),this._getHubViewModel())}return __extends(
i,n),i.prototype.dispose=function(){this._disposeJourneyComputeds();this._cleanElement(f);n.prototype.
dispose.call(this)},Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype._disposeJourneyComputeds=function(){while(this._journeyComputeds.
length){var n=this._journeyComputeds.splice(0,1)[0];n&&n.dispose()}},i.prototype._initializeComputeds=
function(){var n=this;this._addDisposablesToCleanUp(ko.computed(function(){var i=n.options.journeys(
),t;n._disposeJourneyComputeds();t=i.map(function(t){var i=ko.computed(function(){return n._getJourneyIsActive(
t)}),r=ko.computed(function(){var i=t.firstBlade(),n;return i&&(n=i.icon(),n)?n:s}),u=ko.computed(function(
){return{firstBladeTitle:t.firstBlade()&&t.firstBlade().title()?t.firstBlade().title():n.options.text.
untitledJourney,lastBladeTitle:t.lastBlade()&&t.lastBlade().title()?t.lastBlade().title():n.options.
text.untitledJourney,hasMultipleBlades:t.firstBlade()&&t.lastBlade()&&t.firstBlade().title()===t.lastBlade(
).title()?!1:!0}}),f={image:{icon:r,active:i},content:{item:t,label:u,text:n.options.text},close:{text:
n.options.text},rowMetadata:{cssClass:i()?"fxs-hub-highlight":""}};return n._journeyComputeds.push(i),
n._journeyComputeds.push(r),n._journeyComputeds.push(u),f});n._gridItems(t)}))},i.prototype._getHubViewModel=
function(){var i=this,n=new r.ViewModel;return MsPortalFx.Base.Utilities.extend(n.text,{browse:"",nothingDescription:
this.options.text.nothingDescription,nothingDescriptionLink:null}),n.gridItemClick=function(n,r){var
u=r.gridItem.content;t(n.originalEvent.originalEvent.target).closest("."+e).length?i.trigger("journeyDiscardClick",
null,{journey:u.item}):i.trigger(MsPortalFx.Base.EventTypes.fxjourneyclick,null,{journey:u.item})},n.
gridItems=this._gridItems,n.gridColumns=[{itemKey:"image",format:1e3,formatOptions:{htmlBindingsTemplate:
c,htmlBindingsType:0},cssClass:"fxs-journeyHub-cellImage"},{itemKey:"content",format:1e3,formatOptions:
{htmlBindingsTemplate:l,htmlBindingsType:0},cssClass:"fxs-journeyHub-cellContent"},{itemKey:"close",
format:1e3,formatOptions:{htmlBindingsTemplate:a,htmlBindingsType:0},cssClass:"fxs-journeyHub-cellClose"}],
n.browseClick=function(){i.trigger("browseClick")},n.hubDestroyed=function(){i.trigger("hubDestroyed")}
,n},i.prototype._getJourneyIsActive=function(n){var t=this._desktopManager.getActiveJourney();return t&&
t.id===n.id},i}(i.Widget);n.Widget=o}(f||(f={})),f});define("MsPortalImpl/UI/Hubs/UI.HubsRpcCallbacks",
["require","exports","../../Services/Services.Settings"],function(){var n;return function(n){"use strict";
function r(n,i){t.readHubsUserSettings.register(i,[MsPortalFx.Base.Constants.ExtensionNames.Hubs],function(
t){return u(n,t)});t.writeHubsUserSettings.register(i,[MsPortalFx.Base.Constants.ExtensionNames.Hubs],
function(t){return f(n,t).then(function(){return undefined})})}function u(n,t){var u=Q.defer(),r={},
f={store:i,keys:t};return n.querySettings(f).then(function(n){t.forEach(function(t){r[t]=t in n?n[t]:
undefined});u.resolve(r)}),u.promise}function f(n,t){var r={store:i,settings:t};return n.setSettings(
r)}var t=MsPortalFx.Internal.Hubs.Settings.Schema,i=9;n.registerRpcCallbacks=r}(n||(n={})),n});define(
"MsPortalImpl/UI/Hubs/ViewModels/UI.Notifications.ViewModelRegistration",["require","exports","../../../Prototype/ViewModelManager"],
function(n,t,i){var r=MsPortalFx.Internal.ViewModels.Part.composePartViewModel,u;return function(n){
"use strict";function f(){i.ViewModelManager.registerWithState("Notifications$NotificationsBlade$NotificationsListViewModel",
t+"UI.Notifications.NotificationsBlade",function(n,t){return r(function(i){return new n.NotificationsListViewModel(
i,t)})});i.ViewModelManager.registerWithState("Notifications$NotificationsTileViewModel",t+"UI.Notifications.NotificationsTile",
function(n,t){return r(function(i){return new n.NotificationsTileViewModel(i,t)})});i.ViewModelManager.
registerWithState("Notifications$NotificationsBrowseService",u+"NotificationsBrowseService",function(
n,t){return r(function(){return new n.NotificationsBrowseService(t)})})}var t="./MsPortalImpl/UI/Hubs/ViewModels/",
u="./MsPortalImpl/UI/Hubs/Services/";n.registerViewModels=f}(u||(u={})),u});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Hubs/UI.ResourceMapManager",["require","exports",
"MsPortalImpl/Resources/ImplScriptResources","./UI.NotificationManager","../../Services/Services.AssetTypes.Utils",
"../../Base/Telemetry"],function(n,t,i,r,u,f){var e;return function(t){"use strict";function ot(n,t,
i){return new rt(n,t,i)}function st(n,t){return new ut(n,t)}function l(n,t){var i=b.fx.environment.orderedResourceTypes,
u=t.type().toLowerCase(),o=!1,f,e,r;i&&i.length&&n().length&&(f=i.indexOf(u),f!==-1&&(r=n().firstIndex(
function(n){return u=n.type().toLowerCase(),e=i.indexOf(u),e<0||e>f}),r>=0&&r<n().length&&(n.splice(
r,0,t),o=!0)));o||n.push(t)}function it(n){return n&&n.assetTypeManifest.icon?n.assetTypeManifest.icon:
MsPortalFx.Base.Images.Blank()}function p(n,t,i){if(n.kind){var r=null,u=n.type.toLowerCase(),f=n.kind.
toLowerCase();if(i.some(function(n){return n.resourceType.toLowerCase()===u?n.kinds.some(function(n)
{return n.kind.toLowerCase()===f?(r={type:1,data:n.icon},!0):!1}):!1}))return r}return t&&t.assetTypeManifest.
icon?t.assetTypeManifest.icon:MsPortalFx.Base.Images.Blank()}var d=MsPortalFx.ViewModels.Controls.Visualization.
CsmTopology,at=MsPortalFx.ViewModels.Services.DynamicBlade,e=MsPortalFx.ViewModels.Services.ResourceTypes,
b=window,h=MsPortalFx.Base.Diagnostics.createLog(n),o=i.ResourceMap,vt=MsPortalFx.Base.Diagnostics.Telemetry.
trace,yt=f.Source.ResourceMap,pt=f.Action,g=MsPortalFx.Base.Constants.ExtensionNames.Hubs,k=MsPortalFx.
Base.Constants.AssetNames.ResourceGroups,ft=2e4,wt=MsPortalFx.Internal.Constants.RpcMethods,nt="fulfilled",
et=6e4,s,ht,ct,w,a,y,c,rt,ut;t.createResourceMapManager=ot;t.createResourceMapManagerRpc=st,function(
n){n.mapAssetIdToResourceIdOverride;n.mapResourceIdToAssetIdOverride;n.mapResourceIdToDynamicSelectionAndIconOverride;
n.getResourceAssetInformationOverride}(s=t.Internal||(t.Internal={})),function(n){n[n.Resources=0]="Resources";
n[n.Linked=1]="Linked";n[n.Children=2]="Children"}(t.ResourceGroupBandArray||(t.ResourceGroupBandArray=
{}));ht=t.ResourceGroupBandArray,function(n){n[n.Internal=0]="Internal";n[n.Related=1]="Related";n[n.
Dependant=2]="Dependant";n[n.Linked=3]="Linked"}(t.ResourceBandArray||(t.ResourceBandArray={}));ct=t.
ResourceBandArray;w=function(){function n(n){this._resourceGroupNode=n}return Object.defineProperty(
n.prototype,"resourceGroupNode",{get:function(){return this._resourceGroupNode},enumerable:!0,configurable:
!0}),n.prototype.addResourceItem=function(n,t){switch(t){case 0:l(this._resourceGroupNode.resources,
n.resourceNode);break;case 1:l(this._resourceGroupNode.linkedResources,n.resourceNode)}},n}();t.ResourceGroupNode=
w;a=function(){function n(n){this._resourceNode=n}return Object.defineProperty(n.prototype,"resourceNode",
{get:function(){return this._resourceNode},enumerable:!0,configurable:!0}),n.prototype.addResourceItem=
function(n,t){switch(t){case 2:l(this._resourceNode.dependantResources,n.resourceNode);break;case 0:
l(this._resourceNode.internalResources,n.resourceNode);break;case 3:l(this._resourceNode.linkedResources,
n.resourceNode);break;case 1:l(this._resourceNode.relatedResources,n.resourceNode)}},n}();t.ResourceNode=
a;y=function(){function n(n,t){this._items=n;this._isResourceList=t}return n.prototype.addResourceItem=
function(n,t){switch(t){case 0:n.resourceListItem.grouping=this._isResourceList?o.resourceBand.toLocaleUpperCase(
):o.internalResourcesBand.toLocaleUpperCase();this._items.push(n.resourceListItem);break;case 1:n.resourceListItem.
grouping=o.linkedResourcesBand.toLocaleUpperCase();this._items.push(n.resourceListItem);break;case 2:
n.resourceListItem.grouping=o.childResourcesBand.toLocaleUpperCase();this._items.push(n.resourceListItem)}
},n}();t.ResourceListResourceGroupItem=y;c=function(){function n(n,t){this._items=n;this._listItem=t}
return Object.defineProperty(n.prototype,"resourceListItem",{get:function(){return this._listItem},enumerable:
!0,configurable:!0}),n.prototype.addResourceItem=function(n,t){switch(t){case 2:n.resourceListItem.grouping=
o.dependantResourcesBand.toLocaleUpperCase();this._items.push(n.resourceListItem);break;case 0:n.resourceListItem.
grouping=o.internalResourcesBand.toLocaleUpperCase();this._items.push(n.resourceListItem);break;case
3:n.resourceListItem.grouping=o.linkedResourcesBand.toLocaleUpperCase();this._items.push(n.resourceListItem);
break;case 1:n.resourceListItem.grouping=o.relatedResourcesBand.toLocaleUpperCase();this._items.push(
n.resourceListItem)}},n}();t.ResourceListResourceItem=c;var v=function(){function n(n,t,i,r,u){var f=
this,s,h,o,c;this.resourceTypeInfo=ko.observable();this.assetId=ko.observable();this.bladeOverride=ko.
observable();this.bladeOverrideExtension=ko.observable();this.failed=ko.observable();s=e.buildResourceTypeFromResourceId(
u);n.hasAssetTypeByResourceType(s)&&(this._assetType=n.getAssetTypeByResourceType(s));this._lifetimeManager=
t;this._resourceMapManager=n;this._assetIdCollector=i;this._promiseCollector=r;this._assetType&&(h=this.
_resourceMapManager.getResourceTypeServicePromiseForAssetType(this._assetType,this._lifetimeManager,
u),this._promiseCollector(h),h.then(function(n){f.resourceTypeInfo(n)},function(n){f.resourceTypeInfo(
null);f.failed(n)}),o=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,c=this._resourceMapManager.
getResourceTypeMappingPromiseForAssetType(this._assetType,o),this._promiseCollector(c),c.then(function(
n){n.mapResourceIdToAssetId(u).then(function(n){f._assetType&&f._assetType.assetTypeManifest.dynamicBladeServiceViewModel?
f._prepareAssetId(u,n):(f.assetId(n),f._assetIdCollector(u,n));o.dispose()},function(n){f.resourceTypeInfo(
null);f.failed(n.message);f.assetId(null);f._assetIdCollector(u,null);o.dispose()})},function(n){f.resourceTypeInfo(
null);f.failed(n);f.assetId(null);f._assetIdCollector(u,null);o.dispose()}))}return n.prototype._prepareAssetId=
function(n,t){var i=this,r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,u=this._resourceMapManager.
getDynamicBladePromiseForAssetType(this._assetType,r);this._promiseCollector(u);u.then(function(u){if(
typeof u.onInputsSet!="function")h.warning("Dynamic blade service had no onInputsSet."),i.assetId(t),
i._assetIdCollector(n,t),r.dispose();else{var f=u.onInputsSet({assetId:t,usage:0});f?f.then(function(
){i.bladeOverride(u.bladeName());i.bladeOverrideExtension(u.extensionName());i.assetId(t);i._assetIdCollector(
n,t);r.dispose()},function(){i.assetId(t);i._assetIdCollector(n,t);r.dispose()}):(i.bladeOverride(u.
bladeName()),i.bladeOverrideExtension(u.extensionName()),i.assetId(t),i._assetIdCollector(n,t),r.dispose(
))}},function(t){i.failed(t);i.assetId(null);i._assetIdCollector(n,null);h.error("Failed to get the dynamic blade service during browse.");
r.dispose()})},Object.defineProperty(n.prototype,"lifetimeManager",{get:function(){return this._lifetimeManager}
,enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"assetType",{get:function(){return this.
_assetType},enumerable:!0,configurable:!0}),n}(),lt=function(){function n(n,t,i,r,u,f){var e=this;this.
_groupResources=ko.observableArray([]);n.hasAssetTypeByResourceType(t)&&(this._assetType=n.getAssetTypeByResourceType(
t));this._lifetimeManager=i;this._resourceMapManager=n;this._assetIdCollector=r;this._promiseCollector=
u;this._resourceNode=f;i.registerForDispose(ko.computed(function(){var i=e._groupResources().length,
n,r;if(i===0)e._assetType&&(e._resourceNode.name(e._assetType.compositeDisplayName.plural),e._resourceNode.
description(o.unavailableNode),e._resourceNode.descriptionUri(null),e._resourceNode.status(3),e._resourceNode.
statusMessage(null),MsPortalFx.Services.AssetExpansion.removeAssetExpansion(e._resourceNode));else if(
i===1)n=e._groupResources()[0].resourceTypeInfo(),r=e._groupResources()[0].failed(),r?(e._resourceNode.
name(e._assetType.compositeDisplayName.plural),e._resourceNode.description(o.unavailableNode),e._resourceNode.
descriptionUri(null),e._resourceNode.status(3),e._resourceNode.statusMessage(null)):n?(e._resourceNode.
name(ko.utils.unwrapObservable(n.name)),e._resourceNode.description(ko.utils.unwrapObservable(n.description)),
e._resourceNode.descriptionUri(ko.utils.unwrapObservable(n.descriptionUri)),e._resourceNode.status(ko.
utils.unwrapObservable(n.status)),e._resourceNode.statusMessage(ko.utils.unwrapObservable(n.statusMessage)),
MsPortalFx.Services.AssetExpansion.removeAssetExpansion(e._resourceNode),e._resourceNode.bladeOverride=
ko.utils.unwrapObservable(e._groupResources()[0].bladeOverride),e._resourceNode.bladeOverrideExtension=
ko.utils.unwrapObservable(e._groupResources()[0].bladeOverrideExtension),MsPortalFx.Services.AssetExpansion.
addAssetExpansion(e._resourceNode,{assetOwner:e._assetType.extension,assetType:e._assetType.assetTypeManifest.
name,assetId:e._groupResources()[0].assetId(),title:e._resourceNode.name,description:e._resourceNode.
description})):e._assetType&&(e._resourceNode.description(o.loading),e._resourceNode.status(0));else{
var u=!1,f=!1,t=1,s=ko.observableArray();e._groupResources().forEach(function(n){var i=n.resourceTypeInfo(
),r=n.failed();r?u=!0:i?t=e._calculateWorstStatus(ko.utils.unwrapObservable(i.status),t):f=!0});e._resourceNode.
name(e._assetType.compositeDisplayName.plural);u?(e._resourceNode.description(o.unavailableNode),e._resourceNode.
status(3)):f?(e._resourceNode.description(o.loading),e._resourceNode.status(0)):(e._resourceNode.description(
null),e._resourceNode.descriptionUri(null),e._resourceNode.status(t),e._resourceNode.statusMessage(null));
MsPortalFx.Services.AssetExpansion.removeAssetExpansion(e._resourceNode)}}))}return Object.defineProperty(
n.prototype,"resourceNode",{get:function(){return this._resourceNode},enumerable:!0,configurable:!0}),
n.prototype.addGroupResource=function(n){this._groupResources.push(n)},n.prototype._calculateWorstStatus=
function(n,t){var i=[1,0,4,2,5,3],r=i.indexOf(n),u=i.indexOf(t);return i[r>u?r:u]},n}(),tt=function(
n){function t(t,i,r,u,f){var e=this;n.call(this,t,i,r,u,f.id);this._resourceListItem=f;i.registerForDispose(
ko.computed(function(){e.failed()?(e._resourceListItem.name(e.assetType.compositeDisplayName.plural),
e._resourceListItem.description(o.unavailableNode),e._resourceListItem.descriptionUri(null),e._resourceListItem.
status(3),e._resourceListItem.statusMessage(null)):e.resourceTypeInfo()?(e._resourceListItem.name(ko.
utils.unwrapObservable(e.resourceTypeInfo().name)),e._resourceListItem.description(ko.utils.unwrapObservable(
e.resourceTypeInfo().description)),e._resourceListItem.descriptionUri(ko.utils.unwrapObservable(e.resourceTypeInfo(
).descriptionUri)),e._resourceListItem.status(ko.utils.unwrapObservable(e.resourceTypeInfo().status)),
e._resourceListItem.statusMessage(ko.utils.unwrapObservable(e.resourceTypeInfo().statusMessage))):e.
assetType&&(e._resourceListItem.description(o.loading),e._resourceListItem.status(0));e._resourceListItem.
bladeOverride=ko.utils.unwrapObservable(e.bladeOverride);e._resourceListItem.bladeOverrideExtension=
ko.utils.unwrapObservable(e.bladeOverrideExtension);e._resourceListItem.assetId=ko.utils.unwrapObservable(
e.assetId)}))}return __extends(t,n),Object.defineProperty(t.prototype,"resourceListItem",{get:function(
){return this._resourceListItem},enumerable:!0,configurable:!0}),t}(v);t.getAssetTypeIcon=it;t.getAssetTypeIconFromResource=
p;rt=function(){function n(n,t,i){var r=this;this._assetTypes=ko.observableArray();this._storedResourceGroupQueryResults=
{};this._storedResourceQueryResults={};this._storedResourceGroups={};this._storedResources={};this._viewsRegisteredForChanges=
[];this._duplicateResourceTypes={};this._extensionManager=n;this._assetManager=t;this._assetTypeService=
i;this._listenForExtensions();t.onAssetDeleted(function(n,t,i){r._processAssetDeletion(t,i)})}return n.
prototype.dispose=function(){this._storedResourceGroupQueryResults=null;this._storedResourceQueryResults=
null;this._storedResourceGroups=null;this._storedResources=null;this._viewsRegisteredForChanges=null}
,Object.defineProperty(n.prototype,"assetTypes",{get:function(){return this._assetTypes},enumerable:
!0,configurable:!0}),n.prototype.getAssetTypeById=function(n){var t=this._getAssetTypeById(n);if(!t)
throw new Error("Could not find the asset type '{0}'.".format(n));return t},n.prototype.hasAssetTypeById=
function(n){return!!this._getAssetTypeById(n)},n.prototype.getAssetTypeByResourceType=function(n){var
t=this._getAssetTypeByResourceType(n);if(!t)throw new Error("Could not find the asset type from resource type '{0}'.".
format(n));return t},n.prototype.hasAssetTypeByResourceType=function(n){return!!this._getAssetTypeByResourceType(
n)},n.prototype.getAssetTypePromiseById=function(n){var e=this,r,t=this._getAssetTypeById(n),u,i,f;return t?
r=Q.resolve(t):(u=this._extensionManager.extensionLoader.getExtensions().filter(function(t){return n.
indexOf(t.name+"_")===0}),u&&u.length?(i=Q.defer(),f=u.map(function(n){return n.getManifest()}),Q.allSettled(
f).then(function(){t=e._getAssetTypeById(n);t?i.resolve(t):i.reject("Could not find the asset type '{0}' after all extension manifests loaded.".
format(n))},function(){i.reject("Could not find the asset type '{0}'.".format(n))}),r=i.promise):r=Q.
reject("Could not find the extension for the asset type '{0}'.".format(n))),r},n.prototype.getAssetTypeByOwnerAndType=
function(n,t){var i=this._getAssetTypeByOwnerAndType(n,t);if(!i)throw new Error("Could not find the asset type in the system with owner '{0}' and type '{1}'.".
format(n,t));return i},n.prototype.hasAssetTypeByOwnerAndType=function(n,t){return!!this._getAssetTypeByOwnerAndType(
n,t)},n.prototype.getResourceTypeServicePromiseForAssetType=function(n,t,i){var r=this;return n.assetTypeManifest.
resourceTypeServiceViewModel?Q(this._extensionManager.getExtensionByName(n.extension)).then(function(
u){return Q(u.getViewModel(n.assetTypeManifest.resourceTypeServiceViewModel)).then(function(n){var o=
!1,f,e;return(t.registerForDispose({dispose:function(){o=!0;r._releaseViewModel(u,n)}}),!o)?(f=n.content,
typeof f.onInputsSet=="function"&&(e=f.onInputsSet({resourceId:i})),e)?e.then(function(){return f},function(
){return Q.reject("The resource type service view model rejected the load promise.")}):f:Q.reject("The resource type service view model was already disposed.")}
)}):Q.reject("The asset type does not have a resource type service view model.")},n.prototype.getResourceTypeMappingPromiseForAssetType=
function(n,t){var i=this;return!n.assetTypeManifest.resourceType||!n.assetTypeManifest.resourceType.
mappingViewModel?Q.reject("The resource type does not have a resource type mapping view model."):Q(this.
_extensionManager.getExtensionByName(n.extension)).then(function(r){return Q(r.getViewModel(n.assetTypeManifest.
resourceType.mappingViewModel)).then(function(n){var u=!1;return(t.registerForDispose({dispose:function(
){u=!0;i._releaseViewModel(r,n)}}),!u)?n.content:Q.reject("The resource type mapping view model was already disposed.")}
)})},n.prototype.getDynamicBladePromiseForAssetType=function(n,t){var i=this;return n.assetTypeManifest.
dynamicBladeServiceViewModel?Q(this._extensionManager.getExtensionByName(n.extension)).then(function(
r){return Q(r.getViewModel(n.assetTypeManifest.dynamicBladeServiceViewModel)).then(function(n){var u=
!1;return(t.registerForDispose({dispose:function(){u=!0;i._releaseViewModel(r,n)}}),!u)?n.content:Q.
reject("The dynamic blade service view model was already disposed.")})}):Q.reject("The asset type does not have a dynamic blade service view model.")}
,n.prototype.getBandName=function(n){switch(n){case 2:return o.relatedResourcesBand;case 3:return o.
dependantResourcesBand;case 4:return o.internalResourcesBand;case 5:return o.linkedResourcesBand}return null}
,n.prototype.registerViewForChanges=function(n){if(this._viewsRegisteredForChanges.indexOf(n)!==-1)throw new
Error("View is already registered for changes.");this._viewsRegisteredForChanges.push(n)},n.prototype.
unregisterViewForChanges=function(n){this._viewsRegisteredForChanges.indexOf(n)!==-1&&this._viewsRegisteredForChanges.
remove(n)},n.prototype.refreshResourceMap=function(n){this._viewsRegisteredForChanges.forEach(function(
t){t.processResourceMapRefresh(n)})},n.prototype.processResourceGroupChange=function(n){var t=this,i=
new MsPortalFx.Internal.Base.TriggerableLifetimeManager;return this._getResourceMapProviderPromise(i).
then(function(r){return r.processResourceGroupChange(n),i.dispose(),t._clearStoredResourceGroupQueryResults(
),t._clearStoredResourceGroups(),t._clearStoredResourceQueryResults(),t._clearStoredResources(),t._viewsRegisteredForChanges.
forEach(function(t){t.processResourceGroupChanges(n)}),Q.resolve(!0)},function(){i.dispose();h.error(
"Failed to get the Hubs extension for the resource map provider view model.")})},n.prototype.getResourceGroup=
function(n,t){var u=this,i,r;return(this._clearStoredResourceGroups(!0),!t&&this._storedResourceGroups[
n])?Q.resolve(this._storedResourceGroups[n].data):(i=Q.defer(),r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,
this._getResourceMapProviderPromise(r).then(function(t){t.getResourceGroup(n).then(function(t){t.error?
i.reject(t.error):(u._storedResourceGroups[n]={queryTimeInMillisecondsSinceEpoch:(new Date).getTime(
),data:t.result},r.dispose(),i.resolve(t.result))},function(n){r.dispose();i.reject(n)})},function()
{r.dispose();i.reject("Failed to get the Hubs extension for the resource map provider view model.")}
),i.promise)},n.prototype.getResource=function(n,t){var u=this,i,r;return(this._clearStoredResources(
!0),!t&&this._storedResources[n])?Q.resolve(this._storedResources[n].data):(i=Q.defer(),r=new MsPortalFx.
Internal.Base.TriggerableLifetimeManager,this._getResourceMapProviderPromise(r).then(function(t){t.getResource(
n).then(function(t){t.error?i.reject(t.error):(u._storedResources[n]={queryTimeInMillisecondsSinceEpoch:
(new Date).getTime(),data:t.result},r.dispose(),i.resolve(t.result))},function(n){r.dispose();i.reject(
n)})},function(){r.dispose();i.reject("Failed to get the Hubs extension for the resource map provider view model.")}
),i.promise)},n.prototype.getResourceIcon=function(n){var t=this;return this.getResource(n,!1).then(
function(n){return t._getResourceTypesCachePromise().then(function(i){var r=t.getAssetTypeByResourceType(
n.type);return p(n,r,i)})})},n.prototype.populateTopologyViewModelForResourceGroup=function(n,t,i,r,
u,f,o){var s=this,l,h,c={};return this._getResourceTypesCachePromise().then(function(y){return s._populateViewModelForResourceGroup(
f,o,t,{addResourceGroup:function(t){return l=new w(s._buildResourceGroupNode(t,r,u)),n.resourceGroup(
l.resourceGroupNode),l},addResourceToResourceGroup:function(n,t,f){return h=new a(s._buildResourceNode(
t,c,i,r,u,y)),n.addResourceItem(h,f),h},addResourceToGroupResourceInResourceGroup:function(n,t,f,o){
s._incrementResourceTypeNodeCount(f,t.resourceNode);var h=new v(s,i,r,u,o.id);c[e.buildLowerCaseResourceId(
t.resourceNode.id())].addGroupResource(h)},addExistingResourceToResourceGroup:function(n,t,i){n.addResourceItem(
t,i)},addResourceToResource:function(n,t,f){return h=new a(s._buildResourceNode(t,c,i,r,u,y)),n.addResourceItem(
h,f),h},addResourceToGroupResourceInResource:function(n,t,f,o){s._incrementResourceTypeNodeCount(f,t.
resourceNode);var h=new v(s,i,r,u,o.id);c[e.buildLowerCaseResourceId(t.resourceNode.id())].addGroupResource(
h)},complete:function(){n.showResourceView(!1)}})})},n.prototype.populateListViewModelForResourceGroup=
function(n,t,i,r,u,f,o,s,h){var a=this,v,l;return this._getResourceTypesCachePromise().then(function(
p){return a._populateViewModelForResourceGroup(s,h,t,{addResourceGroup:function(){return v=new y(n,!1)}
,addResourceToResourceGroup:function(t,s,h){return i&&i.length>0&&!e.compareResourceId(s.id,i)?null:
r&&r!==0&&!a._groupArrayBandMatchesBand(h,r)?null:(l=new c(n,a._buildResourceListItem(s,null,u,f,o,p).
resourceListItem),t.addResourceItem(l,h),l)},addResourceToGroupResourceInResourceGroup:function(t,s,
h,v,y){i&&i.length>0&&!e.compareResourceId(s.resourceListItem.id,i)||(!r||r===0||a._groupArrayBandMatchesBand(
y,r))&&(l=new c(n,a._buildResourceListItem(v,null,u,f,o,p).resourceListItem),t.addResourceItem(l,y))}
,addExistingResourceToResourceGroup:function(){},addResourceToResource:function(t,s,h){return i&&i.length>
0&&!e.compareResourceId(s.id,i)?null:r&&r!==0&&!a._arrayBandMatchesBand(h,r)?null:(l=new c(n,a._buildResourceListItem(
s,null,u,f,o,p).resourceListItem),t.addResourceItem(l,h),l)},addResourceToGroupResourceInResource:function(
t,s,h,v,y){i&&i.length>0&&!e.compareResourceId(s.resourceListItem.id,i)||(!r||r===0||a._arrayBandMatchesBand(
y,r))&&(l=new c(n,a._buildResourceListItem(v,null,u,f,o,p).resourceListItem),t.addResourceItem(l,y))}
,complete:function(){}})})},n.prototype.populateTopologyViewModelForResource=function(n,t,i,r,u,f,o)
{var s=this,l,h,c={};return this._getResourceTypesCachePromise().then(function(y){return s._populateViewModelForResource(
f,o,t,{addResourceGroup:function(t){return l=new w(s._buildResourceGroupNode(t,r,u)),n.resourceGroup(
l.resourceGroupNode),l},addResourceToResourceGroup:function(n,t,f){return h=new a(s._buildResourceNode(
t,c,i,r,u,y)),n.addResourceItem(h,f),h},addResourceToGroupResourceInResourceGroup:function(n,t,f,o){
s._incrementResourceTypeNodeCount(f,t.resourceNode);var h=new v(s,i,r,u,o.id);c[e.buildLowerCaseResourceId(
t.resourceNode.id())].addGroupResource(h)},addExistingResourceToResourceGroup:function(n,t,i){n.addResourceItem(
t,i)},addResourceToResource:function(n,t,f){return h=new a(s._buildResourceNode(t,c,i,r,u,y)),n.addResourceItem(
h,f),h},addResourceToGroupResourceInResource:function(n,t,f,o){s._incrementResourceTypeNodeCount(f,t.
resourceNode);var h=new v(s,i,r,u,o.id);c[e.buildLowerCaseResourceId(t.resourceNode.id())].addGroupResource(
h)},complete:function(){n.showResourceView(!0)}})})},n.prototype.populateListViewModelForResource=function(
n,t,i,r,u,f,o,s,h){var a=this,v,l,p;return this._getResourceTypesCachePromise().then(function(w){return a.
_populateViewModelForResource(s,h,t,{addResourceGroup:function(){return v=new y(n,!0)},addResourceToResourceGroup:
function(s,h,v){return v!==0&&i&&i.length>0&&!e.compareResourceId(h.id,i)?null:r&&r!==0&&!a._groupArrayBandMatchesBand(
v,r)?null:(l=new c(n,a._buildResourceListItem(h,null,u,f,o,w).resourceListItem),p=r===4||r===5||i&&i.
length>0,h.id===t&&p||s.addResourceItem(l,v),l)},addResourceToGroupResourceInResourceGroup:function(
t,s,h,v,y){i&&i.length>0&&!e.compareResourceId(s.resourceListItem.id,i)||(!r||r===0||a._groupArrayBandMatchesBand(
y,r))&&(l=new c(n,a._buildResourceListItem(v,null,u,f,o,w).resourceListItem),t.addResourceItem(l,y))}
,addExistingResourceToResourceGroup:function(){},addResourceToResource:function(t,s,h){return i&&i.length>
0&&!e.compareResourceId(s.id,i)?null:r&&r!==0&&!a._arrayBandMatchesBand(h,r)?null:(l=new c(n,a._buildResourceListItem(
s,null,u,f,o,w).resourceListItem),t.addResourceItem(l,h),l)},addResourceToGroupResourceInResource:function(
t,s,h,v,y){i&&i.length>0&&!e.compareResourceId(s.resourceListItem.id,i)||(!r||r===0||a._arrayBandMatchesBand(
y,r))&&(l=new c(n,a._buildResourceListItem(v,null,u,f,o,w).resourceListItem),t.addResourceItem(l,y))}
,complete:function(){}})})},n.prototype.populateListViewModelForResourceGroupDelete=function(n,t,i,r,
u,f){var o=this,s,e;return this._getResourceTypesCachePromise().then(function(h){return o._populateViewModelForResourceGroupDelete(
f,t,{addResourceGroup:function(){return s=new y(n,!1)},addResourceToResourceGroup:function(t,f,s){return e=
new c(n,o._buildResourceDeleteListItem(f,null,i,r,u,h).resourceListItem),t.addResourceItem(e,s),e},addResourceToGroupResourceInResourceGroup:
function(t,f,s,l,a){e=new c(n,o._buildResourceDeleteListItem(l,null,i,r,u,h).resourceListItem);t.addResourceItem(
e,a)},addExistingResourceToResourceGroup:function(){},addResourceToResource:function(t,f,s){return e=
new c(n,o._buildResourceDeleteListItem(f,null,i,r,u,h).resourceListItem),t.addResourceItem(e,s),e},addResourceToGroupResourceInResource:
function(t,f,s,l,a){e=new c(n,o._buildResourceDeleteListItem(l,null,i,r,u,h).resourceListItem);t.addResourceItem(
e,a)},complete:function(){}})})},n.prototype.getResourceGroupQueryResults=function(n,t){var u=this,i,
r;if(this._clearStoredResourceGroupQueryResults(!0),this._storedResourceGroupQueryResults[n]){if(!t)
return Q.resolve(this._storedResourceGroupQueryResults[n].data);delete this._storedResourceGroupQueryResults[
n]}return i=Q.defer(),r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,this._getResourceMapProviderPromise(
r).then(function(t){t.getResourceGroupMapResults(n).then(function(t){t.error?i.reject(t.error):(u._storedResourceGroupQueryResults[
n]={queryTimeInMillisecondsSinceEpoch:(new Date).getTime(),data:t.result},r.dispose(),i.resolve(t.result))}
,function(n){r.dispose();i.reject(n)})},function(){r.dispose();i.reject("Failed to get the Hubs extension for the resource map provider view model.")}
),i.promise},n.prototype.getResourceQueryResultsPromise=function(n,t){var u=this,i,r;if(this._clearStoredResourceQueryResults(
!0),this._storedResourceQueryResults[n]){if(!t)return Q.resolve(this._storedResourceQueryResults[n].
data);delete this._storedResourceQueryResults[n]}return i=Q.defer(),r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,
this._getResourceMapProviderPromise(r).then(function(t){t.getResourceMapResults(n).then(function(t){
t.error?i.reject(t.error):(u._storedResourceQueryResults[n]={queryTimeInMillisecondsSinceEpoch:(new Date).
getTime(),data:t.result},r.dispose(),i.resolve(t.result))},function(n){r.dispose();i.reject(n)})},function(
){r.dispose();i.reject("Failed to get the Hubs extension for the resource map provider view model.")}
),i.promise},n.prototype.deleteResourceGroup=function(n,t){var i=this,s=e.parseResourceGroupDescriptor(
n),u={title:o.deleteResourceGroupLabel,description:o.deleteResourceGroupDescription.format(t),status:
3,timestamp:new Date},f=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;this._getResourceMapProviderPromise(
f).then(function(e){e.getResourceGroupMapResults(n).then(function(s){if(s.error){f.dispose();var c={
error:s.error.statusText,message:s.error.message,fullMessage:o.failedToDeleteResourceGroup.format(t,
s.error.message)};h.error("Failed to delete the resource group: {0}. {1}.".format(c.error,c.message));
i._updateDeleteResourceGroupNoticationAsFailed(u,n,t,c);i.processResourceGroupChange(n)}else e.deleteResourceGroup(
n).then(function(o){i.processResourceGroupChange(n);u.timestamp=new Date;u.correlationIds=[o.operationId||
MsPortalFx.Util.newGuid()];r.getNotificationManager().addClientNotification(u);i._handleDeleteOperationPolling(
e,f,o,n,t,u,s.result)},function(){f.dispose();var r=i._getErrorFromRejectArguments(arguments,t);h.error(
"Failed to delete the resource group: {0}. {1}.".format(r.error,r.message));i._updateDeleteResourceGroupNoticationAsFailed(
u,n,t,r);i.processResourceGroupChange(n)})},function(){f.dispose();h.error("Failed to get the Hubs extension for the resource map provider view model.");
i._updateDeleteResourceGroupNoticationAsFailed(u,n,t);i.processResourceGroupChange(n)})},function(){
f.dispose();h.error("Failed to get the Hubs extension for the resource map provider view model.");i.
_updateDeleteResourceGroupNoticationAsFailed(u,n,t);i.processResourceGroupChange(n)})},n.prototype.mapAssetIdToResourceId=
function(n){return s.mapAssetIdToResourceIdOverride?s.mapAssetIdToResourceIdOverride(n):this._assetTypeService.
mapAssetIdToResourceId(n)},n.prototype.tryMapAssetIdToResourceId=function(n){return s.mapAssetIdToResourceIdOverride?
s.mapAssetIdToResourceIdOverride(n):this._assetTypeService.tryMapAssetIdToResourceId(n)},n.prototype.
mapResourceIdToAssetId=function(n){return s.mapResourceIdToAssetIdOverride?s.mapResourceIdToAssetIdOverride(
n):this._assetTypeService.mapResourceIdToAssetId(n)},n.prototype.tryMapResourceIdToAssetId=function(
n){return s.mapResourceIdToAssetIdOverride?s.mapResourceIdToAssetIdOverride(n):this._assetTypeService.
tryMapResourceIdToAssetId(n)},n.prototype.tryGetAssetTypeByResourceId=function(n){var r=this,t=Q.defer(
),i,u;try{i=e.buildResourceTypeFromResourceId(n)}catch(f){return t.reject(f),t.promise}if(this.hasAssetTypeByResourceType(
i))t.resolve(this.getAssetTypeByResourceType(i));else if(this._extensionManager.extensionLoader.manifestLoadComplete)
t.reject(new Error("All manifests were loaded and no assetType found for the provided resourceId: {0}.".
format(n)));else{u=b.setTimeout(function(){t.reject(new Error("All manifests were loaded and no assetType found for the provided resourceId: {0}.".
format(n)))},ft);this._extensionManager.onManifestLoad(function(){return r.hasAssetTypeByResourceType(
i)?(t.resolve(r.getAssetTypeByResourceType(i)),b.clearTimeout(u),!1):!0})}return t.promise},n.prototype.
mapResourceIdToDynamicSelectionAndIcon=function(n,t){return s.mapResourceIdToDynamicSelectionAndIconOverride?
s.mapResourceIdToDynamicSelectionAndIconOverride(n,t):this._assetTypeService.mapResourceIdToDynamicSelectionAndIcon(
n,t)},n.prototype.tryMapResourceIdToDynamicSelectionAndIcon=function(n,t){return s.mapResourceIdToDynamicSelectionAndIconOverride?
s.mapResourceIdToDynamicSelectionAndIconOverride(n,t):this._assetTypeService.tryMapResourceIdToDynamicSelectionAndIcon(
n,t)},n.prototype.getResourceAssetInformation=function(n){return this._getResourceAssetInformation(n,
!0)},n.prototype.tryGetResourceAssetInformation=function(n){return this._getResourceAssetInformation(
n,!1)},n.prototype.getDiagnosticsData=function(){var n=[];return this._assetTypes().forEach(function(
t){var i={name:t.assetTypeManifest.name,resourceTypeName:t.assetTypeManifest.resourceType.resourceTypeName,
hasMappingService:!!t.assetTypeManifest.resourceType.mappingViewModel,hideOnMap:t.assetTypeManifest.
resourceType.hideOnResourceMap};n.push(i)}),{resourceAssetTypes:n}},n.prototype._getResourceAssetInformation=
function(n,t){var o=this,i,u,f,r;return s.getResourceAssetInformationOverride?s.getResourceAssetInformationOverride(
n):(i={},n.forEach(function(n){var t=e.buildResourceTypeFromResourceId(n);i[t]||(i[t]=[]);i[t].push(
n)}),u=Object.keys(i),u.sort(),f=[],u.forEach(function(n){f.push(o._getResourceTypeMappingPacket(n))}
),r=Q.defer(),this._getResourceTypesCachePromise().then(function(){Q.allSettled(f).then(function(n){
var u=[],f;n.forEach(function(n){if(n.state===nt){var r=n.value.resourceType,t=n.value.assetType,f=n.
value.mapping,e=n.value.lifetimeManager;i[r].sort();i[r].forEach(function(n){var r={resourceId:n,assetId:
null,extensionName:null,assetType:null,compositeDisplayName:null,icon:null,browseType:-1,viewModel:null,
contracts:0,dynamicSelection:null},i;t?(i=Q.defer(),f.mapResourceIdToAssetId(n).then(function(u){o._assetTypeService.
tryMapResourceIdToDynamicSelectionAndIcon(n,!1).then(function(r){i.resolve({resourceId:n,assetId:u,extensionName:
t.extension,assetType:t.assetTypeManifest.name,compositeDisplayName:t.compositeDisplayName,icon:r.icon,
browseType:t.assetTypeManifest.browseType!==undefined?t.assetTypeManifest.browseType:-1,viewModel:t.
assetTypeManifest.viewModel,contracts:t.assetTypeManifest.contracts,dynamicSelection:r.selection})},
function(){i.resolve(r)})},function(){i.resolve(r)}),u.push(i.promise)):u.push(Q.resolve(r))})}});f=
function(){n.forEach(function(n){n.state===nt&&n.value.lifetimeManager&&n.value.lifetimeManager.dispose(
)})};Q.all(u).then(function(n){f();r.resolve(n)},function(){f();r.reject();t&&h.error("Failed to resolve all the information promises in get resource asset information.")}
)},function(){r.reject();t&&h.error("Failed to resolve all the resource type mapping promises in get resource asset information.")}
)}),r.promise)},n.prototype._handleDeleteOperationPolling=function(n,t,i,r,u,f,e){var o=this,s;i.status===
200?(this._assetManager.markAssetDeleted(g,k,r),this._processAssetDeletion(k,r,e),t.dispose(),this._updateDeleteResourceGroupNotificationAsSuccess(
f),this.processResourceGroupChange(r)):i.status===202?s=setTimeout(function(){clearTimeout(s);n.getOperationResponse(
i.operationId).then(function(i){o._handleDeleteOperationPolling(n,t,i,r,u,f,e)},function(){t.dispose(
);var n=o._getErrorFromRejectArguments(arguments,u);h.error("Failed to delete the resource group: {0}. {1}.".
format(n.error,n.message));o._updateDeleteResourceGroupNoticationAsFailed(f,r,u,n);o.processResourceGroupChange(
r)})},i.retryAfterInSeconds*1e3):(h.error("Failed to delete the resource group, Code: {0}.".format(i.
status)),this._updateDeleteResourceGroupNoticationAsFailed(f,r,u),this.processResourceGroupChange(r))}
,n.prototype._getErrorFromRejectArguments=function(n,t){var i,r;if(n.length<1)return{error:"unknown error",
message:"unknown error",fullMessage:o.failedToDeleteResourceGroupUnknownError.format(t)};if(n.length<
2)return(i=n[0],i.statusText)?{error:i.statusText,message:i.message,fullMessage:o.failedToDeleteResourceGroup.
format(t,i.message)}:i.message?{error:i.message,message:i.message,fullMessage:o.failedToDeleteResourceGroup.
format(t,i.message)}:{error:"unknown error",message:"unknown error",fullMessage:o.failedToDeleteResourceGroupUnknownError.
format(t)};if(n.length<3)return{error:n[1],message:"unknown error",fullMessage:o.failedToDeleteResourceGroup.
format(t,n[1])};var u=null,f=null,e=n[2];return e&&e.responseText&&(r=JSON.parse(e.responseText),u=r&&
r.httpStatusCode,f=r&&r.message),{error:u||n[1],message:f||u||n[1],fullMessage:o.failedToDeleteResourceGroup.
format(t,f||u||n[1])}},n.prototype._updateDeleteResourceGroupNotificationAsSuccess=function(n){n.status=
4;n.timestamp=new Date;r.getNotificationManager().addClientNotification(n)},n.prototype._updateDeleteResourceGroupNoticationAsFailed=
function(n,t,i,u){u===void 0&&(u=null);n.status=2;n.timestamp=new Date;n.description=u?u.fullMessage:
o.failedToDeleteResourceGroupUnknownError.format(i);n.asset={extensionName:MsPortalFx.Base.Constants.
ExtensionNames.Hubs,assetType:"ResourceGroupEvents",assetId:t};r.getNotificationManager().addClientNotification(
n)},n.prototype._processAssetDeletion=function(n,t,i){n===k?(this.processResourceGroupChange(t),i&&this.
_signalResourceResourcesChanged(t,i)):this.processResourceGroupChange(null)},n.prototype._signalResourceResourcesChanged=
function(n,t){var r=this,i,f=[],u;t.childResources.forEach(function(n){if(i=n.type,f.indexOf(i)===-1&&
(f.push(i),r.hasAssetTypeByResourceType(i))){var t=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;
u=r.getAssetTypeByResourceType(i);r.getResourceTypeMappingPromiseForAssetType(u,t).then(function(n){
n.signalResourcesChanged?n.signalResourcesChanged().finally(function(){t.dispose()}):t.dispose()},function(
n){t.dispose();h.error("Could not signal asset type "+u.compositeDisplayName.plural+": "+n)})}})},n.
prototype._getResourceTypeMappingPacket=function(n){var t=Q.defer(),i,r;return this.hasAssetTypeByResourceType(
n)?(i=this.getAssetTypeByResourceType(n),i.assetTypeManifest.resourceType&&i.assetTypeManifest.resourceType.
mappingViewModel?(r=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,this.getResourceTypeMappingPromiseForAssetType(
i,r).then(function(u){t.resolve({resourceType:n,assetType:i,mapping:u,lifetimeManager:r})},function(
){r.dispose();t.resolve({resourceType:n})})):t.resolve({resourceType:n})):t.resolve({resourceType:n}),
t.promise},n.prototype._calculateAge=function(n){var t=(new Date).getTime();return t-n},n.prototype.
_clearStoredResourceGroupQueryResults=function(n){n===void 0&&(n=!1);n?this._clearExpiredCacheItems(
this._storedResourceGroupQueryResults):this._storedResourceGroupQueryResults={}},n.prototype._clearStoredResourceQueryResults=
function(n){n===void 0&&(n=!1);n?this._clearExpiredCacheItems(this._storedResourceQueryResults):this.
_storedResourceQueryResults={}},n.prototype._clearStoredResourceGroups=function(n){n===void 0&&(n=!1);
n?this._clearExpiredCacheItems(this._storedResourceGroups):this._storedResourceGroups={}},n.prototype.
_clearStoredResources=function(n){n===void 0&&(n=!1);n?this._clearExpiredCacheItems(this._storedResources):
this._storedResources={}},n.prototype._clearExpiredCacheItems=function(n,t){var i=this;t===void 0&&(
t=et);this._clearCacheItems(n,function(n,r){return i._calculateAge(r.queryTimeInMillisecondsSinceEpoch)>
t})},n.prototype._clearCacheItems=function(n,t){Object.keys(n).forEach(function(i){(!t||t(i,n[i]))&&
delete n[i]})},n.prototype._groupArrayBandMatchesBand=function(n,t){switch(n){case 0:return t===4;case
1:return t===5}return!1},n.prototype._arrayBandMatchesBand=function(n,t){switch(n){case 2:return t===
3;case 0:return t===4;case 3:return t===5;case 1:return t===2}return!1},n.prototype._populateViewModelForResourceGroup=
function(n,t,i,r){var o=this,s,c,l={},f={internal:{},linked:{}},h,a,w,y,b,u,v,k,p=Q.defer();return this.
getResourceGroupQueryResults(i,t).then(function(t){if(t.childResources.sort(o._compareResource),t.linkedResources.
sort(o._compareResource),n&&o._deepCompareResourceGroupResults(t,n)){p.resolve({repopulationNeeded:!1,
results:null});return}s=r.addResourceGroup(t.resourceGroup);t.childResources.forEach(function(n){(h=
e.buildLowerCaseResourceId(n.id),l[h])||(l[h]=!0,a=e.parseResourceDescriptor(n.id),a.types.length===
1)&&(u=e.buildResourceTypeFromResourceDescriptor(a),o.hasAssetTypeByResourceType(u)?(v=o.getAssetTypeByResourceType(
u),k=!v.assetTypeManifest.resourceType||v.assetTypeManifest.resourceType.hideOnResourceMap):k=!0,k?t.
childResources.forEach(function(n){(y=e.buildLowerCaseResourceId(n.id),b=e.parseResourceDescriptor(n.
id),y.indexOf(h)===0&&b.types.length===a.types.length+1)&&(l[y]||(l[y]=!0,u=e.buildResourceTypeFromResourceDescriptor(
b),o.hasAssetTypeByResourceType(u))&&(v=o.getAssetTypeByResourceType(u),v.assetTypeManifest.resourceType&&
!v.assetTypeManifest.resourceType.hideOnResourceMap&&(f.internal[u.toLowerCase()]?r.addResourceToGroupResourceInResourceGroup(
s,f.internal[u.toLowerCase()],u,n,0):(w=r.addResourceToResourceGroup(s,n,0),w&&(f.internal[u.toLowerCase(
)]=w)))))}):f.internal[u.toLowerCase()]?r.addResourceToGroupResourceInResourceGroup(s,f.internal[u.toLowerCase(
)],u,n,0):(c=r.addResourceToResourceGroup(s,n,0),c&&(f.internal[u.toLowerCase()]=c)))});t.linkedResources.
forEach(function(n){(h=e.buildLowerCaseResourceId(n.id),l[h])||(l[h]=!0,a=e.parseResourceDescriptor(
n.id),u=e.buildResourceTypeFromResourceDescriptor(a),o.hasAssetTypeByResourceType(u))&&(f.linked[u.toLowerCase(
)]?r.addResourceToGroupResourceInResourceGroup(s,f.linked[u.toLowerCase()],u,n,1):(c=r.addResourceToResourceGroup(
s,n,1),c&&(f.linked[u.toLowerCase()]=c)))});r.complete();p.resolve({repopulationNeeded:!0,results:t})}
,function(n){p.reject(n)}),p.promise},n.prototype._populateViewModelForResource=function(n,t,i,r){var
c=this,w,l,d,v,p,g,nt,ut,o,s,h,tt,b,it,a={},f={related:{},dependant:{},internal:{},linked:{}},u,y,rt,
k=Q.defer();return this.getResourceQueryResultsPromise(i,t).then(function(t){if(t.relatedResourcesFromResource.
sort(c._compareResource),t.linkResourcesFromResource.sort(c._compareResource),t.linkResourcesToResource.
sort(c._compareResource),t.resourcesInResourceGroup.sort(c._compareResource),n&&c._deepCompareResourceResults(
t,n)){k.resolve({repopulationNeeded:!1,results:null});return}(w=r.addResourceGroup(t.resourceGroup),
d=e.buildLowerCaseResourceId(t.resource.id),a[d]=!0,v=e.parseResourceDescriptor(t.resource.id),u=e.buildResourceTypeFromResourceDescriptor(
v),c.hasAssetTypeByResourceType(u))&&(l=r.addResourceToResourceGroup(w,t.resource,0),t.relatedResourcesFromResource.
forEach(function(n){(s=e.buildLowerCaseResourceId(n.id),a[s])||(a[s]=!0,h=e.parseResourceDescriptor(
n.id),u=e.buildResourceTypeFromResourceDescriptor(h),c.hasAssetTypeByResourceType(u))&&(f.related[u.
toLowerCase()]?r.addResourceToGroupResourceInResource(l,f.related[u.toLowerCase()],u,n,1):(o=r.addResourceToResource(
l,n,1),o&&(f.related[u.toLowerCase()]=o)))}),t.relatedResourcesFromResource.length===0&&v.types.length>
1&&(p=t.parentResource,g=e.buildLowerCaseResourceId(p.id),a[g]||(a[g]=!0,ut=e.parseResourceDescriptor(
p.id),u=e.buildResourceTypeFromResourceDescriptor(ut),c.hasAssetTypeByResourceType(u)&&(f.related[u.
toLowerCase()]?r.addResourceToGroupResourceInResource(l,f.related[u.toLowerCase()],u,p,1):(nt=r.addResourceToResource(
l,p,1),nt&&(f.related[u.toLowerCase()]=nt))))),t.resourcesInResourceGroup.forEach(function(n){if(s=e.
buildLowerCaseResourceId(n.id),h=e.parseResourceDescriptor(n.id),s.indexOf(d+"/")===0&&h.types.length===
v.types.length+1){if(a[s])return;if(a[s]=!0,u=e.buildResourceTypeFromResourceDescriptor(h),!c.hasAssetTypeByResourceType(
u))return;f.dependant[u.toLowerCase()]?r.addResourceToGroupResourceInResource(l,f.dependant[u.toLowerCase(
)],u,n,2):(o=r.addResourceToResource(l,n,2),o&&(f.dependant[u.toLowerCase()]=o))}else if(h.types.length===
1){if(a[s])return;a[s]=!0;u=e.buildResourceTypeFromResourceDescriptor(h);c.hasAssetTypeByResourceType(
u)?(y=c.getAssetTypeByResourceType(u),rt=!y.assetTypeManifest.resourceType||y.assetTypeManifest.resourceType.
hideOnResourceMap):rt=!0;rt?t.resourcesInResourceGroup.forEach(function(n){(b=e.buildLowerCaseResourceId(
n.id),it=e.parseResourceDescriptor(n.id),b.indexOf(s)===0&&it.types.length===h.types.length+1)&&(a[b]||
(a[b]=!0,u=e.buildResourceTypeFromResourceDescriptor(it),c.hasAssetTypeByResourceType(u))&&(y=c.getAssetTypeByResourceType(
u),y.assetTypeManifest.resourceType&&!y.assetTypeManifest.resourceType.hideOnResourceMap&&(f.internal[
u.toLowerCase()]?r.addResourceToGroupResourceInResource(l,f.internal[u.toLowerCase()],u,n,0):(tt=r.addResourceToResource(
l,n,0),tt&&(f.internal[u.toLowerCase()]=tt)))))}):f.internal[u.toLowerCase()]?r.addResourceToGroupResourceInResource(
l,f.internal[u.toLowerCase()],u,n,0):(o=r.addResourceToResource(l,n,0),o&&(f.internal[u.toLowerCase(
)]=o))}}),t.linkResourcesFromResource.forEach(function(n){if((s=e.buildLowerCaseResourceId(n.id),!a[
s])&&(a[s]=!0,h=e.parseResourceDescriptor(n.id),h.subscription!==v.subscription||h.resourceGroup!==v.
resourceGroup)){if(u=e.buildResourceTypeFromResourceDescriptor(h),!c.hasAssetTypeByResourceType(u))return;
f.linked[u.toLowerCase()]?r.addResourceToGroupResourceInResource(l,f.linked[u.toLowerCase()],u,n,3):
(o=r.addResourceToResource(l,n,3),o&&(r.addExistingResourceToResourceGroup(w,o,1),f.linked[u.toLowerCase(
)]=o))}}),t.linkResourcesToResource.forEach(function(n){if((s=e.buildLowerCaseResourceId(n.id),!a[s])&&
(a[s]=!0,h=e.parseResourceDescriptor(n.id),h.subscription!==v.subscription||h.resourceGroup!==v.resourceGroup))
{if(u=e.buildResourceTypeFromResourceDescriptor(h),!c.hasAssetTypeByResourceType(u))return;f.linked[
u.toLowerCase()]?r.addResourceToGroupResourceInResource(l,f.linked[u.toLowerCase()],u,n,3):(o=r.addResourceToResource(
l,n,3),o&&(r.addExistingResourceToResourceGroup(w,o,1),f.linked[u.toLowerCase()]=o))}}),r.complete(),
k.resolve({repopulationNeeded:!0,results:t}))},function(n){k.reject(n)}),k.promise},n.prototype._populateViewModelForResourceGroupDelete=
function(n,t,i){var f=this,o,s,l={},h={internal:{}},c,a,r,u=Q.defer();return this.getResourceGroupQueryResults(
t,!0).then(function(t){if(t.childResources.sort(f._compareResource),t.linkedResources.sort(f._compareResource),
n&&f._deepCompareResourceGroupResults(t,n)){u.resolve({repopulationNeeded:!1,results:null});return}o=
i.addResourceGroup(t.resourceGroup);t.childResources.forEach(function(n){(c=e.buildLowerCaseResourceId(
n.id),l[c])||(l[c]=!0,a=e.parseResourceDescriptor(n.id),r=e.buildResourceTypeFromResourceDescriptor(
a),h.internal[r.toLowerCase()]?i.addResourceToGroupResourceInResourceGroup(o,h.internal[r.toLowerCase(
)],r,n,2):(s=i.addResourceToResourceGroup(o,n,2),s&&(h.internal[r.toLowerCase()]=s)))});i.complete();
u.resolve({repopulationNeeded:!0,results:t})},function(n){u.reject(n)}),u.promise},n.prototype._compareResource=
function(n,t){var u=e.buildLowerCaseResourceId(n.id),f=e.buildLowerCaseResourceId(t.id),i,r;return u===
f?0:(i=e.parseResourceDescriptor(n.id),r=e.parseResourceDescriptor(t.id),i.types.length!==r.types.length)?
i.types.length-r.types.length:u<f?-1:1},n.prototype._compareResourceArray=function(n,t){if(n&&t){if(
n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(e.compareResourceId(n[i].id,t[i].id))return!1;
return!0}return n===t},n.prototype._deepCompareResourceGroupResults=function(n,t){return n&&t?n.resourceGroup!==
t.resourceGroup?!1:this._compareResourceArray(n.childResources,t.childResources)&&this._compareResourceArray(
n.linkedResources,t.linkedResources):n===t},n.prototype._deepCompareResourceResults=function(n,t){return n&&
t?n.resourceGroup!==t.resourceGroup?!1:n.resource!==t.resource?!1:this._compareResourceArray(n.relatedResourcesFromResource,
t.relatedResourcesFromResource)&&this._compareResourceArray(n.resourcesInResourceGroup,t.resourcesInResourceGroup)&&
this._compareResourceArray(n.linkResourcesFromResource,t.linkResourcesFromResource)&&this._compareResourceArray(
n.linkResourcesToResource,t.linkResourcesToResource):n===t},n.prototype._incrementResourceTypeNodeCount=
function(n,t){var i=this.hasAssetTypeByResourceType(n)?this.getAssetTypeByResourceType(n):null;t.count(
t.count()+1);t.name(i?i.compositeDisplayName.plural:null);t.icon(it(i));t.description();t.descriptionUri(
);t.status();t.statusMessage()},n.prototype._buildResourceGroupNode=function(n,t){var i=new d.ResourceGroup;
return i.id(n.id),i.name(n.name),i.iconType(5),t(n.id,null),i},n.prototype._buildResourceNode=function(
n,t,i,r,u,f){var a=e.parseResourceDescriptor(n.id),h=n.type,s=new d.Resource,c,l;return s.id(n.id),this.
hasAssetTypeByResourceType(h)?(c=this.getAssetTypeByResourceType(h),s.name(c.compositeDisplayName.plural),
c.assetTypeManifest.resourceType?s.icon(p(n,c,f)):s.iconType(1)):(s.name(o.unavailableNode),s.iconType(
1)),s.description(o.loading),s.resourceGroupName(e.buildResourceGroupIdFromResourceDescriptor(a)),s.
type(h),s.status(0),l=new lt(this,h,i,r,u,s),t[e.buildLowerCaseResourceId(n.id)]=l,l.addGroupResource(
new v(this,i,r,u,n.id)),s},n.prototype._buildResourceListItem=function(n,t,i,r,u,f){var h=e.parseResourceDescriptor(
n.id),l=n.type,s=this.getAssetTypeByResourceType(l),c;return c={id:n.id,name:ko.observable(s.compositeDisplayName.
plural),type:ko.observable(s.compositeDisplayName.plural),description:ko.observable(o.loading),descriptionUri:
ko.observable(),icon:ko.observable(p(n,s,f)),status:ko.observable(0),statusMessage:ko.observable(),subscriptionId:
ko.observable(h.subscription),resourceGroupName:ko.observable(h.resourceGroup),grouping:t,extension:
s.extension,assetType:s.assetTypeManifest.name,assetId:null},new tt(this,i,r,u,c)},n.prototype._buildResourceDeleteListItem=
function(n,t,i,r,u,f){var h=e.parseResourceDescriptor(n.id),c=n.type,s,l;return this.hasAssetTypeByResourceType(
c)&&(s=this.getAssetTypeByResourceType(c)),l={id:n.id,name:ko.observable(s?s.compositeDisplayName.plural:
h.resource),type:ko.observable(s?s.compositeDisplayName.plural:h.type),description:ko.observable(o.loading),
descriptionUri:ko.observable(),icon:ko.observable(p(n,s,f)),status:ko.observable(0),statusMessage:ko.
observable(),subscriptionId:ko.observable(h.subscription),resourceGroupName:ko.observable(h.resourceGroup),
grouping:t,extension:s?s.extension:null,assetType:s?s.assetTypeManifest.name:null,assetId:null},new tt(
this,i,r,u,l)},n.prototype._getResourceMapProviderPromise=function(n){var t=this;return Q(this._extensionManager.
getExtensionByName(g)).then(function(i){return Q(i.getViewModel("ResourceMap$ResourceMapProviderViewModel")).
then(function(r){var u=!1;return(n.registerForDispose({dispose:function(){u=!0;t._releaseViewModel(i,
r)}}),!u)?r.content:Q.reject("The resource map provider service view model was already disposed.")})}
)},n.prototype._getAssetTypeById=function(n){return this._assetTypes().first(function(t){return t.id===
n})},n.prototype._getAssetTypeByResourceType=function(n){return this._assetTypes().first(function(t)
{return t.assetTypeManifest.resourceType.resourceTypeName.toUpperCase()===n.toUpperCase()})},n.prototype.
_getAssetTypeByOwnerAndType=function(n,t){return this._assetTypes().first(function(i){return i.extension===
n&&i.assetTypeManifest.name===t})},n.prototype._getResourceTypesCachePromise=function(){if(this._resourceTypesCachePromise)
return this._resourceTypesCachePromise;var n=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;
return this._resourceTypesCachePromise=this._getResourceMapProviderPromise(n).then(function(t){return t.
getResourceTypeCache().then(function(t){return n.dispose(),n=null,t})}),this._resourceTypesCachePromise}
,n.prototype._listenForExtensions=function(){var t=this;this._assetTypes.removeAll();this._extensionManager.
onManifestLoad(function(i){return i.assetTypes&&i.assetTypes.forEach(function(r){var f,e;if(r.resourceType)
{if(f=r.resourceType.resourceTypeName.toLowerCase(),t._duplicateResourceTypes[f]){h.error("The extension {0} has a duplicate resource type {1} originally found in the {2} extension.".
format(i.name,f,t._duplicateResourceTypes[f]));return}if(e=t._assetTypes().first(function(n){return n.
assetTypeManifest.resourceType.resourceTypeName.toLowerCase()===f}),e){t._assetTypes().remove(e);t._duplicateResourceTypes[
f]=e.extension;h.error("The extension {0} has a duplicate resource type {1} originally found in the {2} extension.".
format(i.name,f,t._duplicateResourceTypes[f]));return}t._assetTypes.push({assetTypeManifest:r,id:i.name+
"_"+r.name,compositeDisplayName:u.getBackwardCompatibleCompositeDisplayName(r),extension:i.name,icon:
n._getAssetTypeIcon(r)})}}),!0})},n._getAssetTypeIcon=function(n){return n&&n.icon?n.icon:MsPortalFx.
Base.Images.Blank()},n.prototype._releaseViewModel=function(n,t){MsPortalFx.Base.Utilities.disposeViewModelProperties(
t);n.releaseViewModel(t)},n}();ut=function(){function n(n,t){MsPortalFx.Internal.Extension.mapAssetIdToResourceIdEndPoint.
register(n,null,function(n){return t.mapAssetIdToResourceId(n)});MsPortalFx.Internal.Extension.mapResourceIdToAssetIdEndPoint.
register(n,null,function(n){return t.mapResourceIdToAssetId(n)});MsPortalFx.Internal.Extension.mapResourceIdToDynamicSelectionAndIconEndPoint.
register(n,null,function(n){return t.mapResourceIdToDynamicSelectionAndIcon(n.resourceId,n.forceBladeSelection)}
);MsPortalFx.Internal.Extension.getResourceAssetInformationEndPoint.register(n,null,function(n){return t.
getResourceAssetInformation(n)})}return n}()}(e||(e={})),e});define("MsPortalImpl/UI/Hubs/ViewModels/UI.ResourceMap.ViewModelRegistration",
["require","exports","../../../Prototype/ViewModelManager","./UI.Hubs.Common"],function(n,t,i,r){var
u=MsPortalFx.Internal.ViewModels.Part.composePartViewModel,f=MsPortalFx.Extension.composeViewModel,e;
return function(n){"use strict";function o(n){var r={resourceMapManager:n};s(r);h(r);c(r);l(r);a(r);
v(r);i.ViewModelManager.registerWithState("ResourceMap$ResourceGroupsPropertyProviderService",e+"UI.ResourceGroups.PropertyProviderService",
function(n,t){return f(function(i,u){return new n.ResourceGroupsPropertyProviderService(u,t,r)},"ResourceMap$ResourceGroupsPropertyProviderService")}
);i.ViewModelManager.registerWithState("ResourceMap$AddResourceCommandViewModel",t+"UI.ResourceGroupMap.Blade",
function(n,t){return f(function(i,u){return new n.AddResourceCommandViewModel(u,t,r)},"ResourceMap$AddResourceCommandViewModel")}
)}function s(n){i.ViewModelManager.registerWithState("ResourceMap$ResourceMapRefreshCommandViewModel",
t+"UI.ResourceMap.Commands",function(t,i){return f(function(r,u){return new t.ResourceMapRefreshCommandViewModel(
u,i,n)},"ResourceMap$ResourceMapRefreshCommandViewModel")})}function h(n){i.ViewModelManager.registerWithState(
"ResourceMap$ResourceGroupMapPartViewModel",t+"UI.ResourceGroupMap.Part",function(t,i){return u(function(
r){return new t.ResourceGroupMapPartViewModel(r,i,n)},{initialState:i})});i.ViewModelManager.registerWithState(
"ResourceMap$ResourceGroupMapPinnedPartViewModel",t+"UI.ResourceGroupMap.PinnedPart",function(t,i){return u(
function(r){return new t.ResourceGroupMapPinnedPartViewModel(r,i,n)})});i.ViewModelManager.registerWithState(
"ResourceMap$ResourceGroupMapBladeViewModel",t+"UI.ResourceGroupMap.Blade",function(t,i){var u=new r.
BladeContainerViewModel,f=new t.ResourceGroupMapBladeViewModel(u,i,n);return new MsPortalFx.Internal.
ViewModels.CompositionViewModel(u,f,i)});i.ViewModelManager.registerWithState("ResourceMap$ResourceGroupDeleteCommandViewModel",
t+"UI.ResourceGroupMap.Blade",function(t,i){return f(function(r,u){return new t.DeleteResourceGroupCommandViewModel(
u,i,n)},"ResourceMap$ResourceGroupDeleteCommandViewModel")})}function c(n){i.ViewModelManager.registerWithState(
"ResourceMap$ResourceGroupListPartViewModel",t+"UI.ResourceGroupList.Part",function(t,i){return u(function(
r){return new t.ResourceGroupListPartViewModel(r,i,n)})});i.ViewModelManager.registerWithState("ResourceMap$ResourceGroupListPinnedPartViewModel",
t+"UI.ResourceGroupList.PinnedPart",function(t,i){return u(function(r){return new t.ResourceGroupListPinnedPartViewModel(
r,i,n)})});i.ViewModelManager.registerWithState("ResourceMap$ResourceGroupListBladeViewModel",t+"UI.ResourceGroupList.Blade",
function(t,i){var u=new r.BladeContainerViewModel,f=new t.ResourceGroupListBladeViewModel(u,i,n);return new
MsPortalFx.Internal.ViewModels.CompositionViewModel(u,f,i)})}function l(n){i.ViewModelManager.registerWithState(
"ResourceMap$ResourceGroupDeleteListPartViewModel",t+"UI.ResourceGroupDelete.ListPart",function(t,i)
{return u(function(r){return new t.ResourceGroupDeleteListPartViewModel(r,i,n)})});i.ViewModelManager.
registerWithState("ResourceMap$ResourceGroupDeleteWarningPartViewModel",t+"UI.ResourceGroupDelete.WarningPart",
function(t,i){return u(function(r){return new t.ResourceGroupDeleteWarningPartViewModel(r,i,n)})});i.
ViewModelManager.registerWithState("ResourceMap$ResourceGroupDeleteBladeViewModel",t+"UI.ResourceGroupDelete.Blade",
function(t,i){var u=new r.BladeContainerViewModel,f=new t.ResourceGroupDeleteBladeViewModel(u,i,n);return new
MsPortalFx.Internal.ViewModels.CompositionViewModel(u,f,i)});i.ViewModelManager.registerWithState("ResourceMap$ResourceGroupDeleteActionBarViewModel",
t+"UI.ResourceGroupDelete.ActionBar",function(t,i){return f(function(r,u){return new t.ResourceGroupDeleteActionBarViewModel(
u,i,n)},"ResourceMap$ResourceGroupDeleteActionBarViewModel")})}function a(n){i.ViewModelManager.registerWithState(
"ResourceMap$ResourceMapPartViewModel",t+"UI.ResourceMap.Part",function(t,i){return u(function(r){return new
t.ResourceMapPartViewModel(r,i,n)},{initialState:i})});i.ViewModelManager.registerWithState("ResourceMap$ResourceMapPinnedPartViewModel",
t+"UI.ResourceMap.PinnedPart",function(t,i){return u(function(r){return new t.ResourceMapPinnedPartViewModel(
r,i,n)})});i.ViewModelManager.registerWithState("ResourceMap$ResourceMapBladeViewModel",t+"UI.ResourceMap.Blade",
function(t,i){var u=new r.BladeContainerViewModel,f=new t.ResourceMapBladeViewModel(u,i,n);return new
MsPortalFx.Internal.ViewModels.CompositionViewModel(u,f,i)})}function v(n){i.ViewModelManager.registerWithState(
"ResourceMap$ResourceListPartViewModel",t+"UI.ResourceList.Part",function(t,i){return u(function(r){
return new t.ResourceListPartViewModel(r,i,n)})});i.ViewModelManager.registerWithState("ResourceMap$ResourceListPinnedPartViewModel",
t+"UI.ResourceList.PinnedPart",function(t,i){return u(function(r){return new t.ResourceListPinnedPartViewModel(
r,i,n)})});i.ViewModelManager.registerWithState("ResourceMap$ResourceListBladeViewModel",t+"UI.ResourceList.Blade",
function(t,i){var u=new r.BladeContainerViewModel,f=new t.ResourceListBladeViewModel(u,i,n);return new
MsPortalFx.Internal.ViewModels.CompositionViewModel(u,f,i)})}var t="./MsPortalImpl/UI/Hubs/ViewModels/",
e="./MsPortalImpl/UI/Hubs/Services/";n.registerViewModels=o}(e||(e={})),e});define("MsPortalImpl/UI/Hubs/ViewModels/UI.Settings.ViewModelRegistration",
["require","exports","../../../Prototype/ViewModelManager","./UI.Hubs.Common","../../../Base/Languages",
"../../../Services/Services.GeneralSettings"],function(n,t,i,r,u,f){var o=MsPortalFx.Internal.ViewModels.
CompositionViewModel,e=MsPortalFx.Internal.ViewModels.Part.composePartViewModel,s;return function(n)
{"use strict";function s(n){var s=u.getLocaleRedirectUri(f.settings.rawLocale());s&&n.redirectFn(s);
i.ViewModelManager.registerWithState("Settings$SettingsBladeViewModel",t+"UI.Settings.Blade",function(
n,t){var i=new r.BladeContainerViewModel,u=new n.SettingsBladeViewModel(i,t);return new o(i,u,t)});i.
ViewModelManager.registerWithState("Settings$SettingsBlade$SettingsPartViewModel",t+"UI.Settings.SettingsPart",
function(t,i){return e(function(r){return new t.SettingsPartViewModel(r,i,n)})});i.ViewModelManager.
registerWithState("Settings$LanguageSelectionBladeViewModel",t+"UI.Settings.LanguageSelectionBlade",
function(n,t){var i=new r.BladeContainerViewModel,u=new n.LanguageSelectionBladeViewModel(i,t);return new
o(i,u,t)});i.ViewModelManager.registerWithState("Settings$LanguageSelectionBlade$LanguageGridViewModel",
t+"UI.Settings.LanguageGrid",function(n,t){return e(function(i){return new n.LanguageGridViewModel(i,
t)})});i.ViewModelManager.registerWithState("Settings$LocaleSelectionBladeViewModel",t+"UI.Settings.LocaleSelectionBlade",
function(n,t){var i=new r.BladeContainerViewModel,u=new n.LocaleSelectionBladeViewModel(i,t);return new
o(i,u,t)});i.ViewModelManager.registerWithState("Settings$LocaleSelectionBlade$LocaleGridViewModel",
t+"UI.Settings.LocaleGrid",function(n,t){return e(function(i){return new n.LocaleGridViewModel(i,t)}
)});i.ViewModelManager.registerWithState("Help$HelpAndSupportBlade$DiagnosticsPartViewModel",t+"UI.Settings.DiagnosticsPart",
function(t,i){return e(function(r){return new t.DiagnosticsPartViewModel(r,i,n)})})}var t="./MsPortalImpl/UI/Hubs/ViewModels/";
n.registerViewModels=s}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl/Widgets/Widgets.Portal",["require","exports","MsPortalImpl/Resources/ImplScriptResources",
"../Interactions/Interactions.ContextMenuTouch","../Interactions/Interactions.KeyboardShortcutHandler",
"../Interactions/Interactions.OverflowAutoTooltip","../Services/Services.GeneralSettings","../Base/Telemetry",
"../Base/Base.UriHelper","./Widgets.WidgetBase","./Widgets.ContextPane","./Widgets.JumpBar","./Widgets.Panorama"],
function(n,t,i,r,u,f,e,o,s,h,c,l,a){var v;return function(n){"use strict";var b=window,v=jQuery,y="journeyId",
it=MsPortalFx.Base.EventTypes,t="fxs-show-journey",p="fxs-portal",k="fxs-portal-nav",d="fxs-portal-content",
g="fxs-portal-contextpane",nt="fxs-portal-untrustedextensions-unregisterlink",tt=function(n){function t(
){n.apply(this,arguments);this.hasUntrustedExtensions=ko.observable(!1)}return __extends(t,n),t}(h.ViewModel),
w;n.ViewModel=tt;w=function(n){function h(t,i){var h=this,o,s;n.call(this,t,i);this.element.html(MsPortalImpl.
Templates.widgetsPortal).addClass(p);this._panoramaContainer=this.element.findByClassName(d);o=new a.
ViewModel("fxs-panorama-instanceid");this._panorama=new a.Widget(this._panoramaContainer,o);this._jumpBar=
this.element.findByClassName(k);s=new l.ViewModel;this._jumpBarWidget=new l.Widget(this._jumpBar,s);
this._hubPaneWidth=this._jumpBarWidget.getHubPaneWidget().element.outerWidth();i.jumpBar=this._jumpBarWidget.
options;i.jumpBar.navBar.startClick=function(){h._handleStartButtonClick()};this._contextPaneWidget=
new c.Widget(this.element.findByClassName(g),new c.ViewModel);this._contextMenuTouch=new r.ContextMenuTouch(
this.element);this._overflowAutoTooltipHandler=new f.OverflowAutoTooltip(this.element);this._keyboardShortcutHandler=
new u.KeyboardShortcutHandler(this);this._configureSettings(e.settings)}return __extends(h,n),h.prototype.
_configureSettings=function(n){var t=this;this._addDisposablesToCleanUp(ko.computed(function(){var t=
n.animationEnabled&&n.animationEnabled(),i=new s.Uri(location.href).getQueryStringValue("enableAnimations");
i||v.enableAnimations(t)}));this._addDisposablesToCleanUp(ko.computed(function(){var r=t.options.hasUntrustedExtensions(
),n;return r&&(n=v("<div class='fxs-portal-untrustedextensions-msg'><\/div>"),n.html(i.Portal.unsupportedConfigurationWarning),
n.find("a").addClass(nt),v("body").addClass("fxs-portal-untrustedextensions").prepend(n),typeof t.options.
exitCanModifyExtensionsMode=="function"&&n.find("a").click(function(){return t.options.exitCanModifyExtensionsMode(
),!1})),r}))},h.prototype.dispose=function(){this._panorama.dispose();this._jumpBarWidget.dispose();
this._contextMenuTouch.dispose();this._overflowAutoTooltipHandler.dispose();this._keyboardShortcutHandler&&
(this._keyboardShortcutHandler.dispose(),this._keyboardShortcutHandler=null);this._partGallery&&this.
_partGallery.dispose();this._cleanElement(p);n.prototype.dispose.call(this)},Object.defineProperty(h.
prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),h.prototype.
getJumpBarWidget=function(){return this._jumpBarWidget},h.prototype.getPanorama=function(){return this.
_panorama},Object.defineProperty(h.prototype,"contextPane",{get:function(){return this._contextPaneWidget}
,enumerable:!0,configurable:!0}),h.prototype.toggleJumpBar=function(n){this._jumpBarWidget.options.navBar.
disabled(!n)},h.prototype.isStartBoardVisible=function(){return!this.element.hasClass(t)},h.prototype.
isJourneyVisible=function(){return this._hasJourneyWithContent()&&this.element.hasClass(t)},h.prototype.
showStartBoard=function(){this.element.removeClass(t);this._positionPortal(0);this.trigger(MsPortalFx.
Base.EventTypes.fxshowstartboard);this._jumpBarWidget&&this._jumpBarWidget.setFocus()},h.prototype.showJourney=
function(){if(!this.isJourneyVisible()){var n=this.getPanorama(),i=n.getJourneyWidget();n.getJourneyArea(
).width();this.element.addClass(t);i&&i.setFocus();this._positionPortal(0)}},h.prototype.getKeyboardShortcutHandler=
function(){return this._keyboardShortcutHandler},h.prototype._hasJourneyWithContent=function(){var n=
this.getPanorama(),t=n&&n.getJourneyWidget(),i=t&&t.hasChildren(),r=this.contextPane&&this.contextPane.
options.opened();return i||r},h.prototype._handleStartButtonClick=function(){var t=o.ActionModifier.
PortalScrolled,i=new s.Uri(b.location.href),r=i.getHashQueryStringValue(y),n;this._jumpBarWidget.closeHubPane(
);this._panorama.element.stop(!0,!0);this.isStartBoardVisible()?this._positionPortal(0):this._hasJourneyWithContent(
)&&!r?(n=this._panorama.getJourneyWidget(),n&&n.close()):(s.updateAddressBar(i.setHash("#").deleteHashQueryStringValue(
y).clearHashQueryStringIfEmpty().toString(),!0),t=o.ActionModifier.StartBoardRestored);MsPortalFx.Base.
Diagnostics.Telemetry.trace({source:o.Source.Desktop,action:o.Action.StartButtonClicked,actionModifier:
t})},h.prototype._positionPortal=function(n){this._panorama.setScrollLeftPosition(n)},h}(h.Widget);n.
Widget=w}(v||(v={})),v});define("MsPortalImpl/Interactions/Interactions.ContextMenuTouch",["require",
"exports"],function(){var n;return function(n){"use strict";var r=window,i=jQuery,t=MsPortalFx.Base.
EventTypes,u=function(){function n(t){this._hintTemplate="<div class='"+n.HintClassIdentifier+"' style='position: fixed;border: 2px solid grey;box-sizing: border-box;background-color: rgba(255, 255, 255, 0.2);pointer-events: none;'><\/div>";
this._showHintEndCss={width:n._HintSizePixels,height:n._HintSizePixels,top:"-={0}".format(n._HintSizePixels/
2),left:"-={0}".format(n._HintSizePixels/2)};this._hideHintEndCss={width:0,height:0,top:"+={0}".format(
n._HintSizePixels/2),left:"+={0}".format(n._HintSizePixels/2)};this._hint=i(this._hintTemplate);this.
_gestureArgs={startTime:0,target:null,targetX:0,targetY:0};this._element=t;this._attachHandlers()}return n.
prototype.dispose=function(){this._removeHandlers();this._resetGesture(!1)},n.prototype._attachHandlers=
function(){var n=this;this._element.on(t.touchstart,this._startHandle=function(t){n._touchStartHandler(
t)}).on(t.touchmove,this._moveHandle=function(t){n._touchMoveHandler(t)}).on(t.touchcancel,this._cancelHandle=
function(t){n._touchCancelHandler(t)}).on(t.touchend,this._endHandle=function(t){n._touchEndHandler(
t)});this._element.on(t.remove,this._removeHandler=function(){n.dispose()})},n.prototype._removeHandlers=
function(){this._element.off(t.touchstart,this._startHandle).off(t.touchmove,this._moveHandle).off(t.
touchcancel,this._cancelHandle).off(t.touchend,this._endHandle).off(t.remove,this._removeHandler);this.
_startHandle=null;this._endHandle=null;this._cancelHandle=null;this._endHandle=null;this._removeHandler=
null},n.prototype._touchStartHandler=function(t){var u=this,i=this._getSingleTouch(t);if(!i){this._resetGesture(
!0);return}this._gestureArgs={startTime:Date.now(),target:t.target,targetX:i.clientX,targetY:i.clientY};
this._hintShowTimeoutHandle=r.setTimeout(function(){u._showHint()},n.ReactionDelayMillis)},n.prototype.
_touchEndHandler=function(r){var f=this._getSingleTouch(r),u;if(!f){this._resetGesture(!0);return}this.
_gestureArgs.startTime&&(u=Math.abs(Date.now()-this._gestureArgs.startTime),u>=n.ReactionDelayMillis&&
i(this._gestureArgs.target).trigger(t.contextmenu));this._resetGesture(!1)},n.prototype._touchMoveHandler=
function(t){var i=this._getSingleTouch(t),r,u;if(!i){this._resetGesture(!0);return}r=Math.abs(this._gestureArgs.
targetX-i.clientX);u=Math.abs(this._gestureArgs.targetY-i.clientY);(r>n.MoveTolerancePixels||u>n.MoveTolerancePixels)&&
this._resetGesture(!0)},n.prototype._touchCancelHandler=function(){this._resetGesture(!0)},n.prototype.
_getSingleTouch=function(n){var i=n.originalEvent,t=i&&i.touches,r=t&&t.length===1,u=t&&t[0];return r?
u:null},n.prototype._showHint=function(){var n={width:0,height:0,top:this._gestureArgs.targetY,left:
this._gestureArgs.targetX};this._hint.css(n);i(this._gestureArgs.target).append(this._hint);this._hint.
animate(this._showHintEndCss,75,"easeOutQuint")},n.prototype._hideHint=function(n){var t=this;n&&this.
_hint.animate({opacity:.2},25).animate({opacity:1},25).animate({opacity:.2},25).animate({opacity:1},
25);this._hint.animate(this._hideHintEndCss,75,"easeOutQuint",function(){t._hint.detach()})},n.prototype.
_resetGesture=function(n){r.clearTimeout(this._hintShowTimeoutHandle);this._hideHint(n);this._gestureArgs=
{startTime:0,target:null,targetX:0,targetY:0}},n.ReactionDelayMillis=750,n.MoveTolerancePixels=10,n.
HintClassIdentifier="fxs-contextMenuTouchHint",n._HintSizePixels=90,n}();n.ContextMenuTouch=u}(n||(n=
{})),n});define("MsPortalImpl/Interactions/Interactions.KeyboardShortcutHandler",["require","exports",
"MsPortalImpl/Resources/ImplScriptResources","../Base/Base.KeyboardHelper","../Base/Telemetry","Viva.Controls/Util/Util",
"../Widgets/Widgets.Journey"],function(n,t,i,r,u,f){var h=MsPortalFx.Base.EventTypes,o=f.KeyCode,e=r.
ModifierKeys,s;return function(t){"use strict";var c=jQuery,s=MsPortalFx.Base.Constants.HubNames,f=i.
KeyboardShortcuts,l=MsPortalFx.Base.Diagnostics.createLog(n),a=MsPortalFx.Base.Diagnostics.Telemetry.
trace,v=function(){function n(n,t){this._keyShortcuts={};this._widgetPortal=n;this._addKeyShortcuts(
);this._attachEventHandlers();this._errorLoggingFunc=t||function(n){l.error(n)}}return n.prototype.dispose=
function(){this._removeEventHandlers()},n.prototype.registerHubsManager=function(n){this._hubsManager=
n;this._registerHubsManagerShortcuts()},n.prototype._attachEventHandlers=function(){var n=this;this.
_removeEventHandlers();this._keyDownHandler=function(t){var i,o=r.getModifierKeys(t),e=n._keyShortcuts[
t.keyCode],f=e&&e[o];f&&((i=c(document.activeElement),i.length>0&&(i.is("input[type=text]")||i.is("textarea")||
[".azc-editableControl",".fxcontrol-editor",".fxcontrol-console"].some(function(n){return i.closest(
n).length>0})))||(f.handler(),a({source:u.Source.KeyboardShortcuts,action:u.Action.KeyboardShortcutActivation,
name:f.id}),t.preventDefault()))};c(document).on(h.keydown,this._keyDownHandler)},n.prototype._removeEventHandlers=
function(){this._keyDownHandler&&(c(document).off(h.keydown,this._keyDownHandler),this._keyDownHandler=
null)},n.prototype._registerKeyboardShortcut=function(n,t,i,r){r===void 0&&(r=0);var u=this._keyShortcuts[
i],f=this._generateIdForKeyboardShortcut(i,r),e={description:n,handler:t,id:f};u?u[r]&&this._errorLoggingFunc(
"Duplicate shortcut: "+f):this._keyShortcuts[i]=[];this._keyShortcuts[i][r]=e},n.prototype._addKeyShortcuts=
function(){var n=this;this._registerKeyboardShortcut(f.moveFocusToFirstBlade,function(){n._setFocusToBlade(
-2)},70);this._registerKeyboardShortcut(f.toggleHomeAndJourneyMode,function(){n._widgetPortal.getJumpBarWidget(
).options.navBar.startClick(null)},72);this._registerKeyboardShortcut(f.moveFocusToPreviousBlade,function(
){n._setFocusToBlade(-4)},74);this._registerKeyboardShortcut(f.moveFocusToNextBlade,function(){n._setFocusToBlade(
-3)},75);this._registerKeyboardShortcut(f.moveFocusToLastBlade,function(){n._setFocusToBlade(-1)},76);
this._registerKeyboardShortcut(f.showAvailableKeyboardShortcuts,function(){},191,e.Shift);this._registerKeyboardShortcut(
f.minimizeOrRestore,function(){n._toggleBladeSize(!1)},o.Minus);this._registerKeyboardShortcut(f.maximizeOrRestore,
function(){n._toggleBladeSize(!0)},o.Equals,e.Shift);this._registerKeyboardShortcut(f.closeBlade,function(
){var t=n._getFocusedBlade();t&&t.close(!1)},51,e.Shift);this._registerKeyboardShortcut(f.closeJourney,
function(){var t=n._getFocusedJourney();t&&t.close()},220,e.Shift)},n.prototype._toggleBladeSize=function(
n){var t=this._getFocusedBlade();t&&t.toggleBladeSize(n)},n.prototype._setFocusToBlade=function(n){var
t=this._getFocusedJourney();t&&t.setFocusToBlade(n)},n.prototype._getFocusedJourney=function(){var n=
this._widgetPortal.isJourneyVisible()&&this._widgetPortal.getPanorama();return n&&n.getJourneyWidget(
)},n.prototype._getFocusedBlade=function(){var n=this._getFocusedJourney();return n&&n.getFocusedBlade(
)},n.prototype._generateIdForKeyboardShortcut=function(n,t){var i="";return t>(e.Alt|e.Meta|e.Shift|
e.Ctrl)&&this._errorLoggingFunc("Not allowed modifier!"),t&e.Ctrl&&(i+="CTRL+"),t&e.Shift&&(i+="SHIFT+"),
t&e.Alt&&(i+="ALT+"),t&e.Meta&&(i+="WIN/CMD+"),i+o[n]},n.prototype._registerHubsManagerShortcuts=function(
){var n=this;this._registerKeyboardShortcut(f.openCloseActiveHub,function(){n._hubsManager.showHub(s.
Journeys)},65);this._hubsManager.findHub(s.Billing)&&this._registerKeyboardShortcut(f.openCloseBillingHub,
function(){n._hubsManager.showHub(s.Billing)},66);this._registerKeyboardShortcut(f.openCloseCreateHub,
function(){n._hubsManager.showHub(s.Create)},67);this._registerKeyboardShortcut(f.openCloseNotificationsHub,
function(){n._hubsManager.showHub(s.Notifications)},78);this._registerKeyboardShortcut(f.openCloseSearchHub,
function(){n._hubsManager.showHub(s.Browse)},191)},n}();t.KeyboardShortcutHandler=v}(s||(s={})),s});
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.ContextPane",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","MsPortalImpl/Base/Base.KeyboardHelper",
"MsPortalImpl/Generated/SvgDefinitions","./Widgets.UIElementBase"],function(n,t,i,r,u,f){var e=MsPortalFx.
Base.EventTypes,h=MsPortalFx.Util.KeyCode,s=r.ModifierKeys,o;return function(n){"use strict";var l=i.
ContextPane,o="fxs-contextpane",a="fxs-contextpane-visible",t="fxs-contextpane-close",v="<button type='button' class='"+
t+"' title='"+l.close+"'>"+u.Content.SvgLibrary.Shell.close.data+"<\/button>",h="fxs-contextpane-content",
y=function(n){function t(){n.call(this,"fxs-contextpane-identifier");this.opened=ko.observable(!1)}return __extends(
t,n),t}(f.ViewModel),c;n.ViewModel=y;c=function(n){function i(t,i){n.call(this,t,i);this._$parent=this.
element.addClass(o).parent();this.element.append(v);this._init();this._attachEventHandlers()}return __extends(
i,n),i.prototype.dispose=function(){this._removeEventHandlers();this._cleanElement(o);n.prototype.dispose.
call(this)},Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),i.prototype.hasContent=function(){return!!this._$content},i.prototype.addChild=
function(n){if(!n)throw new Error("Can't add null child.");this.hasContent()&&this.removeChild(null);
this._$content=n.element?n.element:n;this._$content.addClass(h).prependTo(this.element)},i.prototype.
insertChild=function(n){this.addChild(n)},i.prototype.removeChild=function(n,t){return this._$content?
(t?this._$content.detach():this._$content.remove(),this._$content.removeClass(h),this._$content=null,
!0):!0},i.prototype.clear=function(n){return this.removeChild(null,n)},i.prototype._init=function(){
var n=this;this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.opened();n._$parent.
toggleClass(a,t)}))},i.prototype._attachEventHandlers=function(){var n=this;this.element.on(e.keydown,
this._keyDownHandler=function(t){n._handleKeyDown(t)});this.element.findByClassName(t).click(this._closeHandler=
function(){n.element.trigger(e.fxcontextpaneclosing)})},i.prototype._removeEventHandlers=function(){
this._keyDownHandler&&(this.element.off(e.keydown,this._keyDownHandler),this._keyDownHandler=null);this.
_closeHandler&&(this.element.findByClassName(t).off(e.click,this._closeHandler),this._closeHandler=null)}
,i.prototype._handleKeyDown=function(n){var t;n.keyCode===9&&(t=this.element.find(":tabbable"),r.getModifierKeys(
n)===0&&t.last()[0]===n.target?(n.preventDefault(),t.first().focus()):r.getModifierKeys(n)===s.Shift&&
t.first()[0]===n.target&&(n.preventDefault(),t.last().focus()))},i}(f.Widget);n.Widget=c}(o||(o={})),
o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.JumpBar",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","../Interactions/Interactions.DismissHandler",
"./Widgets.WidgetBase","./Widgets.HubPane","./Widgets.NavBar"],function(n,t,i,r,u,f,e){var o=MsPortalFx.
Base.EventTypes,s;return function(n){"use strict";var w=window,v=jQuery,t="{0} {1} {2} {3}".format(o.
fxbillingClick,o.fxbrowseitemclick,o.fxjourneyclick,o.fxnotificationClick),s="fxs-jumpBar",h="fxs-jumpBar-hub",
c="fxs-jumpBar-hubActive",l="fxs-jumpBar-nav",y="<div class='fxs-jumpBar-container' role='navigation'><div class='"+
l+"'><\/div><div class='"+h+"'><\/div><\/div>",p=function(n){function t(){n.apply(this,arguments);this.
activityPaneAnimationMs=95;this.text=i.JumpBar}return __extends(t,n),t}(u.ViewModel),a;n.ViewModel=p;
a=function(n){function i(i,r){var u=this,f,e;n.call(this,i,r);this._closeHubPaneHandler=function(){}
;this._dismissHandle={dismissFn:function(){u.closeHubPane()},shouldDismissOnMouseDownFn:function(n){
return!v.contains(u.element[0],n)},shouldDismissOnMouseWheelFn:function(){return!1},restoreFocus:function(
){u.setFocus()},logName:"jumpbar"};this.isHubPaneOpen=ko.observable(!1);this.element.addClass(s).html(
y);f=this._initializeNavBar();e=this._initializeHubPane();this.options.navBar=f;this.options.hubPane=
e;this.element.on(t,this._closeHubPaneHandler=function(){u.closeHubPane()})}return __extends(i,n),i.
prototype.dispose=function(){this._navBarWidget.dispose();this._hubPaneWidget.dispose();r.DismissHandler.
Instance.unregister(this._dismissHandle);this._cleanElement(s);this.element.off(t,this._closeHubPaneHandler);
this._closeHubPaneHandler=null;n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype.getHubPaneWidget=function(
){return this._hubPaneWidget},i.prototype.setFocus=function(){this._navBarWidget.setFocus()},i.prototype.
openHubPane=function(n,t){var i=this,u,f,e;return this.isHubPaneOpen()&&this._hubPaneWidget.options.
title()===n?Q.resolve(null):(f=t||Q.resolve(null),this._hubPaneWidget.options.title(n),this._hubPaneWidget.
options.failed(!1),e=f.then(function(n){var t=n?n.element:null;i._hubPaneWidget.options.content(t)},
function(){i._hubPaneWidget.options.failed(!0)}),this.isHubPaneOpen()||(this.isHubPaneOpen(!0),this.
_hubPane.stop(!0),this.trigger(MsPortalFx.Base.EventTypes.fxopenhub),u=this._getLeftOrRightCssPropertyObject(
this._navBarWidth),this.element.addClass(c),this._hubPane.animate(u,this.options.activityPaneAnimationMs)),
this._hubPaneWidget.setFocus(),r.DismissHandler.Instance.register(this._dismissHandle),e)},i.prototype.
closeHubPane=function(){var n=this,t;this.isHubPaneOpen&&(this.isHubPaneOpen(!1),this.trigger(MsPortalFx.
Base.EventTypes.fxclosehub),this._hubPane.stop(!0),t=this._getLeftOrRightCssPropertyObject(this._navBarWidth-
this._hubPaneWidth),this._hubPane.animate(t,this.options.activityPaneAnimationMs,function(){n.element.
removeClass(c);n._hubPaneWidget.options.content(null)}));r.DismissHandler.Instance.unregister(this._dismissHandle)}
,i.prototype._initializeNavBar=function(){var n,t=this.element.findByClassName(l);return n=new e.ViewModel,
this._navBarWidget=new e.Widget(t,n),this._navBarWidth=t.width(),this._navBarWidget.options},i.prototype.
_initializeHubPane=function(){var t=this,n=new f.ViewModel;return n.close=function(){t.closeHubPane(
)},this._hubPane=this.element.findByClassName(h),this._hubPaneWidget=new f.Widget(this._hubPane,n),this.
_hubPaneWidth=this._hubPane.width(),this._hubPane.css(this._getLeftOrRightCssPropertyObject(this._navBarWidth-
this._hubPaneWidth)),this._hubPaneWidget.options},i.prototype._getLeftOrRightCssPropertyObject=function(
n){return this._isRtl()?{right:n}:{left:n}},i}(u.Widget);n.Widget=a}(s||(s={})),s});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.HubPane",["require","exports","MsPortalImpl/Resources/ImplScriptResources",
"MsPortalImpl/Base/Base.KeyboardHelper","./Widgets.WidgetBase"],function(n,t,i,r,u){var f=MsPortalFx.
Base.EventTypes,s=MsPortalFx.Util.KeyCode,o=r.ModifierKeys,e;return function(n){"use strict";var v=window,
h=jQuery,t="fxs-hubPane",c="fxs-hubPane-inner",e="fxs-theme-context-menu",l="fxs-hubPane-closeButton",
a=function(n){function t(){n.apply(this,arguments);this.close=h.noop;this.text=i.HubPane;this.uri=MsPortalFx.
Base.Resources.getImages(MsPortalImpl.Resources.Images.Hub);this.title=ko.observable();this.content=
ko.observable();this.failed=ko.observable()}return __extends(t,n),t.prototype.setHub=function(n,t){var
i=t?t.element:null;this.title(n);this.content(i)},t}(u.ViewModel),s;n.ViewModel=a;s=function(n){function i(
i,r){n.call(this,i,r);this.element.html(MsPortalImpl.Templates.widgetsHubPane).addClass(e).addClass(
t);this._initializeElementsAndHandlers();this._bindDescendants()}return __extends(i,n),i.prototype.dispose=
function(){this._keyDownHandler&&(this.element.off(f.keydown,this._keyDownHandler),this._keyDownHandler=
null);this._cleanElement(t,e);n.prototype.dispose.call(this)},i.prototype.setFocus=function(){this.element.
findByClassName(c).focus()},Object.defineProperty(i.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),i.prototype._initializeElementsAndHandlers=function(){var n=
this;this.element.findByClassName(l).on(f.click,function(t){t.preventDefault();n._closePane()});this.
element.on(f.keydown,this._keyDownHandler=function(t){n._handleKeyDown(t)})},i.prototype._closePane=
function(){this.options.content(null);this.options.failed(!1);this.trigger("close")},i.prototype._handleKeyDown=
function(n){var t;n.keyCode===9&&(t=this.element.find(":tabbable"),r.getModifierKeys(n)===0&&t.last(
)[0]===n.target?(n.preventDefault(),t.first().focus()):r.getModifierKeys(n)===o.Shift&&t.first()[0]===
n.target&&(n.preventDefault(),t.last().focus()))},i}(u.Widget);n.Widget=s}(e||(e={})),e});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.NavBar",["require",
"exports","MsPortalImpl/Resources/ImplScriptResources","../Services/Services.GeneralSettings","../Base/Telemetry",
"./Widgets.WidgetBase"],function(n,t,i,r,u,f){var e=MsPortalFx.Base.EventTypes,o;return function(n){
"use strict";var s=window,t=jQuery,g=MsPortalFx.Base.Diagnostics.Telemetry.trace,h="fxs-hubIcon",c="fx-bg-shade-40",
l="fxs-navbar",a="fxs-navbar-disabled",o="fxs-navbar-start",v="fxs-navbar-exitorganizemode",y="fxs-navbar-img",
p="fxs-navbar-buttons",w="fxs-navbar-middle-area",b='"fxs-hubIcon-default": data.buttonLabels(),"fxs-hubIcon-compact": !data.buttonLabels()',
k="fxs-navbar-bottom-area",nt="<div class='"+p+" fx-fill-white'><div class='"+v+" "+h+"'><a href='#' data-bind='attr: { title: text.exitOrganizeMode }, css:{ "+
b+" }'><div class= '"+y+" fxs-hubIcon-icon' data-bind='image: MsPortalFx.Base.Images.Check()'><\/div><div class='fxs-hubIcon-buttonText fx-text-title' data-bind='text: text.exitOrganizeMode, visible: data.buttonLabels'><\/div><\/a><\/div><div class='"+
o+" "+h+" fx-has-hover fx-bg-shade-40'><a href='#' data-bind='attr: { title: text.home }, css:{ "+b+
" }'><div class= '"+y+" fxs-hubIcon-icon' data-bind='image: data.startButton'><\/div><div class='fxs-hubIcon-buttonText fx-text-title' data-bind='text: text.home, visible: data.buttonLabels'><\/div><\/a><\/div><div class='"+
w+"'><ul data-bind='foreach: { data: data.middleButtons, afterRender: function(elements, widget) { $root.func._afterRenderButtons(elements[0], widget); } }'><li><\/li><\/ul><\/div><div class='"+
k+"'><ul data-bind='foreach: { data: data.bottomButtons, afterRender: function(elements, widget) { $root.func._afterRenderButtons(elements[0], widget); } }'><li><\/li><\/ul><\/div><\/div>",
tt=function(n){function u(){n.call(this);this.startClick=t.noop;this.createClick=t.noop;this.startButton=
MsPortalFx.Base.Images.Shell.JumpBar.Home();this.text=i.NavBar;this.middleButtons=ko.observableArray(
);this.bottomButtons=ko.observableArray();this.buttonLabels=ko.observable(!0);this.buttonLabels=r.settings.
showLabels}return __extends(u,n),u}(f.ViewModel),d;n.ViewModel=tt;d=function(n){function i(i,r){var u=
this;n.call(this,i,r);this.element.addClass(l).addClass(c).html(nt);this._intializeFieldsAndHandlers(
);this._resizeStartButtonArea();t(s).on(e.resize,this._resizeHandler=function(){u._resizeStartButtonArea(
)});ko.applyBindings({data:this.options,text:this.options.text,func:this},this.element[0]);this._addDisposablesToCleanUp(
ko.computed(function(){u._resizeStartButtonArea()}));this._addDisposablesToCleanUp(ko.computed(function(
){u.element.toggleClass(a,r.disabled())}))}return __extends(i,n),i.prototype.dispose=function(){this.
_cleanElement(l,c,a);this._resizeHandler&&(t(s).off(e.resize,this._resizeHandler),this._resizeHandler=
null);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),i.prototype.setFocus=function(){this.element.findByClassName(
o).focus()},i.prototype._intializeFieldsAndHandlers=function(){var n=this;this._buttonContainer=this.
element.findByClassName(p);this._middleButtonArea=this.element.findByClassName(w);this._bottomButtonArea=
this.element.findByClassName(k);this._startButton=this.element.findByClassName(o);this._buttonContainer.
on("click.hub",function(t,i){if(t.namespace){var r=function(n){n.options.selected(!1)};n.options.middleButtons(
).forEach(r);n.options.bottomButtons().forEach(r);i.viewModel.selected(!0);i.viewModel.click()}});this.
_startButton.on(e.click,"a",function(t){t.preventDefault();var i=n.trigger(e.fxhubclicking);i&&n._handleStartClick(
t)});this.element.findByClassName(v).click(function(t){t.preventDefault();g({source:u.Source.NavBar,
action:u.Action.OrganizeModeExit});n.element.trigger(e.fxexitorganizemode)})},i.prototype._resizeStartButtonArea=
function(){var n=this.element.height(),r=85,u=65,f=185,e=165,t,i,o;n-=this._middleButtonArea.height(
);n-=this._bottomButtonArea.height();this._startButton.css("top",100);n>=f&&this.options.buttonLabels(
)?this._middleButtonArea.css("top",f):n>=e&&!this.options.buttonLabels()?this._middleButtonArea.css(
"top",e):(t=0,i=0,this.options.buttonLabels()?(t=Math.max(n-r,r),i=t+r):(t=Math.max(n-u,u),i=t+u),this.
_startButton.css("top",+t),this._middleButtonArea.css("top",i));o=this._startButton.height()+this._middleButtonArea.
height()+this._bottomButtonArea.height();this.element.css("min-height",o)},i.prototype._handleStartClick=
function(){this.trigger("startClick")},i.prototype._afterRenderButtons=function(n,i){t(n).append(i.element)}
,i}(f.Widget);n.Widget=d}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl/Widgets/Widgets.Panorama",["require","exports","MsPortalImpl/Resources/ImplScriptResources",
"../Interactions/Interactions.MousePanning","./Widgets.AvatarMenu","./Widgets.WidgetBase","../Widgets/Widgets.Common",
"./Widgets.Journey","./Widgets.StartBoard","./Widgets.UIElementBase"],function(n,t,i,r,u,f,e,o,s,h){
var c=MsPortalFx.Base.EventTypes,l;return function(n){"use strict";var v=window,t=jQuery,l="fxs-panorama",
y="fxs-avatarmenu-target",p="fxs-startboard-target",w="fxs-panorama-title",nt="fxs-panorama-previewbadge",
b="fxs-panorama-homearea",tt="fxs-journey-layout",a="fxs-journey-target",k="fxs-panorama-noscrollbars",
d="fxs-blade",it=6,rt=MsPortalFx.Base.Utilities.htmlEncode(i.Portal.productName),ut=function(n){function t(
t,i){n.call(this,t);this.rotateThemeEvent=null;this.applyViewSettings(i)}return __extends(t,n),t.prototype.
getViewSettings=function(){return{}},t.prototype.applyViewSettings=function(){return},t}(h.ViewModel),
g;n.ViewModel=ut;g=function(n){function i(i,f){n.call(this,i,f);this.element.addClass(l).html(MsPortalImpl.
Templates.widgetsPanorama);this.element.findByClassName(w).text(rt);this._attachEventHandlers();ko.bindingHandlers.
image.update(this.element.findByClassName(nt)[0],MsPortalFx.Base.Images.Shell.PreviewBadge,t.noop,null,
null);this._mousePanning=new r.MousePanning(this.element);this._avatarMenuWidget=new u.Widget(this.element.
findByClassName(y),new u.ViewModel);this._scrollBarSize=e.getBrowserScrollbarWidth()}return __extends(
i,n),i.prototype.dispose=function(){this._removeEventHandlers();this._avatarMenuWidget.dispose();this.
_cleanElement(l);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),i.prototype.addChild=function(n){if(!n)throw new
Error("Can't add null child.");this.getJourneyWidget().addChild(n)},i.prototype.insertChild=function(
n,t){if(!n)throw new Error("Can't add null child.");this.getJourneyWidget().insertChild(n,t)},i.prototype.
removeChild=function(n){var t=this.getJourneyWidget();return t&&t.removeChild(n)},i.prototype.getStartBoardArea=
function(){return this.element.findByClassName(p)},i.prototype.getHomeArea=function(){return this.element.
findByClassName(b)},i.prototype.getJourneyArea=function(){return this.element.findByClassName(a)},i.
prototype.getStartBoardWidget=function(){return f.Widget.getWidget(this.element.findByClassName(p),s.
Widget)},i.prototype.getJourneyWidget=function(){return f.Widget.getWidget(this.element.findByClassName(
a),o.Widget)},i.prototype.getAvatarMenuWidget=function(){return f.Widget.getWidget(this.element.findByClassName(
y),u.Widget)},i.prototype.createChild=function(n,t){return this.getJourneyWidget().createChild(n,t)}
,i.prototype.saveViewSettings=function(){return this.options.getViewSettings()},i.prototype.ensureElementInViewport=
function(n,t){if(n){if(n.element.hasClass("fxs-blade-pairmaster")){this._snapElementToEdge(n.element);
return}if(n.element.hasClass("fxs-blade-pairdetails")){this._snapElementToEdge(n.element.prev());return}
if(t){this._snapElementToEdge(n.element);return}var i=n.element[0].getBoundingClientRect(),r=this.element[
0].getBoundingClientRect(),u=this.element.scrollLeft(),f;if(i.left<r.left)f=u+(i.left-r.left);else if(
i.right>r.right){var e=this._isRtl(),o=e?"marginRight":"marginLeft",l=e?"marginLeft":"marginRight",s=
parseInt(this.element.css(o),10),h=it;f=Math.min(i.left+u-s,u+(i.right-r.right)+h)}this._scrollPanoramaTo(
f,function(){n.trigger(c.fxpanoramavisible)})}},i.prototype.getScrollLeftPosition=function(){return this.
element.scrollLeft()},i.prototype.setScrollLeftPosition=function(n){this._scrollPanoramaTo(n)},i.prototype.
_attachEventHandlers=function(){var n=this,i,r,u;this.element[0].addEventListener(c.mousedown,this._mouseDownCancelAutoPanningEventHandler=
function(){n.element.stop(!0,!1)},!0);this.element.on(c.doubleclick,this._rotateThemeEventHandler=function(
i){i.preventDefault();i.stopPropagation();n._rotateThemeFromTarget(t(i.target))});this.element.on(c.
fxensureviewportvisible,this._ensureInViewPortEventHandler=function(t,i){t.stopPropagation();n.element.
queue(function(){n.ensureElementInViewport(i.widget,i.alignStart)})});this.element.on(c.mousedown,this.
_scrollbarUsageStartEventHandler=function(t){if(t.pageY>=n.element.outerHeight()-n._scrollBarSize){var
i;n.element.on(c.mouseup,i=function(){n.element.off(c.mouseup,i);var t=n._tryGetLeftMostBladeInView(
);t.length>0&&t.trigger(c.fxactivatepairmaster);n._toggleScrollbarsIfNeeded()})}});this.element.on(c.
scroll,this._scrollEventHandler=function(){v.clearTimeout(i);i=v.setTimeout(function(){n._toggleScrollbarsIfNeeded(
);i=null},650)});this.element.on(c.fxpancomplete,this._panCompleteEventHandler=function(t,i){t.stopPropagation(
);n._snapBladeToEdge(i)});r=function(){var t=n.getJourneyWidget();t&&n.element.parents(".fxs-show-journey").
length>0&&t.element.find(":tabbable").focus()};this.element.findByClassName(b).on(c.focusin,r);u=function(
){n.element.parents(".fxs-show-journey").length===0&&n.element.parent().find(":tabbable").focus()};this.
element.findByClassName(a).on(c.focusin,u)},i.prototype._removeEventHandlers=function(){this._mouseDownCancelAutoPanningEventHandler&&
(this.element[0].removeEventListener(c.mousedown,this._mouseDownCancelAutoPanningEventHandler,!0),this.
_mouseDownCancelAutoPanningEventHandler=null);this._rotateThemeEventHandler&&(this.element.off(c.doubleclick,
this._rotateThemeEventHandler),this._rotateThemeEventHandler=null);this._ensureInViewPortEventHandler&&
(this.element.off(c.fxensureviewportvisible,this._ensureInViewPortEventHandler),this._ensureInViewPortEventHandler=
null);this._scrollbarUsageStartEventHandler&&(this.element.off(c.mousedown,this._scrollbarUsageStartEventHandler),
this._scrollbarUsageStartEventHandler=null);this._scrollEventHandler&&(this.element.off(c.scroll,this.
_scrollEventHandler),this._scrollEventHandler=null);this._panCompleteEventHandler&&(this.element.off(
c.fxpancomplete,this._panCompleteEventHandler),this._panCompleteEventHandler=null)},i.prototype._rotateThemeFromTarget=
function(n){var t=n.hasClass(l),i=n.hasClass(w),r=n.hasClass("fxs-startboard-layout"),u=n.hasClass("fxs-flowlayout-childcontainer"),
f=n.hasClass(tt);(t||i||r||u||f)&&this.trigger(c.fxrotatetheme)},i.prototype._snapBladeToEdge=function(
n){var s=this.element.offset(),i=this._tryGetLeftMostBladeInView(),t,u,f,e;if(i.length!==0){if(n===0)
{i.trigger(c.fxactivatepairmaster);return}var h=i.outerWidth(!1),l=i.offset(),a=l.left-s.left,o=Math.
abs(a/h),v=1-o,r;n===1&&(r=o>=.2?!0:!1);n===2&&(r=v>=.2?!1:!0);t=i;u="."+d;r?(f=i.next(u),t=f.length!==
0?f:i):t=i;e=t.next(u).length>0;e?t.trigger(c.fxactivatepairmaster):e||t.prev().trigger(c.fxactivatepairmaster);
t.hasClass("fxs-blade-pairdetails")&&(t=t.prev());this._snapElementToEdge(t)}},i.prototype._snapElementToEdge=
function(n){var t=this;n.handleTransitionEndOnce("width",200,function(){var i=n.offset(),r=t.element.
offset(),u=i.left-r.left,f=t.element.scrollLeft(),e=f+u;t._scrollPanoramaTo(e,function(){t._toggleScrollbarsIfNeeded(
)})})},i.prototype._scrollPanoramaTo=function(n,t){var i=this;this.element.stop(!1,!1).animate({scrollLeft:
n},600,"easeOutCubic",function(){typeof t=="function"&&t();i._toggleScrollbarsIfNeeded()})},i.prototype.
_toggleScrollbarsIfNeeded=function(){var n=this._tryGetLeftMostBladeInView();n.length&&n.hasClass("fxs-blade-paired")?
this.element.addClass(k):this.element.removeClass(k)},i.prototype._tryGetLeftMostBladeInView=function(
){var i="."+d,n=this.element.offset(),r=document.elementFromPoint(n.left,n.top);return t(r).closest(
i)},i}(h.Widget);n.Widget=g}(l||(l={})),l});define("MsPortalImpl/Interactions/Interactions.MousePanning",
["require","exports","../Widgets/Widgets.Common"],function(n,t,i){var r=MsPortalFx.Base.EventTypes,f=
i.GestureDirection,u;return function(n){"use strict";var t=window,e=jQuery,l=".msportalfx-pannable-all-children",
o="fxs-panning-cursor",a=".fxs-portal",s="fxs-lens-drag-handle",v="fxs-desktop-organize",y=[s,"azc-listView-list",
"msportalfx-panning","msportalfx-pannable-all-children","fxcontrol-base","fxcontrol-createActionBar-checkbox-outer",
"fxcontrol-gallery","fxs-blade","fxs-bladeActionBar","fxs-bladeActionBar-content","fxs-blade-content",
"fxs-blade-disabled-message","fxs-blade-header","fxs-blade-stacklayout","fxs-blade-statusbar","fxs-blade-title",
"fxs-blade-title-description","fxs-blade-title-text-container","fxs-commandBar-itemList","fxs-flowlayout-childcontainer",
"fxs-journey","fxs-journey-layout","fxs-lens","fxs-lens-title","fxs-lens-layout","fxs-pannable","fxs-panorama",
"fxs-panorama-homearea","fxs-panorama-title","fxs-startboard","fxs-startboard-layout","fxs-tile","fxs-tile-content"],
h,u,f,c;(function(n){n[n.Default=0]="Default";n[n.Mouse=1]="Mouse";n[n.Pointer=2]="Pointer";n[n.MSPointer=
3]="MSPointer";n[n.Touch=4]="Touch"})(h||(h={}));u=[];u[1]=r.mousemove;u[2]=r.pointermove;u[3]=r.mspointermove;
u[4]=r.touchmove;f=[];f[1]=r.mouseup;f[2]=[r.pointerup,r.pointercancel,r.lostpointercapture].join(" ");
f[3]=[r.mspointerup,r.mspointercancel,r.mslostpointercapture].join(" ");f[4]=[r.touchend,r.touchcancel].
join(" ");c=function(){function n(n){(this._gestureInProgress=!1,this._element=n,this._element.length!==
0)&&(this._scrollBarSize=i.getBrowserScrollbarWidth(),this._initializeSupportedEventTypes(),this._attachEventHandlers(
))}return n.prototype.dispose=function(){this._gestureStartHandler&&(e(document).off(this._gestureStartEventType,
this._gestureStartHandler),this._gestureStartHandler=null)},n.prototype._initializeSupportedEventTypes=
function(){this._gestureStartEventType=r.mousedown;"ontouchstart"in t&&(this._gestureStartEventType=
[r.touchstart,this._gestureStartEventType].join(" "));"onpointerdown"in t?this._gestureStartEventType=
[r.pointerdown,this._gestureStartEventType].join(" "):"onmspointerdown"in t&&(this._gestureStartEventType=
[r.mspointerdown,this._gestureStartEventType].join(" "))},n.prototype._attachEventHandlers=function(
){var n=this;e(document).on(this._gestureStartEventType,this._gestureStartHandler=function(t){return n.
_gestureStart(t)})},n.prototype._gestureStart=function(n){var i=this,s,h,a;if(!this._gestureInProgress)
{switch(n.type){case r.mousedown:s=1;break;case r.touchstart:s=4;break;case r.pointerdown:s=2;break;
case r.mspointerdown:s=3;break;default:return}if((h=e(n.target),this._isValidGestureEvent(n,s))&&(a=
this._getGesturePoint(n,s),this._isPointerInPannableContent(h,a))){var y=e(document),p=e("body"),v=a.
pageX,c=0,l,nt=333,w=!1,b=function(){return!1},tt=function(){i._gestureInProgress=!0;p.addClass(o);y.
on(u[s],d).on(f[s],g).on(r.selectstart,b);i._disableUserSelect(!0,h);t.getSelection().removeAllRanges(
)},k=function(){t.clearTimeout(l);p.removeClass(o);y.off(u[s],d).off(f[s],g).off(r.selectstart,b);i.
_disableUserSelect(!1,h);i._applyElasticBounceEffect(0);h.trigger(r.fxpancomplete,c);i._gestureInProgress=
!1},d=function(n){var r,u;if(!i._isValidGestureEvent(n,s)){k();return}if(n.preventDefault(),r=i._getGesturePoint(
n,s),r.pageX!==v){u=v-r.pageX;c=u>0?1:u<0?2:0;t.clearTimeout(l);l=t.setTimeout(function(){c=0;l=null}
,nt);var f=i._element.scrollLeft()+u,e=f+i._element.width()>=i._element[0].scrollWidth,o=f<=0;o||e?i.
_applyElasticBounceEffect(c):w&&i._applyElasticBounceEffect(0);w=o||e;i._element.scrollLeft(f);v=r.pageX}
},g=function(){k()};tt()}}},n.prototype._isPointerInPannableContent=function(n,t){var i=!1;return t.
pageY>=this._element.outerHeight()-this._scrollBarSize?!1:this._isPointerInBladeContentScrollbar(n,t)?
!1:e(a).hasClass(v)&&n.hasClass(s)?!1:(i=y.some(function(t){return n.hasClass(t)}),!i&&n.closest(l).
length&&(i=!0),i)},n.prototype._isPointerInBladeContentScrollbar=function(n,t){return n.hasClass("fxs-blade-content")?
n[0].scrollHeight<=n.innerHeight()?!1:n.innerWidth()+n.offset().left-this._scrollBarSize<t.pageX?!0:
!1:!1},n.prototype._isValidGestureEvent=function(n,t){switch(t){case 1:return n.which===1;case 4:return this.
_isSingleTouchEvent(n.originalEvent);default:return!0}},n.prototype._isSingleTouchEvent=function(n){
return n&&n.touches&&n.touches.length===1},n.prototype._getSingleTouchOrNull=function(n){return this.
_isSingleTouchEvent(n)?n.touches[0]:null},n.prototype._getGesturePoint=function(n,t){var i={pageX:0,
pageY:0},r;switch(t){case 4:r=this._getSingleTouchOrNull(n.originalEvent);i.pageX=r?r.pageX:0;i.pageY=
r?r.pageY:0;break;case 1:case 2:case 3:i.pageX=n.originalEvent.pageX;i.pageY=n.originalEvent.pageY}return i}
,n.prototype._disableUserSelect=function(n,t){var i=n?"none":"";t.css({"-ms-user-select":i,"-moz-user-select":
i,"-o-user-select":i,"-webkit-user-select":i,"user-select":i})},n.prototype._applyElasticBounceEffect=
function(n){var s=this,t="fxs-panorama-scrollbounce-onleft",i="fxs-panorama-scrollbounce-onright",u=
"fxs-panorama-scrollbounce-reset",f=n===2,e=n===1,o=!(f||e);this._element.toggleClass(t,f).toggleClass(
i,e).toggleClass(u,o);o?this._element.handleTransitionEndOnce("transform",400,function(){s._element.
removeClass([t,i,u].join(" "))}):this._element.off(r.transitionend)},n}();n.MousePanning=c}(u||(u={})
),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.AvatarMenu",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","../Interactions/Interactions.DismissHandler",
"../Base/Base.KeyboardHelper","../Base/Telemetry","./Widgets.WidgetBase"],function(n,t,i,r,u,f,e){var
o=MsPortalFx.Base.EventTypes,c=MsPortalFx.Util.KeyCode,h=u.ModifierKeys,s;return function(n){"use strict";
var st=window,a=jQuery,t=f.Source.Desktop,s=f.Action,c=MsPortalFx.Base.Diagnostics.Telemetry.trace,y=
"fxs-theme-context-menu",p="fxs-menu",b="fxs-avatarmenu",w="fx-bg-shade-50",l="fxs-avatarmenu-header",
k="fxs-avatarmenu-dropdown",v="fxs-avatarmenu-dropdown-open",d="fxs-avatarmenu-list-tenant",g="fxs-avatarmenu-signout",
nt="fxs-avatarmenu-settings",tt="fxs-avatarmenu-organize",it="fxs-avatarmenu-feedback",rt="fxs-avatarmenu-switchportal",
ut="fxs-avatarmenu-legal",ft="fxs-avatarmenu-support",ot=function(n){function t(){n.call(this);this.
isDropDownOpen=ko.observable();this.signedInUser=ko.observable();this.hideTenant=ko.observable();this.
listOfTenants=ko.observableArray();this.showDiagnostics=null;this.openSettingsBlade=null;this.enterOrganizeMode=
null;this.signOut=null;this.signedOut=null;this.switchTenant=null;this.switchedTenant=null;this.legal=
null;this.feedback=null;this.openSupportBlade=null;this.text=i.AvatarMenu;this.uri=MsPortalFx.Base.Resources.
getImages(MsPortalImpl.Resources.Images.AvatarMenu);this.showDiagnosticsDelay=3e3}return __extends(t,
n),t}(e.ViewModel),et;n.ViewModel=ot;et=function(n){function f(t,i){var r=this;n.call(this,t,i);this.
_lastTouchMillis=0;this._firstLastNameRegex=/^(f(irst)?|l(ast)?)\s?name$/i;this._dismissHandle={dismissFn:
function(){r._closeMenu()},shouldDismissOnMouseDownFn:function(n){return!a.contains(r.element[0],n)&&
!a.contains(r.element.findByClassName(k)[0],n)},shouldDismissOnMouseWheelFn:function(){return!1},restoreFocus:
function(){r.setFocus()},logName:"avatarmenu"};this.element.addClass(b).html(MsPortalImpl.Templates.
widgetsAvatarMenu);var u=ko.pureComputed(function(){return r._computeDisplayName(r.options.signedInUser(
))}),f=ko.pureComputed(function(){var n=r._computeCurrentTenantDisplayName(r.options.signedInUser,r.
options.listOfTenants);return r.options.hideTenant()?"":n}),e=ko.pureComputed(function(){return r.options.
signedInUser()&&r.options.signedInUser().avatarUri||r.options.uri.defaultAvatarSmall}),o=this._createObservableTenantDisplayList(
this.options.signedInUser,this.options.listOfTenants);this._subscriptions.push(this.options.isDropDownOpen.
subscribe(function(n){n!==r._isMenuOpen()&&(n?r._openMenu():r._closeMenu())}));ko.applyBindings({data:
this.options,func:this,displayName:u,currentTenantDisplayName:f,avatarUri:e,listOfTenants:o,text:this.
options.text,uri:this.options.uri},this.element[0]);this._attachEventHandlers()}return __extends(f,n),
f.prototype.dispose=function(){r.DismissHandler.Instance.unregister(this._dismissHandle);this._menuEventHandler&&
(this.element.findByClassName(l).off(o.click,this._menuEventHandler),this._menuEventHandler=null);this.
_holdStartEventHandler&&(this.element.findByClassName(l).off([o.touchstart,o.mousedown].join(" "),this.
_holdStartEventHandler),this._holdStartEventHandler=null);this._holdEndEventHandler&&(this.element.findByClassName(
l).off([o.touchend,o.mouseup].join(" "),this._holdEndEventHandler),this._holdEndEventHandler=null);this.
_keyDownHandler&&(this.element.off(o.keydown,this._keyDownHandler),this._keyDownHandler=null);this._removeEventHandlers(
);this._cleanElement(y,p,w,b,v);n.prototype.dispose.call(this)},Object.defineProperty(f.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),f.prototype.setFocus=function(
){this.element.findByClassName(l).focus()},f.prototype._signOut=function(n){var i=a.Event("signOut"),
r=this.trigger("signOut",i,{completed:!!n});(c({source:t,action:s.AvatarMenuSignOut}),r)&&this.trigger(
"signedOut")},f.prototype._openSettingsBlade=function(){c({source:t,action:s.SettingsBladeOpen});this.
trigger("openSettingsBlade")},f.prototype._enterOrganizeMode=function(){c({source:t,action:s.AvatarMenuEnterOrganizeMode});
this.trigger("enterOrganizeMode")},f.prototype._switchTenant=function(n){var i=this.options.signedInUser(
),r=i&&i.tenantId&&i.tenantId.toLowerCase();if(n.id.toLowerCase()!==r){var u=a.Event("switchedTenant"),
f=this.trigger("switchTenant"),e={tenant:n};if(c({source:t,action:s.AvatarMenuSwitchTenant}),!f)return;
this.trigger("switchedTenant",u,e)}},f.prototype._isMenuOpen=function(){return this.element.hasClass(
v)},f.prototype._switchPortal=function(){return c({source:t,action:s.AvatarMenuSwitchPortal}),!0},f.
prototype._openLegal=function(){return c({source:t,action:s.AvatarMenuOpenLegal}),!0},f.prototype._openFeedback=
function(){return c({source:t,action:s.AvatarMenuOpenFeedback}),!0},f.prototype._openSupport=function(
){c({source:t,action:s.AvatarMenuOpenSupport});this.trigger("openSupportBlade")},f.prototype._attachEventHandlers=
function(){var n=this;this.element.findByClassName(l).on(o.click,this._menuEventHandler=function(t){
t.preventDefault();var i=n.trigger(o.fxavatarmenutoggling);i&&n.options.isDropDownOpen(!n._isMenuOpen(
))});this._holdStartEventHandler=function(){n._lastTouchMillis=Date.now()};this._holdEndEventHandler=
function(t){var i,r;n._lastTouchMillis&&(i=Math.abs(Date.now()-n._lastTouchMillis),n._lastTouchMillis=
0,i>n.options.showDiagnosticsDelay&&(r=a.Event("showDiagnostics"),n.trigger("showDiagnostics",r),t.preventDefault(
)))};this.element.findByClassName(l).on([o.touchstart,o.mousedown].join(" "),this._holdStartEventHandler);
this.element.findByClassName(l).on([o.touchend,o.mouseup].join(" "),this._holdEndEventHandler);this.
element.on(o.keydown,this._keyDownHandler=function(t){n._handleMenuKeyDown(t)})},f.prototype._removeClick=
function(n,t){return n&&this.element.findByClassName(t).off(o.click,n),null},f.prototype._removeEventHandlers=
function(){this._switchPortalEventHandler=this._removeClick(this._switchPortalEventHandler,rt);this.
_signOutEventHandler=this._removeClick(this._signOutEventHandler,g);this._legalEventHandler=this._removeClick(
this._legalEventHandler,ut);this._feedbackEventHandler=this._removeClick(this._feedbackEventHandler,
it);this._supportEventHandler=this._removeClick(this._supportEventHandler,ft);this._openSettingsBladeHandler=
this._removeClick(this._openSettingsBladeHandler,nt);this._enterOrganizeModeEventHandler=this._removeClick(
this._enterOrganizeModeEventHandler,tt);this._tenantEventHandler&&(this.element.findByClassName(d).off(
o.click,"a",this._tenantEventHandler),this._tenantEventHandler=null)},f.prototype._closeMenu=function(
){this._removeEventHandlers();r.DismissHandler.Instance.unregister(this._dismissHandle);this.element.
removeClass(v).removeClass(w).removeClass(y).removeClass(p);this.options.isDropDownOpen(!1)},f.prototype.
_openMenu=function(){var n=this,i=this.element.findByClassName(k);if(this.element.addClass(v).addClass(
w).addClass(y).addClass(p),c({source:t,action:s.AvatarMenuOpen}),r.DismissHandler.Instance.register(
this._dismissHandle),!this._signOutEventHandler)this.element.findByClassName(g).on(o.click,this._signOutEventHandler=
function(t){n._signOut(!1);t.preventDefault()});if(!this._legalEventHandler)this.element.findByClassName(
ut).on(o.click,this._legalEventHandler=function(){return n._openLegal()});if(!this._feedbackEventHandler)
this.element.findByClassName(it).on(o.click,this._feedbackEventHandler=function(){return n._openFeedback(
)});if(!this._supportEventHandler)this.element.findByClassName(ft).on(o.click,this._supportEventHandler=
function(t){n._closeMenu();n._openSupport();t.preventDefault()});if(!this._openSettingsBladeHandler)
this.element.findByClassName(nt).on(o.click,this._openSettingsBladeHandler=function(t){n._closeMenu(
);n._openSettingsBlade();t.preventDefault()});if(!this._enterOrganizeModeEventHandler)this.element.findByClassName(
tt).on(o.click,this._enterOrganizeModeEventHandler=function(t){n._enterOrganizeMode();t.preventDefault(
)});if(!this._switchPortalEventHandler)this.element.findByClassName(rt).on(o.click,this._switchPortalEventHandler=
function(){return n._switchPortal()});if(!this._tenantEventHandler)this.element.findByClassName(d).on(
o.click,"a",this._tenantEventHandler=function(t){t.preventDefault();n._switchTenant(ko.dataFor(t.target))}
);this.options.isDropDownOpen(!0)},f.prototype._computeDisplayName=function(n){if(n){if(this._shouldShowFullName(
n))return i.AvatarMenu.displayNameFormat.format(n.firstName?n.firstName:"",n.lastName?n.lastName:"");
if(n.displayName)return n.displayName}return this.options.text.defaultDisplayName},f.prototype._computeCurrentTenantDisplayName=
function(n,t){var i=t().first(function(t){return n().tenantId===t.id});return i?i.displayName||i.id||
"":""},f.prototype._createObservableTenantDisplayList=function(n,t){return ko.pureComputed(function(
){var r=n(),u=r&&r.tenantId&&r.tenantId.toLowerCase(),f=t(),i;return i=f.sort(function(n,t){var r=n.
id.toLowerCase(),i;return r===u?-1:(i=t.id.toLowerCase(),i===u)?1:r<i?-1:r>i?1:0}),i.length===1&&i[0]&&
i[0].id.toLowerCase()===u&&(i=[]),i})},f.prototype._shouldShowFullName=function(n){return!n.firstName&&
!n.lastName?!1:this._firstLastNameRegex.test(n.firstName)&&this._firstLastNameRegex.test(n.lastName)?
!1:!0},f.prototype._handleMenuKeyDown=function(n){var i=u.getModifierKeys(n),t=!1;if(this.element.hasClass(
"fxs-avatarmenu-dropdown-open")){if(i===0)switch(n.keyCode){case 9:t=this._moveFocusToItem(1,n.target);
break;case 40:t=this._moveFocusToItem(1,n.target);break;case 38:t=this._moveFocusToItem(-1,n.target)}
else i===h.Shift&&n.keyCode===9&&(t=this._moveFocusToItem(-1,n.target));t&&n.preventDefault()}},f.prototype.
_moveFocusToItem=function(n,t){var i=this.element.find(":tabbable"),u,r=!1;return i.length>0&&(u=i.index(
t),u!==-1?(i[(u+n+i.length)%i.length].focus(),r=!0):n===-1?(i.last().focus(),r=!0):n===1&&(i.first().
focus(),r=!0)),r},f}(e.Widget);n.Widget=et}(s||(s={})),s});define("MsPortalImpl/Base/Base.KnockoutExtensions.Controls",
["require","exports","MsPortalImpl/Base/Base.KnockoutExtensions.Image","MsPortalImpl.Controls/Fields/ArtifactLinks",
"MsPortalImpl.Controls/Fields/Attachment","MsPortalImpl.Controls/Fields/History","MsPortalImpl.Controls/Fields/OAuthButtonField",
"MsPortalImpl.Controls/Fields/SectionField","MsPortalImpl.Controls/Fields/CreatorAndSelectorFieldV2",
"MsPortalImpl.Controls/Fields/Splitter","MsPortalImpl.Controls/Fields/StringListField","MsPortalImpl.Controls/Fields/Base/KnockoutExtensions",
"MsPortalImpl.Controls/Controls/Console","MsPortalImpl.Controls/Controls/Data/QueryBuilder","MsPortalImpl.Controls/Controls/DockedBalloon",
"MsPortalImpl.Controls/Controls/Forms/Button","MsPortalImpl.Controls/Controls/Forms/CheckBox","MsPortalImpl.Controls/Controls/Forms/CopyableLabel",
"MsPortalImpl.Controls/Controls/Forms/DateTimeCombo","MsPortalImpl.Controls/Controls/Forms/DropDown",
"MsPortalImpl.Controls/Controls/Forms/FileUpload","MsPortalImpl.Controls/Controls/Forms/FilterCombo",
"MsPortalImpl.Controls/Controls/Forms/GroupDropDown","MsPortalImpl.Controls/Controls/Forms/MultiLineTextBox",
"MsPortalImpl.Controls/Controls/Forms/MultiselectDropDown","MsPortalImpl.Controls/Controls/Forms/NumericTextBox",
"MsPortalImpl.Controls/Controls/Forms/OptionPicker","MsPortalImpl.Controls/Controls/Forms/Password",
"MsPortalImpl.Controls/Controls/Forms/RangeSlider","MsPortalImpl.Controls/Controls/Forms/Selector","MsPortalImpl.Controls/Controls/Forms/Slider",
"MsPortalImpl.Controls/Controls/Forms/TextBox","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ContextMenuShortcut",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.EditableRow","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Extensibility",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Filterable","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FocusableRow",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FocusableRowHover","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Formatter",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FormatterHtmlBindings","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Groupable",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Hierarchical","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Pageable",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ReorderRow","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ResizableColumn",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.RightClickableRow","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Scrollable",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.SelectableRow","MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.SortableColumn",
"MsPortalImpl.Controls/Controls/Lists/List1/Gallery","MsPortalImpl.Controls/Controls/Lists/List1/ListView",
"MsPortalImpl.Controls/Controls/Lists/Tree1/TreeView","MsPortalImpl.Controls/Controls/LogStream","MsPortalImpl.Controls/Controls/Scrollbar",
"MsPortalImpl.Controls/Controls/Settings","MsPortalImpl.Controls/Controls/SingleSetting","MsPortalImpl.Controls/Controls/Toolbars/Toolbar",
"MsPortalImpl.Controls/Controls/PreviewTag","MsPortalImpl/Controls/ControlBindings"],function(){var n;
return function(){"use strict"}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){
this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl.Controls/Fields/ArtifactLinks",["require","exports","../Controls/Base/Base",
"./Base/Field","../Controls/Lists/Grid1/Grid","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Controls/Base/ValidatableControl"],function(n,t,i,r,u,f,e){var o;return function(n){"use strict";
var s=u.Widget,c=window,h=jQuery,t="fxcontrol-vso-artifacts",o=function(n){function i(i,r,u){var o=this,
c,l,e;n.call(this,i,r,u);this.element.addClass(t);this._gridViewModel=r._msPortalFxGridViewModel;c=r.
removeItemText||f.ArtifactLinks.Grid.removeItemText;l=this._gridViewModel.extensionsOptions;l.controlCommands(
[new MsPortalFx.ViewModels.Controls.Command.ViewModel(this.lifetimeManager,c,function(){o._removeLink(
)},function(){return!0})]);this._addDisposablesToCleanUp(ko.computed(function(){var n=r.value()||[];
n.length>0&&(n=n.filter(function(n){return Boolean(n)}));o._gridViewModel.items(n)}));e=h("<div><\/div>");
this._gridWidget=new s(e,this._gridViewModel);this.appendControl(e)}return __extends(i,n),i.prototype.
dispose=function(){this._gridWidget&&(this._gridWidget.dispose(),this._gridWidget=null);this.element.
removeClass(t);n.prototype.dispose.call(this);this.element.empty()},Object.defineProperty(i.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
i.prototype,"validatableViewModel",{get:function(){var n=new e.ViewModel;return n.enableValidation(!1),
n},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableWidget",{get:function(
){return null},enumerable:!0,configurable:!0}),i.prototype._removeLink=function(){var n=this._gridViewModel.
selectableData.selectableItems.peek().filter(function(n){return!n.isSelected()}).map(function(n){return n.
data});this.options.value(n)},i}(r.FieldWidget);n.ArtifactLinksWidget=o;ko.bindingHandlers.pcArtifactLinks=
i.Widget.getBindingHandler(o)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("MsPortalImpl.Controls/Fields/Attachment",["require","exports","../Controls/Base/Base","../Controls/Forms/FileUpload",
"../Controls/Forms/TextBox","../Controls/Lists/Grid1/Grid","./Base/Field","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Controls/Base/ValidatableControl","MsPortalFx/Globalization"],function(n,t,i,r,u,f,e,
o,s,h){var c;return function(n){"use strict";var y=window,p=jQuery,l="fxcontrol-attachment",t=o.Attachment,
c={addButtonLabel:t.addButton,fileNameLabel:t.GridColumn.fileName,sizeLabel:t.GridColumn.size,addedDateLabel:
t.GridColumn.addedDate,commentLabel:t.GridColumn.comment,gridSummaryLabel:t.Grid.summaryText,gridEmptyLabel:
t.Grid.emptyText,deleteCommand:t.controlCommandsDelete,downloadCommand:t.ControlCommands.download},v=
'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="23px" height="23px" viewBox="0 0 23 23" enable-background="new 0 0 23 23" xml:space="preserve"><g>  <g>    <g>      <g>        <path class="azc-fill-muted" d="M22,1v21H1V1H22 M23,0H0v23h23V0L23,0z"/>      <\/g>    <\/g>  <\/g> <polygon class="azc-fill-muted" points="18,10 13,10 13,5 10,5 10,10 5,10 5,13 10,13 10,18 13,18 13,13 18,13  "/><\/g><\/svg>',
a=function(n){function t(t,i,r){n.call(this,t,i,r);this._template="<div class='azc-bg-default'><div class='attachmentFilePickerArea'><div>Attachment<\/div><div class='attachmentFileUploadControl'><\/div><\/div><div class='attachmentCommentArea'><div>Comment<\/div><div class='attachmentCommentBoxControl'><\/div><div class='attachmentAddButtonControl disabled'>"+
v+"<\/div><\/div><\/div><div class='attachmentFloatClear'><\/div><div class='attachmentGridControl azc-bg-default'><\/div>";
this.element.addClass(l).append(this._template);this._initializeControlParts();this._registerSyncBetweenDataArrayAndGrid(
)}return __extends(t,n),t.prototype.dispose=function(){this._syncSubscripion&&(this._syncSubscripion.
dispose(),this._syncSubscripion=null);this._attachmentGrid&&(this._attachmentGrid.dispose(),this._attachmentGrid=
null);this._commentWidget&&(this._commentWidget.dispose(),this._commentWidget=null);this._filePickerWidget&&
(this._filePickerWidget.dispose(),this._filePickerWidget=null);n.prototype.dispose.call(this);this.element.
removeClass(l).empty()},Object.defineProperty(t.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"validatableViewModel",{get:function(
){var n=new s.ViewModel;return n.enableValidation(!1),n},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"validatableWidget",{get:function(){return null},enumerable:!0,configurable:!0}),t.prototype.
_initializeControlParts=function(){this._initializeAttachmentHeaderControls();this._initializeAttachmentGridControl(
)},t.prototype._initializeAttachmentHeaderControls=function(){this._initializeCommentBoxControl();this.
_initializeFilePickerControl();this._initializeAddButtonControl()},t.prototype._initializeCommentBoxControl=
function(){var n=this.element.find(".attachmentCommentBoxControl");this._commentBoxViewModel=new MsPortalFx.
ViewModels.Controls.Forms.TextBox.ViewModel(this.lifetimeManager);this._commentWidget=new u.Widget(n,
this._commentBoxViewModel)},t.prototype._initializeFilePickerControl=function(){var n=this,t=this.element.
find(".attachmentFileUploadControl");this._filePickerViewModel=new MsPortalFx.ViewModels.Controls.Forms.
FileUpload.ViewModel(this.lifetimeManager);this._filePickerViewModel.maxFiles=this.options.maxFileSelection;
this._filePickerViewModel.showProgressBars(!1);this._filePickerViewModel.dirty.subscribe(this.lifetimeManager,
function(t){t?n._enableAddButton():n._disableAddButton()});this._filePickerWidget=new r.Widget(t,this.
_filePickerViewModel)},t.prototype._handleAddAttachment=function(){var t,n,i=this._filePickerViewModel.
files(),r=this._commentBoxViewModel.value(),u=new Date;n=ko.isObservable(this.options.value)&&this.options.
value()instanceof Array?this.options.value().slice(0):[];i.forEach(function(i){t={id:MsPortalFx.Util.
newGuid(),addedDate:u,comment:r,fileName:i.name,url:null,sizeInBytes:i.size,uploadTask:i.uploadTask,
uploadTrigger:i.upload};n.push(t)});this.options.value(n);this._filePickerViewModel.dirty(!1);this._commentBoxViewModel.
value("");this._disableAddButton()},t.prototype._enableAddButton=function(){this.element.find(".attachmentAddButtonControl").
removeClass("disabled").removeClass("azc-fill-muted")},t.prototype._disableAddButton=function(){this.
element.find(".attachmentAddButtonControl").addClass("disabled").addClass("azc-fill-muted")},t.prototype.
_initializeAddButtonControl=function(){var t=this,n=this.element.find(".attachmentAddButtonControl");
n.click(function(){n.hasClass("disabled")||t._handleAddAttachment()})},t.prototype._initializeAttachmentGridControl=
function(){var n=this.element.find(".attachmentGridControl");this._attachmentsGridViewModel=new MsPortalFx.
ViewModels.Controls.Lists.Grid.ViewModel(this.lifetimeManager,ko.observableArray(),MsPortalFx.ViewModels.
Controls.Lists.Grid.Extensions.SelectableRow|MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.RightClickableRow|
MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.ContextMenuShortcut,{selectableRow:this._getSelectableRowOptions(
),controlCommands:this._getCommandOptions()});this._attachmentsGridViewModel.columns=ko.observableArray(
[{itemKey:"fileName",name:ko.observable(c.fileNameLabel),format:1e3,formatOptions:{htmlBindingsTemplate:
"<!-- ko if: settings.item.url --><a data-bind='attr: { href: settings.item.url }' target='_blank'><div data-bind='text: value'><\/div><\/a> <!-- /ko --><!-- ko ifnot: settings.item.url --><div data-bind='text: value'><\/div><!-- /ko -->"}},
{itemKey:"size",name:ko.observable(c.sizeLabel)},{itemKey:"date",name:ko.observable(c.addedDateLabel)},
{itemKey:"comment",name:ko.observable(c.commentLabel)},]);this._attachmentsGridViewModel.showHeader=
!0;this._attachmentsGridViewModel.summary(c.gridSummaryLabel);this._attachmentsGridViewModel.noRowsMessage(
c.gridEmptyLabel);this._attachmentGrid=new f.Widget(n,this._attachmentsGridViewModel)},t.prototype._registerSyncBetweenDataArrayAndGrid=
function(){var n=this;this._syncSubscripion=ko.computed(function(){if(ko.isObservable(n.options.value)&&
n.options.value()){var t=[],i={};n.options.value().forEach(function(r){r.id&&i[r.id]||(t.push(n._convertAttachedFileToGridRow(
r)),i[r.id]=!0)});n._attachmentsGridViewModel.items(t)}})},t.prototype._convertAttachedFileToGridRow=
function(n){var i=Math.ceil(n.sizeInBytes/1024)+"K",t=n.addedDate,r=h.DateTimeFormat.create({day:"numeric",
month:"long",year:"numeric"}).format(t);return{fileName:n.fileName,comment:n.comment,timestamp:t,date:
r,size:i,url:n.url}},t.prototype._getSelectableRowOptions=function(){return{selectionMode:1,createSelection:
function(n){return{fileName:n.fileName,url:n.url,timestamp:n.timestamp}},itemMatchesSelection:function(
n,t){return n.url===t.url&&n.fileName===t.fileName&&n.timestamp===t.timestamp},activateOnSelected:ko.
observable(!0),primaryActivateColumnKey:ko.observable("fileName")}},t.prototype._downloadFile=function(
n,t){var i,r;if((navigator.userAgent.toLowerCase().indexOf("chrome")>-1||navigator.userAgent.toLowerCase(
).indexOf("safari")>-1)&&(i=document.createElement("a"),i.href=n,i.download!==undefined&&(i.download=
t),document.createEvent))return r=document.createEvent("MouseEvents"),r.initEvent("click",!0,!0),i.dispatchEvent(
r),!0;window.open(n)},t.prototype._getCommandOptions=function(){var n=this;return ko.observable([new
MsPortalFx.ViewModels.Controls.Command.ViewModel(this.lifetimeManager,c.deleteCommand,function(){var
t=n._attachmentsGridViewModel.selectableData.selectedItems()[0],i=n.options.value().filter(function(
n){return!(n.fileName===t.fileName&&n.url===n.url&&n.addedDate===t.timestamp)});n.options.value(i)}),
new MsPortalFx.ViewModels.Controls.Command.ViewModel(this.lifetimeManager,c.downloadCommand,function(
){var t=n._attachmentsGridViewModel.selectableData.selectedItems()[0];n._downloadFile(t.url,t.fileName)}
)])},t}(e.FieldWidget);n.AttachmentWidget=a;ko.bindingHandlers.pcAttachment=i.Widget.getBindingHandler(
a)}(c||(c={})),c});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/FileUpload",
["require","exports","../Visualization/ProgressBar","../Base/ValidatableControl","../Base/Base","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Controls/Base/ValidationPlacements/Css","Viva.Controls/Controls/Forms/FileUpload"],function(
n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var y=window,h=jQuery,t=f.FileUpload,l="<div class='fxcontrol-fileUpload-uploadTasks' data-bind='visible: showProgressBars'><\/div>",
a="<div class='fxcontrol-fileUpload-uploadTask'><div class='fxcontrol-fileUpload-progressBar'><\/div><div class='fxcontrol-fileUpload-progressDetails'><div class='fxcontrol-fileUpload-progressFileName'><\/div><div class='fxcontrol-fileUpload-progressPercent'><\/div><\/div><\/div>",
v=1048576,s={labelTextError:t.labelTextError,labelTextPending:t.labelTextPending,labelTextCanceled:t.
labelTextCanceled,labelTextComplete:t.labelTextComplete,baseControl:{placeholderText:t.placeholderText,
singleFileSelectedMessage:t.singleFileSelectedMessage,multipleFilesSelectedMessage:t.multipleFilesSelectedMessage,
fileSizeExceededMessage:t.fileSizeExceededMessage}},c=function(n){function t(t,i,r){this._uploadTasksElement=
h(l);this._uploads=0;this._progressWidgets={};this._uploadTaskElements={};n.call(this,t,i,r);this._initializeWidgets(
)}return __extends(t,n),Object.defineProperty(t.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this._cleanUploadTasks(),this._uploadTasksElement.remove(),n.prototype.dispose.
call(this))},t.prototype._initializeWidgets=function(){var n=this;this._baseViewModel=new o.ViewModel;
this._baseViewModel.populateFromObject(this.options);this._baseViewModel.chunkSize=v;this._baseViewModel.
text=s.baseControl;this._baseViewModel.validationPlacements.push(new e.Css);this._baseWidget=new o.Widget(
this.element,this._baseViewModel);this._widgets.push(this._baseWidget);this._baseWidget.options.files.
subscribe(function(t){n.options.files(t)});this._initializeUploadTasks()},t.prototype._initializeUploadTasks=
function(){var n=this;this.element.after(this._uploadTasksElement);ko.applyBindings(this.options,this.
_uploadTasksElement[0]);this.options.files.subscribe(function(t){n._cleanUploadTasks();t.forEach(function(
t){n._uploadTaskElements[t.name]||n._createUploadTask(t);t.uploadTask.subscribe(function(i){n._updateUploadTaskView(
t,i)});t.uploadTask(t.uploadTask())})})},t.prototype._cleanUploadTasks=function(){var n=this;Object.
keys(this._progressWidgets).forEach(function(t){n._progressWidgets[t].dispose()});this._progressWidgets=
{};this._uploadTaskElements={};this._uploadTasksElement.empty()},t.prototype._createUploadTask=function(
n){var t=h(a),u=this._getProgressBarViewModel(),r,f="__fxcontrol-filUpload-uploadTask"+ ++this._uploads;
t.attr("id",f);t.find(".fxcontrol-fileUpload-progressFileName").text(n.name);r=new i.Widget(t.find(".fxcontrol-fileUpload-progressBar"),
u);this._progressWidgets[n.name]=r;this._uploadTaskElements[n.name]=t;this._uploadTasksElement.append(
t)},t.prototype._getProgressBarViewModel=function(){var n=new MsPortalFx.ViewModels.Controls.Visualization.
ProgressBar.ViewModel(this.lifetimeManager);return n.status(0),n.valuePercentage(0),n},t.prototype._updateUploadTaskView=
function(n,t){var f=this._progressWidgets[n.name],e=this._uploadTaskElements[n.name],o,u,i,r;if(!this.
_baseWidget.options.disabled()&&e){o=e.find(".fxcontrol-fileUpload-progressPercent");switch(t.status)
{case 0:i=100;r=s.labelTextError;u=1;break;case 1:i=0;r=s.labelTextPending;break;case 3:case 2:i=Math.
round(t.progressPercent*100);r=i+"%";break;case 4:i=100;r=s.labelTextComplete;u=3}f.options.valuePercentage(
i);o.text(r);f.options.status(u)}},t}(r.Widget);n.Widget=c;ko.bindingHandlers.pcFileUpload=u.Widget.
getBindingHandler(c)}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl.Controls/Controls/Visualization/ProgressBar",["require","exports","../Base/Base","../Base/Loadable",
"Viva.Controls/Controls/Visualization/Progress"],function(n,t,i,r,u){var f;return function(n){"use strict";
var e=window,i=jQuery,t=["","fxcontrol-progress-error","fxcontrol-progress-warning","fxcontrol-progress-success",
"fxcontrol-progress-indeterminate","fxcontrol-progress-vertical"],f=function(n){function r(t,r,u){n.
call(this,t,r,i.extend({fillBehavior:1},u));this._initializeSubscriptions();this._initializeWidgets(
)}return __extends(r,n),Object.defineProperty(r.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),r.prototype._initializeWidgets=function(){this._nestedViewModel=new
u.ViewModel;this._nestedViewModel.valuePercentage=this.options.valuePercentage;this._nestedViewModel.
cssClass(this._getCssClass(this.options.status()));this._nestedViewModel.labelId=this.options.labelId;
this._nestedViewModel.detailsId=this.options.detailsId;this.options.status()===4&&this._nestedViewModel.
indeterminate(!0);this._widgets.push(new u.Widget(this.element,this._nestedViewModel))},r.prototype.
_getCssClass=function(n){var i="";switch(n){case 0:case 1:case 2:case 3:i=t[n];this._nestedViewModel.
indeterminate(!1);break;case 4:i=t[4];this._nestedViewModel.indeterminate(!0);break;case 5:i=t[4]+" "+
t[5];this._nestedViewModel.indeterminate(!0)}return i},r.prototype._initializeSubscriptions=function(
){var n=this;this.options.status.subscribe(this.lifetimeManager,function(t){n._nestedViewModel.cssClass(
n._getCssClass(t))})},r}(r.Widget);n.Widget=f}(f||(f={})),f});__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Visualization/Progress",["require","exports","../Base/Base"],
function(n,t,i){var r;return function(n){"use strict";var o=window,f=jQuery,t="azc-progress",e="<div data-bind='attr: { class: func._cssClasses }'><div class='azc-progress-background'><\/div><div class='azc-progress-value' data-bind='style: { width: func._value }'><\/div><\/div>",
r=function(n){function t(){n.apply(this,arguments);this.valuePercentage=ko.observable(0);this.indeterminate=
ko.observable(!1);this.cssClass=ko.observable("")}return __extends(t,n),t}(i.ViewModel),u;n.ViewModel=
r;u=function(n){function i(i,u,o){n.call(this,i,u,f.extend({viewModelType:r},o));this.element.addClass(
t).attr({role:"progressbar","aria-atomic":!0,"aria-valuemin":0,"aria-valuemax":100,"aria-live":"polite",
"aria-labelledby":this.options.labelId,"aria-describedby":this.options.detailsId}).html(e);this._initializeComputeds(
);this._bindDescendants()}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this.element.removeAttr("role aria-atomic aria-valuemin aria-valuemax aria-labelledby aria-describedby aria-valuenow"),
this._cleanElement(t),n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,"options",{
get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeComputeds=
function(){var n=this;this._addDisposablesToCleanUp(ko.computed(function(){n.element.attr("aria-valuenow",
n.options.indeterminate()?null:n.options.valuePercentage())}));this._addDisposablesToCleanUp(this._value=
ko.computed(function(){var t,i;if(n.options.indeterminate()===!1){if(t=n.options.valuePercentage(),isNaN(
t)||t===null)throw new Error("View model valuePercentage must be a number.");if(t>100||t<0)throw new
Error("View model valuePercentage must be set between 0 to 100.");i=t.toString()+"%"}return i}));this.
_addDisposablesToCleanUp(this._cssClasses=ko.computed(function(){return"azc-progress-container "+(n.
options.cssClass()||"")}))},i}(i.Widget);n.Widget=u}(r||(r={})),r});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Forms/FileUpload",["require","exports","../Base/ValidationPlacements/DockedBalloon",
"../Base/Validators","../Base/ValidationPlacements/Css","./TextBox","./Button","../Base/Base","../Base/ValidatableControl",
"../../Util/StringUtil","MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r,u,f,e,o,s,h,c)
{var l;return function(n){"use strict";var nt=window,l=jQuery,w=0,t="azc-fileUpload",a="azc-fileUpload-state-hover",
p="azc-fileUpload-hasfocus",b="__azc-fileUpload",k="<div class='azc-fileUpload-wrapper'><div class='azc-fileUpload-selectedFile' data-bind='azcTextBox: func._textBoxViewModel'><\/div><button class='azc-btn-secondary' data-bind='azcButton: func._buttonViewModel'><svg width='16px' height='16px' x='0px' y='0px' viewBox='0 0 12 12' enable-background='new 0 0 12 12' xml: space='preserve' ><path d ='M11.3,3H1v9h10.4c0.3,0,0.6-0.3,0.6-0.6V3H11.3z'><\/path><path d ='M1,3v8.6C1,11.9,0.9,12,0.6,12C0.3,12,0,12.1,0,11.8V1h3.8l1.4,1H12v1H1z'><\/path><\/svg><\/button><\/div><input type='file' class='azc-fileUpload-overlay azc-formControl' data-bind='attr: { name: func._name, accept: data.accept, multiple: data.maxFiles > 1 }'><\/input>",
d={validationStateBalloonOptions:{pending:{balloonVisible:!1}}},g,v,y;(function(n){n[n.Invalid=0]="Invalid";
n[n.Pending=1]="Pending";n[n.Uploading=2]="Uploading";n[n.Paused=3]="Paused";n[n.Complete=4]="Complete"}
)(n.UploadStatus||(n.UploadStatus={}));g=n.UploadStatus;v=function(n){function t(){n.apply(this,arguments);
this.accept="";this.maxFiles=1;this.sizeLimit=209715200;this.chunkSize=1048576;this.files=ko.computed(
function(){return[]})}return __extends(t,n),t}(s.ViewModel);n.ViewModel=v;y=function(n){function o(r,
o,s){n.call(this,r,o,l.extend({viewModelType:v},s));this.element.addClass(t).html(k);this._name=this.
options.name||b+w++;this._input=this.element.find(".azc-fileUpload-selectedFile");this._inputOverlay=
this.element.find("input.azc-fileUpload-overlay");this._selectedFiles=ko.observableArray([]);this._autoReadBookmarks=
{};this.options.text=this.options.text||this._getDefaultResourceStrings();this._textBoxViewModel=new
f.ViewModel;this._textBoxViewModel.validationPlacements.push(new u.Css);this._textBoxViewModel.validationPlacements.
push(new i.DockedBalloon(d));this._textBoxViewModel.readonly(!0);this._buttonViewModel=new e.ViewModel;
this._buttonViewModel.tabindex(-1);this._attachEvents();this._initializeComputeds();this._bindDescendants(
);this._afterCreate()}return __extends(o,n),o.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this._detachEvents(),this._cleanElement(t,a),n.prototype.dispose.call(this))}
,Object.defineProperty(o.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),o.prototype.read=function(n,t){var u=this._autoReadBookmarks[n.name],f=this._files[n.name],r,i;
t?(r=t,i=t+this.options.chunkSize):u?(r=u.startByte+this.options.chunkSize,i=u.endByte+this.options.
chunkSize):(r=n.uploadStartByte>0?n.uploadStartByte:0,i=r+this.options.chunkSize);i>f.size&&(i=f.size);
this._autoReadBookmarks[n.name]={startByte:r,endByte:i};this.readChunk(n,r,i)},o.prototype._getElementToFocus=
function(){return this._inputOverlay[0]},o.prototype.readChunk=function(n,t,i){var o=this,f=new FileReader,
u=this._files[n.name],e,r=l.extend({},n.uploadTask());r.valid&&u&&!this.options.disabled()?(f.onload=
function(u){r=l.extend({},r);r.chunk={content:u.target.result,startByte:t,endByte:i};r.progressPercent=
i/n.size;r.progressPercent>=1?(r.progressPercent=1,r.status=4):r.status=3;o._autoReadBookmarks[n.name]=
{startByte:t,endByte:i};n.upload(!1);n.uploadTask(r)},r.status=2,n.uploadTask(r),e=u.slice(t,i,u.type),
f.readAsArrayBuffer(e)):n.upload(!1)},o.prototype._initializeComputeds=function(){var n=this;this._addDisposablesToCleanUp(
ko.computed(function(){var t=n.options.disabled();n.element.find("input.azc-fileUpload-overlay").prop(
"disabled",t);n._buttonViewModel.disabled(t);n._textBoxViewModel.disabled(t)}));this._addDisposablesToCleanUp(
ko.computed(function(){var t=n.options.dirty();n._textBoxViewModel.dirty(t)}));this._addDisposablesToCleanUp(
this._displayedString=ko.computed(function(){var i=n.options.text.placeholderText,t=n._selectedFiles(
);return t.length===1?i=t[0].name:t.length>1&&(i=h.format(n.options.text.multipleFilesSelectedMessage,
t.length)),i},this));this._addDisposablesToCleanUp(this.options.files=ko.computed(function(){var i=n.
_selectedFiles()||[],t,u=!1,f=[];return i.length>0?(i.forEach(function(r,e){t=r.uploadTask.peek();f.
push(r.name);t.valid=!0;t.status=1;(!n._files[r.name]||r.size===0||r.size>n.options.sizeLimit)&&(t.valid=
!1,t.status=0,u=!0);r.uploadTask(t);i[e]=r;r.upload.subscribe(function(t){t&&n.read(r)},n)}),u?(n.options.
validationState(1),n._textBoxViewModel.validators.push(new r.Invalid(h.format(n.options.text.fileSizeExceededMessage,
n.options.sizeLimit)))):n._resetValidationState(2),n.options.value(f.join(";")),n.options.dirty(!0)):
n._resetValidationState(0),i}));this._addDisposablesToCleanUp(ko.computed(function(){n._textBoxViewModel.
validationState(n.options.validationState())}));this._addDisposablesToCleanUp(ko.computed(function()
{n._textBoxViewModel.value(n._displayedString())}))},o.prototype._attachEvents=function(){var n=this;
this._detachEvents();this._inputOverlayChangeHandler=function(t){var i=t.target;i.files&&n._selectedFiles(
n._toSelectedFileArray(i.files))};this._inputOverlayClickHandler=function(){n._inputOverlay.val("")}
;this._inputOverlay.on("focus."+t,function(){n._focus()}).on("blur."+t,function(){n._blur()}).on("change."+
t,this._inputOverlayChangeHandler).on("mouseenter."+t,function(){n._mouseEnter()}).on("mouseleave."+
t,function(){n._mouseLeave()}).on("click."+t,this._inputOverlayClickHandler)},o.prototype._detachEvents=
function(){this._inputOverlayChangeHandler&&(this._inputOverlay.off("change."+t,this._inputOverlayChangeHandler),
this._inputOverlayChangeHandler=null);this._inputOverlayClickHandler&&(this._inputOverlay.off("click."+
t,this._inputOverlayClickHandler),this._inputOverlayClickHandler=null)},o.prototype._focus=function(
){this._textBoxViewModel.focused(!0);this.element.toggleClass(p,!0)},o.prototype._blur=function(){this.
_textBoxViewModel.focused(!1);this.element.toggleClass(p,!1)},o.prototype._mouseEnter=function(){this.
options.disabled()||(this.element.addClass(a),this.options.validationState()===1&&this.element.find(
".azc-dockedballoon-anchor").trigger("mouseenter"))},o.prototype._mouseLeave=function(){this.options.
disabled()||(this.element.removeClass(a),this.options.validationState()===1&&this.element.find(".azc-dockedballoon-anchor").
trigger("mouseleave"))},o.prototype._getDefaultResourceStrings=function(){return{placeholderText:c.Viva.
FileUpload.placeholder,singleFileSelectedMessage:c.Viva.FileUpload.singleFileSelected,multipleFilesSelectedMessage:
c.Viva.FileUpload.multipleFilesSelected,fileSizeExceededMessage:c.Viva.FileUpload.fileSizeExceeded}}
,o.prototype._resetValidationState=function(n){this.options.validationState(n);this._textBoxViewModel.
validators.removeAll()},o.prototype._toSelectedFileArray=function(n){var r=[],u,t,i,f=n.length;for(this.
_files={},this._autoReadBookmarks={},!this.options.maxFiles||this.options.maxFiles>n.length||(f=this.
options.maxFiles),i=0;i<f;i++)t=n[i],u={name:t.name,mimetype:t.type,size:t.size,upload:ko.observable(
!1),uploadStartByte:0,uploadTask:ko.observable({valid:!1,status:null,progressPercent:0,chunk:{content:
"",startByte:0,endByte:0}})},r.push(u),this._files[t.name]=t;return r},o}(s.Widget);n.Widget=y;ko.bindingHandlers.
azcFileUpload=o.Widget.getBindingHandler(y)}(l||(l={})),l});__extends=this.__extends||function(n,t){
function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Forms/Button",["require","exports","../Base/Base",
"../../Util/Util"],function(n,t,i){var r;return function(n){"use strict";var s=window,t=jQuery,e="azc-btn-primary",
o="azc-disabled",r,u,f;(function(n){n[n.Initial=0]="Initial";n[n.Hover=1]="Hover";n[n.Active=2]="Active"}
)(n.MouseState||(n.MouseState={}));r=n.MouseState;u=function(n){function i(){n.apply(this,arguments);
this.submit=!1;this.selector=ko.observable(null);this.toggle=ko.observable(!1);this.pressed=ko.observable(
!1);this.state=ko.observable(0);this.click=t.noop;this.uri=ko.observable({});this.text=ko.observable(
{});this.tabindex=ko.observable(0);this.visible=ko.observable(!0);this.isDefault=ko.observable(!1)}return __extends(
i,n),i}(i.ViewModel);n.ViewModel=u;f=function(n){function i(i,r,f){var e=this;n.call(this,i,r,t.extend(
{viewModelType:u},f));this.element.addClass("azc-button").attr("role","button").on("click",this._clickHandler=
function(n){return e._click(n)}).on("mousedown",this._mouseDownHandler=function(){e._mouseDown()}).on(
"mouseenter",this._mouseEnterHandler=function(){e._mouseEnter()}).on("mouseleave",this._mouseLeaveHandler=
function(){e._mouseLeave()});this.element.is("button")||this._attachKeyEvent();this._initializeComputeds(
)}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.
dispose)||(this.element.removeAttr("role tabindex aria-pressed aria-disabled").removeClass("azc-button azc-button-state-hover azc-button-default").
removeClass(e),this._mouseLeaveHandler&&(this.element.off("mouseleave",this._mouseLeaveHandler),this.
_mouseLeaveHandler=null),this._mouseEnterHandler&&(this.element.off("mouseenter",this._mouseEnterHandler),
this._mouseEnterHandler=null),this._mouseDownHandler&&(this.element.off("mousedown",this._mouseDownHandler),
this._mouseDownHandler=null),this._removeMouseUpHandler(),this._keyUpHandler&&(this.element.off("keyup",
this._keyUpHandler),this._keyUpHandler=null),this._keyDownHandler&&(this.element.off("keydown",this.
_keyDownHandler),this._keyDownHandler=null),this._clickHandler&&(this.element.off("click",this._clickHandler),
this._clickHandler=null),n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeComputeds=
function(){var n=this;this._addDisposablesToCleanUp(ko.computed(function(){var t=-1;n.options.disabled(
)||(t=n.options.tabindex());n.element.attr("tabindex",t)}));this._addDisposablesToCleanUp(ko.computed(
function(){n.options.toggle()?n.element.attr("aria-pressed",n.options.pressed()):n.element.removeAttr(
"aria-pressed")}));this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.selector();n.
_previousSelector!==t&&n._previousImg&&n._previousImg.attr("src","").attr("alt","");n._previousSelector=
t;n._previousImg=n.element.find(n.options.selector()).attr("src",n._getUri()).attr("alt",n._getAlt())}
));this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.disabled();n.element.toggleClass(
o,t).attr("aria-disabled",t).filter(":button").prop("disabled",t)}));this._addDisposablesToCleanUp(ko.
computed(function(){var t=n.options.isDefault();n.element.toggleClass("azc-button-default",t);n.element.
toggleClass(e,t)}));this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.visible();n.
element.toggle(t!==!1)}))},i.prototype._attachKeyEvent=function(){var n=this;this._correctKeyPressed=
!1;this.element.on("keydown",this._keyDownHandler=function(t){var i=function(){n.element.trigger("click",
t)};t.which===13&&i();n._correctKeyPressed=!1;t.which===32&&(n._correctKeyPressed=!0)}).on("keyup",this.
_keyUpHandler=function(t){n._correctKeyPressed&&t.which===32&&(n._correctKeyPressed=!1,n.element.trigger(
"click",t))})},i.prototype._click=function(n){return this.options.disabled()?!1:(this.options.pressed(
!this.options.pressed()),this.options.click&&this.options.click.call(this.element,n),this.options.submit&&
this.element.submit(),!0)},i.prototype._getAlt=function(){var n,t,i,u;return(n=this.options.text(),typeof
n=="string")?n:n?(t=this._getObject(n),i=this.options.state(),u=r[i].toLowerCase(),t[u]||null):null}
,i.prototype._getObject=function(n){return this.options.toggle()&&n.normal&&n.pressed&&(n=this.options.
pressed()?n.pressed:n.normal),n.enabled&&n.disabled&&(n=this.options.disabled()?n.disabled:n.enabled),
n},i.prototype._getUri=function(){var n,t,i,u;return(n=this.options.uri(),typeof n=="string")?n:n?(t=
this._getObject(n),i=this.options.state(),u=r[i].toLowerCase(),t[u]||null):null},i.prototype._mouseDown=
function(){var n=this;this.element.addClass("azc-button-state-active");this.options.state(2);this._removeMouseUpHandler(
);this._body&&this._body.length===1||(this._body=t("body"));this._body.on("mouseup",this._mouseUpHandler=
function(){n.element.removeClass("azc-button-state-active");n.options.state(0);n.element.hasClass("azc-button-state-hover")?
n._mouseEnter():n._mouseLeave();n._removeMouseUpHandler()})},i.prototype._mouseEnter=function(){this.
element.addClass("azc-button-state-hover");this.options.state()!==2&&this.options.state(1)},i.prototype.
_mouseLeave=function(){this.element.removeClass("azc-button-state-hover");this.options.state()!==2&&
this.options.state(0)},i.prototype._removeMouseUpHandler=function(){this._mouseUpHandler&&(this._body.
off("mouseup",this._mouseUpHandler),this._mouseUpHandler=null)},i}(i.Widget);n.Widget=f;ko.bindingHandlers.
azcButton=i.Widget.getBindingHandler(f,{controlsDescendantBindings:!1})}(r||(r={})),r});__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/TextBox",
["require","exports","../Base/ValidatableControl","../Base/Base","Viva.Controls/Controls/Forms/TextBox",
"Viva.Controls/Controls/Base/ValidationPlacements/Css","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var o=window,s=jQuery,t=function(n){function t(
t,i,r){n.call(this,t,i,r);this._initializeWidgets()}return __extends(t,n),Object.defineProperty(t.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=
function(){var n;this._nestedViewModel=new u.ViewModel;this._nestedViewModel.populateFromObject(this.
options);this._wrapVivaTextBoxEvents();this._nestedViewModel.validationPlacements.push(new f.Css);this.
_nestedViewModel.validationPlacements.push(new e.DockedBalloon(e.DockedBalloon.defaultOptions));n=new
u.Widget(this.element,this._nestedViewModel);this._validatableWidgets.push(n);this._widgets.push(n)}
,t.prototype._wrapVivaTextBoxEvents=function(){var n=this;this._nestedViewModel.events=new u.Events;
this._nestedViewModel.events.enterPressed=function(t){n.options.events&&n.options.events.enterPressed&&
n.options.events.enterPressed(t)}},t}(i.Widget);n.Widget=t;ko.bindingHandlers.pcTextBox=r.Widget.getBindingHandler(
t)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/History",
["require","exports","../Controls/Base/Base","./Base/Field","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Util/TemplateEngine","Viva.Controls/Controls/Base/ValidatableControl"],function(n,t,i,
r,u,f,e){var o;return function(n){"use strict";var nt=window,t=jQuery,h="fxcontrol-history",a={},o=u.
History,s={fieldLabel:o.Header.field,newValueLabel:o.Header.newValue,oldValueLabel:o.Header.oldValue,
attachmentLabel:o.FieldType.attachment,linkLabel:o.FieldType.link},c='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 7 11" enable-background="new 0 0 7 11" xml:space="preserve"> <g> <path d="M0,11.1V0l6.8,5.6L0,11.1z M1,2.1V9l4.2-3.4L1,2.1z"/> <\/g> <\/svg>',
v='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 8" enable-background="new 0 0 8 8" xml:space="preserve"> <polygon points="-0.1,8 8,8 8,-0.1 "/> <\/svg>',
y='<div class="historyRowHeader azc-has-hover"><div class="historyRowExpander azc-fill-heavy" data-bind="attr: {index: $index}">'+
c+'<\/div><img class="historyRowIcon" data-bind="attr: {src: $data.icon}"><\/img><span class="historyRowName" data-bind="text: $data.changedBy"><\/span><span class="historyRowDescription" data-bind="text: $data.summary"><\/span><span class="historyRowDateTime"><div class="historyRowDate" data-bind="text: $data.postedTime.toLocaleDateString()"><\/div><div class="historyRowTime azc-text-muted azc-font-semibold" data-bind="text: $data.postedTime.toLocaleTimeString()"><\/div><\/span><div class="msportalfx-clearfix"><\/div><\/div>',
p='<table class="historyChangesTable"><thead class="azc-bg-light"><tr><td>'+s.fieldLabel+"<\/td><td>"+
s.newValueLabel+'<\/td><td data-bind="visible: $root.func._shouldShowOldValue($index()) ">'+s.oldValueLabel+
"<\/td><\/tr><\/thead>",w='<tbody data-bind="foreach: $data.attachmentChanges"><tr class="azc-br-muted"><td>'+
s.attachmentLabel+'<\/td><td><!-- ko if: $data.allowDownload --><a target="_blank" data-bind="text: $data.name, visible: $data.isAdded, attr: { href: $data.downloadUrl } "><\/a><!-- /ko --><!-- ko ifnot: $data.allowDownload --><div data-bind="text: $data.name, visible: $data.isAdded "><\/div><!-- /ko --><\/td><td data-bind="visible: $root.func._shouldShowOldValue($parentContext.$index()) "><div data-bind="text: $data.name, visible: !isAdded" class="azc-text-muted"><\/div><\/td><\/tr><\/tbody>',
b='<tbody data-bind="foreach: $data.linkChanges"><tr class="azc-br-muted"><td>'+s.linkLabel+'<\/td><td><div data-bind="visible: $data.isAdded">(<span data-bind="text: $data.type"><\/span>)&nbsp;<span class = "historyRevLink" data-bind="text: $data.referenceText, visible: $data.linkId "><\/span><a target="_blank" data-bind="text: $data.referenceText, attr: { href: $data.referenceUrl }, visible: !$data.linkId "><\/a>&nbsp;<span data-bind="text: $data.description"><\/span><\/div><\/td><td data-bind="visible: $root.func._shouldShowOldValue($parentContext.$index()) "><div class="azc-text-muted" data-bind="visible: !$data.isAdded">(<span data-bind="text: $data.type"><\/span>)&nbsp;<span class = "historyRevLink" data-bind="text: $data.referenceText, visible: $data.linkId "><\/span><a target="_blank" data-bind="text: $data.referenceText, attr: { href: $data.referenceUrl }, visible: !$data.linkId "><\/a>&nbsp;<span data-bind="text: $data.description"><\/span><\/div><\/td><\/tr><\/tbody>',
k='<div class="historyRowContent"><!-- ko if: $data.isExpanded --><!-- ko if: $data.comment --><div class="historyRowContentComment"><div class="historyRowCommentBubble"><?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><polygon fill="#BAD80A" points="11,11 11,16 6,11 0,11 0,0 16,0 16,11 "/><\/svg><\/div><div class="historyRowComment azc-br-muted" data-bind="html: $data.comment"><\/div><\/div><!-- /ko --><div class="tableContainer">'+
p+'<tbody data-bind="foreach: $data.fields"><tr class="azc-br-muted"><td data-bind="text: $data.fieldName"><\/td><td data-bind="html: $data.newValue"><\/td><td data-bind="html: $data.oldValue, visible: $root.func._shouldShowOldValue($parentContext.$index()) "><\/td><\/tr><\/tbody>'+
w+b+"<\/table><\/div><!-- /ko --><\/div>",d='<div class="historyRow">'+y+k+"<\/div>",g='<div class="historyContainer azc-bg-default"><div data-bind="foreach: $data.value">'+
d+"<\/div><\/div>",l=function(n){function i(t,r){n.call(this,t,r,a);this._template="<!-- ko template: { name: 'historyRevTemplate', data: $root.data, templateEngine: $root.customTemplateEngine } --><!-- /ko -->";
this._uniqueId="history_instance_"+i.instanceId++;this.element.attr("id",this._uniqueId).addClass(h).
addClass("azc-bg-muted").html(this._template);this._bindTemplate();this._bindExpanderListeners();this.
_wrapImagesInAnchors();this._bindWorkItemLinkClickEvent();this.element.css("max-height",this.options.
maxHeight)}return __extends(i,n),i.prototype.destroy=function(){this.element.removeClass(h).empty()}
,Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),Object.defineProperty(i.prototype,"validatableViewModel",{get:function(){var n=new e.ViewModel;
return n.enableValidation(!1),n},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableWidget",
{get:function(){return null},enumerable:!0,configurable:!0}),i.prototype._shouldShowOldValue=function(
n){return n<this.options.value().length-1},i.prototype._bindTemplate=function(){this._templateEngine=
new f.StringTemplateEngine;this._templateEngine.setTemplate("historyRevTemplate",g);this._bindDescendants(
{customTemplateEngine:this._templateEngine})},i.prototype._bindWorkItemLinkClickEvent=function(){var
n=this;t("#"+this._uniqueId).on("click",".historyRevLink",function(){var t=ko.dataFor(this);n.options.
selectableData.selectableItems().forEach(function(n){n.isActivated(n.data.linkId===t.linkId);n.isSelected(
n.data.linkId===t.linkId)})})},i.prototype._bindExpanderListeners=function(){var u=this,f,r,n,e,i;t(
"#"+this._uniqueId).on("click",".historyRowHeader",function(o){n=t(".historyRowExpander",o.currentTarget);
r=parseInt(n.attr("index"));e=n.parents(".historyRow");i=t(".historyRowContent",e);f=i.css("display")===
"none";f?(i.slideDown(25),n.html(v),u.options.value()[r].isExpanded(!0)):(i.slideUp(25),n.html(c),u.
options.value()[r].isExpanded(!1))})},i.prototype._wrapImagesInAnchors=function(){var r=t(".tableContainer img",
this.element),n,i;r.each(function(r,u){n=t(u);i=n.attr("src");n.wrap('<a target="_blank" href="'+i+'"><\/a>')}
)},i.instanceId=0,i}(r.FieldWidget);n.HistoryWidget=l;ko.bindingHandlers.pcHistory=i.Widget.getBindingHandler(
l)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/OAuthButtonField",
["require","exports","../Controls/Base/Base","./Base/Field","Viva.Controls/Controls/Forms/TextBox","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon",
"Viva.Controls/Controls/Base/ValidationPlacements/Css","Viva.Controls/Controls/Forms/Button"],function(
n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var t=window,s=jQuery,h=1060,c=function(n){function i(
t,i,r){n.call(this,t,i,r)}return __extends(i,n),i.prototype._initializeField=function(){n.prototype.
_initializeField.call(this);this.element.addClass("azc-oauthButtonField").addClass("fxcontrol-OAuthButtonField");
this.buttonInit();this.textBoxInit()},i.prototype.dispose=function(){this._disposeGlobals();this._buttonWidget&&
(this._buttonWidget.dispose(),this._buttonWidget=null,this._buttonViewModel=null);this._textBoxWidget&&
(this._textBoxWidget.dispose(),this._textBoxWidget=null,this._textBoxViewModel=null);this._cleanElement(
"azc-oauthButtonField","fxcontrol-OAuthButtonField");n.prototype.dispose.call(this)},Object.defineProperty(
i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
i.prototype,"validatableViewModel",{get:function(){return this._textBoxViewModel},enumerable:!0,configurable:
!0}),Object.defineProperty(i.prototype,"validatableWidget",{get:function(){return this._textBoxWidget}
,enumerable:!0,configurable:!0}),i.prototype.buttonInit=function(){var n=this,t;this._buttonViewModel=
new o.ViewModel;this._buttonViewModel.click=this._startOAuth.bind(this);t=s("<div />");t.addClass("azc-oauthButton");
this.appendControl(t);this._buttonWidget=new o.Widget(t,this._buttonViewModel);MsPortalFx.Util.isNullOrUndefined(
this.options.buttonText())?(this._buttonWidget.element.text(this.options.label()),this.options.label.
subscribe(this.lifetimeManager,function(t){n._buttonWidget.element.text()!==t&&n._buttonWidget.element.
text(t)})):(this._buttonWidget.element.text(this.options.buttonText()),this.options.buttonText.subscribe(
this.lifetimeManager,function(t){n._buttonWidget.element.text()!==t&&n._buttonWidget.element.text(t)}
));this._addWidget(this._buttonWidget)},i.prototype.textBoxInit=function(){var t=this,n;this._textBoxViewModel=
new u.ViewModel;this._textBoxViewModel.validationPlacements.push(new e.Css);this._textBoxViewModel.validationPlacements.
push(new f.DockedBalloon(f.DockedBalloon.defaultOptions));n=s("<div />");n.addClass("azc-oAuthButton-hidden-textbox");
this.appendControl(n);this._textBoxViewModel.value(this.options.value());this.options.value.subscribe(
this.lifetimeManager,function(n){t._textBoxViewModel.value()!==n&&t._textBoxViewModel.value(n)});this.
linkValidatableControlViewModels();this._textBoxWidget=new u.Widget(n,this._textBoxViewModel);this._addWidget(
this._textBoxWidget);this.setupValidationBindings()},i.prototype._disposeGlobals=function(){delete t[
i._oauthCallback];delete t[i._oauthChildWindow]},i.prototype._startOAuth=function(){var f=this,r=this.
options.popupHeight()||screen.height/2,n=this.options.popupWidth()||screen.width/2;n=n>=h?n:h;n=n>=screen.
width?screen.width:n;r=r>=screen.height?screen.height:r;var e=screen.height/2-r/2,o=screen.width/2-n/
2,s="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width="+
n+", height="+r+", top="+e+", left="+o,u=t[i._oauthChildWindow];u&&!u.closed?(u.location.href=this.options.
requestUrl(),u.focus()):t[i._oauthChildWindow]=window.open(this.options.requestUrl(),"",s);t[i._oauthCallback]=
function(n){var r=t[i._oauthChildWindow];try{r.document}catch(u){return}f.options.value(n);r.close();
f._disposeGlobals()}},i._oauthCallback="oauthbuttonCallback",i._oauthChildWindow="oauthbuttonChildWindow",
i}(r.FieldWidget);n.OAuthButtonFieldWidget=c;ko.bindingHandlers.pcOAuthButtonField=i.Widget.getBindingHandler(
c)}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/SectionField",
["require","exports","../Controls/Base/Base","../Controls/Base/Loadable"],function(n,t,i,r){var u;return function(
n){"use strict";var u=window,f=jQuery,t=function(n){function t(t,i,r){n.call(this,t,i,r);this._initializeField(
)}return __extends(t,n),t.prototype._initializeField=function(){var n=this;this.element.addClass("azc-formSection").
addClass("msportalfx-form-formelement").addClass("msportalfx-form-section");this._addDisposablesToCleanUp(
[ko.computed(function(){var t=n.options.valid();n.element.toggleClass("azc-formSection-invalid",!t).
toggleClass("msportalfx-form-sectionInvalid",!t)}),ko.computed(function(){var t=n.options.dirty();n.
element.toggleClass("azc-formSection-changed",t).toggleClass("msportalfx-form-sectionChanged",t)})])}
,t.prototype.dispose=function(){this.element.removeClass("azc-formSection").removeClass("msportalfx-form-formelement").
removeClass("msportalfx-form-section").removeClass("msportalfx-form-sectionChanged").removeClass("msportalfx-form-sectionInvalid");
n.prototype.dispose.call(this)},Object.defineProperty(t.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),t}(r.Widget);n.FormSectionWidget=t;ko.bindingHandlers.pcFormSection=
i.Widget.getBindingHandler(t,{controlsDescendantBindings:!1})}(u||(u={})),u});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/CreatorAndSelectorFieldV2",["require",
"exports","../Controls/Base/Base","../Controls/Forms/CreatorAndSelector","./Base/Field","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Controls/Base/Validators","Viva.Controls/Controls/Base/ValidationPlacements/Css"],function(
n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var h=window,t=jQuery,s=function(n){function i(
t,i,r){n.call(this,t,i,r)}return __extends(i,n),i.prototype._initializeField=function(){n.prototype.
_initializeField.call(this);this.element.addClass("azc-creatorAndSelectorField").addClass("fxcontrol-creatorAndSelectorField");
this.creatorAndSelectorInit()},i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.
prototype.dispose)||(this.element.removeClass("azc-creatorAndSelectorField").removeClass("fxcontrol-creatorAndSelectorField"),
this._creatorAndSelectorWidget.dispose(),n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
i.prototype,"validatableViewModel",{get:function(){return this._creatorAndSelectorViewModel},enumerable:
!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableWidget",{get:function(){return this.
_creatorAndSelectorWidget},enumerable:!0,configurable:!0}),i.prototype.creatorAndSelectorInit=function(
){var n=this,i,u;this._requiredValidator=new e.Required;this._isRequired=ko.computed(function(){return n.
options.validations().some(function(n){return n.type===1})});this._addDisposablesToCleanUp(this._isRequired);
this._hasValue=ko.observable(!1);this._creatorAndSelectorViewModel=new r.BaseViewModel;u={validations:
this.options.validations,valueUpdateTrigger:2};this._creatorAndSelectorViewModel.textBoxViewModel=ko.
observable(new MsPortalFx.ViewModels.Forms.TextBox.ViewModel(this.lifetimeManager,u));this._creatorAndSelectorViewModel.
validationPlacements.push(new o.Css);i=t("<div />");this.appendControl(i);this.linkCreatorAndSelectorViewModels(
);this._creatorAndSelectorWidget=new r.BaseWidget(i,this._creatorAndSelectorViewModel,this.options);
this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorWidget._isRequired(n._isRequired(
))}));this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorWidget._hasValue(n._hasValue(
))}));this.setupValidationBindings()},i.prototype.linkCreatorAndSelectorViewModels=function(){var n=
this,t=function(t){(n._currentCreateNew!==t.createNew||n._currentValue!==t.value)&&(n._creatorAndSelectorViewModel.
createNew(t.createNew),n._creatorAndSelectorViewModel.value(t.value))};t(this.options.value());this.
options.value.subscribe(this.lifetimeManager,t);this.options.defaultValue&&this.options.defaultValue.
subscribe(this.lifetimeManager,function(t){n._creatorAndSelectorViewModel.defaultValue(t.value)});this.
_creatorAndSelectorViewModel.createNew.subscribe(this.lifetimeManager,function(t){t!==n.options.value(
).createNew&&n.options.value({createNew:t,value:n.options.value().value})});this._creatorAndSelectorViewModel.
value.subscribe(this.lifetimeManager,function(t){t!==n.options.value().value&&n.options.value({createNew:
n.options.value().createNew,value:t})});this._creatorAndSelectorViewModel.dirty=this.options.dirty;this.
_addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.label(n.options.label(
))}));this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.showValue(
n.options.showValue())}));this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.
icon(n.options.icon())}));this.options.isDefault?(this._creatorAndSelectorViewModel.isDefault=ko.observable(
),this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.isDefault(n.options.
isDefault())}))):this._addDisposablesToCleanUp(this._creatorAndSelectorViewModel.isDefault=ko.computed(
function(){return n._creatorAndSelectorViewModel.value()===n._creatorAndSelectorViewModel.defaultValue(
)}));this._addDisposablesToCleanUp(ko.computed(function(){n._isRequiredAndEmpty()?n._creatorAndSelectorViewModel.
displayText(f.Selector.valueRequired):n._creatorAndSelectorViewModel.displayText(n.options.displayText(
))}));this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.locked(n.options.
locked())}));this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.infoBalloonText(
n.options.infoBalloonText())}));this._addDisposablesToCleanUp(ko.computed(function(){n._creatorAndSelectorViewModel.
infoBalloonLink(n.options.infoBalloonLink())}));this._addDisposablesToCleanUp(ko.computed(function()
{n._creatorAndSelectorViewModel.lockedBalloonText(n.options.lockedBalloonText())}));this.options.selectable.
isSelected.subscribe(this.lifetimeManager,function(t){n._creatorAndSelectorViewModel.selected()!==t&&
n._creatorAndSelectorViewModel.selected(t);n.getPerformValidationFromViewModel()&&!t&&n._creatorAndSelectorViewModel.
enableValidation(!0)});this._creatorAndSelectorViewModel.selected(this.options.selectable.isSelected(
));this._creatorAndSelectorViewModel.selected.subscribe(this.lifetimeManager,function(t){n.options.selectable.
isSelected()!==t&&n.options.selectable.isSelected(t)});this.linkValidatableControlViewModels()},i.prototype.
_createLabel=function(){},i.prototype._isRequiredAndEmpty=function(){return this._isRequired()&&!this.
_checkIfValueExists()&&!t.trim(this.options.displayText())},i.prototype._checkIfValueExists=function(
){var n=this._creatorAndSelectorViewModel.value(),t=!(n===null||n===undefined);return typeof n=="string"&&
(t=this._requiredValidator._validate(n)===2),this._hasValue(t),t},i}(u.FieldWidget);n.CreatorAndSelectorFieldWidgetV2=
s;ko.bindingHandlers.pcCreatorAndSelectorV2=i.Widget.getBindingHandler(s)}(s||(s={})),s});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/Splitter",[
"require","exports","../Controls/Base/Base","Viva.Controls/Controls/Forms/Splitter"],function(n,t,i,
r){var u;return function(n){"use strict";var e=window,o=jQuery,t="fxcontrol-splitter",f={},u=function(
n){function i(i,r){n.call(this,i,r,f);this._createSplitter();this.element.addClass(t)}return __extends(
i,n),i.prototype.destroy=function(){n.prototype.dispose.call(this);this.element.removeClass(t).empty(
)},Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),i.prototype._createSplitter=function(){var n={topPaneHeight:this.options.topPaneHeight,showTopPane:
this.options.showTopPane},t=new r.ViewModel(n),i=new r.Widget(this.element,t)},i}(i.Widget);n.SplitterWidget=
u;ko.bindingHandlers.pcSplitter=i.Widget.getBindingHandler(u,{controlsDescendantBindings:!1})}(u||(u=
{})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Forms/Splitter",
["require","exports","../Base/Base"],function(n,t,i){var r;return function(n){"use strict";var r=window,
t=jQuery,u="azc-splitter",o='<div class="azc-splitter-paneContainer"><div class="azc-splitter-topPane"><\/div><\/div><div class="azc-splitter-resizeHandler azc-br-default"><\/div><div class="azc-splitter-shadow azc-gradient-default"><\/div><div class="azc-splitter-paneContainer"><div class="azc-splitter-bottomPane"><\/div><\/div>',
f=function(n){function t(t){n.call(this);this._topPaneHeight=t.topPaneHeight;this.showTopPane=t.showTopPane||
ko.observable(!0)}return __extends(t,n),Object.defineProperty(t.prototype,"topPaneHeight",{get:function(
){return this._topPaneHeight},enumerable:!0,configurable:!0}),t}(i.ViewModel),e;n.ViewModel=f;e=function(
n){function i(i,r,e){var s,h,c;if(this._animationSpeed=200,s=i.children(),s.length!==2)throw"Improper number of elements encountered. Expected two children, encountered "+
s.length;h=s.get(0);c=s.get(1);t(h).remove();t(c).remove();n.call(this,i,r,t.extend({viewModelType:f},
e));this.element.html(o).addClass(u);this._topPane=this.element.find(".azc-splitter-topPane");this._bottomPane=
this.element.find(".azc-splitter-bottomPane");this._resizeDragger=this.element.find(".azc-splitter-resizeHandler");
this._shadow=this.element.find(".azc-splitter-shadow");this._setPaneContent(h,c);this._setPaneHeights(
r.topPaneHeight);this._attachEvents();this._bindResizeEvents();this._bindTopPaneToggle()}return __extends(
i,n),i.prototype._attachEvents=function(){var n=this;this._detachEvents();t(r).on("resize",this._resizeEventHandler=
function(){n._setPaneHeights()})},i.prototype._detachEvents=function(){this._resizeEventHandler&&(t(
r).off("resize",this._resizeEventHandler),this._resizeEventHandler=null)},i.prototype.dispose=function(
){n.prototype.dispose.call(this);this._detachEvents();this.element.removeClass(u).empty()},Object.defineProperty(
i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype.
_setPaneContent=function(n,t){this._topPane.append(n);this._bottomPane.append(t)},i.prototype._setPaneHeights=
function(n){var r=n||n===0?n:this._topPane.parent().css("display")!=="none"?this._topPane.height():0,
i=this.element.parent(),u=i.outerHeight(),f=i.offset().top,e=this.element.offset().top,o=u-(e-f),t=o-
this._resizeDragger.outerHeight();this.options.showTopPane()&&(t=t-r);n&&this._topPane.height(n);this.
_bottomPane.height(t);this._setShadowLocation()},i.prototype._bindResizeEvents=function(){var n=this,
u,r,i;this._resizeDragger.bind("mousedown",function(){u=n.element.width();r=t("<div>").insertAfter(n.
_resizeDragger).addClass("azc-splitter-resizeHandler").addClass("azc-br-default").css("position","absolute").
width(u);t("body").addClass("azc-splitter-unselectable");t(document).bind("mousemove.splitter",function(
t){i=t.pageY-n.element.offset().top;r.css("top",i+"px")}).bind("mouseup.splitter",function(u){i=u.pageY-
n.element.offset().top;n._setPaneHeights(i);n._setShadowLocation();r.remove();t("body").removeClass(
"azc-splitter-unselectable");t(document).unbind(".splitter")})})},i.prototype._setShadowLocation=function(
){var n=this._topPane.height(),t=n-this._shadow.height()/2;this._shadow.css("top",t)},i.prototype._bindTopPaneToggle=
function(){var n=this;this.options.showTopPane()||(this._topPane.parent().hide(),this._resizeDragger.
hide(),this._shadow.hide());this._addDisposablesToCleanUp(this.options.showTopPane.subscribe(function(
t){t?n._showTopPane():n._hideTopPane()}))},i.prototype._showTopPane=function(){var n=this;this._disableScrollbars(
);this._shadow.show(this._animationSpeed/2);this._resizeDragger.show(this._animationSpeed/2);this._topPane.
parent().slideDown(this._animationSpeed,function(){n._setPaneHeights();n._enableScrollbars()})},i.prototype.
_hideTopPane=function(){var n=this;this._disableScrollbars();this._shadow.hide(this._animationSpeed/
2);this._resizeDragger.hide(this._animationSpeed/2);this._topPane.parent().slideUp(this._animationSpeed,
function(){n._setPaneHeights(0);n._enableScrollbars()})},i.prototype._disableScrollbars=function(){this.
_topPane.css("overflow","hidden");this._bottomPane.css("overflow","hidden")},i.prototype._enableScrollbars=
function(){this._topPane.css("overflow","auto");this._bottomPane.css("overflow","auto")},i}(i.Widget);
n.Widget=e}(r||(r={})),r});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/StringListField",
["require","exports","../Controls/Base/Base","./Base/Field","Viva.Controls/Controls/Forms/StringList"],
function(n,t,i,r,u){var f;return function(n){"use strict";var f=window,e=jQuery,t=function(n){function t(
t,i,r){n.call(this,t,i,r)}return __extends(t,n),t.prototype._initializeField=function(){n.prototype.
_initializeField.call(this);this.element.addClass("azc-stringListField").addClass("fxcontrol-stringListField");
this._stringListInit()},t.prototype.dispose=function(){n.prototype.dispose.call(this);this._cleanElement(
"azc-stringListField","fxcontrol-stringListField")},t.prototype.linkStringListViewModels=function(){
var n=this._vivaViewModel;n.value=this.options.value;n.values=this.options.values;n.selected=this.options.
selected;n.initialValue=this.options.initialValue;this.options.newValueOptions&&(n.newValueOptions.separator=
this.options.newValueOptions.separator,n.newValueOptions.viewModel=this.options.newValueOptions.viewModel);
n.newValueOptions.controlTemplate="<div data-bind='pcFilterComboField: data.newValueOptions.viewModel'><\/div>";
n.addIcon='<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="23px" height="23px" viewBox="0 0 23 23" enable-background="new 0 0 23 23" xml:space="preserve"><g>  <g>    <g>      <g>        <path class="border" fill="#00BCF2" d="M22,1v21H1V1H22 M23,0H0v23h23V0L23,0z"/>      <\/g>    <\/g>  <\/g>  <polygon class="plus" fill="#00BCF2" points="18,10 13,10 13,5 10,5 10,10 5,10 5,13 10,13 10,18 13,18 13,13 18,13 \t"/><\/g><\/svg>';
this.linkValidatableControlViewModels()},Object.defineProperty(t.prototype,"options",{get:function()
{return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"validatableViewModel",
{get:function(){return this._vivaViewModel},enumerable:!0,configurable:!0}),Object.defineProperty(t.
prototype,"validatableWidget",{get:function(){return this._vivaWidget},enumerable:!0,configurable:!0}),
t.prototype._stringListInit=function(){var n=this;this.options.newValueOptions.viewModel.value.subscribe(
this.lifetimeManager,function(t){t||n.options.newValueOptions.viewModel.filterText("")});this._vivaViewModel=
new u.ViewModel;this.linkStringListViewModels();this._vivaWidget=new u.Widget(this.element,this._vivaViewModel);
this._addWidget(this._vivaWidget)},t}(r.FieldWidget);n.StringListFieldWidget=t;ko.bindingHandlers.pcStringListField=
i.Widget.getBindingHandler(t)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("Viva.Controls/Controls/Forms/StringList",["require","exports","../../Util/TemplateEngine",
"../../Util/StringUtil","./TextBox","../../Util/Util","../Base/Base","../Base/ValidatableControl"],function(
n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var k=window,c=jQuery,l="azc-stringList",v="<!-- ko foreach: func.selectableValues -->  <div class='azc-stringList-item' tabindex='0' data-bind='hasFocus: isSelected, attr: { title: text }, css: { \"azc-bg-selected\": highlighted, \"azc-bg-edited\": dirty }'>    <div class='azc-stringList-itemRemove'><!-- ko template: { name: 'stringListDeleteIcon', templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div>    <span class='azc-stringList-itemText' data-bind='text: _displayText'><\/span>  <\/div><!-- /ko --><div class='azc-stringList-add'>  <!-- ko template: { name: func._inputTemplate, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div>",
y="<svg viewBox='0 0 20 20' focusable='false'>  <polygon class='msportalfx-svg-c01' points='16.894,5.414 15.48,4 10.436,9.044 5.414,4.023 4,5.437 9.022,10.458 4.022,15.458 5.436,16.872 10.436,11.872 15.458,16.894 16.872,15.48 11.85,10.458' /><\/svg>",
p="<div tabindex='0' data-canfocus='true' class='azc-stringList-addIcon azc-has-hover' data-bind='click: func._startEditing, event: { keyup: function(data, event) { if (event.which === 13) { func._startEditing(); }}}'>  <!-- ko template: { name: 'addIcon', templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div> ",
w="+",b="<div data-bind='azcTextBox: data.newValueOptions.viewModel'><\/div>",a=function(){function n(
n,t,i,u){var f=this;this.hover=ko.observable(!1);this._liftimeManager=n.createChildLifetime();this.text=
t;this.dirty=ko.observable(i);this._liftimeManager.registerForDispose(this.isSelected=ko.computed({read:
function(){return r.localeCompareIgnoreCase(t,u())===0},write:function(n){n?u(t):r.localeCompareIgnoreCase(
t,u())===0&&u(null)}}));this._liftimeManager.registerForDispose(this.highlighted=ko.computed(function(
){return f.isSelected()}))}return Object.defineProperty(n.prototype,"_displayText",{get:function(){return this.
text.trim()},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){this._liftimeManager&&(this.
_liftimeManager.dispose(),this._liftimeManager=null)},n}(),t,s,h;n.SelectableValue=a;t=function(){function n(
){this.controlTemplate=null}return n}();n.NewValueOptions=t;s=function(n){function i(){n.call(this);
this.selected=ko.observable(null);this.editing=ko.observable(!1);this.newValueOptions=new t;this.initialValue=
ko.observable((this.value()||[]).slice(0))}return __extends(i,n),i}(o.ViewModel);n.ViewModel=s;h=function(
n){function t(t,u,f){var e=this;n.call(this,t,u,c.extend({viewModelType:s},f));this._templateEngine=
new i.StringTemplateEngine;this._selectableValues=ko.observableArray();this._selectableValueMap=Object.
create(null);this._valueCompare=r.localeCompareIgnoreCase;this._startEditing=function(){e.options.editing(
!0)};this._setTemplates();this._initializeSubscriptionsAndComputeds(this.options);this.element.addClass(
l).html(v);this._attachEvents();this._bindDescendants({customTemplateEngine:this._templateEngine});this.
_afterCreate();this._supportsFocus(!0);this.lifetimeManager.registerForDispose({dispose:function(){e.
_cleanUpSelectableValueMap()}})}return __extends(t,n),t.prototype.dispose=function(){this._detachEvents(
);n.prototype.dispose.call(this);this.element.removeClass(l).empty()},Object.defineProperty(t.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"selectableValues",{get:function(){return this._selectableValues},enumerable:!0,configurable:
!0}),Object.defineProperty(t.prototype,"addControl",{get:function(){return this.element.find(".azc-stringList-add")}
,enumerable:!0,configurable:!0}),t.prototype._getElementToFocus=function(){return c(".azc-stringList-item,.azc-stringList-add",
this.element)[0]},t.prototype._attachEvents=function(){var n=this,t,i;this._detachEvents();this._keyDownHandler=
function(t){return n.options.selected()&&(t.which===46||t.which===8)?!n._deleteString(n.options.selected(
),t.which===46):!0};this._deleteItemClickHandler=function(t){var i=ko.dataFor(t.target);return!n._deleteString(
i.text)};this._selectItemClickHandler=function(t){return n.options.selected(ko.dataFor(t.target).text),
!1};this._hoverHandler=function(n){return ko.dataFor(n.target).hover(n.data),!1};this.element.on("keydown",
this._keyDownHandler);this.element.on("click",".azc-stringList-itemRemove",this._deleteItemClickHandler);
this.element.on("click",".azc-stringList-item",this._selectItemClickHandler);this.element.on("mouseenter",
".azc-stringList-item",!0,this._hoverHandler);this.element.on("mouseleave",".azc-stringList-item",!1,
this._hoverHandler);if(t=this.options.newValueOptions.viewModel,t||(t=new u.ViewModel,t.value(""),this.
options.newValueOptions.viewModel=t),this._defaultAddStringValue=t.value()||"",i=function(i){if(i&&(i=
i.trim())&&n._valueCompare(i,n._defaultAddStringValue)!==0){var r=n._splitAndTrimString(i),u=n.options.
value()||[],f=n._normalize(u.concat(r));n.options.value(f)}t.value(n._defaultAddStringValue)},ko.isObservable(
this.options.newValueOptions.viewModel.focused))this._subscriptions.registerForDispose(this.options.
newValueOptions.viewModel.focused.subscribe(function(t){!t&&n.options.editing()&&(i(n.options.newValueOptions.
viewModel.value()),n.options.editing(!1))}));else this.element.on("editableControl-blur",".azc-editableControl",
null,function(t,r){n.options.editing()&&(i(r.model.value()),n.options.editing(!1))});this.element.on(
"typableControl-commit",".azc-editableControl",null,function(t,r){n.options.editing()&&setTimeout(function(
){n.isDisposed()||i(r.model.value())},0)})},t.prototype._detachEvents=function(){this._keyDownHandler&&
(this.element.off("keydown",this._keyDownHandler),this._keyDownHandler=null);this._deleteItemClickHandler&&
(this.element.off("click",this._deleteItemClickHandler),this._deleteItemClickHandler=null);this._selectItemClickHandler&&
(this.element.off("click",this._selectItemClickHandler),this._selectItemClickHandler=null);this._hoverHandler&&
(this.element.off("mouseenter",this._hoverHandler),this.element.off("mouseleave",this._hoverHandler),
this._hoverHandler=null);this.element.off("editableControl-blur");this.element.off("typableControl-commit")}
,t.prototype._normalize=function(n){var t,r,f,i,u;if(!n||n.length<2)return n||[];for(t=0,r=Object.create(
null),r[n[t].toLocaleLowerCase()]=!0,i=1,u=n.length;i<u;i++)f=n[i].toLocaleLowerCase(),r[f]||(r[f]=!0,
n[++t]=n[i]);return++t!==u&&n.splice(t,u-t),n},t.prototype._initializeSubscriptionsAndComputeds=function(
n){var t=this;this._subscriptions.registerForDispose(n.value.subscribe(this._synchronizeArray,this));
this._synchronizeArray(n.value()||[]);this._inputTemplate=ko.computed(function(){return t.options.editing(
)?"stringListTextInput":"stringListAddIcon"});this._addDisposablesToCleanUp(this._inputTemplate);this.
_subscriptions.registerForDispose(this.options.editing.subscribe(function(n){n&&t._setFocusToAddControl(
)}));this._subscriptions.registerForDispose(this.options.initialValue.subscribe(function(n){var i=(n||
[]).map(function(n){return n.toLocaleLowerCase()});t._selectableValues().forEach(function(n){var t=i.
indexOf(n.text.toLocaleLowerCase())===-1;n.dirty(t)})}))},t.prototype._setFocusToAddControl=function(
){var n=this.addControl;f.setFocusToFirstFocusableChild(n)||n.children().focus()},t.prototype._splitAndTrimString=
function(n){if(!n)return[];var t=this.options.newValueOptions.separator&&this.options.newValueOptions.
separator();return n.split(t).map(function(n){return n&&n.trim()}).filter(function(n){return Boolean(
n)})},t.prototype._setTemplates=function(){this._templateEngine.setTemplate("stringListAddIcon",p);this.
_templateEngine.setTemplate("addIcon",this.options.addIcon||w);this._templateEngine.setTemplate("stringListTextInput",
this.options.newValueOptions.controlTemplate||b);this._templateEngine.getTemplate("stringListDeleteIcon")||
this._templateEngine.setTemplate("stringListDeleteIcon",y)},t.prototype._cleanUpSelectableValueMap=function(
){var t,n;if(this._selectableValueMap)for(t in this._selectableValueMap)n=this._selectableValueMap[t],
n&&n.dispose();this._selectableValueMap=null},t.prototype._synchronizeArray=function(n){var t=this,r,
i=Object.create(null);r=n?this._normalize(n).reduce(function(n,r){var u,e,f,o;return!r||!r.trim()?n:
(u=r.toLocaleLowerCase(),e=(t.options.initialValue()||[]).map(function(n){return n.toLocaleLowerCase(
)}),u in i||(f=t._selectableValueMap[u],f?delete t._selectableValueMap[u]:(o=e.indexOf(u)===-1,f=new
a(t.lifetimeManager,r,o,t.options.selected)),i[u]=f,n.push(f)),n)},[]):[];this._cleanUpSelectableValueMap(
);this._selectableValueMap=i;this._selectableValues(r)},t.prototype._deleteString=function(n,t){var e=
this;t===void 0&&(t=!0);var r,u=(this.options.value()||[]).map(function(n){return n.toLocaleLowerCase(
)}),i=u.indexOf(n.toLocaleLowerCase()),f=i!==-1;return f&&(r=u.filter(function(t){return e._valueCompare(
t,n)!==0}),this.options.value(r),t||(i=Math.max(0,i-1)),i<r.length?this.options.selected(r[i]):(this.
options.selected(null),this._setFocusToAddControl())),f},t}(o.Widget);n.Widget=h;ko.bindingHandlers.
azcStringList=e.Widget.getBindingHandler(h)}(s||(s={})),s});define("MsPortalImpl.Controls/Fields/Base/KnockoutExtensions",
["require","exports"],function(){var n;return function(){"use strict";var t=window,n=jQuery;ko.bindingHandlers.
formElement={init:function(t,i,r,u,f){var o=ko.utils.unwrapObservable(i()),e=null;if(o){switch(o.controlType)
{case 1:e=ko.bindingHandlers.pcFormSection;break;case 2:e=ko.bindingHandlers.pcTextField;break;case 3:
e=ko.bindingHandlers.pcDropDownField;break;case 4:e=ko.bindingHandlers.pcOptionsGroupField;break;case
5:e=ko.bindingHandlers.pcPasswordField;break;case 6:e=ko.bindingHandlers.pcSliderField;break;case 7:
e=ko.bindingHandlers.pcCheckBoxField;break;case 8:e=ko.bindingHandlers.pcMultiselectDropDownField;break
case 9:e=ko.bindingHandlers.pcRangeSliderField;break;case 10:e=ko.bindingHandlers.pcNumericTextBoxField;
break;case 11:e=ko.bindingHandlers.pcSelectorField;break;case 12:e=ko.bindingHandlers.pcFilterComboField;
break;case 13:e=ko.bindingHandlers.pcMultiLineTextField;break;case 14:e=ko.bindingHandlers.pcDateTimeComboField;
break;case 15:e=ko.bindingHandlers.pcSection;break;case 16:e=ko.bindingHandlers.pcAttachment;break;case
17:e=ko.bindingHandlers.pcStringListField;break;case 18:e=ko.bindingHandlers.pcHtmlEditorField;break
case 19:e=ko.bindingHandlers.pcHistory;break;case 20:e=ko.bindingHandlers.pcArtifactLinks;break;case
21:e=ko.bindingHandlers.pcSplitter;break;case 22:e=ko.bindingHandlers.pcTriStateCheckBox;break;case 23:
e=ko.bindingHandlers.pcCustomHtmlField;break;case 24:e=ko.bindingHandlers.pcTimePickerField;break;case
25:e=ko.bindingHandlers.pcDatePickerField;break;case 26:e=ko.bindingHandlers.pcDateTimePickerField;break
case 27:e=ko.bindingHandlers.pcDateTimeRangePickerField;break;case 81:e=ko.bindingHandlers.pcFileUploadWidget;
break;case 29:e=ko.bindingHandlers.pcOAuthButtonField;break;case 30:e=ko.bindingHandlers.pcTokenComboBox;
break;case 83:e=ko.bindingHandlers.pcCreatorAndSelector;break;case 85:e=ko.bindingHandlers.pcCreatorAndSelectorV2;
break;case 89:e=ko.bindingHandlers.pcPreviewTag;break;default:throw new Error("Unsupported ControlType in formControl binding handler: "+
o.controlType+".");}if(e)return n(t).attr("data-formelement",n(t).attr("data-bind")),e.init(t,i,r,u,
f)}},update:function(n,t,i,r,u){var f=ko.utils.unwrapObservable(t());if(f&&n)switch(f.controlType){case
1:return ko.bindingHandlers.pcFormSection.update(n,t,i,r,u);case 2:return ko.bindingHandlers.pcTextField.
update(n,t,i,r,u);case 3:return ko.bindingHandlers.pcDropDownField.update(n,t,i,r,u);case 4:return ko.
bindingHandlers.pcOptionsGroupField.update(n,t,i,r,u);case 5:return ko.bindingHandlers.pcPasswordField.
update(n,t,i,r,u);case 6:return ko.bindingHandlers.pcSliderField.update(n,t,i,r,u);case 7:return ko.
bindingHandlers.pcCheckBoxField.update(n,t,i,r,u);case 8:return ko.bindingHandlers.pcMultiselectDropDownField.
update(n,t,i,r,u);case 9:return ko.bindingHandlers.pcRangeSliderField.update(n,t,i,r,u);case 10:return ko.
bindingHandlers.pcNumericTextBoxField.update(n,t,i,r,u);case 11:return ko.bindingHandlers.pcSelectorField.
update(n,t,i,r,u);case 12:return ko.bindingHandlers.pcFilterComboField.update(n,t,i,r,u);case 13:return ko.
bindingHandlers.pcMultiLineTextField.update(n,t,i,r,u);case 14:return ko.bindingHandlers.pcDateTimeComboField.
update(n,t,i,r,u);case 15:return ko.bindingHandlers.pcSection.update(n,t,i,r,u);case 16:return ko.bindingHandlers.
pcAttachment.update(n,t,i,r,u);case 17:return ko.bindingHandlers.pcStringListField.update(n,t,i,r,u)
case 18:return ko.bindingHandlers.pcHtmlEditorField.update(n,t,i,r,u);case 19:return ko.bindingHandlers.
pcHistory.update(n,t,i,r,u);case 20:return ko.bindingHandlers.pcArtifactLinks.update(n,t,i,r,u);case
21:return ko.bindingHandlers.pcSplitter.update(n,t,i,r,u);case 22:return ko.bindingHandlers.pcTriStateCheckBox.
update(n,t,i,r,u);case 23:return ko.bindingHandlers.pcCustomHtmlField.update(n,t,i,r,u);case 24:return ko.
bindingHandlers.pcTimePickerField.update(n,t,i,r,u);case 25:return ko.bindingHandlers.pcDatePickerField.
update(n,t,i,r,u);case 26:return ko.bindingHandlers.pcDateTimePickerField.update(n,t,i,r,u);case 27:
return ko.bindingHandlers.pcDateTimeRangePickerField.update(n,t,i,r,u);case 81:return ko.bindingHandlers.
pcFileUploadWidget.update(n,t,i,r,u);case 29:return ko.bindingHandlers.pcOAuthButtonField.update(n,t,
i,r,u);case 30:return ko.bindingHandlers.pcTokenComboBox.update(n,t,i,r,u);case 83:return ko.bindingHandlers.
pcCreatorAndSelector.update(n,t,i,r,u);case 85:return ko.bindingHandlers.pcCreatorAndSelectorV2.update(
n,t,i,r,u);case 89:return ko.bindingHandlers.pcPreviewTag.update(n,t,i,r,u);default:throw new Error(
"Unsupported ControlType in formControl binding handler: "+f.controlType+".");}}}}(n||(n={})),n});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Console",
["require","exports","./Base/Base","./Base/Loadable","Viva.Controls/Controls/Console"],function(n,t,
i,r,u){var f;return function(n){"use strict";var o=window,e=jQuery,t="fxcontrol-console",f=function(
n){function i(i,r,u){n.call(this,i,r,e.extend({fillBehavior:3},u));this.options.command.extend({notify:
"always"});this.options.text.extend({notify:"always"});this.options.info.extend({notify:"always"});this.
options.success.extend({notify:"always"});this.options.warning.extend({notify:"always"});this.options.
error.extend({notify:"always"});this.element.addClass(t);this._initializeWidgets()}return __extends(
i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.
element.removeClass(t),n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){this._widgets.push(new u.Widget(this.element,this.options))},i}(r.Widget);n.Widget=f;ko.bindingHandlers.
pcConsole=i.Widget.getBindingHandler(f)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Console",["require","exports","./Base/Command","./Base/CompositeControl",
"./LogStream","MsPortalImpl/Base/Base.KeyboardHelper","./Scrollbar","./TextStream","../Util/Util"],function(
n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var g=window,t=jQuery,a="azc-console",v="azc-bg-console",
y="azc-text-console",s="azc-console-log",h="azc-console-cli",p="azc-console-scroll",w="azc-console-content",
c="azc-console-cli-cursor",d="<div class="+p+"><div class="+w+"><div class="+s+"><\/div><div class="+
h+"><\/div><\/div>",l,b,k;l=function(n){function t(){n.call(this);this.command=ko.observable("");this.
prompt=ko.observable("> ");this.clear=new i.ViewModel;this.text=ko.observable("");this.info=ko.observable(
"");this.success=ko.observable("");this.warning=ko.observable("");this.error=ko.observable("");this.
command.extend({notify:"always"});this.text.extend({notify:"always"});this.info.extend({notify:"always"});
this.success.extend({notify:"always"});this.warning.extend({notify:"always"});this.error.extend({notify:
"always"})}return __extends(t,n),t}(r.ViewModel);n.ViewModel=l;b=function(n){function i(i,r,f){var c=
this,b,g,o;n.call(this,i,r,t.extend({viewModelType:l},f));this.element.addClass(a).addClass(v).addClass(
y).html(d).attr("tabindex","0");this.options.command.extend({notify:"always"});this.options.text.extend(
{notify:"always"});this.options.info.extend({notify:"always"});this.options.success.extend({notify:"always"});
this.options.warning.extend({notify:"always"});this.options.error.extend({notify:"always"});b=this.element.
find("."+s);this._log=new u.Widget(b,{scrollbars:!1});this._log.element.parents(".azc-log-stream").addClass(
s);this.widgets.push(this._log);g=this.element.find("."+h);this._cli=new k(g);this._cli.element.parents(
".azc-text-stream").addClass(h);this.widgets.push(this._cli);o=this.element.find("."+p);o.css("height",
"100%");this._scroll=new e.Widget(o,{fitContainer:!0,refreshContainerOnResize:!1,autoRefreshContent:
!1});this.widgets.push(this._scroll);this._contentElement=this.element.find("."+w);this._subscriptions.
registerForDispose(this._cli.output.subscribe(function(n){c._forwardCommand(n)}));this.options.clear.
attach(function(){c.clear()});this._attachEvents()}return __extends(i,n),i.prototype.dispose=function(
){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.options.clear.detach(),this._detachEvents(
),this._cleanElement(a,v,y),this.element.removeAttr("tabindex"),n.prototype.dispose.call(this))},Object.
defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),i.prototype._attachEvents=function(){var n=this;this._detachEvents();this.element.on("keydown",
this._eventKeyDownHandler=function(t){if(!n.options.disabled())n._cli.onKeyDown(t)}).on("keypress",this.
_eventKeyPressHandler=function(t){if(!n.options.disabled()){n._cli.onKeyPress(t);n._refreshScroll()}
}).on("paste",this._eventPasteHandler=function(t){if(!n.options.disabled())n._cli.onPaste(t)}).on("focus",
this._eventFocusHandler=function(t){if(!n.options.disabled())n._cli.onFocus(t)}).on("blur",this._eventBlurHandler=
function(t){n.options.disabled()||n._cli.offFocus(t)})},i.prototype._detachEvents=function(){this._eventKeyDownHandler&&
(this.element.off("keydown",this._eventKeyDownHandler),this._eventKeyDownHandler=null);this._eventKeyPressHandler&&
(this.element.off("keypress",this._eventKeyPressHandler),this._eventKeyPressHandler=null);this._eventPasteHandler&&
(this.element.off("paste",this._eventPasteHandler),this._eventPasteHandler=null);this._eventFocusHandler&&
(this.element.off("focus",this._eventPasteHandler),this._eventPasteHandler=null);this._eventBlurHandler&&
(this.element.off("blur",this._eventPasteHandler),this._eventPasteHandler=null)},i.prototype._initializeSubscriptions=
function(t){var i=this;n.prototype._initializeSubscriptions.call(this,t);this._subscriptions.registerForDispose(
t.text.subscribe(function(n){i._logMessage(n,0)}));this._subscriptions.registerForDispose(this.options.
info.subscribe(function(n){i._logMessage(n,1)}));this._subscriptions.registerForDispose(this.options.
success.subscribe(function(n){i._logMessage(n,2)}));this._subscriptions.registerForDispose(this.options.
warning.subscribe(function(n){i._logMessage(n,3)}));this._subscriptions.registerForDispose(this.options.
error.subscribe(function(n){i._logMessage(n,4)}));this._subscriptions.registerForDispose(this.options.
prompt.subscribe(function(n){i._prompt(n)}))},i.prototype.clear=function(){this.options.disabled()||
(this._log.clear(),this._refreshScroll())},i.prototype.submit=function(){this.options.disabled()||this.
_cli.submit()},i.prototype.headline=function(n){this.options.disabled()||this._logMessage(n,1)},i.prototype.
_prompt=function(n){if(n!==undefined){n===null&&(n="");this._cli.prompt(n);return}return this._cli.prompt(
)},i.prototype._forwardCommand=function(n){this._logMessage(this._prompt()+n,0);this.options.command(
n)},i.prototype._logMessage=function(n,t){var i;this.options.disabled()||(i={text:n,type:t},this._log.
logItem(i),this._refreshScroll())},i.prototype._refreshScroll=function(){this._scroll&&this._contentElement&&
(this._scroll.refreshContent(),this._scroll.scrollTop(this._contentElement.height()))},i}(r.Widget);
n.Widget=b;k=function(n){function i(t){var i=this;n.call(this,t,{scrollbars:!1},{viewModelType:o.ViewModel});
this.output=ko.observable("");this.prompt=ko.observable("> ");this._history=[];this._position=0;this.
_clearInput();this._setInput("");this._isTabActive=!0;this.output.extend({notify:"always"});this._subscriptions.
registerForDispose(this.prompt.subscribe(function(){i._setInput(i._input)}));this._subscriptions.registerForDispose(
this.options.disabled.subscribe(function(n){n?i._cursor.remove():i._appendCursor()}))}return __extends(
i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(n.prototype.
dispose.call(this),this._cursorIntervalId&&(clearInterval(this._cursorIntervalId),this._cursorIntervalId=
null))},i.prototype.onKeyPress=function(n){this._appendStringToInput(this._keyCodeToString(n.which));
n.preventDefault();n.stopPropagation()},i.prototype.onKeyDown=function(n){var i=f.getModifierKeys(n),
t=!1;if(n.keyCode===77&&n.ctrlKey&&!n.altKey&&(this._isTabActive=!this._isTabActive,t=!0),i===0)switch(
n.keyCode){case 8:this._removeLastInputChar();t=!0;break;case 9:this._isTabActive&&(this._appendTabToInput(
),t=!0);break;case 13:this.submit();t=!0;break;case 32:this._appendSpaceToInput();t=!0;break;case 38:
this._history.length>0&&this._history.length>this._position&&(++this._position,this._setInput(this._history[
this._history.length-this._position]));t=!0;break;case 40:this._history.length>0&&this._position>0&&
(--this._position,this._position===0?this._clearInput():this._setInput(this._history[this._history.length-
this._position]));t=!0}t&&(n.preventDefault(),n.stopPropagation())},i.prototype.onPaste=function(){}
,i.prototype.onFocus=function(){var n=this;this._cursorIntervalId||(this._cursorIntervalId=setInterval(
function(){n._cursor.toggleClass(c)},700))},i.prototype.offFocus=function(){this._cursorIntervalId&&
(clearInterval(this._cursorIntervalId),this._cursorIntervalId=null,this._cursor.addClass(c))},i.prototype.
submit=function(){var n=this._input;this.output(n);this._pushCommand(n);this._clearInput()},i.prototype.
_pushCommand=function(n){(this._position=0,t.trim(n).length!==0)&&this._history.push(n)},i.prototype.
_removeLastInputChar=function(){this._setInput(this._input.slice(0,this._input.length-1))},i.prototype.
_keyCodeToString=function(n){return String.fromCharCode(n)},i.prototype._appendTabToInput=function()
{this._appendStringToInput("\t")},i.prototype._appendSpaceToInput=function(){this._appendStringToInput(
" ")},i.prototype._appendStringToInput=function(n){this._input=this._input+n;this.write(n)},i.prototype.
_clearInput=function(){this._setInput("")},i.prototype._setInput=function(n){this.clear();this._input=
n;this.write(this.prompt()+this._input);this._appendCursor()},i.prototype._appendCursor=function(){this.
_cursor&&this._cursor.remove();this._cursor=t("<span />").addClass(c).appendTo(t(this.element.find("pre")[
0]))},i}(o.Widget)}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Viva.Controls/Controls/LogStream",["require","exports","./TextStream","./Base/Base","../Util/Util"],
function(n,t,i,r,u){var f;return function(n){"use strict";var h=window,o=jQuery,e="azc-log-stream",s,
t,f;n.LogItemTypeClassifiers=["azc-log-stream-text","azc-log-stream-information","azc-log-stream-success",
"azc-log-stream-warning","azc-log-stream-error",],function(n){n[n.Text=0]="Text";n[n.Information=1]=
"Information";n[n.Success=2]="Success";n[n.Warning=3]="Warning";n[n.Error=4]="Error"}(n.LogItemType||
(n.LogItemType={}));s=n.LogItemType;t=function(n){function t(){n.call(this);this.paused=ko.observable(
!1);this.filters=ko.observableArray([]);this.log=ko.observable(null);this.logItem=ko.observable(null);
this.logItems=ko.observable(null);this.log.extend({notify:"always"});this.logItem.extend({notify:"always"});
this.logItems.extend({notify:"always"})}return __extends(t,n),t}(i.ViewModel);n.ViewModel=t;f=function(
i){function r(n,r,u){i.call(this,n,r,o.extend({viewModelType:t},u));this._bufferSize=0;this._bufferItems=
[];this._filterOutClassifiers=[];this.options.log.extend({notify:"always"});this.options.logItem.extend(
{notify:"always"});this.options.logItems.extend({notify:"always"});this.widget().addClass(e);this._bindDescendants(
);this.options.filters.valueHasMutated()}return __extends(r,i),r.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
i.prototype.dispose)||(this.widget().removeClass(e),this.widget().removeClass(u.joinAppend(n.LogItemTypeClassifiers,
" ","-hide")),i.prototype.dispose.call(this))},Object.defineProperty(r.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),r.prototype.clear=function(){this._bufferClear(
);i.prototype.clear.call(this)},r.prototype.log=function(n){var t;this.options.disabled()||(t=this._textInfoFromString(
n),this._bufferAdd(t),this._bufferWrite())},r.prototype.logItem=function(n){var t;this.options.disabled(
)||(t=this._textInfoFromLogItem(n),this._bufferAdd(t),this._bufferWrite())},r.prototype.logItems=function(
n){var t=this,i;this.options.disabled()||(n.forEach(function(n){i=t._textInfoFromLogItem(n);t._bufferAdd(
i)}),this._bufferWrite())},r.prototype.write=function(n){this.options.disabled()||(this._write(n,!1,
"azc-log-stream-text",0),this.update())},r.prototype.writeLine=function(n){this.options.disabled()||
(this._write(n,!0,"azc-log-stream-text",0),this.update())},r.prototype.writeText=function(n){this.options.
disabled()||(this._write(n.text,!1,"azc-log-stream-text",0),this.update())},r.prototype.writeTextArray=
function(n){var t=this;this.options.disabled()||(n.forEach(function(n){t._write(n.text,!1,"azc-log-stream-text",
0)}),this.update())},r.prototype.writeTextLine=function(n){this.options.disabled()||(this._write(n.text,
!0,"azc-log-stream-text",0),this.update())},r.prototype._initializeSubscriptions=function(n){var t=this;
i.prototype._initializeSubscriptions.call(this,n);this._subscriptions.registerForDispose(n.paused.subscribe(
function(n){t._onPaused(n)}));this._subscriptions.registerForDispose(n.filters.subscribe(function(n)
{t._onFilters(n)}));this._subscriptions.registerForDispose(n.log.subscribe(function(n){t.log(n)}));this.
_subscriptions.registerForDispose(n.logItem.subscribe(function(n){t.logItem(n)}));this._subscriptions.
registerForDispose(n.logItems.subscribe(function(n){t.logItems(n)}))},r.prototype._trim=function(n,t)
{var r=0,f;return this._filterOutClassifiers.length>0&&(f=u.joinPrepend(this._filterOutClassifiers,".",
", "),r=this._trimElements(n.children(f),t),t=Math.max(t-r,0)),t>0&&(r+=i.prototype._trim.call(this,
n,t)),r},r.prototype._bufferAdd=function(n){var r,t,i;if(this._bufferItems.push(n),this._bufferSize+=
n.text.length,r=this.options.max(),t=this._bufferSize,t>r)for(i=0;i<this._bufferItems.length;i++)if(
t-=this._bufferItems[i].text.length,t<=r){this._bufferItems.splice(0,i+1);this._bufferSize=t;break}}
,r.prototype._bufferClear=function(){this._bufferItems.length=0;this._bufferSize=0},r.prototype._bufferWrite=
function(){var t=this,n;!this.options.disabled()&&!this.options.paused()&&this._bufferItems.length>0&&
(n=this._filterOutClassifiers.length===0,this._bufferItems.forEach(function(i){t._write(i.text,!1,i.
classifier,i.emphasis);n||t._filterOutClassifiers.indexOf(i.classifier)>=0||(n=!0)}),this._bufferClear(
),this.update(n))},r.prototype._onFilters=function(t){var r,i;if(r=this.widget().attr("class").split(
" "),r=r.filter(function(n){switch(n){case"azc-log-stream-text-hide":case"azc-log-stream-information-hide":
case"azc-log-stream-success-hide":case"azc-log-stream-warning-hide":case"azc-log-stream-error-hide":
return!1;default:return!0}}),this._filterOutClassifiers.length=0,t&&t.length>0)for(i=0;i<=4;i++)t.indexOf(
i)>=0||(r.push(n.LogItemTypeClassifiers[i]+"-hide"),this._filterOutClassifiers.push(n.LogItemTypeClassifiers[
i]));this.widget().attr("class",r.join(" "));this.update()},r.prototype._onPaused=function(n){n||this.
_bufferWrite()},r.prototype._text=function(n){return n?(n.length===0||n[n.length-1]!=="\n")&&(n+="\n"):
n="\n",n},r.prototype._textInfoFromLogItem=function(n){var r,t,i;r=this._text(n.text);switch(n.type)
{case 4:t="azc-log-stream-error";i=2;break;case 3:t="azc-log-stream-warning";i=1;break;case 1:t="azc-log-stream-information";
i=1;break;case 2:t="azc-log-stream-success";i=2;break;default:t="azc-log-stream-text";i=0}return{text:
r,classifier:t,emphasis:i}},r.prototype._textInfoFromString=function(n){var t,i;return n=this._text(
n),t="azc-log-stream-text",i=0,{text:n,classifier:t,emphasis:i}},r}(i.Widget);n.Widget=f;ko.bindingHandlers.
azcLogStream=r.Widget.getBindingHandler(f)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/TextStream",["require","exports","./Base/Command","./Scrollbar",
"./Base/Base","../Util/Util"],function(n,t,i,r,u,f){var e;return function(n){"use strict";var h=window,
o=jQuery,c="azc-text-stream",l="azc-bg-console",a="azc-text-console",y=.85,p="<div><pre role='log' aria-live='polite' aria-atomic='false' aria-relevant='additions text' data-bind='css: { \"azc-text-stream-wrap-text\": data.wrap }'><\/pre><\/div>",
t=function(){function n(){}return Object.defineProperty(n,"None",{get:function(){return""},enumerable:
!0,configurable:!0}),Object.defineProperty(n,"Black",{get:function(){return"azc-text-stream-text-color-black"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Gray",{get:function(){return"azc-text-stream-text-color-gray"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Silver",{get:function(){return"azc-text-stream-text-color-silver"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"White",{get:function(){return"azc-text-stream-text-color-white"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Maroon",{get:function(){return"azc-text-stream-text-color-maroon"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Red",{get:function(){return"azc-text-stream-text-color-red"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Olive",{get:function(){return"azc-text-stream-text-color-olive"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Lime",{get:function(){return"azc-text-stream-text-color-lime"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Green",{get:function(){return"azc-text-stream-text-color-green"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Aqua",{get:function(){return"azc-text-stream-text-color-aqua"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Teal",{get:function(){return"azc-text-stream-text-color-teal"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Blue",{get:function(){return"azc-text-stream-text-color-blue"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Navy",{get:function(){return"azc-text-stream-text-color-navy"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Fuchsia",{get:function(){return"azc-text-stream-text-color-fuchsia"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Purple",{get:function(){return"azc-text-stream-text-color-purple"}
,enumerable:!0,configurable:!0}),Object.defineProperty(n,"Yellow",{get:function(){return"azc-text-stream-text-color-yellow"}
,enumerable:!0,configurable:!0}),n}(),w,e,v,s;n.Classifiers=t,function(n){n[n.Normal=0]="Normal";n[n.
Emphasized=1]="Emphasized";n[n.Strong=2]="Strong"}(n.Emphasis||(n.Emphasis={}));w=n.Emphasis;e=function(
n){function t(){n.call(this);this.max=ko.observable(2e5);this.wrap=ko.observable(!0);this.click=o.noop;
this.clear=new i.ViewModel;this.scrollbars=!0;this.write=ko.observable(null);this.writeLine=ko.observable(
null);this.writeText=ko.observable(null);this.writeTextLine=ko.observable(null);this.writeTextArray=
ko.observable(null);this.write.extend({notify:"always"});this.writeLine.extend({notify:"always"});this.
writeText.extend({notify:"always"});this.writeTextLine.extend({notify:"always"});this.writeTextArray.
extend({notify:"always"})}return __extends(t,n),t}(u.ViewModel);n.ViewModel=e;v=function(){function n(
){this._buffer=[];this._textBuffer=[];this.clear()}return n.prototype.clear=function(){this._reset();
this._classifier=null;this._tag=null},n.prototype.read=function(){var n={appendText:null,spanText:null,
textLength:0};return this._commitText(),n.appendText=this._appendText,n.spanText=this._buffer.join(""),
n.textLength=this._textLength,this._reset(),n},n.prototype.write=function(n,i,r,u){var e;r===undefined&&
(r=t.None);switch(u){case 1:e="em";break;case 2:e="strong";break;case 0:default:e="span"}this._tag&&
this._tag===e&&this._classifier===r||(this._commitText(),this._buffer.push("<"),this._tag=e,this._buffer.
push(e),r&&r.length>0?(this._classifier=r,this._buffer.push(" class='"),this._buffer.push(f.encodeAttribute(
r)),this._buffer.push("'>")):(this._classifier=t.None,this._buffer.push(">")),this._textIndex=this._buffer.
length,this._textBuffer.length=0,this._buffer.push(""),this._buffer.push("<\/"),this._buffer.push(e),
this._buffer.push(">"));n&&n.length>0&&(this._textBuffer.push(n),this._textLength+=n.length);i&&(this.
_textBuffer.push("\n"),this._textLength+=1)},n.prototype._commitText=function(){var n;n=f.encodeHtml(
this._textBuffer.join(""));this._textIndex>0?this._buffer[this._textIndex]=n:this._appendText=n},n.prototype.
_reset=function(){this._buffer.length=0;this._textLength=0;this._textIndex=0;this._textBuffer.length=
0;this._appendText=null},n}();s=function(n){function i(t,i,u){var s=this,f;n.call(this,t,i,o.extend(
{viewModelType:e},u));this._containerElement=null;this._scrollbar=null;this._updatingScrollbar=0;this.
_clickHandler=null;this._textSize=0;this._spanWriter=new v;this._trimPercent=.98;this.element.addClass(
c).addClass(a).addClass(l).html(p);this._containerElement=this.element.find("pre");this.options.scrollbars&&
(this.element.css("height","100%"),f=this._containerElement.parent(),f.css("height","100%"),this._scrollbar=
new r.Widget(f,{fitContainer:!0,refreshContainerOnResize:!1,autoRefreshContent:!1}));this.element.on(
"click",this._clickHandler=function(n){return s._click(n)});this.options.clear.attach(function(){s.clear(
)});this.options.write.extend({notify:"always"});this.options.writeLine.extend({notify:"always"});this.
options.writeText.extend({notify:"always"});this.options.writeTextLine.extend({notify:"always"});this.
options.writeTextArray.extend({notify:"always"});this._createOptions.viewModelType===e&&this._bindDescendants(
)}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.
dispose)||(this._updatingScrollbar&&(h.clearTimeout(this._updatingScrollbar),this._updatingScrollbar=
0),this.options.clear.detach(),this._clickHandler&&(this.element.off("click",this._clickHandler),this.
_clickHandler=null),this._scrollbar&&(this._scrollbar.dispose(),this._scrollbar=null),this._cleanElement(
c,l,a),this._containerElement=null,n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype.clear=function(
){this._spanWriter.clear();this._containerElement.empty();this._textSize=0;this.update()},i.prototype.
refreshContainer=function(){this._scrollbar&&this._scrollbar.refreshContainer()},i.prototype.update=
function(n){n===void 0&&(n=!0);var t,r,i;!this.options.disabled()&&this._containerElement&&(t=this._spanWriter.
read(),t.appendText&&t.appendText.length>0&&this._containerElement.children().last().append(t.appendText),
t.spanText&&t.spanText.length>0&&this._containerElement.append(t.spanText),this._textSize+=t.textLength,
i=this.options.max(),this._textSize>i&&(r=this._textSize-Math.floor(y*i),this._textSize-=this._trim(
this._containerElement,r)),n&&this._updateScrollbar())},i.prototype.write=function(n){this.options.disabled(
)||(this._write(n,!1,t.None,0),this.update())},i.prototype.writeLine=function(n){this.options.disabled(
)||(this._write(n,!0,t.None,0),this.update())},i.prototype.writeText=function(n){this.options.disabled(
)||(this._write(n.text,!1,n.classifier,n.emphasis),this.update())},i.prototype.writeTextArray=function(
n){var t=this;this.options.disabled()||(n.forEach(function(n){t._write(n.text,!1,n.classifier,n.emphasis)}
),this.update())},i.prototype.writeTextLine=function(n){this.options.disabled()||(this._write(n.text,
!0,n.classifier,n.emphasis),this.update())},i.prototype._initializeSubscriptions=function(t){var i=this;
n.prototype._initializeSubscriptions.call(this,t);this._subscriptions.registerForDispose(t.max.subscribe(
function(n){i._onMax(n)}));this._subscriptions.registerForDispose(t.wrap.subscribe(function(n){i._onWrap(
n)}));this._subscriptions.registerForDispose(t.write.subscribe(function(n){i.write(n)}));this._subscriptions.
registerForDispose(t.writeLine.subscribe(function(n){i.writeLine(n)}));this._subscriptions.registerForDispose(
t.writeText.subscribe(function(n){i.writeText(n)}));this._subscriptions.registerForDispose(t.writeTextLine.
subscribe(function(n){i.writeTextLine(n)}));this._subscriptions.registerForDispose(t.writeTextArray.
subscribe(function(n){i.writeTextArray(n)}))},i.prototype._trim=function(n,t){return this._trimElements(
n.children(),t)},i.prototype._trimElements=function(n,t){var s=this,u=0,f,i,r,e=null;return t>0&&(r=
this._containerElement.children(":last"),r&&r.length===1&&(e=r[0]),n.each(function(n,r){if(t>0)f=r.textContent,
i=f.length,i>t?(r.textContent=f.substring(t),u+=t,t=0):(u+=i,t-=i,r===e&&s._spanWriter.clear(),o(r).
remove());else return!1})),u},i.prototype._write=function(n,t,i,r){this.options.disabled()||this._spanWriter.
write(n,t,i,r)},i.prototype._click=function(n){!this.options.disabled()&&this.options.click&&this.options.
click.call(this._containerElement,n)},i.prototype._onMax=function(){this.update()},i.prototype._onWrap=
function(){this.update()},i.prototype._updateScrollbar=function(){var n=this;!this._updatingScrollbar&&
this._scrollbar&&(this._updatingScrollbar=h.setTimeout(function(){n._updateScrollbarHandler()},100))}
,i.prototype._updateScrollbarHandler=function(){this._updatingScrollbar&&(this._scrollbar&&(this._scrollbar.
refreshContent(),this._scrollbar.scrollTop(this._containerElement.height())),this._updatingScrollbar=
0)},i}(u.Widget);n.Widget=s;ko.bindingHandlers.azcTextStream=u.Widget.getBindingHandler(s)}(e||(e={})
),e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Scrollbar",
["require","exports","../Util/Resize","./Base/Base","../Util/Util"],function(n,t,i,r,u){var f;return function(
n){"use strict";var y=function(){function n(){this.refreshInterval=100;this.refreshWatcherElements=[
];this.refreshHandlerTimerHandle=null}return n.prototype.addRefreshWatcher=function(n){var i=this,t=
n.element[0];this.refreshWatcherElements.push({scrollbar:n,element:t,scrollHeight:s(t,e.vertical.scrollSize),
scrollWidth:s(t,e.horizontal.scrollSize)});this.refreshWatcherElements.length===1&&(this.refreshHandlerTimerHandle=
f.setTimeout(function(){i.refreshHandler()},this.refreshInterval))},n.prototype.removeRefreshWatcher=
function(n){for(var r=n.element[0],i=this.refreshWatcherElements.length;i--;)if(this.refreshWatcherElements[
i].element===r){this.refreshWatcherElements.splice(i,1);break}this.refreshWatcherElements.length===0&&
this.refreshHandlerTimerHandle!==null&&(f.clearTimeout(this.refreshHandlerTimerHandle),this.refreshHandlerTimerHandle=
null);t.removeData(n.element[0],h+e.horizontal.scrollSize);t.removeData(n.element[0],h+e.vertical.scrollSize)}
,n.prototype.refreshHandler=function(){for(var u=this,r=this.refreshWatcherElements.length,n,t,i;r--;
)n=this.refreshWatcherElements[r],t=s(n.element,e.vertical.scrollSize),i=s(n.element,e.horizontal.scrollSize),
(n.scrollHeight!==t||n.scrollWidth!==i)&&(n.scrollbar.refreshContent(),n.scrollHeight=t,n.scrollWidth=
i);this.refreshHandlerTimerHandle=f.setTimeout(function(){u.refreshHandler()},this.refreshInterval)}
,n}(),f=window,t=jQuery,e={vertical:{scrollPosition:"scrollTop",scrollSize:"scrollHeight",clientSize:
"clientHeight",offsetSize:"offsetHeight",page:"pageY",position:"top",oppositePosition:"left",size:"height",
oppositeSize:"width",orientation:"vertical"},horizontal:{scrollPosition:"scrollLeft",scrollSize:"scrollWidth",
clientSize:"clientWidth",offsetSize:"offsetWidth",page:"pageX",position:"left",oppositePosition:"top",
size:"width",oppositeSize:"height",orientation:"horizontal"}},o=50,c=new y,l=!1,h="SCROLLBAR_SAVE_SIZE_",
p=["SELECT","INPUT","TEXTAREA","KEYGEN"],s=function(n,i){if(l){if(p.indexOf(f.document.activeElement.
nodeName)>=0)return t.data(n,h+i);var r="overflow"+(i==="scrollHeight"?"Y":"X"),e=n.style[r],u;return n.
style[r]="scroll",u=n[i],n.style[r]=e,t.data(n,h+i,u),u}return n[i]},a=function(n){function t(){n.apply(
this,arguments);this.autoRefreshContent=!1;this.refreshContainerOnResize=!0;this.scrollIntoViewVertical=
!0;this.scrollIntoViewHorizontal=!0;this.fitContainer=!1}return __extends(t,n),t}(r.ViewModel),v;n.ViewModel=
a;t(function(){var i=t("<div />").css({height:100}),n=t("<div />").css({height:1,overflow:"visible"}).
append(i).appendTo("body");l=n[0].clientHeight===n[0].scrollHeight;n.remove()});v=function(n){function r(
r,u,f){var e=this;if(n.call(this,r,u,t.extend({viewModelType:a},f)),this._widget=null,this._scrollableArea=
null,this._overflowProperties=null,this._sizeProperties=null,this._scrollingObjectCache=null,this._trackEnter=
!1,this._minimumScrollbarSize=15,this._bars=null,this._ratio=null,this._resizeHandler=null,this._scrollbarSize=
null,this._refreshingContainer=!1,this._focusInTimeoutHandle=null,this._resizeTracking=null,this._overflowProperties=
{},this._sizeProperties={},this.element.addClass("azc-scrollbar-content"),this._setRefreshContainerOnResize(
),this._setAutoRefreshContent(),this.refreshContainer(),this.options.fitContainer){if(this.options.refreshContainerOnResize)
throw new Error("The scrollbar refreshContainerOnResize option can not be used with the fitContainer option.");
this._resizeTracking=i.track(this.widget(),function(){e.refreshContent()})}}return __extends(r,n),r.
prototype.dispose=function(){var i=this;this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(
this.element.removeClass("azc-scrollbar-content"),this._resizeTracking&&(this._resizeTracking.dispose(
),this._resizeTracking=null),this._portScroll(function(){i._detachScrollable()}),this._resizeHandler!==
null&&(t(f).off("resize",this._resizeHandler),this._resizeHandler=null),this._focusInTimeoutHandle!==
null&&(f.clearTimeout(this._focusInTimeoutHandle),this._focusInTimeoutHandle=null),c.removeRefreshWatcher(
this),n.prototype.dispose.call(this))},Object.defineProperty(r.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),r.prototype.widget=function(){return this._widget||this.element}
,r.prototype.refreshContent=function(){this._refreshingContainer||this.element.height()!==0?(this._getScrollingObject(
!0),this._setExtrasPosition(),this._createOrUpdateTracks(!0)):this.refreshContainer()},r.prototype.refreshContainer=
function(){var n=this;this.options.fitContainer&&this._resizeTracking||(this._refreshingContainer=!0,
this._portScroll(function(){n._attachScrollable()}),this._refreshingContainer=!1)},r.prototype.scrollTop=
function(n){if(n===undefined)return this._scrollableArea.scrollTop();this._scrollableArea.scrollTop(
n)},r.prototype.scrollLeft=function(n){if(n===undefined)return this._scrollableArea.scrollLeft();this.
_scrollableArea.scrollLeft(n)},r.prototype.scrollIntoView=function(n,i,r){i===void 0&&(i=!0);r===void
0&&(r=!0);var f=t(n),e,o,s,h;t.contains(this.element[0],f[0])&&(e=f.offset(),o=this._widget.offset(),
s=u.truncate(e.top-o.top),h=u.truncate(e.left-o.left),i||(s-=this._widget.outerHeight()-f.outerHeight(
)),r||(h-=this._widget.outerWidth()-f.outerWidth()),this.options.scrollIntoViewVertical&&this.scrollTop(
this.scrollTop()+s),this.options.scrollIntoViewHorizontal&&this.scrollLeft(this.scrollLeft()+h))},r.
prototype._setRefreshContainerOnResize=function(){var n=this;if(this.options.refreshContainerOnResize)
{if(this._resizeHandler===null)t(f).on("resize",this._resizeHandler=function(){n._resize()})}else this.
_resizeHandler!==null&&(t(f).off("resize",this._resizeHandler),this._resizeHandler=null)},r.prototype.
_setAutoRefreshContent=function(){this.options.autoRefreshContent?c.addRefreshWatcher(this):c.removeRefreshWatcher(
this)},r.prototype._getScrollbarSize=function(n){var i;return!this._scrollbarSize&&n&&(this._scrollbarSize=
{},i=t("<div />").addClass("azc-scrollbar-track").addClass("azc-scrollbar-track-horizontal"),i.appendTo(
n),this._scrollbarSize.height=i.height(),i.remove(),i=t("<div />").addClass("azc-scrollbar-track").addClass(
"azc-scrollbar-track-vertical"),i.appendTo(n),this._scrollbarSize.width=i.width(),i.remove()),this._scrollbarSize}
,r.prototype._portScroll=function(n){var r=this._scrollableArea||this.element,u,e=r.scrollTop(),o=r.
scrollLeft(),i=null;try{i=f.document.activeElement}catch(s){}n(o,e);t.contains(this.element[0],i)&&i.
focus();u=this._scrollableArea||this.element;u.scrollTop(e).scrollLeft(o)},r.prototype._createOrUpdateTracks=
function(n){this._createOrUpdateTrack(e.vertical,n);this._createOrUpdateTrack(e.horizontal,n)},r.prototype.
_createOrUpdateTrack=function(n,t){var i=this._bars[n.orientation],r=this._getScrollingObject(t);this.
_createTrack(n);r[n.orientation]?(i.attached||(this._widget.append(i.track).addClass("azc-scrollbar-scrolling-"+
n.orientation),t=!0,i.attached=!0),t&&this._setHandleSize(i.handle,r.vertical&&r.horizontal,n),this.
_setHandlePosition(i.handle,n),i.track.removeClass("azc-scrollbar-track-disabled"),this._isScrolling(
"auto",n)||i.track.addClass("azc-scrollbar-track-disabled")):i.attached&&(i.track.detach(),i.attached=
!1,this._widget.removeClass("azc-scrollbar-scrolling-"+n.orientation))},r.prototype._createTrack=function(
n){var i=this;this._bars[n.orientation].track||(this._bars[n.orientation].track=t("<div />").addClass(
"azc-scrollbar-track").addClass("azc-scrollbar-track-"+n.orientation).on("mouseenter.azcScrollbar",function(
){i._trackEnter=!0}).on("mouseleave.azcScrollbar",function(){i._trackEnter=!1}),this._bars[n.orientation].
handle=t("<div />").addClass("azc-scrollbar-handle"),this._bars[n.orientation].track.append(this._bars[
n.orientation].handle))},r.prototype._detachScrollable=function(){this.widget()!==this.element&&(this.
element.unwrap().unwrap().css({height:this._sizeProperties.height,width:this._sizeProperties.width,overflowY:
this._overflowProperties.overflowY,overflowX:this._overflowProperties.overflowX}),this._bars.vertical.
track.detach(),this._bars.vertical.attached=!1,this._bars.horizontal.track.detach(),this._bars.horizontal.
attached=!1,this._bars.vertical.extra&&this._bars.vertical.extra.remove(),this._bars.horizontal.extra&&
this._bars.horizontal.extra.remove(),this._widget=this.element,this._scrollableArea=null)},r.prototype.
_attachScrollable=function(){var y,n,i,f,e,s,h,c,l,r,u,a,v;return this._detachScrollable(),n=this.element.
width(),i=this.element.height(),this._bars={vertical:{},horizontal:{}},this._ratio={},this._overflowProperties=
this._eraseOverflowProperties(this.element),y=this._getScrollingObject(!0),this._sizeProperties=this.
_eraseSizeProperties(this.element),this._wrapElement(),this._getScrollbarSize(this._widget),this.options.
fitContainer?(s="100%",h="100%"):(s=n,h=i),this._widget.css({width:s,height:h}),this.options.fitContainer?
(f="calc(100% + "+o.toString(10)+"px)",e="calc(100% + "+o.toString(10)+"px)"):(f=n+o,e=i+o),this._scrollableArea.
append(this._bars.vertical.extra=t("<div />")).append(this._bars.horizontal.extra=t("<div />")).css(
{overflowY:"scroll",overflowX:"scroll",width:f,height:e}),this.options.fitContainer?(v=0,u=this._scrollableArea[
0].clientWidth,u>o&&u<n+o&&(v=n+o-u),a=0,r=this._scrollableArea[0].clientHeight,r>o&&r<i+o&&(a=i+o-r),
c="calc(100% - "+(o-v).toString(10)+"px)",l="calc(100% - "+(o-a).toString(10)+"px)"):(c=n,l=i),this.
element.css({width:c,height:l}),this._attachWidgetEvents(),this.refreshContent(),y},r.prototype._setExtrasPosition=
function(){this._setExtraPosition(this._bars.vertical.extra,e.vertical);this._setExtraPosition(this.
_bars.horizontal.extra,e.horizontal)},r.prototype._setExtraPosition=function(n,t){var i=this._getScrollingObject(
),r=i.vertical&&i.horizontal?this._getScrollbarSize()[t.size]:0,u=i[t.orientation]?s(this.element[0],
t.scrollSize)+(this._scrollableArea[0][t.clientSize]-this.element[t.size]())-1+r:-1;n.css({position:
"absolute",height:1,width:1}).css(t.oppositePosition,0).css(t.position,u)},r.prototype._wrapElement=
function(){this.element.wrap(t("<div />").addClass("azc-scrollbar-scrollable"));this._scrollableArea=
this.element.parent();this._scrollableArea.wrap(t("<div />").addClass("azc-scrollbar"));this._widget=
this._scrollableArea.parent()},r.prototype._attachWidgetEvents=function(){var n=this;this._widget.on(
"mousedown.azcScrollbar",".azc-scrollbar-track-horizontal .azc-scrollbar-handle",this._getHandleHandler(
this,e.horizontal)).on("mousedown.azcScrollbar",".azc-scrollbar-track-vertical .azc-scrollbar-handle",
this._getHandleHandler(this,e.vertical)).on("click.azcScrollbar",".azc-scrollbar-handle",function(){
return!1}).on("mousedown.azcScrollbar",".azc-scrollbar-track-horizontal",this._getTrackHandler(this,
e.horizontal)).on("mousedown.azcScrollbar",".azc-scrollbar-track-vertical",this._getTrackHandler(this,
e.vertical)).on("scroll.azcScrollbar",function(){n._widget[0].scrollTop=0;n._widget[0].scrollLeft=0}
);this._scrollableArea.on("scroll.azcScrollbar",function(){n._createOrUpdateTracks();n._resetWidgetScrollPosition(
)}).on("focusin.azcScrollbar",function(t){n._focusInTimeoutHandle!==null&&f.clearTimeout(n._focusInTimeoutHandle);
n._focusInTimeoutHandle=f.setTimeout(function(){if(n._resetWidgetScrollPosition(),t.target===n._scrollableArea[
0])return!1;var i=n._getVisibilityStatus(t.target);(i.top!==0||i.left!==0)&&n.scrollIntoView(t.target,
i.top!==1,i.left!==1)},0)})},r.prototype._resetWidgetScrollPosition=function(){this._widget[0].scrollTop=
0;this._widget[0].scrollLeft=0},r.prototype._getVisibilityStatus=function(n){var i=t(n),r=i.offset(),
f=this._widget.offset(),o=u.truncate(r.top-f.top),s=u.truncate(r.left-f.left),e=function(n,t,i){return n+
t<0?-1:n+t>i?1:0};return{top:e(o,i.outerHeight(),this.element.height()),left:e(s,i.outerWidth(),this.
element.width())}},r.prototype._eraseOverflowProperties=function(n){var t={overflowY:n.css("overflowY"),
overflowX:n.css("overflowX")};return n.css({overflowY:"visible",overflowX:"visible"}),t},r.prototype.
_eraseSizeProperties=function(n){var t={height:n[0].style.height,width:n[0].style.width};return n.css(
{height:"auto",width:"auto"}),t},r.prototype._getScrollingObject=function(n){return(n||!this._scrollingObjectCache)&&
(this._scrollingObjectCache={vertical:this._isVerticalScrolling(this._overflowProperties.overflowY),
horizontal:this._isHorizontalScrolling(this._overflowProperties.overflowX)}),this._scrollingObjectCache}
,r.prototype._isVerticalScrolling=function(n){return this._isScrolling(n,e.vertical)},r.prototype._isHorizontalScrolling=
function(n){return this._isScrolling(n,e.horizontal)},r.prototype._isScrolling=function(n,t){return n===
"scroll"?!0:n==="hidden"?!1:this.element[0][t.clientSize]<s(this.element[0],t.scrollSize)},r.prototype.
_setHandlePosition=function(n,t){n.css(t.position,this._scrollableArea[t.scrollPosition]()/this._ratio[
t.size])},r.prototype._setHandleSize=function(n,t,i){var u=this._scrollableArea[0],f=this._widget[0],
e=u[i.scrollSize],r=f[i.clientSize],o=t?this._getScrollbarSize()[i.size]:0,s=Math.max(this._minimumScrollbarSize,
r/e*(r-o));this._ratio[i.size]=(e-r-(u[i.clientSize]-f[i.clientSize]))/Math.max(1,r-s-o);n.css(i.size,
s)},r.prototype._getHandleHandler=function(n,i){return function(r){var u=t(this),e=r[i.page],o=u.position(
)[i.position];t(f.document).on("mousemove.azcScrollbar",function(t){return n._scrollableArea[i.scrollPosition](
n._ratio[i.size]*(t[i.page]-e+o)),!1}).one("mouseup.azcScrollbar",function(){return t(f.document).off(
"mousemove.azcScrollbar"),u.removeClass("azc-scrollbar-active"),!1});return u.addClass("azc-scrollbar-active"),
!1}},r.prototype._getTrackHandler=function(n,i){var r=null,u=function(t){if(n._trackEnter){var r=t();
r&&n._scrollableArea[i.scrollPosition](n._scrollableArea[i.scrollPosition]()+r)}};return function(e)
{var o=t(this),s=o.find(".azc-scrollbar-handle"),y=s[0][i.clientSize],c=n._widget[0][i.clientSize],h,
l=e[i.page]-o.offset()[i.position]>s.position()[i.position],a=e,v=function(){var n=a[i.page]-o.offset(
)[i.position],t=s.position()[i.position];return!l&&n<t?-c:l&&n>t+y?c:0};o.on("mousemove.azcScrollbar",
h=function(n){a=n});u(v);r=f.setTimeout(function(){r=f.setInterval(function(){u(v)},50)},400);t("body").
one("mouseup",function(){f.clearTimeout(r);f.clearInterval(r);r=null;o.off("mousemove.azcScrollbar",
h);h=null})}},r.prototype._resize=function(){this.refreshContainer()},r}(r.Widget);n.Widget=v}(f||(f=
{})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Data/QueryBuilder",
["require","exports","../Base/Base","../../Base/Base.Commands","../Base/Loadable","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Controls/Base/Base","Viva.Controls/Util/DateUtil","Viva.Controls/Controls/Forms/GroupDropDown",
"Viva.Controls/Util/TemplateEngine","Viva.Controls/Util/Util","Viva.Controls/Controls/Forms/CommandLink"],
function(n,t,i,r,u,f,e,o,s,h){var c=MsPortalFx.Base.EventTypes,l;return function(n){"use strict";var
t=MsPortalFx.ViewModels.Controls.Data.QueryBuilder,a=jQuery,r=f.QueryBuilder,d="fxcontrol-QueryBuilder",
g="azc-QueryBuilder",w="azc-QueryBuilder-mousedown",l=".azc-queryBuilder-predicate",nt="azc-br-hovered",
tt=".azc-queryBuilder-predicate-separator",ct="<!-- ko template: { name: 'builder', data: $root, templateEngine: $root.customTemplateEngine } --><!-- /ko -->",
lt="<!-- ko template: { name: 'header', data: $root, templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- ko template: { name: 'query', data: $root.func._internal.query, templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- ko template: { name: 'footer', data: $root, templateEngine: $root.customTemplateEngine } --><!-- /ko -->",
at="<div class='azc-queryBuilder-header' data-bind='visible: data.showHeader'><h1 class='azc-queryBuilder-title' data-bind='text: data.title'><\/h1><\/div>",
vt="<div class='azc-queryBuilder-query'><div class='azc-queryBuilder-expressions'><div class='azc-queryBuilder-column-groups'><div data-bind='foreach: expressions'><!-- ko template: { name: template + 'Groups', data: $data, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div><div class='azc-queryBuilder-actions-groups'><\/div><\/div><div class='azc-queryBuilder-column-predicates'><div class='azc-queryBuilder-columnHeaders'><div class='azc-queryBuilder-columnHeader azc-queryBuilder-columnHeader-selection'><\/div><div class='azc-queryBuilder-columnHeader azc-queryBuilder-columnHeader-connector'><span data-bind='text: $root.text.connectorColumnHeader'><\/span><\/div><div class='azc-queryBuilder-columnHeader azc-queryBuilder-columnHeader-field'><span data-bind='text: $root.text.fieldColumnHeader'><\/span><\/div><div class='azc-queryBuilder-columnHeader azc-queryBuilder-columnHeader-operator'><span data-bind='text: $root.text.operatorColumnHeader'><\/span><\/div><div class='azc-queryBuilder-columnHeader azc-queryBuilder-columnHeader-operands'><span data-bind='text: $root.text.valueColumnHeader'><\/span><\/div><\/div><div data-bind='foreach: expressions'><!-- ko template: { name: template + 'Predicates', data: $data, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div><div class='azc-queryBuilder-actions-predicates'><div class='azc-queryBuilder-predicate-separator azc-br-muted'><\/div><div class='azc-queryBuilder-footer' data-bind='visible: $root.data.showFooter'><div class='azc-queryBuilder-action-bar' data-bind='visible: $root.data.add.visible'><a class='azc-queryBuilder-action-add-image azc-fill-primary' data-bind='image: MsPortalFx.Base.Images.AddAlternate ? MsPortalFx.Base.Images.AddAlternate() : MsPortalFx.Base.Images.Add()' href='#'><\/a><div class='azc-queryBuilder-action-add azc-text-primary' data-bind='azcCommandLink: $root.data.add'><\/div><\/div><\/div><\/div><\/div><\/div><\/div>",
yt="<div class='azc-queryBuilder-group azc-br-muted' data-bind='foreach: expressions, css: { \"azc-queryBuilder-query-expression-selected\": selected }'><!-- ko template: { name: template + 'Groups', data: $data, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div>",
pt="<div class='azc-queryBuilder-group' data-bind='foreach: expressions, css: { \"azc-queryBuilder-query-expression-selected\": selected }'><!-- ko template: { name: template + 'Predicates', data: $data, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div>",
wt="<div class='azc-queryBuilder-dummy-predicate'><\/div>",bt="<div class='azc-queryBuilder-predicate-separator azc-br-muted'><\/div><div class='azc-queryBuilder-predicate' data-bind='css: { \"azc-queryBuilder-query-expression-selected azc-list-selected\": selected }, attr: { tabindex: ($root.data.disabled() ? null : 0) }'><div class='azc-queryBuilder-predicate-selection'><div class='azc-queryBuilder-predicate-selection-wrapper azc-bg-selected'><div class='azc-queryBuilder-predicate-selection-checkMark' data-bind='image: MsPortalFx.Base.Images.Check(MsPortalFx.Base.ImagePalette.White)'><\/div><\/div><\/div><div class='azc-queryBuilder-predicate-connector' data-bind='css: { \"azc-queryBuilder-predicate-connector-disabled\": $root.data.disabled, \"azc-queryBuilder-predicate-connector-selected\": selected }'><!-- ko if: selected --><!-- ko if: $root.func._internal.schema.namedConnectors.length > 0 --><div data-bind='azcGroupDropDown: { items: $root.func._getNamedConnectorGroupDropDownItems(), value: connector, disabled: ko.computed(function () { return $root.func._internal.schema.namedConnectors.length <= 1 || $root.data.disabled(); }) }'><\/div><!-- /ko --><!-- /ko --><!-- ko ifnot: selected --><div data-bind='text: connector().name, css: { \"azc-queryBuilder-hidden-connector\": connector().id === \"and\", \"azc-queryBuilder-predicate-not-selected\": true }'><\/div><!-- /ko --><\/div><div class='azc-queryBuilder-predicate-field'><!-- ko if: selected --><div data-bind='azcGroupDropDown: { items: $root.func._getFieldGroupDropDownItems($data.fields), value: field, disabled: $root.data.disabled }'><\/div><!-- /ko --><!-- ko ifnot: selected --><div class='azc-queryBuilder-predicate-not-selected' data-bind='text: field().name'><\/div><!-- /ko --><\/div><div class='azc-queryBuilder-predicate-operator'><!-- ko if: operator --><!-- ko if: selected --><!-- ko if: namedOperators().length > 0 --><div data-bind='azcGroupDropDown: { items: $root.func._getNamedOperatorGroupDropDownItems($data.namedOperators), value: operator, disabled: ko.computed(function () { return namedOperators().length <= 1 || $root.data.disabled(); }) }'><\/div><!-- /ko --><!-- /ko --><!-- ko ifnot: selected --><div class='azc-queryBuilder-predicate-not-selected' data-bind='text: operator().name'><\/div><!-- /ko --><!-- /ko --><\/div><!-- ko if: operands --><div class='azc-queryBuilder-predicate-operands azc-br-hovered' data-bind='css: { \"azc-queryBuilder-multiple-operands\": operands().length > 1 }, foreach: operands'><div class='azc-queryBuilder-operandControl'><div class='azc-queryBuilder-operand-label' data-bind='text: name'><\/div><!-- ko if: selected --><div data-bind='formElement: control'><\/div><!-- /ko --><!--ko ifnot: selected --><div class='azc-queryBuilder-predicate-not-selected' data-bind='text: selectedValue'><\/div><!-- /ko --><\/div><a class='azc-queryBuilder-predicate-contextMenuShortcut azc-fill-heavy' href=\"#\"><svg viewBox=\"0 0 16 16\"><circle cx=\"8\" cy=\"2\" r=\"1.8\" /> <circle cx=\"8\" cy=\"8\" r=\"1.8\" /> <circle cx=\"8\" cy=\"14\" r=\"1.8\"/><\/svg><\/a><\/div><!-- /ko --><\/div>",
kt="<div class='azc-queryBuilder-footer' data-bind='visible: $root.data.showFooter'><\/div>",v=function(
){function n(n){this._id=n}return Object.defineProperty(n.prototype,"id",{get:function(){return this.
_id},enumerable:!0,configurable:!0}),n.mergeCollections=function(n,t){t.forEach(function(t){var i=n[
t.id];i?i._merge(t):(n[t.id]=t,n.push(t))})},n.prototype._merge=function(){},n}(),y=function(){function n(
){}return Object.defineProperty(n.prototype,"objectName",{get:function(){throw new Error("CreatorBase.objectName must be overridden.");
},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isRequired",{get:function(){return!1}
,enumerable:!0,configurable:!0}),n.prototype.create=function(){throw new Error("CreatorBase.create() must be overridden.");
},n.prototype.getMultipleDefinitionsErrorMessage=function(n){return"Schema "+this.objectName+" '"+n.
id+"' has multiple definitions."},n}(),dt=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),Object.defineProperty(t.prototype,"objectName",{get:function(){return"connector"},enumerable:!0,
configurable:!0}),Object.defineProperty(t.prototype,"isRequired",{get:function(){return!0},enumerable:
!0,configurable:!0}),t.prototype.create=function(n){if(!n)throw new Error("Schema connector is invalid.");
if(!n.id||n.id.length===0)throw new Error("Schema connector missing identifier.");return new it(n.id,
n.name)},t}(y),it=function(n){function t(t,i){n.call(this,t);this._name=i}return __extends(t,n),Object.
defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),
t.prototype._merge=function(n){this._name=n.name||this._name},t}(v),gt=function(n){function t(t){n.call(
this);this._schemaOperators=t}return __extends(t,n),Object.defineProperty(t.prototype,"objectName",{
get:function(){return"field"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRequired",
{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.create=function(n){var i,t;if(
!n)throw new Error("Schema field is invalid.");if(!n.id||n.id.length===0)throw new Error("Schema field missing identifier.");
if(!n.name||n.name.length===0)throw new Error("Schema field '"+n.id+"' missing name.");return t=this.
_loadOperators(n),i=this._loadDefaultOperator(n,t),new rt(n.id,n.name,t,i)},t.prototype._loadOperators=
function(n){var t=this,i=[];return n.operators&&n.operators.forEach(function(r){var u;if(t._schemaOperators[
r.id]=new p(r.id,r.name,[]),t._schemaOperators.push(t._schemaOperators[r.id]),u=t._schemaOperators[r.
id],i[u.id])throw new Error("Schema field '"+n.id+"' references operator '"+r.id+"' multiple times.");
i[u.id]=u;i.push(u)}),i},t.prototype._loadDefaultOperator=function(n,t){return n.defaultOperator?t[n.
defaultOperator]:t[0]},t}(y),rt=function(n){function t(t,i,r,u){n.call(this,t);this._name=i;this._operators=
r;this._defaultOperator=u;this._namedOperators=this._operators.filter(function(n){return n.name&&n.name.
length>0})}return __extends(t,n),Object.defineProperty(t.prototype,"defaultOperator",{get:function()
{return this._defaultOperator},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",
{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,
"namedOperators",{get:function(){return this._namedOperators},enumerable:!0,configurable:!0}),Object.
defineProperty(t.prototype,"operators",{get:function(){return this._operators},enumerable:!0,configurable:
!0}),t.prototype._merge=function(n){this._name=n.name||this._name;this._defaultOperator=n.defaultOperator||
this._defaultOperator;this._operators=n.operators&&n.operators.length!==0?n.operators:this._operators;
this._namedOperators=this._operators.filter(function(n){return n.name&&n.name.length>0})},t}(v),ni=function(
n){function t(t){n.call(this);this._operator=t}return __extends(t,n),t.prototype.create=function(n){
if(!n)throw new Error("Schema operand is invalid.");if(!n.id||n.id.length===0)throw new Error("Schema operand missing identifier.");
if(!n.control)throw new Error("Schema operand control is invalid.");return new ut(n.id,n.name,n.control)}
,t.prototype.getMultipleDefinitionsErrorMessage=function(n){return"Schema operator '"+this._operator.
id+"' operand '"+n.id+"' defined multiple times."},t}(y),ut=function(n){function t(t,i,r){n.call(this,
t);this._name=i;this._control=r}return __extends(t,n),Object.defineProperty(t.prototype,"name",{get:
function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"control",
{get:function(){return this._control},enumerable:!0,configurable:!0}),t}(v),ti=function(n){function t(
){n.call(this)}return __extends(t,n),Object.defineProperty(t.prototype,"objectName",{get:function(){
return"operator"},enumerable:!0,configurable:!0}),t.prototype.create=function(n){var t;if(!n)throw new
Error("Schema operator is invalid.");if(!n.id||n.id.length===0)throw new Error("Schema operator missing identifier.");
return t=b.loadObjects(n.operands,new ni(n)),new p(n.id,n.name,t)},t}(y),p=function(n){function t(t,
i,r){n.call(this,t);this._name=i;this._operands=r}return __extends(t,n),Object.defineProperty(t.prototype,
"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,
"operands",{get:function(){return this._operands},enumerable:!0,configurable:!0}),t.prototype._merge=
function(n){this._name=n.name||this._name;this._operands=n.operands&&n.operands.length!==0?n.operands:
this._operands},t}(v),b=function(){function n(n){this._schema=n}return n.loadObjects=function(n,t){var
i=[];if(t.isRequired&&!n)throw new Error("Schema does not define any "+t.objectName+".");return n&&n.
forEach(function(n){var r=t.create(n);if(i[r.id])throw new Error(t.getMultipleDefinitionsErrorMessage(
n));i[r.id]=r;i.push(r)}),i},n.prototype.loadConnectors=function(){return n.loadObjects(this._schema.
connectors,new dt)},n.prototype.loadOperators=function(){return n.loadObjects(this._schema.operators,
new ti)},n.prototype.loadFields=function(t){return n.loadObjects(this._schema.fields,new gt(t))},n}(
),ii=function(){function n(n,t,i,r){this._connectors=n;this._fields=i;this._operators=t;this._callback=
r;this._setNamedObjects()}return Object.defineProperty(n.prototype,"connectors",{get:function(){return this.
_connectors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"namedConnectors",{get:
function(){return this._namedConnectors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"fields",{get:function(){return this._fields},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"operators",{get:function(){return this._operators},enumerable:!0,configurable:!0}),Object.
defineProperty(n.prototype,"namedOperators",{get:function(){return this._namedOperators},enumerable:
!0,configurable:!0}),n.load=function(t,i){var f=[],u=[],e=[],r;return t&&(r=new b(t),f=r.loadConnectors(
),u=r.loadOperators(),e=r.loadFields(u)),new n(f,u,e,i)},n.prototype.invokeCallbackAndMerge=function(
n){var r=this,t,i=this._callback;return n.operatorIds.length||n.fieldIds.length?i?(t=i(n),t.then(function(
n){r._merge(n)})):t=Q.fcall(function(){throw new Error("Schema is missing data but a callback function is not specified.");
}):t=Q.fcall(function(){throw new Error("The CallbackMethodQuery must contain operator and/or field IDs.");
}),t},n.prototype._merge=function(n){var t=new b(n),i,r,u;i=t.loadConnectors();it.mergeCollections(this.
_connectors,i);r=t.loadOperators();p.mergeCollections(this._operators,r);u=t.loadFields(this._operators);
rt.mergeCollections(this._fields,u);this._setNamedObjects()},n.prototype._setNamedObjects=function()
{this._namedConnectors=this._connectors.filter(function(n){return n.name&&n.name.length>0});this._namedOperators=
this._operators.filter(function(n){return n.name&&n.name.length>0})},n}(),ft=function(){function n(n,
t){var i=this;this._collection=null;this._connector=ko.observable(t);this._selected=ko.observable(!1);
this._template=n;this._type=n;this.isSelected=this._selected;this.dirty=ko.observable(!1);this.initialized=
ko.observable(!1);this.data={connector:null,type:null};this.originalData={connector:null,type:null};
this.isActivated=ko.observable(!1);this.hasChildEdits=ko.observable(!1);this._select=function(){i.selected(
)||i.selected(!0)}}return Object.defineProperty(n.prototype,"collection",{get:function(){return this.
_collection},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"connector",{get:function(
){return this._connector},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"type",{
get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"selected",{get:function(){return this._selected},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"select",{get:function(){return this._select},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"template",{get:function(){return this._template},enumerable:!0,configurable:!0}),n.prototype.
add=function(n){if(!n)throw new Error("Invalid parent collection.");this._collection=n;this._collection.
push(this)},n.prototype.group=function(n,t){var i,r,u;if(n<2)throw new Error("Cannot group less than two expressions.");
if(!t)throw new Error("Invalid expression group.");if(i=this._collection,!i)throw new Error("Expression does not have a parent collection.");
if(r=i.indexOf(this),r<0)throw new Error("Expression was not found.");for(u=0;u<n;u++)i()[r+u].add(t.
expressions);t.replace(i,r,n)},n.prototype.insert=function(n){var t,i;if(!n)throw new Error("Invalid selection for expression insert.");
if(t=n.collection,!t)throw new Error("Invalid parent collection.");if(i=t.indexOf(n),i<0)throw new Error(
"Selected expression not found.");t.splice(i+1,0,this);this._collection=t},n.prototype.remove=function(
){if(!this._collection)throw new Error("Cannot remove unparented collection.");this._collection.remove(
this);this._collection=null},n.prototype.replace=function(n,t,i){if(!n)throw new Error("Invalid parent collection for expression.");
if(t<0||i<0||t+i>n().length)throw new Error("Invalid collection fields to replace.");n.splice(t,i,this);
this._collection=n},n}(),ri=function(){function n(n,t){this._group=n;this._schema=t}return n.prototype.
create=function(){var i=this._group,r=this._schema,u,f=[];if(!i)throw new Error("Query group is invalid.");
if(!i.type||i.type!==t.QueryExpressionType.Group)throw new Error("Query group type is invalid.");if(
!i.connector)throw new Error("Query group connector is not defined.");if(u=r.connectors[i.connector],
!u)throw new Error("Query group connector '"+i.connector+"' is not defined in the current schema.");
if(!i.expressions)throw new Error("Query group expressions are not defined.");if(i.expressions.length<
2)throw new Error("Query group must define at least two expressions.");return i.expressions.forEach(
function(i){var u,e;if(!i.type)throw new Error("Query expression type is not defined.");if(i.type===
t.QueryExpressionType.Group)u=new n(i,r).create(),f.push(u);else if(i.type===t.QueryExpressionType.Predicate)
e=new k(i,r).create(),f.push(e);else throw new Error("Unexpected expression type '"+i.type+"' in group.");
}),new et(u,f)},n}(),et=function(n){function i(i,r){var u=this;n.call(this,t.QueryExpressionType.Group,
i);this._expressions=ko.observableArray([]);r.forEach(function(n){n.add(u._expressions)});this._allExpressionsSelected=
ko.computed(function(){var n=u.expressions().every(function(n){return n.selected()});return u.selected(
n),n});this._firstPredicate=ko.computed(function(){var i=null,r,n,f;return r=u.expressions(),r.length>
0&&(n=r[0],n&&(n.type===t.QueryExpressionType.Predicate?i=n:(f=n,i=f.firstPredicate()))),i})}return __extends(
i,n),i.prototype.dispose=function(){this._allExpressionsSelected&&(this._allExpressionsSelected.dispose(
),this._allExpressionsSelected=null);this._firstPredicate&&(this._firstPredicate.dispose(),this._firstPredicate=
null)},Object.defineProperty(i.prototype,"expressions",{get:function(){return this._expressions},enumerable:
!0,configurable:!0}),Object.defineProperty(i.prototype,"firstPredicate",{get:function(){return this.
_firstPredicate},enumerable:!0,configurable:!0}),i.prototype.serialize=function(){var n={type:t.QueryExpressionType.
Group,connector:this.connector().id,expressions:[]};return this.expressions().forEach(function(i){i.
type===t.QueryExpressionType.Group?n.expressions.push(i.serialize()):i.type===t.QueryExpressionType.
Predicate&&n.expressions.push(i.serialize())}),n},i.prototype.ungroup=function(){var n=this;this.expressions(
)[0].connector(this.connector());this.expressions().forEach(function(t){t.insert(n);n=t});this.remove(
);this.expressions.removeAll()},i}(ft),si=function(){function n(n,t){this._operandValue=n;this._schemaOperand=
t}return n.prototype.create=function(){var n=this._schemaOperand,t=this._operandValue;return new ot(
n.id,n.name,null,n.control)},n}(),ot=function(){function n(n,t,i,r){var u=this;this._id=n;this._name=
t;this._control=i;this._value=ko.observable(r);this._selected=ko.observable(!1);this._selectedValue=
ko.computed(function(){var n="",r,t;if(!u._selected())switch(i.controlType){case 26:r=u.control.value(
);r&&(n=o.toString(r,"u"));break;case 3:case 8:MsPortalFx.Util.isNullOrUndefined(u.control.value())?
n=u.control.options()[0].text():(t=u.control.options().first(function(n){return n.value===u.control.
value()}),t&&t.text()&&(n=t.text()));break;default:u.control.value()&&(n=u.control.value())}return n}
)}return n.prototype.dispose=function(){this._selectedValue&&(this._selectedValue.dispose(),this._selectedValue=
null)},Object.defineProperty(n.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"control",{get:function(){return this._control},enumerable:!0,
configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this._value},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"selected",{get:function(){return this._selected}
,enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedValue",{get:function(){return this.
_selectedValue},enumerable:!0,configurable:!0}),n.prototype.serialize=function(){var i=this,n="",t;if(
!MsPortalFx.Util.isNullOrUndefined(this.control.value()))switch(this.control.controlType){case 26:n=
o.toString(this.control.value(),"u");break;case 3:case 8:MsPortalFx.Util.isNullOrUndefined(this.control.
value())?n=this.control.options()[0].value:(t=this.control.options().first(function(n){return n.value===
i.control.value()}),t&&t.value&&(n=t.value));break;default:n=this.control.value()}return{value:n}},n}
(),k=function(){function n(n,t){this._predicate=n;this._schema=t}return n.prototype.create=function(
n){n===void 0&&(n=!1);var i=this._predicate,r=this._schema,u,f,e;if(!i)throw new Error("Query predicate is invalid.");
if(!i.type||i.type!==t.QueryExpressionType.Predicate)throw new Error("Query predicate type is invalid.");
if(!i.field)throw new Error("Query predicate field not defined.");if(f=r.fields[i.field],!f)throw new
Error("Query predicate field '"+i.field+"' is not defined in the current schema.");if(!i.connector)throw new
Error("Query predicate connector not defined.");if(u=r.connectors[i.connector],!u)throw new Error("Query predicate connector '"+
i.connector+"' is not defined in the current schema.");if(!i.operator&&!n)throw new Error("Query predicate operator not defined.");
if(!i.operands)throw new Error("Query predicate operands not defined.");return new ui(u,f,e,[],r,i)}
,n}(),ui=function(n){function i(i,r,u,f,e,o){var s=this;n.call(this,t.QueryExpressionType.Predicate,
i);this._subscriptions=[];this._currentField=r;this._field=ko.observable();this._fields=ko.observableArray(
e.fields);this._operator=ko.observable(u);this._operators=ko.observableArray(r.operators);this._namedOperators=
ko.observableArray(r.namedOperators);this._operands=ko.observable(f);this._schema=ko.observable(e);this.
_predicate=o;this._queryLoading=ko.observable({status:0});this.originalData=o;this._subscriptions.push(
ko.computed(function(){var r=s.connector(),t=s.field(),i=s.operator(),n=s.operands();s.data=s.serialize(
);!s.initialized()&&t&&i&&n&&n.length>0&&s.initialized(!0);s.initialized()&&JSON.stringify(s.data)!==
JSON.stringify(s.originalData)?s.dirty()||s.dirty(!0):s.dirty()&&s.dirty(!1)}));this._subscriptions.
push(this._field.subscribe(function(n){var t=null,i,r;t=s.operator();n&&(s._queryLoading().status!==
1&&s._queryLoading({status:1}),r={type:0,operatorIds:[],fieldIds:[n.id],originalPredicate:s._predicate},
i=s._schema().invokeCallbackAndMerge(r),i.then(function(){if(!n.operators||n.operators.length===0)throw new
Error("Could not load operators for field "+n.id);if(!n.defaultOperator)throw new Error("Could not load default operator for field "+
n.id);s._setPropertiesFromNewFieldViewModel(n,t)}).catch(function(n){s._queryLoading({status:2,message:
n});console.log(n)}))}));this._subscriptions.push(this._operator.subscribe(function(n){var r,u,i,t,f=
[];n.operands&&n.operands.length!==0?s._initializeOperatorOperands(n):(s._queryLoading().status!==1&&
s._queryLoading({status:1}),u={type:1,fieldIds:[s._field().id],operatorIds:[n.id],originalPredicate:
s._predicate},r=s._schema().invokeCallbackAndMerge(u),r.then(function(r){if(i=r.fields.first(function(
n){return n.id===s._currentField.id}),!i||!i.operators||i.operators.length===0)throw"Could not load operatorViewModel field data for "+
n.id;if(t=i.operators.first(function(t){return t.id===n.id}),!t.operands||t.operands.length===0)throw"Could not load operatorViewModel data for "+
n.id;t.operands.forEach(function(n){f.push(new ut(n.id,n.name,n.control))});n=new p(t.id,t.name,f);s.
_initializeOperatorOperands(n)}).catch(function(n){s._queryLoading({status:2,message:n});console.log(
n)}))}))}return __extends(i,n),i.prototype.dispose=function(){for(var n=0,t=this._subscriptions.length;
n<t;n++)this._subscriptions[n]&&this._subscriptions[n].dispose&&this._subscriptions[n].dispose();this.
_subscriptions=null},i.prototype._initializeField=function(n){this._operandControls=n;this._field(this.
_currentField)},i.prototype._setPropertiesFromNewFieldViewModel=function(n){this._currentField=n;this.
namedOperators(n.namedOperators);this.operators(n.operators);this.operator(n.defaultOperator)},i.prototype.
_initializeOperatorOperands=function(n){var t=this,i=[];n.operands.forEach(function(n){var r=new ot(
n.id,n.name,n.control),u;if(t._subscriptions.push(ko.computed(function(){r.selected(t.selected())})),
t._currentField.id===t._predicate.field&&t.operator().id===t._predicate.operator&&t._predicate.operands.
value&&t._predicate.operands.value.value&&(u=t._predicate.operands.value.value),!MsPortalFx.Util.isNullOrUndefined(
u))switch(r.control.controlType){case 26:r.control.value(new Date(u));break;default:r.control.value(
u)}n.control&&t._operandControls.push(n.control);i.push(r)});this.operands(i);this._queryLoading({status:
0})},Object.defineProperty(i.prototype,"field",{get:function(){return this._field},enumerable:!0,configurable:
!0}),Object.defineProperty(i.prototype,"fields",{get:function(){return this._fields},enumerable:!0,configurable:
!0}),Object.defineProperty(i.prototype,"operator",{get:function(){return this._operator},enumerable:
!0,configurable:!0}),Object.defineProperty(i.prototype,"operators",{get:function(){return this._operators}
,enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"namedOperators",{get:function(){
return this._namedOperators},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"operands",
{get:function(){return this._operands},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,
"queryLoading",{get:function(){return this._queryLoading},enumerable:!0,configurable:!0}),i.prototype.
serialize=function(){var n={type:t.QueryExpressionType.Predicate,connector:this.connector()?this.connector(
).id:"",field:this.field()?this.field().id:"",operator:this.operator()?this.operator().id:"",operands:
{}};return this.operands().forEach(function(t){n.operands[t.id]=t.serialize()}),n},i}(ft),fi=function(
){function n(n,t,i){this._query=n;this._schema=t;this._operandControls=i}return n.prototype.create=function(
){var n=this._query,r=this._schema,i=[];return n&&n.expressions&&n.expressions.forEach(function(n){var
u,f;if(!n.type)throw new Error("Query expression type is not defined.");if(n.type===t.QueryExpressionType.
Group)f=new ri(n,r).create(),i.push(f);else if(n.type===t.QueryExpressionType.Predicate)u=new k(n,r).
create(),i.push(u);else throw new Error("Unexpected expression type '"+n.type+"' in query.");}),new st(
i,this._operandControls)},n}(),st=function(){function n(n,t){var i=this;n===void 0&&(n=[]);this._subscriptions=
[];this._expressions=ko.observableArray();this._predicatesLoading=ko.observable(0);this._predicatesInitialized=
ko.observable(0);this._totalPredicates=ko.observable(0);this._operandControls=t||ko.observableArray(
[]);this._originalQuery=ko.observable();this.queryLoading=ko.observable({status:0});this.initialized=
ko.observable(!1);this.dirty=ko.observable(!1);n.forEach(function(n){n.add(i.expressions)});this._subscriptions.
push(ko.computed(function(){i._totalPredicates(i._countPredicates(i.expressions()))}));this._subscriptions.
push(ko.computed(function(){i._totalPredicates.peek()>0&&(i._predicatesLoading()>0?i.queryLoading.peek(
).status!==1&&i.queryLoading({status:1}):i.queryLoading.peek().status!==0&&i.queryLoading({status:0}))}
));this._subscriptions.push(ko.computed(function(){i._totalPredicates.peek()>0&&i._predicatesInitialized(
)===i._totalPredicates.peek()&&(i.initialized(!0),MsPortalFx.Util.isNullOrUndefined(i._originalQuery.
peek())&&i._originalQuery(i.serialize()))}));this._subscribeToPredicateStatuses(n);this._initializePredicateFields(
n)}return n.prototype._initializePredicateFields=function(n){var t=this;n.forEach(function(n){n.type===
"predicate"?n._initializeField(t._operandControls):n.type==="group"&&t._initializePredicateFields(n.
expressions())})},n.prototype._countPredicates=function(n){var i=this,t=0;return n.forEach(function(
n){n.type==="predicate"?t++:n.type==="group"&&(t+=i._countPredicates(n.expressions()))}),t},n.prototype.
_subscribeToPredicateStatuses=function(n){var t=this;n.forEach(function(n){n.type==="predicate"?(t._subscriptions.
push(n.queryLoading.subscribe(function(n){var i=t._predicatesLoading(),r=n.status===1?i+1:i-1;t._predicatesLoading(
r)})),t._subscriptions.push(n.initialized.subscribe(function(n){var i=t._predicatesInitialized(),r=n?
i+1:i-1;t._predicatesInitialized(r)})),t._subscriptions.push(n.dirty.subscribe(function(n){t.dirty(n)}
))):n.type==="group"&&t._subscribeToPredicateStatuses(n.expressions())})},n.prototype.dispose=function(
){this._disposePredicateViewModels(this._expressions());for(var n=0,t=this._subscriptions.length;n<t;
n++)this._subscriptions[n]&&this._subscriptions[n].dispose&&(this._subscriptions[n].dispose(),this._subscriptions[
n]=null);this._subscriptions=[]},n.prototype._disposePredicateViewModels=function(n){var t=this;n.forEach(
function(n){n.type==="predicate"?n.dispose():n.type==="group"&&t._disposePredicateViewModels(n.expressions(
))})},Object.defineProperty(n.prototype,"expressions",{get:function(){return this._expressions},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"originalQuery",{get:function(){return this._originalQuery}
,enumerable:!0,configurable:!0}),n.prototype.serialize=function(){var n={expressions:[]};return this.
expressions().forEach(function(i){i.type===t.QueryExpressionType.Group?n.expressions.push(i.serialize(
)):i.type===t.QueryExpressionType.Predicate&&n.expressions.push(i.serialize())}),n},n}(),ei=function(
){function n(n){var t=this;this._widget=n;this.savingQuery=!1;this.query=ko.observable(new st);this.
selectedExpressions=ko.computed(function(){return t._selectedExpressions(t.query().expressions())});
this._widget._addDisposablesToCleanUp([this.selectedExpressions])}return n.prototype.serialize=function(
){var n;try{this.savingQuery=!0;n=this.query.peek().serialize();this._widget.options.savedQuery(n);this.
query.peek().originalQuery(n);this.query.peek().dirty(!1)}finally{this.savingQuery=!1}},n.prototype.
focusPredicate=function(n){this.selectPredicate(n,this.query().expressions());this._widget.element.find(
".azc-queryBuilder-query-expression-selected .azc-queryBuilder-predicate-field select").focus()},n.prototype.
selectPredicate=function(n,i){var r=this;i.forEach(function(i){i.type===t.QueryExpressionType.Group?
r.selectPredicate(n,i.expressions()):i.selected(i===n)})},n.prototype._selectedExpressions=function(
n,i){var r=this;return i===void 0&&(i=[]),n.forEach(function(n){n.selected()?i.push(n):n.type===t.QueryExpressionType.
Group&&r._selectedExpressions(n.expressions(),i)}),i},n}(),oi=function(n){function i(i,u,f){var e=this;
n.call(this,i,u,a.extend({viewModelType:t.ViewModel},f));this._internal=new ei(this);this._templateEngine=
new h.StringTemplateEngine;this._callback=u.callback;this._setTemplates();this.element.addClass(g).html(
ct);this._text={connectorColumnHeader:r.connectorColumnHeader,fieldColumnHeader:r.fieldColumnHeader,
operatorColumnHeader:r.operatorColumnHeader,valueColumnHeader:r.valueColumnHeader,addCommandLabel:r.
addCommandLabel,insertCommandLabel:r.insertCommandLabel,removeCommandLabel:r.removeCommandLabel,removeCommandLabelMultiple:
r.removeCommandLabelMultiple,groupCommandLabel:r.groupCommandLabel,ungroupCommandLabel:r.ungroupCommandLabel};
this.options.add.text(this._text.addCommandLabel);this.options.add.attach(function(){e._executeAdd()}
,function(){return e._canExecuteAdd()});this.options.insert.text(this._text.insertCommandLabel);this.
options.insert.attach(function(){e._executeInsert()},function(){return e._canExecuteInsert()});this.
options.remove.text(this._text.removeCommandLabel);this.options.remove.attach(function(){e._executeRemove(
)},function(){return e._canExecuteRemove()});this.options.group.text(this._text.groupCommandLabel);this.
options.group.attach(function(){e._executeGroup()},function(){return e._canExecuteGroup()});this.options.
ungroup.text(this._text.ungroupCommandLabel);this.options.ungroup.attach(function(){e._executeUngroup(
)},function(){return e._canExecuteUngroup()});this.options.save.attach(function(){e._executeSave()},
function(){return e._canExecuteSave()});this._addDisposablesToCleanUp(ko.computed(function(){e.options.
queryViewModel(e._internal.query())}));this._addDisposablesToCleanUp(ko.computed(function(){var n=e.
_internal.query().dirty();e._internal.query.peek().initialized()&&e._updateDirtyState()}));this._addDisposablesToCleanUp(
ko.computed(function(){var n=e._internal.query().queryLoading();e.options.queryLoading(n);n.status===
0&&e._resetExpressionEvents()}));this._addDisposablesToCleanUp(ko.computed(function(){var n=e.options.
query();e.options._msPortalFxOperandControls([])}));this._internal.schema=ii.load(this.options.schema(
),this._callback);this._bindDescendants({customTemplateEngine:this._templateEngine,text:this._text});
this._attachEvents();MsPortalFx.Util.isNullOrUndefined(this.options.query())||this.options.query.notifySubscribers(
this.options.query())}return __extends(i,n),i.prototype._getNamedConnectorGroupDropDownItems=function(
){var n=this;return this._namedConnectorGroupDropDownItems||(this._namedConnectorGroupDropDownItems=
ko.computed(function(){return s.ViewModel.createDropdownItemsFromArray(n._internal.schema.namedConnectors,
{textKey:"name"})})),this._namedConnectorGroupDropDownItems},i.prototype._getFieldGroupDropDownItems=
function(n){return ko.computed(function(){return s.ViewModel.createDropdownItemsFromArray(n,{textKey:
"name"})})},i.prototype._getNamedOperatorGroupDropDownItems=function(n){return ko.computed(function(
){return s.ViewModel.createDropdownItemsFromArray(n,{textKey:"name"})})},i.prototype._attachEvents=function(
){var n=this;this.element.on("mousedown keydown keyup",l,this._keyHandler=function(t){n._ctrlKey=t.ctrlKey;
n._tabKey=t.which===9});this.element.on("click","a.azc-queryBuilder-action-add-image",this._addImageClickHandler=
function(){return n._canExecuteAdd()&&n._executeAdd(),!1});this.element.on("mousedown",this._mousedownHandler=
function(){n.element.addClass(w);n.element.one("mouseup",function(){n.element.removeClass(w)})})},i.
prototype._resetExpressionEvents=function(){var n=this;this._detachExpressionEvents();this.element.on(
c.fxcontextmenurequest+".predicate",".azc-queryBuilder-predicate, .azc-queryBuilder-group",this._rightClickHandler=
function(t){var i=ko.dataFor(this);i.selected()||n._selectPredicate(i,n._internal.query().expressions(
));n._rightClick(t)});this.element.on("click.contextMenuShortcut",".azc-queryBuilder-predicate-contextMenuShortcut",
this._rightClickShortcutHandler=function(t){var i=ko.dataFor(a(this).closest(".azc-queryBuilder-predicate").
get(0));i.selected()||n._selectPredicate(i,n._internal.query().expressions());n._rightClickShortcut(
t)});this.element.on("click.predicateSelection",".azc-queryBuilder-predicate-selection",this._predicateSelectionClickHandler=
function(t){n._clickPredicate(ko.dataFor(a(this).closest(".azc-queryBuilder-predicate").get(0)),t,!0);
t.stopPropagation();t.preventDefault()});this.element.on("click.predicate",l,this._predicateClickHandler=
function(t){n._clickPredicate(ko.dataFor(this),t,t.ctrlKey)});this.element.on("focusin.predicate",l,
this._predicateFocusInHandler=function(t){n.element.hasClass(w)||!t.relatedTarget||a.contains(n.element[
0],t.relatedTarget)||(n._focusinPredicate(ko.dataFor(this),t),n._tabKey=!1)});this.element.on("mouseover",
l,this._predicateMouseOverHandler=function(){n._getPreviousAndNextPredicateSeparators(this).addClass(
nt)});this.element.on("mouseleave",l,this._predicateMouseLeaveHandler=function(){n._getPreviousAndNextPredicateSeparators(
this).removeClass(nt)})},i.prototype._getPreviousAndNextPredicateSeparators=function(n){var t=this.element.
find(l),u=a(n).prev(tt),i=t.eq(t.index(n)+1),r;return r=i.length===0?this.element.find(".azc-queryBuilder-actions-predicates > .azc-queryBuilder-predicate-separator"):
i.prev(tt),u.add(r)},i.prototype._detachExpressionEvents=function(){this._rightClickHandler&&(this.element.
off(c.fxcontextmenurequest,".azc-queryBuilder-predicate, .azc-queryBuilder-group",this._rightClickHandler),
this._rightClickHandler=null);this._rightClickShortcutHandler&&(this.element.off("click",".azc-queryBuilder-predicate-contextMenuShortcut",
this._rightClickShortcutHandler),this._rightClickShortcutHandler=null);this._predicateClickHandler&&
(this.element.off("click",l,this._predicateClickHandler),this._predicateClickHandler=null);this._predicateSelectionClickHandler&&
(this.element.off("click.predicateSelection",".azc-queryBuilder-predicate-selection",this._predicateSelectionClickHandler),
this._predicateSelectionClickHandler=null);this._predicateFocusInHandler&&(this.element.off("focusin",
l,this._predicateFocusInHandler),this._predicateFocusInHandler=null);this._predicateMouseOverHandler&&
(this.element.off("mouseover",l,this._predicateMouseOverHandler),this._predicateMouseOverHandler=null);
this._predicateMouseLeaveHandler&&(this.element.off("mouseleave",l,this._predicateMouseLeaveHandler),
this._predicateMouseLeaveHandler=null)},i.prototype._rightClickShortcut=function(n){var t=a(n.target).
closest("a.azc-queryBuilder-predicate-contextMenuShortcut").offset();n.clientX=t.left;n.clientY=t.top;
n.which=3;this._rightClick(n)},i.prototype._rightClick=function(n){var r=a.Event(c.fxrightclick),u,f,
e=ko.dataFor(n.target),t=[],i=this._internal.selectedExpressions();if(n.which===3){if(n&&n.ctrlKey){
n.preventDefault();return}r.clientX=n.clientX;r.clientY=n.clientY;u={selectableSet:new MsPortalFx.ViewModels.
SelectableSet(ko.observableArray(i)),deleteRowCommandTitle:null,markForDelete:null};this._canExecuteRemove(
)&&(i.length>1||i.length===1&&i[0].type==="group"?this.options.remove.text(this._text.removeCommandLabelMultiple):
this.options.remove.text(this._text.removeCommandLabel),t.push(this.options.remove));this._canExecuteInsert(
)&&t.push(this.options.insert);this._canExecuteGroup()&&t.push(this.options.group);this._canExecuteUngroup(
)&&t.push(this.options.ungroup);f={entityType:1,commandGroup:null,controlCommands:t,viewModel:e,listData:
u};n.preventDefault();n.stopPropagation();this.element.trigger(r,f)}},i.prototype.dispose=function()
{this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.options.add.detach(),this.options.
insert.detach(),this.options.remove.detach(),this.options.group.detach(),this.options.ungroup.detach(
),this.options.save.detach(),this._templateEngine=null,this._internal=null,this._keyHandler&&(this.element.
off("mousedown keydown keyup",this._keyHandler),this._keyHandler=null),this._addImageClickHandler&&(
this.element.off("click","a.azc-queryBuilder-action-add-image",this._addImageClickHandler),this._addImageClickHandler=
null),this._mousedownHandler&&(this.element.off("mousedown",this._mousedownHandler),this._mousedownHandler=
null),this._detachExpressionEvents(),this._cleanElement(g),n.prototype.dispose.call(this))},Object.defineProperty(
i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype.
_initializeSubscriptions=function(t){var i=this;n.prototype._initializeSubscriptions.call(this,t);this.
options.query.extend({notify:"always"});this._subscriptions.registerForDispose(this.options.query.subscribe(
function(n){i._onQueryChanged(n)}))},i.prototype._onQueryChanged=function(n){this._internal.query().
dispose();this._internal.query().queryLoading({status:1});MsPortalFx.Util.isNullOrUndefined(n)?this.
_internal.query().queryLoading({status:0}):this._internal.query(new fi(n,this._internal.schema,this.
options._msPortalFxOperandControls).create())},i.prototype.cycleConnector=function(n){var t,i;this.options.
disabled()||(t=this._internal.schema.namedConnectors,i=(t.indexOf(n.connector())+1)%t.length,n.connector(
t[i]))},i.prototype._focusinPredicate=function(n){this._ctrlKey||this._selectPredicate(n,this._internal.
query().expressions())},i.prototype._clickPredicate=function(n,t,i){i===void 0&&(i=!1);this._ctrlKey=
i;this.options.disabled()||(i?n.selected(!n.selected()):this._selectPredicate(n,this._internal.query(
).expressions()))},i.prototype._selectPredicate=function(n,i){var r=this;i.forEach(function(i){i.type===
t.QueryExpressionType.Group?r._selectPredicate(n,i.expressions()):i.selected(i===n)})},i.prototype._updateDirtyState=
function(){var n=JSON.stringify(this._internal.query.peek().originalQuery()),t=JSON.stringify(this._internal.
query.peek().serialize());n===t?this._internal.query.peek().dirty(!1):this._internal.query.peek().dirty(
!0)},i.prototype._canExecuteAdd=function(){var n=!1;return this.options.disabled()||(n=!0),n},i.prototype.
_executeAdd=function(){var n=this._createPredicateViewModel();this._internal.query()._subscribeToPredicateStatuses(
[n]);n._initializeField(this.options._msPortalFxOperandControls);n.add(this._internal.query().expressions);
this._internal.focusPredicate(n);this._updateDirtyState()},i.prototype._canExecuteInsert=function(){
var t=!1,n;return this.options.disabled()||(n=this._internal.selectedExpressions(),t=n&&n.length===1),
t},i.prototype._executeInsert=function(){var n=this._createPredicateViewModel();this._internal.query(
)._subscribeToPredicateStatuses([n]);n._initializeField(this.options._msPortalFxOperandControls);n.insert(
this._internal.selectedExpressions()[0]);this._internal.focusPredicate(n);this._updateDirtyState()},
i.prototype._createPredicateViewModel=function(){var n;return n={type:t.QueryExpressionType.Predicate,
field:this._internal.schema.fields[0].id,operator:null,connector:null,operands:[]},n.connector=this.
_internal.schema.namedConnectors.length>0?this._internal.schema.namedConnectors[0].id:this._internal.
schema.connectors[0].id,new k(n,this._internal.schema).create(!0)},i.prototype._canExecuteRemove=function(
){var t=!1,n;return this.options.disabled()||(n=this._internal.selectedExpressions(),t=n&&n.length>0),
t},i.prototype._executeRemove=function(){var n;n=this._internal.selectedExpressions();n.forEach(function(
n){n.remove()});this._ungroup(this._internal.query().expressions());this._resetExpressionEvents();this.
_updateDirtyState()},i.prototype._executeGroup=function(){var n,t;n=this._internal.selectedExpressions(
);t=new et(n[0].connector(),[]);n[0].group(n.length,t);this._resetExpressionEvents();this._updateDirtyState(
)},i.prototype._canExecuteGroup=function(){var e=!1,n,i,u,t,r,f;if(!this.options.disabled()&&(n=this.
_internal.selectedExpressions(),n&&n.length>=2&&(i=n[0].collection(),u=i.indexOf(n[0]),f=1,r=n.length,
u+r<=i.length))){for(t=1;t<r;t++){if(n[t]!==i[u+t])break;f++}r===f&&(e=!0)}return e},i.prototype._canExecuteSave=
function(){var n=!1,t;return this.options.disabled()||(t=this._internal.query(),t&&(n=!0)),n},i.prototype.
_executeSave=function(){this._internal.serialize()},i.prototype._canExecuteUngroup=function(){var i=
!1,n;return this.options.disabled()||(n=this._internal.selectedExpressions(),i=n&&n.length===1&&n[0].
type===t.QueryExpressionType.Group),i},i.prototype._executeUngroup=function(){var n;n=this._internal.
selectedExpressions();n[0].ungroup();this._resetExpressionEvents();this._updateDirtyState()},i.prototype.
_ungroup=function(n){var i=this;n.forEach(function(n){var r;n.type===t.QueryExpressionType.Group&&(r=
n,i._ungroup(r.expressions()),r.expressions().length<2&&r.ungroup())})},i.prototype._setTemplates=function(
){this._templateEngine.setTemplate("builder",lt);this._templateEngine.setTemplate("query",vt);this._templateEngine.
setTemplate("groupGroups",yt);this._templateEngine.setTemplate("groupPredicates",pt);this._templateEngine.
setTemplate("predicateGroups",wt);this._templateEngine.setTemplate("predicatePredicates",bt);this._templateEngine.
setTemplate("header",at);this._templateEngine.setTemplate("footer",kt)},i}(e.Widget),ht=function(n){
function t(t,i,r){n.call(this,t,i,r);this.element.addClass(d);this._initializeWidgets()}return __extends(
t,n),t.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.
element.removeClass(d),n.prototype.dispose.call(this))},Object.defineProperty(t.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=
function(){var n=new oi(this.element,this.options);this._widgets.push(n)},t}(u.Widget);n.Widget=ht;ko.
bindingHandlers.pcQueryBuilder=i.Widget.getBindingHandler(ht)}(l||(l={})),l});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Forms/CommandLink",["require","exports",
"../Base/Base","../Base/Command"],function(n,t,i,r){var u;return function(n){"use strict";var o=window,
f=jQuery,t="azc-commandLink",e="<a class='azc-commandLink-link' data-bind='azcCommand: data, attr: { href: ((data.disabled() || !data.handler() || !data.handler().canExecute()) ? null : \"\")}'><\/a>",
u=function(n){function i(i,u,o){n.call(this,i,u,f.extend({viewModelType:r.ViewModel},o));this.element.
addClass(t).html(e);this._bindDescendants()}return __extends(i,n),i.prototype.dispose=function(){this.
_checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this._cleanElement(t),n.prototype.dispose.call(
this))},Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),i}(i.Widget);n.Widget=u;ko.bindingHandlers.azcCommandLink=i.Widget.getBindingHandler(
u)}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/DockedBalloon",
["require","exports","./Base/Base","./Base/Loadable","Viva.Controls/Controls/DockedBalloon"],function(
n,t,i,r,u){var f;return function(n){"use strict";var e=window,o=jQuery,t="fxcontrol-dockedballoon",f=
function(n){function i(i,r,u){n.call(this,i,r,u);this.element.addClass(t);this._initializeWidgets()}
return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(n.prototype.dispose.call(this),this.element.removeClass(t))},i.prototype._initializeWidgets=
function(){var t=this,n=new u.ViewModel;n.populateFromObject(this.options);n.content=ko.observable(this.
options.content());this._addDisposablesToCleanUp(ko.computed(function(){n.content(t.sanitizeTemplate(
t.options.content()))}));this._widgets.push(new u.Widget(this.element,n))},i}(r.Widget);n.Widget=f;ko.
bindingHandlers.pcDockedBalloon=i.Widget.getBindingHandler(f)}(f||(f={})),f});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/Button",["require","exports",
"../Base/Base","../Base/Loadable","Viva.Controls/Controls/Forms/Button"],function(n,t,i,r,u){var f;return function(
n){"use strict";var e=window,o=jQuery,t="fxcontrol-button",f=function(n){function i(i,r,u){n.call(this,
i,r,u);this.element.addClass(t);this._initializeWidgets()}return __extends(i,n),i.prototype.dispose=
function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.element.removeClass(t),n.
prototype.dispose.call(this))},Object.defineProperty(i.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=function(){this._widgets.push(
new u.Widget(this.element,this.options))},i}(r.Widget);n.Widget=f;ko.bindingHandlers.pcButton=i.Widget.
getBindingHandler(f,{controlsDescendantBindings:!1})}(f||(f={})),f});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/CheckBox",["require","exports","../Base/ValidatableControl",
"../Base/Base","Viva.Controls/Controls/Forms/CheckBox","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon",
"Viva.Controls/Controls/Base/ValidationPlacements/Css"],function(n,t,i,r,u,f,e){var o;return function(
n){"use strict";var o=window,s=jQuery,t=function(n){function t(t,i,r){n.call(this,t,i,r);this._initializeWidgets(
)}return __extends(t,n),Object.defineProperty(t.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=function(){var n;this._nestedViewModel=
new u.ViewModel;this._nestedViewModel.populateFromObject(this.options);this._nestedViewModel.validationPlacements.
push(new e.Css);this._nestedViewModel.validationPlacements.push(new f.DockedBalloon(f.DockedBalloon.
defaultOptions));n=new u.Widget(this.element,this._nestedViewModel);this._validatableWidgets.push(n);
this._widgets.push(n)},t}(i.Widget);n.Widget=t;ko.bindingHandlers.pcCheckBox=r.Widget.getBindingHandler(
t)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/CopyableLabel",
["require","exports","../Base/Base","../Base/Loadable","../DockedBalloon","Viva.Controls/Controls/Forms/TextBox",
"Viva.Controls/Controls/Forms/Button","MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r,
u,f,e,o){var s;return function(n){"use strict";var t=window,h=jQuery,c="fxcontrol-copyablelabel-disabled",
l="<div class='fxcontrol-copyablelabel'><div class='fxcontrol-copyablelabel-textbox'><\/div><\/div>",
s=function(n){function i(t,i,r){n.call(this,t,i,r);this._initializeSubscriptions();this._initializeWidgets(
)}return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype._initializeSubscriptions=function(){var n=this;this.options.
disabled.subscribe(this.lifetimeManager,function(t){n._changeDisabled(t)})},i.prototype._initializeWidgets=
function(){var n=this,c,r,a,v,s=new e.ViewModel,u,y,p;this._textBoxVM=new f.ViewModel;this._textBoxVM.
populateFromObject(this.options);this._textBoxVM.disabled=ko.observable(!1);this.element.html(l);this.
_copyableLabelElement=this.element.find(".fxcontrol-copyablelabel");this._textboxElement=this._copyableLabelElement.
find(".fxcontrol-copyablelabel-textbox");a=new f.Widget(this._textboxElement,this._textBoxVM);this._widgets.
push(a);c=this._textboxElement.find("input:first");u=t.clipboardData?{hoverPopupText:o.Viva.CopyableLabel.
Clipboard.hover,clickedPopupText:o.Viva.CopyableLabel.Clipboard.clicked}:{hoverPopupText:o.Viva.CopyableLabel.
NoClipboard.hover,clickedPopupText:o.Viva.CopyableLabel.NoClipboard.clicked};this._copyableLabelElement.
append(h("<div class='fxcontrol-copyablelabel-copybutton azc-btn-secondary'><div class='fxcontrol-copyablelabel-clicked fxcontrol-copyablelabel-anchor'><\/div><div class='fxcontrol-copyablelabel-hover fxcontrol-copyablelabel-anchor'><\/div><div class='fxcontrol-copyablelabel-copyimage'><\/div><\/div>"));
r=this._copyableLabelElement.find(">div.fxcontrol-copyablelabel-copybutton");y=r.find(">div.fxcontrol-copyablelabel-hover");
p=r.find(">div.fxcontrol-copyablelabel-clicked");this._dockedBalloonHoverVM=i._createDockBalloonVM(this.
lifetimeManager);this._dockedBalloonHoverVM.type=2;this._dockedBalloonHoverVM.content(u.hoverPopupText);
this._dockedBalloonHoverVM.stopClickPropagation(!1);this._dockedBalloonHoverVM.disabled(!0);this._dockedBalloonClickVM=
i._createDockBalloonVM(this.lifetimeManager);this._dockedBalloonClickVM.type=2;this._dockedBalloonClickVM.
stopClickPropagation(!1);this._dockedBalloonClickVM.disabled(!0);r.hover(function(){u.hoverPopupText&&
n._dockedBalloonClickVM.disabled()&&(n._dockedBalloonHoverControl||(n._dockedBalloonHoverControl=n._createDockballoonControl(
y,n._dockedBalloonHoverVM)),n._dockedBalloonHoverVM.disabled(!1),n._dockedBalloonHoverVM.balloonVisible(
!0))},function(){n._dockedBalloonHoverVM.balloonVisible(!1);n._dockedBalloonHoverVM.disabled(!0)});s.
disabled(!1);s.tabindex(-1);s.click=function(i){var r,f=c[0];t.clipboardData?(r=n.options.value(),t.
clipboardData.setData("Text",r||"")):c.length>0&&f.focus();f.select();u.clickedPopupText&&(n._dockedBalloonClickVM.
content(u.clickedPopupText),n._dockedBalloonClickedControl||(n._dockedBalloonClickedControl=n._createDockballoonControl(
p,n._dockedBalloonClickVM)),n._dockedBalloonHoverVM.balloonVisible(!1),n._dockedBalloonHoverVM.disabled(
!0),n._dockedBalloonClickVM.disabled(!1),n._dockedBalloonClickVM.balloonVisible(!0),t.setTimeout(function(
){n._dockedBalloonClickVM.balloonVisible(!1);n._dockedBalloonClickVM.disabled(!0)},3e3),i.stopPropagation(
))};v=new e.Widget(r,s);this._widgets.push(v);this._changeDisabled(this.options.disabled())},i.prototype.
dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this._dockedBalloonClickedControl&&
(this._dockedBalloonClickedControl.dispose(),this._dockedBalloonClickedControl=null),this._dockedBalloonHoverControl&&
(this._dockedBalloonHoverControl.dispose(),this._dockedBalloonHoverControl=null),n.prototype.dispose.
call(this),this._cleanElement())},i._createDockBalloonVM=function(n){var t=new MsPortalFx.ViewModels.
Controls.DockedBalloon.ViewModel(n);return t.position(0),t.type=2,t},i.prototype._createDockballoonControl=
function(n,t){return new u.Widget(n,t)},i.prototype._changeDisabled=function(n){var t=this._textboxElement.
find("input:first");this._copyableLabelElement.toggleClass(c,n);t&&(t.toggleClass("azc-bg-light",n),
t.prop("readonly",n))},i}(r.Widget);n.Widget=s;ko.bindingHandlers.pcCopyableLabel=i.Widget.getBindingHandler(
s)}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/DateTimeCombo",
["require","exports","../Base/Base","./EditableCombo","Viva.Controls/Controls/Forms/DateTimeCombo"],
function(n,t,i,r,u){var f;return function(n){"use strict";var e=window,o=jQuery,t="fxcontrol-dateTimeCombo",
f=function(n){function i(i,r,u){n.call(this,i,r,u);this.element.addClass(t);this._initializeWidgets(
)}return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(n.prototype.dispose.call(this),this.element.removeClass(t))},i.prototype._initializeWidgets=
function(){var n=new u.Widget(this.element,this.options);this._widgets.push(n)},i}(r.Widget);n.Widget=
f;ko.bindingHandlers.pcDateTimeCombo=i.Widget.getBindingHandler(f)}(f||(f={})),f});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/EditableCombo",["require",
"exports","../Base/Loadable"],function(n,t,i){var r;return function(n){"use strict";var r=window,u=jQuery,
t=function(n){function t(t,i,r){n.call(this,t,i,r);this._initializeEditableWidgets()}return __extends(
t,n),Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,
configurable:!0}),t.prototype._initializeEditableWidgets=function(){var n=this;this._addDisposablesToCleanUp(
ko.computed(function(){var t=n.options.dropDownPositioning?n.options.dropDownPositioning():0;t||(t=0);
switch(t){case 0:n.options.popupAlignment=5;n.options.inputAlignment=12;break;case 1:n.options.popupAlignment=
12;n.options.inputAlignment=5;break;case 2:n.options.popupAlignment=3;n.options.inputAlignment=10;break
case 3:n.options.popupAlignment=10;n.options.inputAlignment=3;break;default:throw new Error("Invalid DropDownPositioning.");
}}))},t}(i.Widget);n.Widget=t}(r||(r={})),r});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("MsPortalImpl.Controls/Controls/Forms/DropDown",["require","exports","../Base/ValidatableControl",
"../Base/Base","Viva.Controls/Controls/Forms/GroupDropDown","Viva.Controls/Controls/Base/ValidationPlacements/Css",
"Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon"],function(n,t,i,r,u,f,e){var o;return function(
n){"use strict";var o=window,s=jQuery,t=function(n){function t(t,i,r){n.call(this,t,i,r);this._initializeWidgets(
)}return __extends(t,n),Object.defineProperty(t.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=function(){var n=this,t,r,i,o;this._nestedViewModel=
new u.ViewModel;this._nestedViewModel.populateFromObject(this.options);this._nestedViewModel.items=ko.
observableArray();i=function(t,i){i===void 0&&(i=-1);var r=u.ViewModel.createDropdownItemsFromArray(
t,{textKey:n.options.itemText,valueKey:n.options.itemValue});i<0?r.forEach(function(t){n._nestedViewModel.
items.push(t)}):r.forEach(function(t){n._nestedViewModel.items.splice(i++,0,t)})};o=function(t){var r=
u.ViewModel.createItemValueFromData(t,{textKey:n.options.itemText,valueKey:n.options.itemValue}),i=n.
_nestedViewModel.valueItems().first(function(n){return n.value()===r.value()});i&&n._nestedViewModel.
items.remove(i)};i(this.options.items());this.options.items.subscribe(this.lifetimeManager,function(
n){r=n.slice(0)},null,"beforeChange");this.options.items.subscribe(this.lifetimeManager,function(n){
var t=ko.utils.compareArrays(r,n);t.forEach(function(n){var t=n.value;n.status==="added"?i([t],n.index):
n.status==="deleted"&&o(t)})});this._nestedViewModel.validationPlacements.push(new f.Css);this._nestedViewModel.
validationPlacements.push(new e.DockedBalloon(e.DockedBalloon.defaultOptions));t=new u.Widget(this.element,
this._nestedViewModel);this._validatableWidgets.push(t);this._widgets.push(t)},t}(i.Widget);n.Widget=
t;ko.bindingHandlers.pcDropDown=r.Widget.getBindingHandler(t)}(o||(o={})),o});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/FilterCombo",["require",
"exports","../Base/Base","./EditableCombo","Viva.Controls/Controls/Forms/FilterCombo"],function(n,t,
i,r,u){var f;return function(n){"use strict";var o=window,e=jQuery,t="fxcontrol-filterCombo",f=function(
n){function i(i,r,u){n.call(this,i,r,u);this.element.addClass(t);this._initializeWidgets()}return __extends(
i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,
configurable:!0}),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||
(n.prototype.dispose.call(this),this.element.removeClass(t))},i.prototype._initializeWidgets=function(
){var n=new u.Widget(this.element,e.extend({},this.options,{items:this.options.filteredItems}));this.
options.filteredItems.subscribe(this.lifetimeManager,function(){n.valuesChanged()});this._widgets.push(
n)},i}(r.Widget);n.Widget=f;ko.bindingHandlers.pcFilterCombo=i.Widget.getBindingHandler(f)}(f||(f={})
),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/GroupDropDown",
["require","exports","../Base/ValidatableControl","../Base/Base","Viva.Controls/Controls/Forms/GroupDropDown",
"Viva.Controls/Controls/Base/ValidationPlacements/Css","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var s=window,h=jQuery,t="fxcontrol-groupdropdown",
o=function(n){function i(i,r,u){n.call(this,i,r,u);this.element.addClass(t);this._initializeSubscriptions(
);this._initializeWidgets()}return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this.options.areItemsInitialized(!1),n.prototype.dispose.call(this),this.element.
removeClass(t))},i.prototype._initializeWidgets=function(){var t=this.options,i=t.areItemsInitialized(
),n;this._nestedViewModel=new u.ViewModel;this._initializeItems(i);this._nestedViewModel.populateFromObject(
t);this._nestedViewModel.validationPlacements.push(new f.Css);this._nestedViewModel.validationPlacements.
push(new e.DockedBalloon(e.DockedBalloon.defaultOptions));n=new u.Widget(this.element,this._nestedViewModel);
this._validatableWidgets.push(n);this._widgets.push(n)},i.prototype._initializeSubscriptions=function(
){var n=this;this.options.areItemsInitialized.subscribe(this.lifetimeManager,function(t){n._initializeItems(
t)})},i.prototype._initializeItems=function(n){if(!n){var t=this.options,i,r={},f=new u.ItemSetting(
t.itemSetting);t.groupInfos&&t.groupInfos.length>0&&t.groupInfos.forEach(function(n){n.key&&(r[n.key]=
n)});i=u.ViewModel.createDropdownItemsFromArray(t.itemsDataArray,f,r);t.items(i);t.areItemsInitialized(
!0)}},i}(i.Widget);n.Widget=o;ko.bindingHandlers.pcGroupDropDown=r.Widget.getBindingHandler(o)}(o||(o=
{})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/MultiLineTextBox",
["require","exports","../Base/ValidatableControl","../Base/Base","Viva.Controls/Controls/Base/ValidationPlacements/Css",
"Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon","Viva.Controls/Controls/Forms/MultiLineTextBox"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var s=window,h=jQuery,t="fxcontrol-multiLineTextBox",
o=function(n){function i(i,r,u){n.call(this,i,r,u);this.element.addClass(t);this._initializeWidgets(
)}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.
dispose)||(this.element.removeClass(t),n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){var n;this._nestedViewModel=new e.ViewModel;this._nestedViewModel.populateFromObject(this.
options);this._nestedViewModel.validationPlacements.push(new u.Css);this._nestedViewModel.validationPlacements.
push(new f.DockedBalloon(f.DockedBalloon.defaultOptions));n=new e.Widget(this.element,this._nestedViewModel);
this._validatableWidgets.push(n);this._widgets.push(n)},i}(i.Widget);n.Widget=o;ko.bindingHandlers.pcMultiLineTextBox=
r.Widget.getBindingHandler(o)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("MsPortalImpl.Controls/Controls/Forms/MultiselectDropDown",["require","exports","../Base/ValidatableControl",
"../Base/Base","../Base/Formatters","Viva.Controls/Controls/Forms/MultiSelectDropDown","Viva.Controls/Controls/Base/ValidationPlacements/Css",
"Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon"],function(n,t,i,r,u,f,e,o){var s;return function(
n){"use strict";var h=window,c=jQuery,t="fxcontrol-multiselectdropdown",s=function(n){function i(i,r,
u){var f=this;this._updateItemDataTrigger=ko.observable(0);n.call(this,i,r,u);this.element.addClass(
t);this._addDisposablesToCleanUp(ko.computed(function(){var n=f.options.groupInfos(),t=f.options.itemsDataArray(
),i=f.options.itemSetting();f._toggleUpdateItemDataTrigger()}));this._addDisposablesToCleanUp(this._updateItemDataTrigger.
subscribe(function(){f._updateItemsData()}));this._updateItemDataTrigger.extend({rateLimit:100});this.
_initializeWidgets()}return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this.element.removeClass(t),n.prototype.dispose.call(this))},i.prototype._initializeWidgets=
function(){var t=this.options,n;this._nestedViewModel=new f.ViewModel;this._nestedViewModel.populateFromObject(
t);this._updateItemsData();this._nestedViewModel.validationPlacements.push(new e.Css);this._nestedViewModel.
validationPlacements.push(new o.DockedBalloon(o.DockedBalloon.defaultOptions));n=new f.Widget(this.element,
this._nestedViewModel);this._validatableWidgets.push(n);this._widgets.push(n)},i.prototype._toggleUpdateItemDataTrigger=
function(){this._updateItemDataTrigger(this._updateItemDataTrigger.peek()+1&65535)},i.prototype._updateItemsData=
function(){var n=this.options,e,o={},t=n.itemSetting.peek(),i=new f.ItemSetting(t),s=n.value.peek(),
r=n.groupInfos&&n.groupInfos.peek();r&&r.length>0&&r.forEach(function(n){n.key&&(o[n.key]=n)});i.formatter=
null;t&&t.format!==undefined&&(i.formatter=u.getFormatter(this.lifetimeManager,t.format,t.formatOptions||
{},!1));e=f.ViewModel.createDropdownItemsFromArray(n.itemsDataArray.peek(),i,o);this._nestedViewModel.
valueInitialized=!0;this._nestedViewModel.initializeItemsData(e)},i}(i.Widget);n.Widget=s;ko.bindingHandlers.
pcMultiselectDropDown=r.Widget.getBindingHandler(s)}(s||(s={})),s});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/NumericTextBox",["require","exports",
"../Base/Base","../Base/Loadable","Viva.Controls/Controls/Forms/TextBox","Viva.Controls/Controls/Base/ValidationPlacements/Css",
"Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon","Viva.Controls/Controls/Forms/NumericTextBox"],
function(n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var s=window,h=jQuery,t=function(n){
function t(t,i,r){n.call(this,t,i,r);this._initializeWidgets()}return __extends(t,n),t.prototype.dispose=
function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(n.prototype.dispose.call(this),
this.element.empty())},Object.defineProperty(t.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=function(){var n=new u.ViewModel;n.populateFromObject(
this.options);n.validationPlacements.push(new f.Css);n.validationPlacements.push(new e.DockedBalloon(
e.DockedBalloon.defaultOptions));this._widgets.push(new o.Widget(this.element,n))},t}(r.Widget);n.Widget=
t;ko.bindingHandlers.pcNumericTextBox=i.Widget.getBindingHandler(t)}(s||(s={})),s});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/OptionPicker",["require",
"exports","../Base/ValidatableControl","../Base/Base","Viva.Controls/Controls/Forms/OptionPicker","Viva.Controls/Controls/Base/ItemList"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var e=window,o=jQuery,t=function(n){function t(
t,i,r){n.call(this,t,i,r);this._initializeWidgets()}return __extends(t,n),Object.defineProperty(t.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=
function(){var n=this,t=null,i;this._nestedViewModel=new u.ViewModel;this._nestedViewModel.populateFromObject(
this.options);this._nestedViewModel.value=ko.observable();this._nestedViewModel.values=ko.observableArray(
);t=this.options.values();t&&t.forEach(function(t){var i=new f.ItemValue(null,null);i.populateFromObject(
t);n._nestedViewModel.values.push(i)});this._nestedViewModel.value.subscribe(this.lifetimeManager,function(
t){var i=null;t&&(i=n.options.values().first(function(n){return n.text===t.text}));n.options.value()!==
i&&n.options.value(i)});this.options.value.subscribe(this.lifetimeManager,function(t){var i=n._getVivaItemFromPortalItem(
t,n._nestedViewModel.values());n._nestedViewModel.value()!==i&&n._nestedViewModel.value(i)});i=new u.
Widget(this.element,this._nestedViewModel);this._widgets.push(i)},t.prototype._getVivaItemFromPortalItem=
function(n,t){var i=null;return n&&(i=t.first(function(t){return t.text===n.text})),i},t}(i.Widget);
n.Widget=t;ko.bindingHandlers.pcOptionPicker=r.Widget.getBindingHandler(t)}(e||(e={})),e});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Forms/Password",
["require","exports","../Base/ValidatableControl","../Base/Base","Viva.Controls/Controls/Base/ValidationPlacements/Css",
"Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon","Viva.Controls/Controls/Forms/Password"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var o=window,s=jQuery,t=function(n){function t(
t,i,r){n.call(this,t,i,r);this._initializeWidgets()}return __extends(t,n),Object.defineProperty(t.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=
function(){var n;this._nestedViewModel=new e.ViewModel;this._nestedViewModel.populateFromObject(this.
options);this._nestedViewModel.validationPlacements.push(new u.Css);this._nestedViewModel.validationPlacements.
push(new f.DockedBalloon(f.DockedBalloon.defaultOptions));n=new e.Widget(this.element,this._nestedViewModel);
this._validatableWidgets.push(n);this._widgets.push(n)},t}(i.Widget);n.Widget=t;ko.bindingHandlers.pcPassword=
r.Widget.getBindingHandler(t)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("MsPortalImpl.Controls/Controls/Forms/RangeSlider",["require","exports","../Base/Base","../Base/Loadable",
"Viva.Controls/Controls/Forms/TextBox","Viva.Controls/Controls/Forms/RangeSlider"],function(n,t,i,r,
u,f){var e;return function(n){"use strict";var s=window,t=jQuery,o="fxcontrol-rangeSlider-hasTextBoxes",
e=function(n){function i(i,r,u){n.call(this,i,r,t.extend({fillBehavior:1},u));this._initializeWidgets(
)}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.
dispose)||(n.prototype.dispose.call(this),this.element.empty())},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){if(this._widgets.push(new f.Widget(this.element,this.options)),this.options.showTextBoxes)
{var n=t("<div />"),i=t("<div />");this._startTextBoxViewModel=new u.ViewModel;this._startTextBoxViewModel.
disabled(!0);this._startTextBoxViewModel.value=this.options.start;this._endTextBoxViewModel=new u.ViewModel;
this._endTextBoxViewModel.disabled(!0);this._endTextBoxViewModel.value=this.options.end;this._widgets.
push(new u.Widget(n,this._startTextBoxViewModel));this._widgets.push(new u.Widget(i,this._endTextBoxViewModel));
this.element.prepend(n).append(i).addClass(o)}},i}(r.Widget);n.Widget=e;ko.bindingHandlers.pcRangeSlider=
i.Widget.getBindingHandler(e)}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("MsPortalImpl.Controls/Controls/Forms/Slider",["require","exports","../Base/Base","../Base/Loadable",
"Viva.Controls/Util/Util","Viva.Controls/Controls/Forms/TextBox","Viva.Controls/Controls/Forms/Slider"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var h=window,t=jQuery,o="fxcontrol-slider-hasTextBox",
s=function(n){function i(i,r,u){n.call(this,i,r,t.extend({fillBehavior:1},u));this._initializeWidgets(
)}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.
dispose)||(n.prototype.dispose.call(this),this._cleanElement(o),this._textBoxValueComputed&&(this._textBoxValueComputed.
dispose(),this._textBoxValueComputed=null))},Object.defineProperty(i.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=function(){var
n=this;this._widgets.push(new e.Widget(this.element,this.options));this.options.showValueTextBox&&(this.
_textBoxElement=t("<div />"),this._textBoxViewModel=new f.ViewModel,this._textBoxValueComputed=ko.computed(
function(){var t=n.options.value();return u.isNullOrUndefined(t)?"":t.toString()}),this._textBoxViewModel.
value=this._textBoxValueComputed,this._textBoxViewModel.disabled(!0),this._textBoxWidget=new f.Widget(
this._textBoxElement,this._textBoxViewModel),this._widgets.push(this._textBoxWidget),this.element.append(
this._textBoxElement).addClass(o))},i}(r.Widget);n.Widget=s;ko.bindingHandlers.pcSlider=i.Widget.getBindingHandler(
s)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ContextMenuShortcut",
["require","exports","./Grid.Extensibility","./Grid.RightClickableRow","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.ContextMenuShortcut"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var e=window,o=jQuery,t=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.prototype.beforeDestroy=function(){this._rowContextMenuShortcutClickHandler&&
(this._widget._instance.element.off("rowContextMenuShortcutClick",this._rowContextMenuShortcutClickHandler),
this._rowContextMenuShortcutClickHandler=null)},t.prototype.getExtension=function(){return new f.ContextMenuShortcutExtension}
,t.prototype.initializeExtension=function(){var n=this;this._widget._instance.element.on("rowContextMenuShortcutClick",
this._rowContextMenuShortcutClickHandler=function(t,i){var r=n._widget.getPlugin("RightClickableRow");
return r?r._triggerRightClickEvent(t,i):!1})},t.prototype.getName=function(){return"ContextMenuShortcut"}
,t.prototype.getOrder=function(){return 1},t.prototype.getDependencies=function(){return[new r.RightClickableRowExtension]}
,t}(u.GridExtension);n.ContextMenuShortcutExtension=t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.
Controls.Lists.Grid.Extensions.ContextMenuShortcut,t)}(e||(e={})),e});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.RightClickableRow",["require",
"exports","./Grid.Extensibility","./Grid.SelectableRow","../../../Base/Base.Commands","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.RightClickableRow",
"Viva.Controls/Controls/Lists/Grid1/Grid.FocusableRow"],function(n,t,i,r,u,f,e,o){var s;return function(
n){"use strict";var s=window,t=jQuery,u=function(n){function i(){n.apply(this,arguments)}return __extends(
i,n),i.prototype.beforeDestroy=function(){this._rightClickHandler&&(this._widget._instance.element.off(
"rowRightClick",this._rightClickHandler),this._rightClickHandler=null)},i.prototype.getExtension=function(
n){var t=n;return this._commands=t.controlCommands,new e.RightClickableRowExtension},i.prototype.initializeExtension=
function(){var n=this;this._widget._instance.element.on("rowRightClick",this._rightClickHandler=function(
t,i){return n._triggerRightClickEvent(t,i)})},i.prototype.getName=function(){return"RightClickableRow"}
,i.prototype.getOrder=function(){return 1},i.prototype.getDependencies=function(){return[new r.SelectableRowExtension]}
,i.prototype._triggerRightClickEvent=function(n,i){var f=this._widget.options,e=f.selectableData,r=i.
rowMetadata,u;return!!r&&!!r.item?(this._updateSelectionFollowingRightClick(r),r.disabled()||this._widget.
_extensionTrigger("shouldHideContextMenu",r).some(function(n){return!!n}))?!1:(u=t.Event(EventTypes.
fxrightclick),u.clientX=i.clientX,u.clientY=i.clientY,t(n.target).trigger(u,this._getCommandRightClickEventArgs(
e,r.item)),n.preventDefault(),n.stopPropagation(),!0):!1},i.prototype._updateSelectionFollowingRightClick=
function(n){var u=this,r,t,i;n.selected()||(r=this._widget.options,t=r.selectableData.selectableItems(
),t.forEach(function(n){n.isSelected(!1)}),i=t.first(function(t){return!u._widget.getRowMetadata(t.data).
disabled()&&t.data===n.item}),i&&(i.isSelected(!0),this._widget._instance.getPlugin(o.FocusableRowExtension.
Name).focusRowByRowMetadata(n)))},i.prototype._getCommandRightClickEventArgs=function(n,i){var c=n.selectableItems(
).filter(function(n){return n.isSelected()}),s=c.map(function(n){return n.data}),r=s[0],h=this._widget.
getRowMetadata(i),u,o;if(r){var f=ko.utils.unwrapObservable(r.commandGroup),e=ko.utils.unwrapObservable(
r.commandGroupOwner),l=s.some(function(n){return ko.utils.unwrapObservable(n.commandGroup)!==f||ko.utils.
unwrapObservable(n.commandGroupOwner)!==e});l&&(f=null,e=null)}return u={selectableSet:n,deleteRowCommandTitle:
null,markForDelete:null},this._widget._extensionTrigger("enableRowDelete",h).some(function(n){return!!n}
)&&this._widget._extensionTrigger("getListDataForRightClick",h).forEach(function(n){t.extend(u,n)}),
o={entityType:1,commandGroup:f,commandGroupOwner:e,viewModel:i,listData:u},this._commands&&this._commands(
)&&this._commands().length>0&&t.extend(o,{controlCommands:this._commands()}),o},i}(f.GridExtension);
n.RightClickableRowExtension=u;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.
Extensions.RightClickableRow,u)}(s||(s={})),s});__extends=this.__extends||function(n,t){function r()
{this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.SelectableRow",["require","exports","./Grid.Extensibility",
"./Grid.FocusableRow","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.SelectableRow","Viva.Controls/Controls/Lists/Grid1/Grid.SelectableRowActivate"],
function(n,t,i,r,u,f,e){var s=MsPortalFx.Base.EventTypes,o;return function(n){"use strict";var l=window,
t=jQuery,c=function(){function n(n){this.canExecute=n.canExecute||ko.observable(!1);this._nextCallback=
n.commandCallback}return n.prototype.execute=function(){if(this._nextCallback)return this._nextCallback(
);throw new Error("Grid didn't initialize the next cursor callback.");},n}(),o,h;n.GridSelectableCursorNextCommand=
c;o=function(){function n(n){this.canExecute=n.canExecute||ko.observable(!1);this._previousCallback=
n.commandCallback}return n.prototype.execute=function(){if(this._previousCallback)return this._previousCallback(
);throw new Error("Grid didn't initialize the previous cursor callback.");},n}();n.GridSelectableCursorPreviousCommand=
o;h=function(n){function i(){n.apply(this,arguments)}return __extends(i,n),i.prototype.beforeDestroy=
function(){this._rowSelectHandler&&(this._widget._instance.element.off(f.EventTypes.RowSelect,this._rowSelectHandler),
this._rowSelectHandler=null);this._rowClickHandler&&(this._widget._instance.element.off(f.EventTypes.
RowClick,this._rowClickHandler),this._rowClickHandler=null)},i.prototype.getExtension=function(n){var
r=n,c=f.RowSelectionMode,i=ko.observable(0),t=r&&r.selectableRow,u,o,h,s;if(t){h=MsPortalFx.ViewModels.
Controls.Lists.Grid.RowSelectionMode;s=t.selectionMode||0;switch(s){case 1:i(1);break;case 2:i(3);break
default:i(0)}this._activatedColumnKey=t.activatedColumnKey;this._primaryActivateColumnKey=t.primaryActivateColumnKey;
this._activateOnSelected=t.activateOnSelected;u=t.disableRequireSingleModeAssistKey;o=t.enableSelectableCursor||
ko.observable(!1)}return this._activatedColumnKey||(this._activatedColumnKey=ko.observable()),this._primaryActivateColumnKey||
(this._primaryActivateColumnKey=ko.observable()),this._activateOnSelected||(this._activateOnSelected=
ko.observable(!1)),this._selectableRowActivationExtension=new e.SelectableRowActivateExtension({mode:
i,activatedColumnKey:this._activatedColumnKey,primaryActivateColumnKey:this._primaryActivateColumnKey,
activateOnSelected:this._activateOnSelected,overlayFormatter:this._overlayFormatter,disableRequireSingleModeAssistKey:
u,enableSelectableCursor:o,hasNextSelectableItem:ko.observable(!1),hasPreviousSelectableItem:ko.observable(
!1)}),this._selectableRowActivationExtension},i.prototype.getActivatedColumnKey=function(){return this.
_activatedColumnKey.peek()||this._primaryActivateColumnKey.peek()},i.prototype.initializeExtension=function(
){var n=this,i=this._widget.options.extensionsOptions,r;this._widget._instance.element.on(f.EventTypes.
RowSelect,this._rowSelectHandler=function(n,t){n.stopPropagation();n.preventDefault();i.selectableRow.
rowSelect&&i.selectableRow.rowSelect(n,t)});this._widget._instance.element.on(f.EventTypes.RowClick,
this._rowClickHandler=function(i,r){var e=t(i.target),u=e.closest("a"),o=u&&t(r.item).find(u).length>
0,f;if(!o){var h=n._widget.options.extensionsOptions,c=h.selectableRow,l=c.selectionMode===1;l&&(i.ctrlKey||
i.shiftKey)&&(i.stopPropagation(),i.preventDefault(),f=n._widget.options.selectableData,t(i.target).
trigger(s.fxopeninnewtab,{selectableSet:f,item:r.rowMetadata.item}))}});this._selectableRowActivationExtension.
options.enableSelectableCursor&&this._selectableRowActivationExtension.options.enableSelectableCursor(
)&&(r={previous:new o({canExecute:this._selectableRowActivationExtension.options.hasPreviousSelectableItem,
commandCallback:function(){return n._selectableRowActivationExtension.previous()}}),next:new c({canExecute:
this._selectableRowActivationExtension.options.hasNextSelectableItem,commandCallback:function(){return n.
_selectableRowActivationExtension.next()}})},this._widget.options.selectableData._msPortalFxCursor(r))}
,i.prototype.getName=function(){return"Selectable"},i.prototype.getOrder=function(){return 1},i.prototype.
getDependencies=function(){return[new r.FocusableRowExtension]},i.prototype.mustConnectRowMetadata=function(
){return!0},i.prototype.registerSubscriptionsToConnectMetadataProperties=function(n,t){var i=this;return this.
_widget.options.selectableData.selectableItems.subscribe(function(){i._widget._connectMetadataAndDisposeSubscriptions(
n,t)})},i.prototype.disallowConnectRowMetadataProperties=function(n,t){var r=-1,i;return(this._widget.
options.selectableData.selectableItems().some(function(n,i){return n.data===t.item?(r=i,!0):!1}),r>=
0)?(i=-1,this._widget.options.items().some(function(t,r){return t===n?(i=r,!0):!1}),i===-1)?!1:r!==i:
!0},i.prototype.connectRowMetadataProperties=function(n,t,i){var r=[],f=this._widget.options.selectableData.
selectableItems().first(function(t){return t.data===n}),u=i,e,o=this;return r.push.apply(r,this._widget.
_twoWayBinding(f.isSelected,t.selected)),r.push.apply(r,this._widget._twoWayBinding(t.selected,u.selected)),
r.push(e=ko.computed({read:function(){var n=u.activated();return!(n===null||n===undefined)},write:function(
n){var t;n?u.activated()||(t=o.getActivatedColumnKey(),t===null||t===undefined||u.activated(t)):u.activated(
null)}})),r.push.apply(r,this._widget._twoWayBinding(t.activated,u.activated)),r.push.apply(r,this._widget.
_twoWayBinding(f.isActivated,e)),r.push.apply(r,this._widget._twoWayBinding(t.disabled,u.disabled)),
r},i}(u.GridExtension);n.SelectableRowExtension=h;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.
Controls.Lists.Grid.Extensions.SelectableRow,h)}(o||(o={})),o});__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FocusableRow",["require",
"exports","./Grid"],function(n,t,i){var r;return function(n){"use strict";var r=window,u=jQuery,t=function(
n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype.getName=function(){return"Focusable"}
,t.prototype.getOrder=function(){return 0},t}(i.GridExtension);n.FocusableRowExtension=t}(r||(r={})),
r});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.SelectableRowActivate",
["require","exports","./Grid.SelectableRow","../../../Util/Util","./Grid"],function(n,t,i,r,u){var f;
return function(n){"use strict";var t=jQuery,p=window,s="azc-grid-virtualFocus",e="tbody tr[data-grid-activateable=true]",
h=e+":not([aria-disabled=true])",o=h+" ["+r.Constants.dataActivatableAttribute+"=true]",f=h+", "+o,c=
"tbody tr[data-grid-activateable=true]:not([aria-disabled=true])",l='css: { "azc-grid-activateonselected": $root.func.getPlugin("azc-grid-activateableRow")._activateOnSelected }',
a='attr: { "data-grid-activateable": "true", "data-grid-row-activated": activated() ? "true" : "false" }',
v='attr: { "data-activatable": activatable(), tabindex: activatable() && !$parent.disabled() ? "0" : null, "data-grid-cell-activated": $parent.activated() === $data.itemKey ? "true" : "false" }',
y=function(n){function u(t){this._options=t||{};this._activatedColumnKey=this._options.activatedColumnKey||
ko.observable();this._primaryActivateColumnKey=this._options.primaryActivateColumnKey||ko.observable(
);this._activateOnSelected=this._options.activateOnSelected||ko.observable(!1);this._preserveSelection=
ko.observable(!1);this._activatedRows=ko.observableArray([]);n.call(this)}return __extends(u,n),Object.
defineProperty(u.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),u.prototype.getActivatedRows=function(){return this._widget._getAllRowMetadata().filter(function(
n){return!r.isNullOrUndefined(n.activated.peek())})},u.prototype.deactivateAllRows=function(){try{this.
_preserveSelection(!0);this._widget._getAllRowMetadata().forEach(function(n){n.activated(null)})}finally{
this._preserveSelection(!1)}},u.prototype.deactivateRows=function(){for(var i=this,t=[],n=0;n<arguments.
length;n++)t[+n]=arguments[n];try{this._preserveSelection(!0);t.forEach(function(n){i._widget.getRowMetadata(
n).activated(null)})}finally{this._preserveSelection(!1)}},u.prototype.activateRows=function(n){for(
var u=this,i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];r.isNullOrUndefined(n)&&(n=this._primaryActivateColumnKey.
peek());!r.isNullOrUndefined(n)&&n.length>0?i.forEach(function(t){u._widget.getRowMetadata(t).activated(
n)}):this.deactivateRows.apply(this,i)},u.prototype.afterSetTemplates=function(n){var t=n.getHtmlTemplate(
"bodyRowsCore"),i=n.getHtmlTemplate("bodyCell"),r=n.getHtmlTemplate("table");t.addAttribute("tr","data-bind",
a);i.addAttribute("td","data-bind",v);r.addAttribute("table","data-bind",l)},u.prototype.getDefaultRowMetadataProperties=
function(){return{activated:ko.observable(null),activatedInfo:ko.observable(null),_activatedSubscribed:
!1}},u.prototype.getDefaultColumnProperties=function(){return{activatable:ko.observable(!1)}},u.prototype.
afterAttachEvents=function(){var n=this;this._widget.element.on("click.azcActivationCell",o,this._eventClick=
function(t){n._handleActivationKeyPressOrClick(t,this)}).on("keypress.azcActivationRow",c,this._eventKeyPress=
function(t){n._handleActivationKeyPressOrClick(t,this)}).on("keypress.azcActivationCell",o,this._eventKeyPressCell=
function(t){n._handleActivationKeyPressOrClick(t,this);t.stopPropagation()}).on("rowSelect.azcActivation",
this._eventRowSelect=function(t,i){n._onRowSelect(t,i)}).on("focus.azcActivation",f,this._eventFocusHandler=
function(n){var i=t(n.currentTarget);i.closest(e).addClass(s)}).on("blur.azcActivation",f,this._eventBlurHandler=
function(n){var i=t(n.currentTarget);i.closest(e).removeClass(s)})},u.prototype.afterCreate=function(
){var n=this,t;this._selectableRowExtension=this._widget.getPlugin(i.SelectableRowExtension.Name);this.
_widget._getAllRowMetadata().filter(function(n){return!r.isNullOrUndefined(n.activated.peek())&&n.selected.
peek()}).forEach(function(n){n.activated(null)});this._widget._addDisposablesToCleanUp(ko.computed(function(
){var t=n._widget.options.columns();n._firstColumnKey=t&&t.length>0?t[0].itemKey:null}));this._widget.
_addDisposablesToCleanUp(ko.computed(function(){var t=n._activatedColumnKey(),i=n._selectableRowExtension.
getSelectedRows();r.isNullOrUndefined(t)&&(t=null,n._activatedInfo=null);i.forEach(function(i){i.activated(
t);i.activatedInfo(n._activatedInfo)})}));this._widget._addDisposablesToCleanUp(ko.computed(function(
){var t=n,e=n._widget.options.items(),i=n._widget._getAllRowMetadata(),u=i.filter(function(n){return!n.
_activatedSubscribed}),f=i.filter(function(n){return!r.isNullOrUndefined(n.activated.peek())});t._activatedRows(
f);u.forEach(function(n){var u=!1,i;t._widget._subscriptions.registerForDispose(n.selected.subscribe(
function(f){if(f)i=t._activatedColumnKey(),r.isNullOrUndefined(i)&&t._activateOnSelected.peek()&&(i=
t._primaryActivateColumnKey()||t._firstColumnKey),t._activatedColumnKey.peek()!==i&&t._activatedColumnKey(
i),r.isNullOrUndefined(i)||n.activated.peek()===i||n.activated(i);else if(!r.isNullOrUndefined(n.activated.
peek())&&!u)try{u=!0;n.activated(null)}finally{u=!1}}));t._widget._subscriptions.registerForDispose(
n.activated.subscribe(function(f){var o=!r.isNullOrUndefined(f),s=t._activatedRows.peek(),e;if(!t._preserveSelection.
peek()&&!o&&!u&&n.selected.peek())try{u=!0;n.selected(!1)}finally{u=!1}if(o){if(!u&&!n.selected.peek(
))try{u=!0;n.selected(!0);t._activatedColumnKey.peek()!==i&&t._activatedColumnKey(i)}finally{u=!1}s.
some(function(t){return t===n})||t._activatedRows.push(n)}else e=s.indexOf(n),e>=0&&t._activatedRows.
splice(e,1)}));n._activatedSubscribed=!0})}));this._widget._addDisposablesToCleanUp(t=ko.computed(function(
){var t=n._activatedRows();t.length===0?n._activatedColumnKey(null):t.forEach(function(n){n.activated.
peek()&&(n.selected.peek()||n.selected(!0))})}));this._widget._addDisposablesToCleanUp(ko.computed(function(
){n._widget.element.toggleClass("azc-grid-selectionActivates",n._activateOnSelected())}));t.extend({
throttle:10})},u.prototype.getOrder=function(){return 40},u.prototype.getDependencies=function(){return[
new i.SelectableRowExtension(this.options)]},u.prototype.beforeDestroy=function(){this._eventClick&&
(this._widget.element.off("click.azcActivationCell",this._eventClick),this._eventClick=null);this._eventKeyPress&&
(this._widget.element.off("keypress.azcActivationRow",this._eventKeyPress),this._eventKeyPress=null);
this._eventKeyPressCell&&(this._widget.element.off("keypress.azcActivationCell",this._eventKeyPressCell),
this._eventKeyPressCell=null);this._eventRowSelect&&(this._widget.element.off("rowSelect.azcActivation",
this._eventRowSelect),this._eventRowSelect=null);this._eventFocusHandler&&(this._widget.element.off(
"focus.azcActivation",f,this._eventFocusHandler),this._eventFocusHandler=null);this._eventBlurHandler&&
(this._widget.element.off("blur.azcActivation",f,this._eventBlurHandler),this._eventBlurHandler=null)}
,u.prototype.getName=function(){return u.Name},u.prototype.shouldNotAllowSelectAll=function(){return!0}
,u.prototype.shouldNotChangeSelection=function(n,i){var u=this._selectableRowExtension.options.mode?
this._selectableRowExtension.options.mode():0,f,e;return(u===3||u===3)&&t(n).attr("aria-selected")===
"true"&&!(i.shiftKey||i.ctrlKey)&&(f=t(i.target),e=f.attr(r.Constants.dataActivatableAttribute)==="true"?
f:f.closest("["+r.Constants.dataActivatableAttribute+"=true]"),e.length>0&&t.contains(n,e[0]))?!0:u===
1||u===4?i.ctrlKey||i.shiftKey:!1},u.prototype.previous=function(){return this._selectableRowExtension.
previous()},u.prototype.next=function(){return this._selectableRowExtension.next()},u.prototype._changeActivation=
function(n,i){var e=ko.dataFor(n),o=t(i.currentTarget),s=o.closest("td[role='gridcell']"),a=t(n).find(
"td[role='gridcell']"),v=s[0]?s:a,f=ko.dataFor(v[0]),h=e.selected.peek(),c=e.activated.peek(),l=!1,u;
h&&(i.ctrlKey||i.shiftKey)&&c===f.itemKey&&(l=!0);h&&c!==f.itemKey||i.type==="keypress"&&(u=r.cloneEvent(
i,"keydown"),u.which=32,t.extend(u,{which:32,target:n,ctrlKey:i.ctrlKey,altKey:i.altKey,shiftKey:i.shiftKey}),
i.stopPropagation(),i.preventDefault(),t(n).trigger(u));l||(this._activatedInfo=o.attr(r.Constants.dataActivateInfoAttribute),
this._activatedColumnKey(f.itemKey))},u.prototype._handleActivationKeyPressOrClick=function(n,i){var
u=this,r;(n.type!=="keypress"||!n.ctrlKey&&n.which===13||n.ctrlKey&&n.which===10||n.which===32)&&(r=
t(i).closest("tr[data-grid-activateable=true]"),r.length>0&&u._changeActivation(r[0],n))},u.prototype.
_onRowSelect=function(n,t){var i,r=this._activatedColumnKey(),u=this._selectableRowExtension.getSelectedRows(
).length;r&&t.selected&&(i=t.selected,i.activated(r));t.unselected&&t.unselected.length>0&&t.unselected.
forEach(function(n){n.activatedInfo(null);n.activated(null)})},u.Name="azc-grid-activateableRow",u}(
u.Extension);n.SelectableRowActivateExtension=y}(f||(f={})),f});__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.RightClickableRow",["require","exports",
"../../../Util/Util","./Grid"],function(n,t,i,r){var u;return function(n){"use strict";var t=jQuery,
f=window,u=function(n){function r(t){this._options=t||{};this._options.disabled===undefined&&(this._options.
disabled=ko.observable(!1));n.call(this)}return __extends(r,n),Object.defineProperty(r.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),r.prototype.afterAttachEvents=
function(){var n=this;this._widget.element.on(EventTypes.fxcontextmenurequest+".azcGrid","tbody[class!=azc-grid-empty] tr",
this._eventRightClick=function(t){var r;n._options.disabled()||(r={rowMetadata:ko.dataFor(this),clientX:
t.clientX,clientY:t.clientY},n._widget._trigger("rowRightClick",i.cloneEvent(t,"rowRightClick"),r,t.
target),n._widget.options.events("rowRightClick",r))}).on("keydown.azcGrid",this._eventKeyDown=function(
r){switch(r.which){case 121:if(r.shiftKey){var u=t(r.target).closest("tr")[0],f=t(u).offset(),e={rowMetadata:
ko.dataFor(u),clientX:f.left+u.offsetWidth-232,clientY:f.top+10};n._widget._trigger("rowRightClick",
i.cloneEvent(r,"rowRightClick"),e,r.target);n._widget.options.events("rowRightClick",e);r.preventDefault(
);r.stopPropagation()}}})},r.prototype.beforeDestroy=function(){this._eventRightClick&&(this._widget.
element.off(EventTypes.fxcontextmenurequest+".azcGrid",this._eventRightClick),this._eventRightClick=
null);this._eventKeyDown&&(this._widget.element.off("keydown.azcGrid",this._eventKeyDown),this._eventKeyDown=
null)},r.prototype.getName=function(){return r.Name},r.Name="azc-grid-rightClickableRow",r}(r.Extension);
n.RightClickableRowExtension=u}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){
this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.ContextMenuShortcut",["require","exports","./Grid.SelectableRow",
"../../../Util/Util","./Grid"],function(n,t,i,r,u){var f;return function(n){"use strict";var t=jQuery,
v=window,e="azc-grid-contextMenuShortcut-shown",s="azc-grid-contextMenuShortcut-cell",f="tbody tr[data-grid-selectable=true]:not([aria-disabled=true])",
h='attr: { "data-grid-contextmenushortcut": true }',c="<col class='azc-grid-contextMenuShortcut-col' />",
l="<th class='azc-grid-contextMenuShortcut-header'><\/th>",o="<td class='azc-grid-contextMenuShortcut-cell azc-br-muted'><a href=\"\"><\/a><\/td>",
a=function(n){function u(t){this._options=t||{};n.call(this)}return __extends(u,n),Object.defineProperty(
u.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),u.prototype.
afterSetTemplates=function(n){var t=n.getHtmlTemplate("bodyRowsCore"),u=n.getHtmlTemplate("header"),
f=n.getHtmlTemplate("colgroup"),i=n.getHtmlTemplate("editableBodyRowsCorePerColumn");t.addAttribute(
"tr","data-bind",h);t.append("tr",o);u.append("tr",l);f.append("colgroup",c);r.isNullOrUndefined(i)||
i.append("tr",o)},u.prototype.afterAttachEvents=function(){var n=this;this._widget.element.on("click.azcGridContextMenuShortcut",
f+" .azc-grid-contextMenuShortcut-cell a",this._shortcutClickHandler=function(i){var u=t(this).offset(
),f=t(this).closest("tr")[0],e={rowMetadata:ko.dataFor(f),clientX:u.left,clientY:u.top};n._widget._trigger(
"rowContextMenuShortcutClick",r.cloneEvent(i,"rowContextMenuShortcutClick"),e,f);n._widget.options.events(
"rowContextMenuShortcutClick",e);i.preventDefault()}).on("mouseenter.azcGridContextMenuShortcut",f,this.
_shortcutMouseEnterHandler=function(){t(this).addClass(e)}).on("mouseleave.azcGridContextMenuShortcut",
f,this._shortcutMouseLeaveHandler=function(){t(this).removeClass(e)}).on("focusin.azcGridContextMenuShortcut",
f,this._shortcutFocusInHandler=function(){t(this).addClass(e)}).on("focusout.azcGridContextMenuShortcut",
f,this._shortcutFocusOutHandler=function(){t(this).removeClass(e)})},u.prototype.getOrder=function()
{return 40},u.prototype.getDependencies=function(){return[new i.SelectableRowExtension]},u.prototype.
beforeDestroy=function(){this._shortcutClickHandler&&(this._widget.element.off("click.azcGridContextMenuShortcut",
this._shortcutClickHandler),this._shortcutClickHandler=null);this._shortcutMouseEnterHandler&&(this.
_widget.element.off("mouseenter.azcGridContextMenuShortcut",this._shortcutMouseEnterHandler),this._shortcutMouseEnterHandler=
null);this._shortcutMouseLeaveHandler&&(this._widget.element.off("mouseleave.azcGridContextMenuShortcut",
this._shortcutMouseLeaveHandler),this._shortcutMouseLeaveHandler=null);this._shortcutFocusInHandler&&
(this._widget.element.off("focusin.azcGridContextMenuShortcut",f,this._shortcutFocusInHandler),this.
_shortcutFocusInHandler=null);this._shortcutFocusOutHandler&&(this._widget.element.off("focusout.azcGridContextMenuShortcut",
f,this._shortcutFocusOutHandler),this._shortcutFocusOutHandler=null)},u.prototype.getName=function()
{return u.Name},u.prototype.shouldNotChangeSelection=function(n,i){var r=t(i.target).closest("tr").attr(
"aria-selected")==="true",u=!!t(i.target).closest("."+s).length;return r&&u?!0:!1},u.prototype.getAdditionalColumns=
function(){return 1},u.Name="azc-grid-contextMenuShortcut",u}(u.Extension);n.ContextMenuShortcutExtension=
a}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.EditableRow",
["require","exports","./Grid.Extensibility","./Grid.FocusableRow","../../../Fields/Base/FormValidation",
"./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.EditableRow","../../../Fields/TextField"],function(
n,t,i,r,u,f,e){var o;return function(n){"use strict";function o(n){switch(n){case 1:return 1;case 2:
return 3;case 3:return 2;case 0:default:return 0}}var c=window,l=jQuery,h=new MsPortalFx.Base.Diagnostics.
Log("Grid.EditableRowExtension"),s,t;n.getBaseEditableRowState=o,function(n){n[n.Hold=0]="Hold";n[n.
Release=1]="Release"}(s||(s={}));t=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.beforeDestroy=function(){this._rowAddHandler&&(this._widget._instance.element.off("rowAdd",
this._rowAddHandler),this._rowAddHandler=null);this._rowEditHandler&&(this._widget._instance.element.
off("rowEdit",this._rowEditHandler),this._rowEditHandler=null)},t.prototype.getExtension=function(n)
{var t=n,i=t.editableRow&&t.editableRow.placement,r={placement:i,automaticRowChangeEventListener:!0,
automaticEditingFlagChange:!0,allowEditExistingItems:!!(t.editableRow&&t.editableRow.allowEditExistingItems)
,allowEditCreatedItems:!!(t.editableRow&&t.editableRow.allowEditCreatedItems)};return this._editableExtension=
new e.EditableRowExtension(r)},t.prototype.initializeExtension=function(){var t=this,o=e.EditableRowExtension.
Name,n=this._widget._instance.getPlugin(o),f=this._widget.options.extensionsOptions,r=f.editableRow,
i=this._widget.options,u;this._rowAddHandler=function(r,u){u.preventExitEditing();t._ensureValidation(
u.targets,n,function(){i.rowAdd&&i.rowAdd(r,u);u.editableRow.rowMetadata.editing(!1)})};this._widget.
_instance.element.on("rowAdd",this._rowAddHandler);this._rowEditHandler=function(u,f){if(!f.editableRow.
existingItem){var e=i.createdItems().some(function(n){return t._areTheSameEntity(n,f.editableRow.rowMetadata.
item)});e||r.addCreated(f.editableRow.rowMetadata.item)}t._ensureValidation(null,n);r.placement===0&&
n.createdItems().length<r.maxBufferedRows&&t._ensureNewRow(n)};this._widget._instance.element.on("rowEdit",
this._rowEditHandler);r.validate&&r.validate.subscribe(this._widget.lifetimeManager,function(){t._ensureValidation(
t._widget.element,n)});u=function(){var r=i.addEmptyRow(),u;r&&(u=t._widget._instance.getRowMetadata(
r),u.editing(!0),n.createdItems.push(r))};i.addEmptyRow.subscribe(this._widget.lifetimeManager,function(
){u()});u();ko.utils.arrayPushAll(n.createdItems,i.createdItems());i.createdItems.subscribe(this._widget.
lifetimeManager,function(){var r=i.createdItems.slice(0),u=i.createdItems.subscribe(function(i){var e=
i;ko.utils.fixupArrayEdits(ko.utils.compareArrays(r,e)).forEach(function(i){var u,e,r;switch(i.status)
{case"added":u=n.createdItems().some(function(n){return t._areTheSameEntity(n,i.value)});u||n.createdItems.
splice(i.index,0,i.value);break;case"deleted":e=n.createdItems().first(function(n){return t._areTheSameEntity(
n,i.value)});r=t._widget._instance.getRowMetadata(e);r.editing(!1);r.editState(0);n.createdItems.splice(
i.index,1);n.createdItems().length<f.editableRow.maxBufferedRows&&t._ensureNewRow(n)}});u.dispose()}
)},null,"beforeChange")},t.prototype.getName=function(){return"EditableRow"},t.prototype.getOrder=function(
){return 1},t.prototype.getDependencies=function(){return[new r.FocusableRowExtension]},t.prototype.
columnAdded=function(n,t){n.editableFormat!==undefined?t.editableFormatter=this._widget._getFormatter(
n.editableFormat,n.editableFormatOptions||{}):(h.verbose("The EditableRowExtension was loaded but no editable format was specified. Using the default."),
t.editableFormatter=this._widget._getFormatter(1e3,{htmlBindingsType:2}))},t.prototype.columnRemoved=
function(){},t.prototype.mustConnectRowMetadata=function(){return!0},t.prototype.connectRowMetadataProperties=
function(n,t,i){var r=[];return r.push(ko.computed(function(){var n=i.editState(),r=o(n);t.editState(
r)})),r},t.prototype.getAdditionalItems=function(){return this._editableExtension.createdItems()},t.
prototype.registerSubscriptionsToConnectMetadataProperties=function(n,t){var i=this;return this._editableExtension.
createdItems.subscribe(function(){i._widget._connectMetadataAndDisposeSubscriptions(n,t)})},t.prototype.
enableRowDelete=function(){var n=this._widget.options.extensionsOptions;return n.editableRow.enableRowDelete!==
!1},t.prototype.shouldHideContextMenu=function(n){return n.item===this._getEmptyRowItem()},t.prototype.
getListDataForRightClick=function(){var n={},t=this._widget.options.extensionsOptions;return n.deleteRowCommandTitle=
t.editableRow.deleteRowCommandTitle,n.markForDelete=function(n){t.editableRow.markForDelete(n)},n},t.
prototype._ensureValidation=function(n,t,i){var f=this,r=this._widget.options.extensionsOptions;n&&u.
gatherFormFieldViewModels(n).forEach(function(n){var t=n.rowMetadata;t.editState&&t.editState()!==0&&
n.performValidation()!==null&&n.performValidation(!0)});u.ensureFormFieldValidation(this._widget.element,
!1).then(function(n){(r.editableRow.valid&&r.editableRow.valid(n),n)&&i&&(i(),r.editableRow.placement===
1&&t.createdItems().length<r.editableRow.maxBufferedRows&&f._ensureNewRow(t))})},t.prototype._getEmptyRowItem=
function(){var n=this;return this._editableExtension.createdItems().first(function(t){return n._widget.
getRowMetadata(t).editState()===0})},t.prototype._areTheSameEntity=function(n,t){return n===t||n&&t&&
n.__gridGuid&&t.__gridGuid&&n.__gridGuid===t.__gridGuid},t.prototype._ensureNewRow=function(n){var r=
this,t=this._widget.options.extensionsOptions,i;t.editableRow.enableRowAdd!==!1&&(i=n.createdItems().
some(function(n){var t=r._widget._instance.getRowMetadata(n);return t.editState()===0}),i||t.editableRow.
create())},t}(f.GridExtension);n.EditableRowExtension=t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.
Controls.Lists.Grid.Extensions.EditableRow,t)}(o||(o={})),o});__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Fields/TextField",["require","exports","./Base/Field",
"Viva.Controls/Controls/Forms/TextBox","Viva.Controls/Controls/Base/ValidationPlacements/Css","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var o=window,t=jQuery,e=function(n){function i(
t,i,r){n.call(this,t,i,r)}return __extends(i,n),i.prototype._initializeField=function(){n.prototype.
_initializeField.call(this);this.element.addClass("azc-textField").addClass("fxcontrol-TextField");this.
textFieldInit()},i.prototype.dispose=function(){this._textBoxWidget&&(this._textBoxWidget.dispose(),
this._textBoxWidget=null,this._textBoxViewModel=null);this._cleanElement("azc-textField","fxcontrol-TextField");
n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableViewModel",{
get:function(){return this._textBoxViewModel},enumerable:!0,configurable:!0}),Object.defineProperty(
i.prototype,"validatableWidget",{get:function(){return this._textBoxWidget},enumerable:!0,configurable:
!0}),i.prototype.textFieldInit=function(){var n;this._textBoxViewModel=new r.ViewModel;this._textBoxViewModel.
validationPlacements.push(new u.Css);this._textBoxViewModel.validationPlacements.push(new f.DockedBalloon(
f.DockedBalloon.defaultOptions));n=t("<div />");this.appendControl(n);this.linkTextBoxViewModels();this.
_textBoxWidget=new r.Widget(n,this._textBoxViewModel);this._addWidget(this._textBoxWidget);this.setupValidationBindings(
)},i.prototype.linkTextBoxViewModels=function(){var n=this;this._textBoxViewModel.value=this.options.
value;this._textBoxViewModel.placeholder(this.options.emptyValueText());this.options.emptyValueText.
subscribe(this.lifetimeManager,function(t){n._textBoxViewModel.placeholder(t)});this._textBoxViewModel.
valueUpdateTrigger=this.options.valueUpdateTrigger;this.linkValidatableControlViewModels()},i}(i.FieldWidget);
n.Widget=e}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Filterable",
["require","exports","./Grid.Extensibility","./Grid","MsPortalImpl/Resources/ImplScriptResources","Viva.Controls/Controls/Lists/Grid1/Grid.Filterable"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var e=window,o=jQuery,t=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.prototype.getExtension=function(n){var r=n,t=r&&r.
filterable,i;return t&&(i={searchBoxCloseButtonVisible:t.searchBoxCloseButtonVisible||ko.observable(
!0),searchBoxPlaceholder:t.searchBoxPlaceholder||ko.observable(u.Viva.Grid.Filterable.placeholder),searchBoxVisible:
t.searchBoxVisible||ko.observable(!0),searchableColumns:t.searchableColumns||ko.observableArray([])}),
this._filterableOptions=i,new f.FilterableExtension(i)},t.prototype.getName=function(){return"Filterable"}
,t.prototype.getOrder=function(){return 0},t.prototype.columnAdded=function(n,t){t.filterFormatter=null;
n.filterableFormat!==undefined&&(t.filterFormatter=this._widget._getFormatter(n.filterableFormat,n.filterableFormatOptions||
{}))},t}(r.GridExtension);n.FilterableExtension=t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.
Controls.Lists.Grid.Extensions.Filterable,t)}(e||(e={})),e});__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.Filterable",["require","exports",
"./Grid.FocusableRow","./Grid","MsPortalImpl/Resources/ImplScriptResources","MsPortalImpl/Base/Base.KeyboardHelper",
"../../Forms/SearchBox","../../../Util/Util"],function(n,t,i,r,u,f,e){var o;return function(n){"use strict";
var o=jQuery,s=window,a=300,v=" ",h="azc-grid-filterable-searchBox",t="azc-grid-filterable-active",c=
"azc-grid-filterable",y="<div class='"+h+"' data-bind='azcSearchBox: func.getPlugin(\"azc-grid-filterable\")._searchBoxViewModel'><\/div>",
l="###EXISTING_TEMPLATE_BODY_CORE###",p="<!-- ko if: func.getPlugin(\"azc-grid-filterable\").filterActive() --><!-- ko if: func.getPlugin(\"azc-grid-filterable\").results().length --><tbody class='azc-grid-groupdata' role='rowgroup'><!-- ko template: { name: 'bodyRows', foreach: func.getPlugin(\"azc-grid-filterable\").results(), templateEngine: customTemplateEngine } --><!-- /ko --><\/tbody><!-- /ko --><!-- ko ifnot: func.getPlugin(\"azc-grid-filterable\").results().length --><!-- ko if: func.options.items().length --><tbody class='azc-grid-empty' data-bind='if: data.noRowsMessage'><tr><td class='azc-br-muted' data-bind='attr: { colspan: $root.func._getTotalColumns() }, html: data.noRowsMessage'><\/td><\/tr><\/tbody><!-- /ko --><!-- /ko --><!-- /ko --><!-- ko ifnot: func.getPlugin(\"azc-grid-filterable\").filterActive() -->"+
l+"<!-- /ko -->",w="(['|\"]?)([\"|']?htmlBinding[\"|']?:)(.*),",b='$1$2 $root.func.getPlugin("'+c+'").filterActive() ? $root.func.getPlugin("'+
c+'")._filterableCellFormat($parentContext.$parentContext.$index, $index, $parent, $data) : $3,',k='<em class="azc-grid-filterable-match azc-highlight">$&<\/em>',
d=function(n){function r(t){this._options=o.extend(this._getDefaultFilterableOptions(),t);this._results=
ko.observableArray([]);this._filterActive=ko.observable(!1);this._displayedColumns=[];this._columnMap=
{};this._columnNumberMap={};this._resultTokenMap={};n.call(this)}return __extends(r,n),Object.defineProperty(
r.prototype,"filterActive",{get:function(){return this._filterActive},enumerable:!0,configurable:!0}),
Object.defineProperty(r.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),Object.defineProperty(r.prototype,"results",{get:function(){return this._results},enumerable:!0,
configurable:!0}),r.prototype.afterSetTemplates=function(n){var u=n.getHtmlTemplate("table"),f=n.getTemplate(
"bodyCore"),e=p.replace(l,f),t=n.getTemplate("bodyCellContent"),i=new RegExp(w),r=t;t.match(i)&&(r=t.
replace(i,b));u.prepend(".azc-grid-container",y);n.setTemplate("bodyCore",e);n.setTemplate("bodyCellContent",
r)},r.prototype.afterCreate=function(){var n=this;ko.computed(function(){n._searchBoxViewModel.visible(
n._options.searchBoxVisible())},this,{disposeWhenNodeIsRemoved:this._widget.element[0]});ko.computed(
function(){var t=o.trim(n._searchBoxViewModel.queryString());n._queryEntryTimeoutId&&s.clearTimeout(
n._queryEntryTimeoutId);n._queryEntryTimeoutId=s.setTimeout(function(){n._queryEntryTimeoutId=null;n.
_resetResults();t===""?n._filterActive(!1):(n._filterActive(!0),n._results(n._getResultItems(n._parseQueryString(
t))))},a)},this,{disposeWhenNodeIsRemoved:this._widget.element[0]});ko.computed(function(){var t=n._widget.
options.columns();n._columnMap={};n._columnNumberMap={};t.forEach(function(t,i){n._columnMap[t.itemKey]=
t;n._columnNumberMap[t.itemKey]=i;n._displayedColumns.push(t.itemKey)})},this,{disposeWhenNodeIsRemoved:
this._widget.element[0]});ko.computed(function(){n._widget.element.toggleClass(t,n._filterActive())}
,this,{disposeWhenNodeIsRemoved:this._widget.element[0]});ko.computed(function(){var t=n._widget.options.
items();n._filterActive.peek()&&n._results(n._getResultItems(n._parseQueryString(n._searchBoxViewModel.
queryString.peek())))},this,{disposeWhenNodeIsRemoved:this._widget.element[0]})},r.prototype.beforeCreate=
function(){var n=this;this._searchBoxViewModel=new e.ViewModel;this._searchBoxViewModel.closeButtonVisible=
this.options.searchBoxCloseButtonVisible;this._searchBoxViewModel.placeholder=this.options.searchBoxPlaceholder;
this._searchBoxViewModel.keyDownEvent=function(t){var r=n._widget.getPlugin(i.FocusableRowExtension.
Name),u=f.getModifierKeys(t);r&&t.which===9&&(u===0||u===f.ModifierKeys.Shift)&&r._focus(t,"."+h)}},
r.prototype.beforeDestroy=function(){this._widget.element.removeClass(t)},r.prototype.getDefaultRowMetadataProperties=
function(){return{}},r.prototype.getName=function(){return r.Name},r.prototype.getOrder=function(){return 100}
,r.prototype.shouldNotAllowDrag=function(){return this._widget.element.hasClass(t)?!0:!1},r.prototype.
_parseQueryString=function(n){for(var i=n.split(v),t=0;t<i.length;t++)this._resultTokenMap[i[t]]=[];
return i},r.prototype._getResultItems=function(n){var t=this,o=this._getSearchableColumns(),r,s,h=[],
u=[],i,f,e;return this._widget.options.items().forEach(function(c,l){for(u=[],f=0;f<o.length;f++)if(
r=o[f],c.hasOwnProperty(r))for(s=t._getFormattedItemValue(c[r],{item:c,rowMetadata:t._widget.getRowMetadata(
c),rowNumber:function(){return l},columnNumber:function(){return t._columnNumberMap[r]},column:t._columnMap[
r]}),e=0;e<n.length;e++)i=n[e],s.toLowerCase().indexOf(i.toLowerCase())!==-1&&(u.indexOf(i)===-1&&u.
push(i),t._resultTokenMap[i].indexOf(c)===-1&&t._resultTokenMap[i].push(c));u.length===n.length&&h.push(
c)}),h},r.prototype._filterableCellFormat=function(n,t,i,r){var o=i.item,s=r.itemKey,l=o[s],a={item:
i.item,rowNumber:n,columnNumber:t,rowMetadata:i,column:r},f=this._getFormattedItemValue(l,a),v=this.
_getSearchableColumns(),h,u,e=[],c;for(u in this._resultTokenMap)h=this._resultTokenMap.hasOwnProperty(
u)&&this._resultTokenMap[u].indexOf(o)!==-1&&v.indexOf(s)!==-1,h&&e.push(this._regexStringEscape(u));
return e.length&&(c="("+e.join("|")+")",f=this._highlightMatches(f,c)),f},r.prototype._highlightMatches=
function(n,t){var i=n;return i.replace(new RegExp(t,"gi"),k)},r.prototype._regexStringEscape=function(
n){var t=new RegExp("([!\"#$%&'()*+,./:;<=>?@[\\]^`{|}~\\\\])","g");return n.replace(t,"\\$1")},r.prototype.
_getFormattedItemValue=function(n,t){var i,r;if(t.column&&t.column.filterFormatter)r=t.column.filterFormatter(
n,t);else{i=ko.toJS(n);switch(typeof i){case"object":r=JSON.stringify(i);break;default:r=""+i}}return r}
,r.prototype._getSearchableColumns=function(){return this.options.searchableColumns().length?this.options.
searchableColumns():this._displayedColumns},r.prototype._resetResults=function(){this._results.removeAll(
);this._resultTokenMap={}},r.prototype._getDefaultFilterableOptions=function(){return{searchableColumns:
ko.observableArray([]),searchBoxVisible:ko.observable(!0),searchBoxPlaceholder:ko.observable(u.Viva.
Grid.Filterable.placeholder),searchBoxCloseButtonVisible:ko.observable(!0)}},r.Name="azc-grid-filterable",
r}(r.Extension);n.FilterableExtension=d}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Forms/SearchBox",["require","exports","../Base/ValueUpdateTrigger",
"./TextBox","./Button","../Base/Base","../Base/ValidatableControl","../../Util/Util","MsPortalImpl/Base/Base.KeyboardHelper"],
function(n,t,i,r,u,f,e,o,s){var h;return function(n){"use strict";var w=window,i=jQuery,a=0,t="azc-searchBox",
v="azc-searchBox-state-hover",h="azc-searchBox-state-hidden",c="azc-searchBox-button-state-hidden",y=
"__azc-searchBox",p="<div class='azc-searchBox-wrapper'><div class='azc-searchBox-input' data-bind='azcTextBox: func._textBoxViewModel'><\/div><\/div><button data-bind='azcButton: func._buttonViewModel'><div class='azc-searchBox-button-icon'>&times;<\/div><\/button>",
l=function(n){function t(){n.apply(this,arguments);this.queryString=ko.observable("");this.visible=ko.
observable(!0);this.closeButtonVisible=ko.observable(!0);this.placeholder=ko.observable("Search...")}
return __extends(t,n),t}(e.ViewModel),o;n.ViewModel=l;o=function(n){function f(f,e,o){n.call(this,f,
e,i.extend({viewModelType:l},o));this.element.addClass(t).html(p);this._name=this.options.name||y+a++;
this._button=this.element.find("button");this._input=this.element.find(".azc-searchBox-input");this.
options.keyDownEvent=this.options.keyDownEvent||i.noop;this._textBoxViewModel=new r.ViewModel;this._textBoxViewModel.
value=this.options.queryString;this._textBoxViewModel.valueUpdateTrigger=1;this._textBoxViewModel.placeholder=
this.options.placeholder;this._buttonViewModel=new u.ViewModel;this._buttonViewModel.isDefault(!0);this.
_buttonViewModel.visible=this.options.closeButtonVisible;this._attachEvents();this._initializeComputeds(
);this._bindDescendants();this._afterCreate()}return __extends(f,n),f.prototype.dispose=function(){this.
_checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this._detachEvents(),this._cleanElement(t,v,h,
c),n.prototype.dispose.call(this))},Object.defineProperty(f.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),f.prototype._getElementToFocus=function(){var n=this.element.
find("input");return n.length>0?n[0]:null},f.prototype._initializeComputeds=function(){var n=this;this.
_addDisposablesToCleanUp(ko.computed(function(){var t=n.options.disabled(),i=n.options.dirty();n._buttonViewModel.
disabled(t);n._textBoxViewModel.disabled(t);n._textBoxViewModel.dirty(i)}));this._addDisposablesToCleanUp(
ko.computed(function(){n.element.toggleClass(h,!n.options.visible())}));this._addDisposablesToCleanUp(
ko.computed(function(){n.element.toggleClass(c,!n.options.closeButtonVisible())}))},f.prototype._attachEvents=
function(){var n=this;this._detachEvents();this._buttonClickHandler=function(){n.options.queryString(
"");n.options.visible(!1)};this._inputKeyDownHandler=function(t){i.contains(n._input[0],document.activeElement)&&
(s.getModifierKeys(t)===0&&t.which===27&&(n.options.queryString(""),t.preventDefault()),n.options.keyDownEvent(
t))};this._button.on("click."+t,this._buttonClickHandler);this.element.on("keydown.azcSearchBox",this.
_inputKeyDownHandler)},f.prototype._detachEvents=function(){this._buttonClickHandler&&(this._button.
off("click."+t,this._buttonClickHandler),this._buttonClickHandler=null);this._inputKeyDownHandler&&(
this.element.off("keydown.azcSearchBox",this._inputKeyDownHandler),this._inputKeyDownHandler=null)},
f}(e.Widget);n.Widget=o;ko.bindingHandlers.azcSearchBox=f.Widget.getBindingHandler(o)}(h||(h={})),h}
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FocusableRowHover",
["require","exports","./Grid.Extensibility","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.FocusableRowHover"],
function(n,t,i,r,u){var f;return function(n){"use strict";var f=window,e=jQuery,t=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.prototype.beforeDestroy=function(){},t.prototype.getExtension=
function(n){var t=n,i=t.hoverable?t.hoverable.focusable:null,r=t.hoverable?t.hoverable.hoverIDKey:null,
f=t.hoverable?t.hoverable.hoveredID:null;return new u.FocusableRowHoverExtension({focusable:i||ko.observable(
!0),hoverIDKey:r||ko.observable(),hoveredID:f||ko.observable()})},t.prototype.initializeExtension=function(
){},t.prototype.getName=function(){return"FocusableRowHover"},t.prototype.getOrder=function(){return 0}
,t.prototype.mustConnectRowMetadata=function(){return!1},t}(r.GridExtension);n.FocusableRowHoverExtension=
t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.Hoverable,t)}(
f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)
t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Formatter",
["require","exports","./Grid.Extensibility","../../Base/Host","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.Formatters",
"Viva.Controls/Controls/Lists/Grid1/Grid.Formatters.Helpers"],function(n,t,i,r,u,f,e){var o;return function(
n){"use strict";var s=window,h=jQuery,o=function(n){function i(){n.apply(this,arguments)}return __extends(
i,n),i.prototype.getName=function(){return"Formatter"},i.prototype.getOrder=function(){return 0},i.prototype.
getSafeFormatter=function(n,r){var u,e;switch(n){case 100:return f.date("t");case 101:return f.date(
"T");case 102:return f.date("d");case 103:return f.date("D");case 104:return f.date("M");case 105:return f.
date("Y");case 106:return f.date(r.dateFormat||"");case 110:return f.textLookup(r.textLookup||{});case
108:return i._formatIconWithSrcSanitization;case 109:u=r.iconLookup||{};for(e in u)u.hasOwnProperty(
e)&&(i._isValidUri(u[e])||delete u[e]);return f.iconLookup(u);case 111:return t.svgIcon;case 112:return t.
svgIconLookup(r.svgIconLookup||{});case 113:return f.percentageBar(r.percentageBar||{})}return null}
,i.prototype.getUnsafeFormatter=function(n,t){switch(n){case 1:return f.html;case 110:return f.textLookup(
t.textLookup||{});case 107:return f.uri}return null},i._formatIconWithSrcSanitization=function(n){return i.
_isValidUri(n)?f.icon(n):""},i._isValidUri=function(n){var t=ko.utils.unwrapObservable(n),i=e.isUndefined,
u=t&&!i(t.text)&&!i(t.uri)?t.uri:t;return r.host.sanitizer.sanitizeUri(u+"")},i}(u.GridExtension),t;
n.FormatterExtension=o;i.Extensibility._defaultPlugins.push(o);t=function(){function n(){}return n.svgIcon=
function(t){var u=function(n){return n&&!e.isUndefined(n.type)},o=function(t,i,r){var o="<span class='fx-grid-formatters-svgicon' data-bind=\"image: { type: "+
e.attributeEncode(t.type.toString()),u="",f="";return i=i||n.defaultSvgSize,r=r||n.defaultSvgSize,t.
palette&&(u=", palette: "+e.attributeEncode(t.palette)),t.data&&(f=" , data: '"+e.attributeEncode(t.
data)+"'"),o+u+f+" }, style: { height: '"+e.attributeEncode(i)+"', width: '"+e.attributeEncode(r)+"' }\"><\/span>"}
,s=Array.prototype.slice.call(arguments,1),i=ko.utils.unwrapObservable(t),r;return i&&!e.isUndefined(
i.svg)&&u(i.svg)?(r="",e.isUndefined(i.text)||(r="<span class='fx-grid-formatters-svgtext'>"+e.callFormatter(
f.text,i.text,s)+"<\/span>"),"<div class='fx-grid-formatters-svg'>"+o(i.svg,i.height,i.width)+r+"<\/div>"):
u(i)?o(i):""},n.svgIconLookup=function(t){return function(i){var u=Array.prototype.slice.call(arguments,
1),r=ko.utils.unwrapObservable(i);if(e.isNullOrUndefined(t[r])){if(t["##DEFAULT##"])return r=f.text(
r),e.callFormatter(n.svgIcon,t["##DEFAULT##"].text?{uri:t["##DEFAULT##"].uri,text:t["##DEFAULT##"].text.
replace(/##DEFAULT##/g,r)}:t["##DEFAULT##"],u)}else return e.callFormatter(n.svgIcon,t[r],u);return""}
},n.defaultSvgSize="12px",n}()}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){
this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.FormatterHtmlBindings",["require","exports",
"../../Base/Formatters","./Grid.Extensibility","../../Base/Host","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.Formatters"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var t=function(n){function t(){n.apply(
this,arguments)}return __extends(t,n),t.prototype.getName=function(){return"FormatterHtmlBindings"},
t.prototype.getOrder=function(){return 0},t.prototype.getSafeFormatter=function(n,i,r){switch(n){case
1e3:return e.htmlBindings(t._getTrustedMarkup(i.htmlBindingsType,i.htmlBindingsTemplate,r),t._getHtmlBindingsViewModel(
this._widget.lifetimeManager,i.htmlBindingsType,i.htmlBindingsData))}return null},t._getTrustedMarkup=
function(n,t,i){var r=t||"";switch(n){case 3:case 2:case 1:case 5:case 4:return"<div data-bind='formElement: $root' data-grid-formelement='"+
MsPortalFx.ViewModels.Controls.Lists.Grid.HtmlBindingsType[n]+"'><\/div>"}return i?r:u.host.sanitizer.
sanitizeHTML("Controls.Grid.FormatterHtmlBindingsExtension",r)},t._getHtmlBindingsViewModel=function(
n,t,r){switch(t){case 3:return i.ControlViewModels.multiselectDropDown(n,r);case 2:return i.ControlViewModels.
textBox(n,r);case 1:return i.ControlViewModels.checkBox(n,r);case 5:return i.ControlViewModels.dropDown(
n,r);case 4:return i.ControlViewModels.rowSelectionCheckBox(n);case 0:default:return function(n,t,i)
{return{value:t,settings:i}}}},t}(f.GridExtension);n.FormatterHtmlBindingsExtension=t;r.Extensibility.
_defaultPlugins.push(t)}(o||(o={})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Groupable",["require","exports","./Grid.Extensibility",
"./Grid","Viva.Controls/Controls/Lists/Grid1/Grid","Viva.Controls/Controls/Lists/Grid1/Grid.Groupable"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var u=window,e=jQuery,t=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.prototype.beforeDestroy=function(){},t.prototype.getExtension=
function(n){var i=this,t=n;return new f.GroupableExtension({groupKey:t.groupable.groupKey,headerFormatter:
this._widget._getFormatter(t.groupable.headerFormat,t.groupable.headerFormatOptions),groups:ko.computed(
function(){var n;return t.groupable&&t.groupable.groups&&(n=[],t.groupable.groups().forEach(function(
t){var u=i._widget._getFormatter(t.format,t.formatOptions),r=null;t.sortFormat&&(r=i._widget._getFormatter(
t.sortFormat,t.sortFormatOptions));n.push(new f.Group(t.value,u,r))})),n},this,{disposeWhenNodeIsRemoved:
this._widget.element[0]}),noGroupLabel:this._widget._getFormatter(t.groupable.noGroupLabelFormat,t.groupable.
noGroupLabelFormatOptions),sortFunction:this._getSortFunction(t.groupable.sortFunction),sortOrder:ko.
computed(function(){var n=1;return t.groupable&&t.groupable.sortOrder&&(n=t.groupable.sortOrder()),n}
,this,{disposeWhenNodeIsRemoved:this._widget.element[0]})})},t.prototype.initializeExtension=function(
){},t.prototype.getName=function(){return"Groupable"},t.prototype.getOrder=function(){return 0},t.prototype.
mustConnectRowMetadata=function(){return!0},t.prototype.connectRowMetadataProperties=function(n,t,i)
{var r=[];return r.push.apply(r,this._widget._twoWayBinding(i.groupId,t.groupId)),r},t.prototype._getSortFunction=
function(n){var t;switch(n){case 1:t=function(n,t){var i=new Date(n).getTime(),r=new Date(t).getTime(
);return i<r?-1:i>r?1:0};break;default:t=null}return t},t}(r.GridExtension);n.GroupableExtension=t;i.
Extensibility.registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.Groupable,t)}(e||(e=
{})),e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.Groupable",
["require","exports","./Grid.Formatters","./Grid","MsPortalImpl/Resources/ImplScriptResources","../../../Util/Util"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";function h(n,t,i){var r=[],u=[],f=[];return t.
forEach(function(t){var i=ko.toJS(t[n])||"",f=i.toString();u.indexOf(f)===-1&&(r.push(i),u.push(f))}
),r.forEach(function(n){f.push(new e(n,i))}),f}function c(n,t,i){var r=[],u=[];return t===0?u=n:(n.forEach(
function(n){n.sortFormatter?r.push(n.sortFormatter(ko.toJS(n.value))):r.push(ko.toJS(n.value))}),i?r.
sort(i):r.sort(),t===2&&r.reverse(),r.forEach(function(t){n.forEach(function(n){var i=n.sortFormatter?
n.sortFormatter(ko.toJS(n.value)):ko.toJS(n.value);t.toString()===i.toString()&&u.push(n)})})),u}function l(
n,t,i){var r,u,f;n.options.items().forEach(function(e){r="";f=ko.toJS(e[i])?ko.toJS(e[i]):"";t.forEach(
function(n){u=ko.toJS(n.value)?ko.toJS(n.value):"";f.toString()===u.toString()&&(r=u)});n.getRowMetadata(
e).groupId(r)})}function a(n,t){if(t===null||t===undefined)throw new Error("groupId cannot be null or undefined when fetching group items.");
return ko.computed(function(){var i=[],u=ko.toJS(t).toString(),r;return n.options.items().forEach(function(
t){r=ko.toJS(n.getRowMetadata(t).groupId)||"";f.isNullOrUndefined(r)?u===""&&i.push(t):r.toString()===
u&&i.push(t)}),i})}var t=jQuery,v=window,s="<!-- ko if: data.items().length --><!-- ko foreach: func.getPlugin(\"azc-grid-groupable\").groups --><tbody class='azc-grid-groupdata' role='rowgroup'><tr class='azc-grid-groupheader'><td class='azc-br-muted' data-bind='htmlBinding: $root.func.getPlugin(\"azc-grid-groupable\")._headerCellFormat(formatter, value), attr: { colspan: $root.func._getTotalColumns() }'><\/td><\/tr><!-- ko if: $root.func.getPlugin(\"azc-grid-groupable\").getItemsByGroup(value)().length --><!-- ko template: { name: 'bodyRows', foreach: $root.func.getPlugin(\"azc-grid-groupable\").getItemsByGroup(value)(), templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- /ko --><!-- ko ifnot: $root.func.getPlugin(\"azc-grid-groupable\").getItemsByGroup(value)().length --><tr><td data-bind='attr: { colspan: $root.func._getTotalColumns() }, html: $root.data.noRowsMessage' class='azc-br-muted'><\/td><\/tr><!-- /ko --><\/tbody><!-- /ko --><!-- ko if: func.getPlugin(\"azc-grid-groupable\").getItemsByGroup(\"\")().length --><tbody class='azc-grid-groupdata' role='rowgroup'><tr class='azc-grid-groupheader'><td class='azc-br-muted' data-bind='html: $root.func.getPlugin(\"azc-grid-groupable\").options.noGroupLabel(), attr: { colspan: $root.func._getTotalColumns() }'><\/td><\/tr><!-- ko template: { name: 'bodyRows', foreach: $root.func.getPlugin(\"azc-grid-groupable\").getItemsByGroup(\"\")(), templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/tbody><!-- /ko --><!-- /ko -->",
e=function(){function n(n,t,r){this.value=n;this.formatter=t||i.text;this.sortFormatter=r}return n}(
),o;n.Group=e;o=function(n){function r(i){this._groupItems={};this._options=t.extend(this._getDefaultGroupOptions(
),i);f.isNullOrUndefined(this._options.groups)&&(this._options.groups=ko.observable(null));n.call(this)}
return __extends(r,n),Object.defineProperty(r.prototype,"groups",{get:function(){return this._groups}
,enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),r.prototype.afterSetTemplates=function(n){n.setTemplate("bodyCore",
s)},r.prototype.beforeCreate=function(){var n=this;this._groups=ko.computed(function(){var t=[],r=n.
options.groups(),u;return r?t=r:(u=n.options.headerFormatter||i.text,t=h(n.options.groupKey(),n._widget.
options.items(),u)),l(n._widget,t,n.options.groupKey()),c(t,n.options.sortOrder(),n.options.sortFunction)}
)},r.prototype.beforeDestroy=function(){var n=this;this._groups&&(this._groups.dispose(),this._groups=
null);this._groupItems&&(Object.getOwnPropertyNames(this._groupItems).forEach(function(i){var r=n._groupItems[
i];r&&(t.isFunction(r.dispose)&&r.dispose(),n._groupItems[i]=null)}),this._groupItems=null)},r.prototype.
getItemsByGroup=function(n){return n=ko.toJS(n),this._groupItems[n]||(this._groupItems[n]=a(this._widget,
n)),this._groupItems[n]},r.prototype.getDefaultRowMetadataProperties=function(){return{groupId:ko.observable(
"")}},r.prototype.getName=function(){return r.Name},r.prototype.getOrder=function(){return 70},r.prototype.
_getDefaultGroupOptions=function(){return{groupKey:ko.observable(""),headerFormatter:i.text,groups:ko.
observable(null),noGroupLabel:function(){return u.Viva.Grid.Groupable.noGroupLabel},sortOrder:ko.observable(
1),sortFunction:null}},r.prototype._headerCellFormat=function(n,t){return n(t)},r.Name="azc-grid-groupable",
r}(r.Extension);n.GroupableExtension=o}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Hierarchical",["require","exports","./Grid.Extensibility",
"./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.Hierarchical"],function(n,t,i,r,u){var f;return function(
n){"use strict";var f=window,e=jQuery,t=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.getExtension=function(n){var t=n,i=t&&t.hierarchical;return new u.HierarchicalExtension(
i)},t.prototype.initializeExtension=function(){},t.prototype.beforeDestroy=function(){},t.prototype.
getName=function(){return"Hierarchical"},t.prototype.getOrder=function(){return 0},t}(r.GridExtension);
n.HierarchicalExtension=t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.
Hierarchical,t)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Viva.Controls/Controls/Lists/Grid1/Grid.Hierarchical",["require","exports","./Grid","./Grid.FocusableRow",
"MsPortalImpl/Base/Base.KeyboardHelper","../../../Util/Util"],function(n,t,i,r,u){var f;return function(
n){"use strict";var f=jQuery,c=window,e='css: { "azc-grid-hierarchical-toplevel": item.depth() === 0 }',
o='css: { "azc-grid-hierarchical-header": hierarchical }',t="tr[data-grid-focusable]",s="<div class='azc-grid-hierarchical-cell-flexcontainer'><!-- ko if: hierarchical --><!-- ko foreach: new Array($parent.item.depth()) --><div class='azc-grid-hierarchical-indent'><\/div><!-- /ko --><div class='azc-grid-hierarchical-icon' data-bind='if: $parent.item.expandable() === true || $parent.item.expandable() === undefined, click: function () { $parent.item.expanded() ? $root.func.getPlugin(\"azc-grid-hierarchical\").options.hierarchy.collapse($parent.item) : $root.func.getPlugin(\"azc-grid-hierarchical\").options.hierarchy.expand($parent.item); }, clickBubble: false'><div data-bind='css: {\"azc-grid-hierarchical-icon-collapsed\": !$parent.item.expanded(), \"azc-grid-hierarchical-icon-expanded\": $parent.item.expanded() }'><\/div><\/div><!-- /ko --><div class='azc-grid-cellContent' data-bind='css: { \"azc-grid-cell-ellipse\": $data.enableEllipse, \"azc-grid-cell-fullheight\": $data.fullHeight }, htmlBinding: $root.func._cellFormat($parentContext.$parentContext.$index, $index, $parent, $data)'><\/div><\/div>",
h=function(n){function i(t){this._options=f.extend(this._getDefaultHierarchicalOptions(),t);n.call(this)}
return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype.afterSetTemplates=function(n){var t=n.getHtmlTemplate("bodyRowsCore"),
i=n.getHtmlTemplate("headerCell");i.addAttribute("th","data-bind",o);t.addAttribute("tr","data-bind",
e);n.setTemplate("bodyCellContent",s)},i.prototype.afterCreate=function(){},i.prototype.afterAttachEvents=
function(){var n=this;this._widget.element.on("keydown.azcGrid",t,this._eventKeyDown=function(i){var
o=f(i.target),e=o.closest(t),s=u.getModifierKeys(i),r;if(s===0&&e&&e.length>0){r=!0;switch(i.which){
case 37:r=n._expandOrCollapse(e[0],!1);break;case 39:r=n._expandOrCollapse(e[0],!0);break;default:r=
!1}r&&(i.preventDefault(),i.stopPropagation())}})},i.prototype._isExpandable=function(n){return n.expandable&&
(n.expandable()===!0||n.expandable()===undefined)},i.prototype._expandOrCollapse=function(n,t){var i=
ko.dataFor(n),r=i?i.item:null;return r&&this._isExpandable(r)?(t?r.expanded()||this.options.hierarchy.
expand(i.item):r.expanded()&&this.options.hierarchy.collapse(i.item),!0):!1},i.prototype.beforeDestroy=
function(){this._eventKeyDown&&(this._widget.element.off("keydown.azcGrid",t,this._eventKeyDown),this.
_eventKeyDown=null)},i.prototype.getName=function(){return i.Name},i.prototype.getOrder=function(){return 18}
,i.prototype.getDependencies=function(){return[new r.FocusableRowExtension]},i.prototype.getDefaultColumnProperties=
function(){return{hierarchical:!1}},i.prototype.shouldNotAllowSelectAll=function(){return!0},i.prototype.
_getDefaultHierarchicalOptions=function(){return{hierarchy:null}},i.Name="azc-grid-hierarchical",i}(
i.Extension);n.HierarchicalExtension=h}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Pageable",["require","exports","./Grid.Extensibility",
"./Grid","MsPortalImpl.Controls/Resources/MsPortalImplResources","Viva.Controls/Util/Util","Viva.Controls/Controls/Pager",
"Viva.Controls/Controls/Lists/Grid1/Grid.Pageable"],function(n,t,i,r,u,f,e,o){var s;return function(
n){"use strict";var h=window,c=jQuery,s=u.Grid,t;n.DefaultItemsPagePage=10;t=function(t){function i(
){t.apply(this,arguments);this._pageableOptions=null;this._pageableType=null;this._dataNavigator=null;
this._currentRequestId=null}return __extends(i,t),i.prototype.getExtension=function(t){var r=this,u=
t,i=u&&u.pageable;if(i&&(this._dataNavigator=i.dataNavigator),!this._validateSequential()&&!this._validatePageable(
))throw new Error("Pageable extension cannot work without a valid data navigator. Provide a valid data navigator to fetch data.");
this._pageableType=i.type;switch(i.type){case 1:this._pageableOptions={loading:ko.observable(!1),pagerViewModel:
new e.ViewModel,itemsPerPage:i.itemsPerPage?i.itemsPerPage:ko.observable(n.DefaultItemsPagePage)};this.
_numberOfPagesComputed=ko.computed(function(){var t=r._dataNavigator.metadata(),n;t&&(n=r._pageableOptions.
itemsPerPage(),r._pageableOptions.pagerViewModel.numberOfPages(f.truncate((t.totalItemCount+n-1)/n)||
1))});break;case 0:default:this._pageableOptions={label:i.label?i.label:ko.observable(s.loadMore),showLabel:
i.showLabel?i.showLabel:ko.observable(!0),loading:ko.observable(!1),onLoadMoreData:function(){r._currentRequestId=
MsPortalFx.Util.newGuid();r._onLoadMoreData(r._currentRequestId)}}}return new o.PageableExtension(this.
_pageableOptions)},i.prototype.initializeExtension=function(){if(!this._validate())throw new Error("Pageable extension cannot work without a valid data navigator. Provide a valid data navigator to fetch data.");
this._attachSubscriptions()},i.prototype.resetExtension=function(){if(this._pageableType===0&&this._validateSequential(
))return this._resetAndLoadData();if(this._pageableType===1&&this._validatePageable())return this._resetLoadPage(
);var n=Q.defer();return n.resolve(),n.promise},i.prototype.beforeDestroy=function(){this._numberOfPagesComputed&&
(this._numberOfPagesComputed.dispose(),this._numberOfPagesComputed=null);this._loadPageSubscription&&
(this._loadPageSubscription.dispose(),this._loadPageSubscription=null)},i.prototype.getName=function(
){return"Pageable"},i.prototype.getOrder=function(){return 0},i.prototype._validateSequential=function(
){return!!this._dataNavigator&&!!this._dataNavigator.loadByContinuationToken},i.prototype._validatePageable=
function(){return!!this._dataNavigator&&!!this._dataNavigator.loadBySkipTake},i.prototype._validate=
function(){return this._pageableType===0&&this._validateSequential()||this._pageableType===1&&this._validatePageable(
)?!0:!1},i.prototype._loadPage=function(n,t){var i=this,u=Q.defer(),f=this._getSortData(),r;return this.
_pageableOptions.loading(!0),r=this._pageableOptions.itemsPerPage(),this._dataNavigator.loadBySkipTake(
(n-1)*r,r,null,f).then(function(){if(i._currentRequestId===t){var n=i._dataNavigator.items();n=n?n.slice(
0):[];i._widget.options.items(n)}}).finally(function(){i._currentRequestId===t&&i._pageableOptions.loading(
!1);u.resolve()}),u.promise},i.prototype._attachSubscriptions=function(){var n=this;this._pageableType===
1&&(this._loadPageSubscription=this._pageableOptions.pagerViewModel.currentPage.subscribe(function(t)
{n._currentRequestId=MsPortalFx.Util.newGuid();n._loadPage(t,n._currentRequestId)}))},i.prototype._resetCurrentPageSubscription=
function(){this._loadPageSubscription&&(this._loadPageSubscription.dispose(),this._loadPageSubscription=
null);this._pageableOptions.pagerViewModel.currentPage(1);this._attachSubscriptions()},i.prototype._resetLoadPage=
function(){return this._resetCurrentPageSubscription(),this._currentRequestId=MsPortalFx.Util.newGuid(
),this._loadPage(this._pageableOptions.pagerViewModel.currentPage(),this._currentRequestId)},i.prototype.
_onLoadMoreData=function(n){var t=this,i=Q.defer();return this._pageableOptions.loading(!0),this._dataNavigator.
loadByContinuationToken().then(function(){t._currentRequestId===n&&(t._widget.options.items.push.apply(
t._widget.options.items,t._dataNavigator.items()),t._dataNavigator.metadata()&&t._dataNavigator.metadata(
).continuationToken||t._pageableOptions.showLabel(!1))},function(){}).finally(function(){t._currentRequestId===
n&&t._pageableOptions.loading(!1);i.resolve()}),i.promise},i.prototype._resetAndLoadData=function(){
var n=this._getSortData();return this._currentRequestId=MsPortalFx.Util.newGuid(),this._dataNavigator.
resetLoadByContinuationToken&&this._dataNavigator.resetLoadByContinuationToken(null,n),this._pageableOptions.
showLabel(!0),this._widget.options.items([]),this._onLoadMoreData(this._currentRequestId)},i.prototype.
_getSortData=function(){var n=this._widget.options.sortByList;return n?n():null},i}(r.GridExtension);
n.PageableExtension=t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.
Pageable,t)}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(){this.constructor=n}
for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Pager",
["require","exports","./Base/Validators","./Base/ValidationPlacements/Css","./Forms/TextBox","./Base/Base"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var l=window,e=jQuery,o="azc-pager",c='<ul><!-- ko if: func._longPager --><li class=\'azc-pager-input\'><div class=\'azc-pager-input-textBox\' data-bind=\'azcTextBox: func._textBoxViewModel\'><\/div><\/li><li class=\'azc-pager-page\'><a data-bind=\'text: data.numberOfPages, attr: { "data-page-id": data.numberOfPages(), href: $root.func._isCurrentPage(data.numberOfPages()) ? null : "" }\'><\/a><\/li><!-- /ko --><!-- ko ifnot: func._longPager --><!-- ko foreach: func._pages --><li class=\'azc-pager-page\' data-bind=\'attr: { "aria-selected": $root.func._isCurrentPage($data) ? "true" : "false" }\'><a data-bind=\'text: $data, attr: { "data-page-id": $data, href: $root.func._isCurrentPage($data) ? null : "" }\'><\/a><\/li><!-- /ko --><!-- /ko --><!-- ko if: func._showArrows --><li class=\'azc-pager-arrow azc-pager-arrow-previous\' data-bind=\'attr: { "aria-disabled": $root.func._isCurrentPageFirst() ? "true" : "false" }\'><a data-bind=\'attr: { title: data.text.previous, href: $root.func._isCurrentPageFirst() ? null : "" }\'><span><\/span><\/a><\/li><li class=\'azc-pager-arrow azc-pager-arrow-next\' data-bind=\'attr: { "aria-disabled": $root.func._isCurrentPageLast() ? "true" : "false" }\'><a data-bind=\'attr: { title: data.text.next, href: $root.func._isCurrentPageLast() ? null : "" }\'><span><\/span><\/a><\/li><!-- /ko --><\/ul>',
s=function(n){function t(){n.apply(this,arguments);this.currentPage=ko.observable(1);this.numberOfPages=
ko.observable(1);this.maxPages=ko.observable(20)}return __extends(t,n),t}(f.ViewModel),t,h;n.ViewModel=
s;t=function(n){function t(t,f,l){n.call(this,t,f,e.extend({viewModelType:s},l));this.options.text=this.
options.text||this._getDefaultResourceStrings();this.element.addClass(o).html(c);this._textBoxViewModel=
new u.ViewModel;this._textBoxViewModel.validationPlacements.push(new r.Css);this._textBoxViewModel.validators.
push(new i.ValueRange(function(){return 1},this.options.numberOfPages));this._textBoxViewModel.validators.
push(new h);this._attachEvents();this._initializeComputeds();this._bindDescendants()}return __extends(
t,n),t.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.
_detachEvents(),this._cleanElement(o),n.prototype.dispose.call(this))},Object.defineProperty(t.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"_longPager",{get:function(){return this.options.numberOfPages()>this.options.maxPages()}
,enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_showArrows",{get:function(){return this.
options.numberOfPages()>1},enumerable:!0,configurable:!0}),t.prototype._initializeComputeds=function(
){var n=this;this._pages=ko.observableArray();this._addDisposablesToCleanUp(ko.computed(function(){var
i=n._pages.peek(),t,r;for(n._pages.valueWillMutate(),i.splice(0,i.length),t=1,r=Math.min(n.options.numberOfPages(
),n.options.maxPages());t<=r;t++)i.push(t);n._pages.valueHasMutated()}));this._textBoxViewModel.events=
{enterPressed:function(t){n._textBoxViewModel.validationState()===2&&n.options.currentPage(parseInt(
t,10))}};this._addDisposablesToCleanUp(ko.computed(function(){n._textBoxViewModel.value(n.options.currentPage(
).toString())}))},t.prototype._attachEvents=function(){var n=this;this._detachEvents();this.element.
on("click","ul li.azc-pager-page a[href]",this._clickPageEventHandler=function(t){n.options.currentPage(
parseInt(e(t.currentTarget).data("page-id"),10));t.preventDefault()}).on("click","ul li.azc-pager-arrow-previous a[href]",
this._clickArrowPreviousEventHandler=function(t){n.options.currentPage(n.options.currentPage()-1);t.
preventDefault()}).on("click","ul li.azc-pager-arrow-next a[href]",this._clickArrowNextEventHandler=
function(t){n.options.currentPage(n.options.currentPage()+1);t.preventDefault()}).on("blur",".azc-pager-input-textBox input",
this._inputBlurEventHandler=function(){n._textBoxViewModel.value(n.options.currentPage().toString());
n._textBoxViewModel.validationState(2)})},t.prototype._detachEvents=function(){this._clickPageEventHandler&&
(this.element.off("click",this._clickPageEventHandler),this._clickPageEventHandler=null);this._clickArrowPreviousEventHandler&&
(this.element.off("click",this._clickArrowPreviousEventHandler),this._clickArrowPreviousEventHandler=
null);this._clickArrowNextEventHandler&&(this.element.off("click",this._clickArrowNextEventHandler),
this._clickArrowNextEventHandler=null);this._inputBlurEventHandler&&(this.element.off("blur",".azc-pager-input-textBox input",
this._inputBlurEventHandler),this._inputBlurEventHandler=null)},t.prototype._isCurrentPage=function(
n){return n===this.options.currentPage()},t.prototype._isCurrentPageFirst=function(){return 1===this.
options.currentPage()},t.prototype._isCurrentPageLast=function(){return this.options.numberOfPages()===
this.options.currentPage()},t.prototype._getDefaultResourceStrings=function(){return{previous:"Previous",
next:"Next"}},t}(f.Widget);n.Widget=t;h=function(n){function t(t){n.call(this,t)}return __extends(t,
n),t.prototype._validate=function(n){return/^[0-9]*$/.test(n)?2:1},t}(i.Validator);ko.bindingHandlers.
azcPager=f.Widget.getBindingHandler(t)}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.Pageable",["require","exports","./Grid"],function(
n,t,i){var r;return function(n){"use strict";var r=jQuery,s=window,u=".azc-grid-pageable-loadMoreContainer[href]",
f="azc-grid-pageable-onePage",t="azc-grid-pageable-full",e='<!-- ko ifnot: $root.func.getPlugin("azc-grid-pageable").options.pagerViewModel --><a class=\'azc-grid-pageable-loadMoreContainer\' data-bind=\'attr: { href: $root.func.getPlugin("azc-grid-pageable").options.loading() ? null : "#" }, visible: $root.func.getPlugin("azc-grid-pageable").options.showLabel\'><span class=\'azc-grid-pageable-loadMoreLabel\' data-bind=\'visible: !$root.func.getPlugin("azc-grid-pageable").options.loading(), text: $root.func.getPlugin("azc-grid-pageable").options.label\'><\/span><span class=\'azc-grid-pageable-loadMoreIcon\' data-bind=\'visible: $root.func.getPlugin("azc-grid-pageable").options.loading, css: { "azc-grid-pageable-showLoadingIcon": $root.func.getPlugin("azc-grid-pageable").options.loading }\'><\/span><\/a><!-- /ko --><!-- ko if: $root.func.getPlugin("azc-grid-pageable").options.pagerViewModel --><div class=\'azc-grid-pageable-pager\' data-bind=\'azcPager: $root.func.getPlugin("azc-grid-pageable").options.pagerViewModel\'><\/div><!-- /ko -->',
o=function(n){function i(t){this._options=r.extend(this._getDefaultPageableOptions(),t);n.call(this)}
return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype.afterSetTemplates=function(n){var t=n.getHtmlTemplate("table");
t.append(".azc-grid-container",e)},i.prototype.afterCreate=function(){var n=this;this.options.pagerViewModel&&
(this._onePagerComputed=ko.computed(function(){n._widget.element.toggleClass(f,n.options.pagerViewModel.
numberOfPages()===1);n._widget.element.addClass(t)}))},i.prototype.afterAttachEvents=function(){var n=
this;this._widget.element.on("click.azcPageableGrid",u,this._loadMoreDataHandler=function(t){t.preventDefault(
);t.stopPropagation();!n.options.loading()&&n.options.onLoadMoreData&&n.options.onLoadMoreData()})},
i.prototype.beforeDestroy=function(){this._loadMoreDataHandler&&(this._widget.element.off("click.azcPageableGrid",
this._loadMoreDataHandler),this._loadMoreDataHandler=null);this._onePagerComputed&&(this._onePagerComputed.
dispose(),this._onePagerComputed=null);this._widget.element.removeClass(t)},i.prototype.getName=function(
){return i.Name},i.prototype.getOrder=function(){return 20},i.prototype.shouldNotAllowSelectAll=function(
){return!0},i.prototype._getDefaultPageableOptions=function(){return{label:ko.observable("Load more"),
showLabel:ko.observable(!0),loading:ko.observable(!1)}},i.Name="azc-grid-pageable",i}(i.Extension);n.
PageableExtension=o}(r||(r={})),r});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ReorderRow",["require","exports","./Grid.Extensibility",
"./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.ReorderRow"],function(n,t,i,r,u){var f;return function(
n){"use strict";var f=window,e=jQuery,t=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.beforeDestroy=function(){this._rowReorderHandler&&(this._widget._instance.element.off(
"rowReorder",this._rowReorderHandler),this._rowReorderHandler=null)},t.prototype.getExtension=function(
n){var t=n,i=t&&t.reorderRow,r=i&&i.disabled;return new u.ReorderRowExtension({disabled:r})},t.prototype.
initializeExtension=function(){var n=this;this._widget._instance.element.on("rowReorder",this._rowReorderHandler=
function(t,i){var h=n._widget.options.extensionsOptions,f=h&&h.reorderRow,w=f&&f.automaticallyReorderRows,
c=f&&f.rowReorder,v,u,s,y,p;if(w!==!1){var r=n._widget.options.items.peek(),e=[],l=Math.min(r.length,
Math.max(0,i.position)),a=0,o=!1;for(i.rowMetadata.forEach(function(n){e.push(n.item)}),v=function(n)
{return e.indexOf(n)>=0?!0:!1},u=0,s=0;u<r.length;u++,s++)y=r[u],v(y)&&(o||(n._widget.options.items.
valueWillMutate(),o=!0),r.splice(u,1),u--,s<l&&a++);o&&(r.splice.apply(r,[l-a,0].concat(e)),n._widget.
options.items.valueHasMutated())}c&&(p={rowMetadata:i.rowMetadata.map(function(t){return n._widget.getRowMetadata(
t.item)}),position:i.position},c(t,p))})},t.prototype.getName=function(){return"ReorderRowExtension"}
,t.prototype.getOrder=function(){return 0},t}(r.GridExtension);n.ReorderRowExtension=t;i.Extensibility.
registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.ReorderRow,t)}(f||(f={})),f});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.ReorderRow",
["require","exports","../../../Util/Util","./Grid.FocusableRow","./Grid"],function(n,t,i,r,u){var f;
return function(n){"use strict";var f=jQuery,s=window,t="azc-grid-reorderRow-active",o="azc-grid-reorderRow-enabled",
h='attr: { "data-grid-reorder": true }',c="<div class='azc-grid-reorderRow-line azc-bg-muted'><\/div>",
l="<col class='azc-grid-reorderRow-col' />",a="<th class='azc-grid-reorderRow-header'><\/th>",v="<td class='azc-grid-reorderRow-cell azc-br-muted'><div><\/div><\/td>",
y="application/x-azc-grid-row",e={},p=function(n){function u(t){this._options=t||{};this._options.disabled===
undefined&&(this._options.disabled=ko.observable(!1));this._gridGuid=i.newGuid();n.call(this)}return __extends(
u,n),Object.defineProperty(u.prototype,"options",{get:function(){return this._options},enumerable:!0,
configurable:!0}),u.prototype.afterCreate=function(){var n=this;this._widget.element.append(c);ko.computed(
function(){n._widget.element.toggleClass(o,!n.options.disabled())})},u.prototype.afterSetTemplates=function(
n){var t=n.getHtmlTemplate("bodyRowsCore"),i=n.getHtmlTemplate("header"),r=n.getHtmlTemplate("colgroup");
t.addAttribute("tr","data-bind",h);t.prepend("tr",v);i.prepend("tr",a);r.prepend("colgroup",l)},u.prototype.
afterAttachEvents=function(){var n=this,r=this;this._widget.element.on("dragstart","[draggable]",this.
_dragstartEventHandler=function(t){if(!n._widget._extensionTrigger("shouldNotAllowDrag").some(function(
n){return!!n})){i.DataTransfer.isLegacyDataTransfer()&&s.getSelection().removeAllRanges();var u=i.newGuid(
),f=t.target,r=new i.DataTransfer(t.originalEvent.dataTransfer),o=document.createElement("img");o.src=
i.blankGif;e[u]={rowMetadata:ko.dataFor(f),element:f};r.effectAllowed="move";r.setDragImage(o,-25,-25);
r.setData(n._getMimeType(),u)}}).on("drop",this._dropEventHandler=function(t){var r=new i.DataTransfer(
t.originalEvent.dataTransfer),f=r.types;if(f.some(function(t){return t===n._getMimeType()})){r.dropEffect=
"move";var o=r.getData(n._getMimeType()).split(";"),s=o.map(function(n){return e[n].rowMetadata}),u=
{rowMetadata:s,clientX:t.originalEvent.pageX,clientY:t.originalEvent.pageY,position:n._positionLine(
t)};t.preventDefault();setTimeout(function(){n._widget._trigger("rowReorder",i.cloneEvent(t,"rowReorder"),
u);n._widget.options.events("reorder",u)},0)}}).on("dragend",this._dragendEventHandler=function(){e=
{};n._widget.element.removeClass(t)}).on("mouseenter.azcGrid","tbody tr[data-grid-reorder=true]:not([aria-disabled=true]) td.azc-grid-reorderRow-cell",
this._mouseenterEventHandler=function(){r.options.disabled()||f(this).closest("[role=row]").attr("draggable",
"true")}).on("mouseleave.azcGrid","tbody tr[data-grid-reorder=true]:not([aria-disabled=true]) td.azc-grid-reorderRow-cell",
this._mouseleaveEventHandler=function(){f(this).closest("[role=row]").removeAttr("draggable")});f("html").
on("dragover",this._dragoverEventHandler=function(r){if(f.contains(n._widget.element[0],r.target)){var
e=new i.DataTransfer(r.originalEvent.dataTransfer),u=e.types;u&&u.some(function(t){return t===n._getMimeType(
)})&&(n._positionLine(r),r.preventDefault())}else n._widget.element.hasClass(t)&&n._widget.element.removeClass(
t)})},u.prototype.getOrder=function(){return 21},u.prototype.getDependencies=function(){return[new r.
FocusableRowExtension]},u.prototype.beforeCreate=function(){var n=this,t=["azc-grid-editableRow"];this.
_widget.options.extensions.forEach(function(i){if(t.indexOf(i.getName())>=0)throw new Error("The extension "+
i.getName()+" is not compatible with the extension "+n.getName()+".");})},u.prototype.beforeDestroy=
function(){this._widget.element.removeClass(t).removeClass(o);this._dragstartEventHandler&&(this._widget.
element.off("dragstart",this._dragstartEventHandler),this._dragstartEventHandler=null);this._dropEventHandler&&
(this._widget.element.off("drop",this._dropEventHandler),this._dropEventHandler=null);this._dragendEventHandler&&
(this._widget.element.off("dragend",this._dragendEventHandler),this._dragendEventHandler=null);this.
_dragoverEventHandler&&(this._widget.element.off("dragover",this._dragoverEventHandler),this._dragoverEventHandler=
null);this._mouseenterEventHandler&&(this._widget.element.off("mouseenter.azcGrid",this._mouseenterEventHandler),
this._mouseenterEventHandler=null);this._mouseleaveEventHandler&&(this._widget.element.off("mouseleave.azcGrid",
this._mouseleaveEventHandler),this._mouseleaveEventHandler=null)},u.prototype.getName=function(){return u.
Name},u.prototype.getAdditionalColumns=function(){return 1},u.prototype._getMimeType=function(){return(y+
"-"+this._gridGuid).toLowerCase()},u.prototype._positionLine=function(n){var s=f(n.target),r=null,i,
e;if(s.hasClass("azc-grid-reorderRow-line"))r=this._savedIndex;else if(f.contains(this._widget.element[
0],n.target)){if(this._widget.element.hasClass(t)||this._widget.element.addClass(t),i=s.closest("[data-grid-reorder=true]"),
e=n.originalEvent,i.length===0){var h=this._widget.element.find("[data-grid-reorder=true]"),c=h.first(
),v=h.last();i=e.pageY<=c.offset().top?c:v}r=i.index();var l=i.outerHeight(),o=i.offset(),u=i.position(
),a=this._widget.element.find(".azc-grid-reorderRow-line");o.top=Math.floor(o.top);u.top=Math.floor(
u.top);e.pageY-o.top<l/2?a.css("top",Math.round(u.top)):(a.css("top",Math.round(u.top+l)),r++);this.
_savedIndex=r}else this._widget.element.removeClass(t);return r},u.Name="azc-grid-reorderRow",u}(u.Extension);
n.ReorderRowExtension=p}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.ResizableColumn",["require","exports","./Grid.Extensibility",
"./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.ResizableColumn"],function(n,t,i,r,u){var f;return function(
n){"use strict";var f=window,e=jQuery,t=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.beforeDestroy=function(){},t.prototype.getExtension=function(n){var t=n,i=t&&t.resizableColumn;
return new u.ResizableColumnExtension(i)},t.prototype.getName=function(){return"ResizableColumn"},t.
prototype.getOrder=function(){return 0},t}(r.GridExtension);n.ResizableColumnExtension=t;i.Extensibility.
registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.ResizableColumn,t)}(f||(f={})),f}
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.ResizableColumn",
["require","exports","./Grid"],function(n,t,i){var r;return function(n){"use strict";var t=jQuery,r=
window,u="azc-grid-resizing",f="<!-- ko if: $root.func.getPlugin(\"azc-grid-resizableColumn\").options.resizable() && hasHandle() --><div class='azc-grid-resizableColumn-handle'><div class='azc-grid-resizableColumn-handle-line azc-bg-muted'><\/div><\/div><!-- /ko -->",
e=function(n){function i(i){n.call(this);this._options=t.extend(this._getDefaultResizableColumnOptions(
),i)}return __extends(i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype.afterSetTemplates=function(n){var t=n.getHtmlTemplate("headerCell");
t.append("div",f)},i.prototype.afterCreate=function(){var n=this,t=this._widget.options.columns();t.
length>0&&(this._lastColumnObject=t[t.length-1],this._lastColumnObject.hasHandle(!1));this._columnsSubscription=
this._widget.options.columns.subscribe(function(t){t.length&&(n._lastColumnObject&&n._lastColumnObject.
hasHandle(!0),n._lastColumnObject=t[t.length-1],n._lastColumnObject.hasHandle(!1))})},i.prototype.afterAttachEvents=
function(){var n=this,i=this;this._widget.element.on("mousedown.azcGridResizableColumn",".azc-grid-resizableColumn-handle",
this._mouseDownEventHandler=function(i){var f,r,u,e;(n._mouseDownPosition=i.pageX,n._handle=t(i.currentTarget),
n._columns=n._widget.element.find("th"),f=n._handle.parent().closest("th"),u=ko.dataFor(f[0]),i.preventDefault(
),u.disableResizable())||(r=n._getNextResizableColumn(n._columns,n._widget.options.columns.indexOf(u)+
1),r!==null)&&(e=ko.dataFor(r[0]),ko.isObservable(u.width)&&ko.isObservable(e.width))&&n._resizeStart(
f,r)})},i.prototype.getName=function(){return i.Name},i.prototype.getOrder=function(){return 16},i.prototype.
beforeDestroy=function(){this._mouseDownEventHandler&&(this._widget.element.off("mousedown.azcGridResizableColumn",
this._mouseDownEventHandler),this._mouseDownEventHandler=null);this._mouseUpEventHandler&&(t(r.document).
off("mouseup.azcGridResizableColumn",this._mouseUpEventHandler),this._mouseUpEventHandler=null);this.
_mouseMoveEventHandler&&(t(r.document).off("mousemove.azcGridResizableColumn",this._mouseMoveEventHandler),
this._mouseMoveEventHandler=null);this._columnsSubscription&&(this._columnsSubscription.dispose(),this.
_columnsSubscription=null);this._widget.element.removeClass(u)},i.prototype.getDefaultColumnProperties=
function(){return{disableResizable:ko.observable(!1),hasHandle:ko.observable(!0)}},i.prototype._getDefaultResizableColumnOptions=
function(){return{resizable:ko.observable(!0),resizeToPercent:ko.observable(!0),minWidth:20}},i.prototype.
_resizeStart=function(n,i){var f=this,s,p=this._widget.element.find(".azc-grid-tableHeader"),w=this.
_widget.element.find(".azc-grid-tableContent"),e=t("<div class='azc-grid-resizableColumn-ghostLine azc-bg-selected'><\/div>"),
o=this._widget.element.find(".azc-grid-tableContainer"),h=n.offset().left+this._options.minWidth,c=i.
offset().left+i.width()-this._options.minWidth,l,a,v,y;s=this._handle.find(".azc-grid-resizableColumn-handle-line");
l=s.offset().left;a=this._tableOffset(o,l);e.offset({left:a});e.css("position","absolute");v=p.height(
);y=w.height();e.height(v+y);o.append(e);t(r.document).on("mousemove.azcGridResizableColumn",this._mouseMoveEventHandler=
function(n){var t=n.pageX,i=Math.min(Math.max(t,h),c);n.preventDefault();f._widget.element.addClass(
u);e.offset({left:i})});t(r.document).one("mouseup.azcGridResizableColumn",this._mouseUpEventHandler=
function(s){var l,p,w,a,b,v,k,y,g=s.pageX,d=[],nt=Math.min(Math.max(g,h),c),tt=ko.dataFor(i[0]),it=ko.
dataFor(n[0]);t(r.document).off("mousemove.azcGridResizableColumn",f._mouseMoveEventHandler);f._mouseMoveEventHandler=
null;f._widget.element.removeClass(u);e.remove();p=n.width();w=i.width();y=nt-f._mouseDownPosition;a=
p+y;b=w-y;f._options.resizeToPercent()?(l=o.width(),k=f._convertToPercent(l,b),v=f._convertToPercent(
l,a),tt.width(k)):(f._columns.each(function(n,i){var r=t(i),u=ko.dataFor(i);u.hasOwnProperty("width")?
d.push(r.width().toString()+"px"):r.width(r.width())}),f._widget.options.columns().forEach(function(
n,t){n.width(d[t])}),v=a.toString()+"px");it.width(v)})},i.prototype._getCol=function(n){return t(".col"+
this._columns.index(n))},i.prototype._getNextResizableColumn=function(n,t){var f=this._widget.options.
columns(),r,e,u,i;if(t===f.length)r=null;else if(u=f[t],u.hasOwnProperty("disableResizable")&&!u.disableResizable(
)){for(i=0;i<n.length;i++)if(ko.dataFor(n.eq(i)[0]).columnId===u.columnId){e=n.eq(i);break}r=e}else t++,
r=this._getNextResizableColumn(n,t);return r},i.prototype._convertToPercent=function(n,t){if(n>0)return(t/
n*100).toString()+"%"},i.prototype._tableOffset=function(n,t){return t-n.offset().left},i.Name="azc-grid-resizableColumn",
i}(i.Extension);n.ResizableColumnExtension=e}(r||(r={})),r});__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.Scrollable",["require","exports",
"./Grid.Extensibility","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.Scrollable"],function(n,t,i,
r,u){var f;return function(n){"use strict";var e=window,f=jQuery,t=function(n){function t(){n.apply(
this,arguments)}return __extends(t,n),t.prototype.getExtension=function(n){var i=this,r=n,t=r&&r.scrollable,
f={dataProvider:null};return t.dataNavigator&&(f.dataProvider={totalItemCount:ko.pureComputed(function(
){var n,i=t.dataNavigator.metadata();return i&&(n=i.totalItemCount),n}),fetch:function(n,r){var u;return u=
i._widget.options.sortByList?i._widget.options.sortByList():null,t.dataNavigator.loadBySkipTake(n,r,
null,u).then(function(){return t.dataNavigator.items()})}}),this._azcScrollableExtension=new u.ScrollableExtension(
f),this._azcScrollableExtension},t.prototype.initializeExtension=function(){},t.prototype.resetExtension=
function(){var n=this;return f.Deferred().resolve().promise().then(function(){n._azcScrollableExtension.
reset()})},t.prototype.beforeDestroy=function(){this._azcScrollableExtension=null},t.prototype.getName=
function(){return"Scrollable"},t.prototype.getOrder=function(){return 0},t}(r.GridExtension);n.ScrollableExtension=
t;i.Extensibility.registerPlugin(MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.Scrollable,t)}
(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Grid1/Grid.SortableColumn",
["require","exports","./Grid.Extensibility","./Grid","Viva.Controls/Controls/Lists/Grid1/Grid.SortableColumn"],
function(n,t,i,r,u){var f;return function(n){"use strict";var f=window,e=jQuery,t=function(n){function t(
){n.apply(this,arguments);this._dataNavigator=null}return __extends(t,n),t.prototype.getExtension=function(
n){var i=n,t=i&&i.sortableColumn;return t.dataNavigator&&(this._dataNavigator=t.dataNavigator),new u.
SortableColumnExtension(t)},t.prototype.initializeExtension=function(){},t.prototype.afterCreate=function(
){var n=this,i=u.SortableColumnExtension.Name,t,r=this._widget._instance.getPlugin(i),f=this._widget.
options.sortByList;f.subscribe(this._widget.lifetimeManager,t=function(){!r.options.sortClientSide()&&
n._dataNavigator&&n._dataNavigator.resetNavigation()});t()},t.prototype.beforeDestroy=function(){},t.
prototype.getName=function(){return"SortableColumn"},t.prototype.getOrder=function(){return 0},t}(r.
GridExtension);n.SortableColumnExtension=t;i.Extensibility.registerPlugin(1,t)}(f||(f={})),f});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Grid1/Grid.SortableColumn",
["require","exports","../../../Util/Util","../../../Util/ArrayUtil","./Grid"],function(n,t,i,r,u){var
f;return function(n){"use strict";var e=window,t="<a class='azc-grid-sortableColumn-target' href='#' data-bind='attr: { title: $root.func.getPlugin(\"azc-grid-sortableColumn\")._getTitle(sortOrder()), \"aria-sort\": $root.func.getPlugin(\"azc-grid-sortableColumn\")._getAria(sortOrder())}'><span class='azc-grid-headerlabel' data-bind='text: name'><\/span><span class='azc-grid-sortableColumn-sortImage' data-bind='image: $root.func.getPlugin(\"azc-grid-sortableColumn\")._getImage(sortOrder(), $data), css: sortOrder() === 0 ? \"azc-fill-muted\" : \"azc-fill-text\"'><\/span><\/a>",
f=function(n){function u(t){n.call(this);this._options=$.extend(this._getDefaultSortableOptions(),t)}
return __extends(u,n),u.prototype.setInstance=function(t){n.prototype.setInstance.call(this,t)},Object.
defineProperty(u.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),u.prototype.afterSetTemplates=function(n){var i=n.getTemplate("headerCellContent");n.setTemplate(
"headerCellContent","<!-- ko if: sortable -->"+t+"<!-- /ko --><!-- ko ifnot: sortable -->"+i+"<!-- /ko -->")}
,u.prototype.afterCreate=function(){var n=this;this._widget.lifetimeManager.registerForDispose(ko.computed(
function(){var i=n._widget.options.sortByList(),t;n._options.sortClientSide()&&(t=n._sortByKey(n._widget.
options.items(),i),n._widget.options.items(t))}))},u.prototype.afterAttachEvents=function(){var n=this;
this._widget.element.on("click.azc-grid-sortableColumn",".azc-grid-sortableColumn-target",this._sortClickHandler=
function(t){var i=ko.dataFor(this),s=i.itemKey,e,o,u,f=n._widget.options.sortByList;t.preventDefault(
);o=i.sortOrder()===1?2:1;u={itemKey:i.itemKey,sortOrder:o};t.ctrlKey?(e=r.first(f(),function(n){return n.
itemKey===s}),e?f.replace(e,u):f.push(u)):(n._resetColumns(),f([u]));i.sortOrder(o)})},u.prototype._getDefaultSortableOptions=
function(){return{sortClientSide:ko.observable(!0)}},u.prototype._resetColumns=function(){var n=this.
_widget.options.sortByList();n.length!==0&&this._widget.options.columns().forEach(function(n){n.sortOrder(
0)})},u.prototype._sortByKey=function(n,t){var u,f,r=0;return n.sort(function(n,e){for(var o=0;o<t.length;
o++)if(u=t[o],f=u.sortOrder===1?1:-1,r=f*i.compareTo(n,e,u.itemKey),r!==0)return r;return r})},u.prototype.
_getImage=function(n){switch(n){case 1:return MsPortalFx.Base.Images.CaretUp();case 2:return MsPortalFx.
Base.Images.CaretDown();default:return MsPortalFx.Base.Images.CaretUp()}},u.prototype._getAria=function(
n){switch(n){case 1:return"ascending";case 2:return"descending";default:return null}},u.prototype._getTitle=
function(n){switch(n){case 1:return"Ascending";case 2:return"Descending";default:return""}},u.prototype.
getDefaultColumnProperties=function(){return{sortable:!0,sortOrder:ko.observable(0)}},u.prototype.beforeDestroy=
function(){this._sortClickHandler&&(this._widget.element.off("click.azc-grid-sortableColumn",this._sortClickHandler),
this._sortClickHandler=null)},u.prototype.getName=function(){return u.Name},u.Name="azc-grid-sortableColumn",
u}(u.Extension);n.SortableColumnExtension=f}(f||(f={})),f});__extends=this.__extends||function(n,t){
function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/List1/Gallery",["require","exports",
"../../Base/Base","./ListView"],function(n,t,i,r){var u;return function(n){"use strict";var f=window,
e=jQuery,t="fxcontrol-gallery",u=function(n){function i(i,r,u){n.call(this,i,r,u);this.element.addClass(
t)}return __extends(i,n),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.
dispose)||(this.element.removeClass(t),n.prototype.dispose.call(this))},Object.defineProperty(i.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
i.prototype,"_selectedOverlayTemplate",{get:function(){return null},enumerable:!0,configurable:!0}),
i}(r.Widget);n.Widget=u;ko.bindingHandlers.pcGallery=i.Widget.getBindingHandler(u)}(u||(u={})),u});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Lists/Tree1/TreeView",
["require","exports","../../Base/Base","../../Base/Loadable","../../Base/Host","Viva.Controls/Controls/Lists/Tree1/Tree",
"Viva.Controls/Controls/Lists/Tree1/Tree.Selectable","Viva.Controls/Controls/Lists/Tree1/Tree.OnDemandLoadable",
"Viva.Controls/Controls/Lists/Tree1/Tree.RightClickable","Viva.Controls/Controls/Lists/Tree1/Tree.Focusable"],
function(n,t,i,r,u,f,e,o,s,h){var c;return function(n){"use strict";var a=window,t=jQuery,c="fxcontrol-treeView",
v=MsPortalFx.ViewModels.Controls.Lists.TreeView.Extensions,l=function(n){function i(i,r,u){n.call(this,
i,r,t.extend({fillBehavior:3},u));this.element.addClass(c);this._initializeWidgets()}return __extends(
i,n),Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:!0,
configurable:!0}),i.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||
(n.prototype.dispose.call(this),this.element.removeClass(c),this._rightClickHandler&&(this.element.off(
"itemRightClick",this._rightClickHandler),this._rightClickHandler=null))},i.prototype._initializeWidgets=
function(){var a=this,v=this,y=!1,p=!1,r,i=new f.ViewModel,n=this.options,c,l;if(i.padding=n.padding,
i.pathSeparator=n.pathSeparator,i.alwaysExpanded=n.alwaysExpanded,i.items=n.items,i.htmlTemplates=[],
n.htmlTemplates&&n.htmlTemplates.forEach(function(n){i.htmlTemplates.push({key:n.key,html:u.host.sanitizer.
sanitizeHTML("Controls.TreeView",n.html)})}),i.events=function(t,i){t==="select"?n.selectableData.selectedPath(
v._getPathByItem(i.selected)):t==="loading"&&n.onDemandLoadableData.loadingPath(v._getPathByItem(i.item))}
,(n.extensions&1)>0&&!!n.extensionsOptions.selectable&&(c=new e.SelectableExtension,i.extensions.push(
c),n.selectableData.selectedItem.subscribe(this.lifetimeManager,function(t){t||(c.unselect(),n.selectableData.
selectedPath(""))}),n.extensionsOptions.selectable.initialPath&&this._ensureInitialPathSelected(n.items,
n.extensionsOptions.selectable.initialPath),p=!0),(n.extensions&2)>0&&i.extensions.push(new o.OnDemandLoadableExtension),
(n.extensions&4)>0&&(i.extensions.push(new s.RightClickableExtension),p||i.extensions.push(new h.FocusableExtension),
y=!0),l=new f.Widget(this.element,i),n.toggleNodeCallback(function(n,i){l.toggleNodeExpansion(n,t.Event(
"TreeViewModelExpandNode"),i)}),this._widgets.push(l),y)this.element.on("itemRightClick",this._rightClickHandler=
function(n,i){var e=ko.utils.unwrapObservable(i.item.commandGroup),o=ko.utils.unwrapObservable(i.item.
commandGroupOwner),f,u;if(i.item.metadata.disabled())return!1;r=a._widgets.first();f=r.getPlugin(h.FocusableExtension.
Name);f._focusNode(r.getElementFromItem(i.item),i.item,n);u=t.Event(EventTypes.fxrightclick);u.clientX=
i.clientX;u.clientY=i.clientY;a.element.trigger(u,{entityType:0,commandGroup:e,commandGroupOwner:o,viewModel:
{item:i.item,path:i.path}});n.preventDefault();n.stopPropagation()})},i.prototype._getPathByItem=function(
n){return this._widgets.first()._buildPath(n)},i.prototype._ensureInitialPathSelected=function(n,t){
var i,u,e,f,o=n,s=[],r=null;if(t)for(f=t.split(this.options.pathSeparator),i=0,u=f.length;i<u;i++)if(
e=f[i].toLowerCase(),r=o().filter(function(n){return e===n.text().toLowerCase()})[0],r)o=r.items||ko.
observableArray(),s.push(r);else break;if(r){for(i=0;i<u-1;i++)s[i].metadata.expanded(!0);r.metadata.
selected(!0)}},i}(r.Widget);n.Widget=l;ko.bindingHandlers.pcTreeView=i.Widget.getBindingHandler(l)}(
c||(c={})),c});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)
t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Tree1/Tree",
["require","exports","../../../Util/TemplateEngine","../../Base/ExtensibleControl","../../../Util/StringUtil",
"../../../Util/Util","../../../Util/ArrayUtil"],function(n,t,i,r,u,f,e){var o;return function(n){"use strict";
var d=window,t=jQuery,s="azc-treeView",h="azc-treeView-always-expanded",l="<!-- ko template: { name: 'tree', templateEngine: customTemplateEngine } --><!-- /ko -->",
a="<!-- ko if: data.items().length > 0 && ($root.data.alwaysExpanded() || !data.metadata || (data.metadata.expanded() !== undefined && !data.metadata.disabled())) --><ul class='azc-treeView-node-group' data-bind='visible: $root.data.alwaysExpanded() || !data.metadata || data.metadata.expanded()'><!-- ko template: { name: 'nodes', foreach: data.items, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/ul><!-- /ko -->",
v="<!-- ko template: { name: 'nodesCore', data: $root.func._ensureItemInitialized($data), templateEngine: $root.customTemplateEngine } --><!-- /ko -->",
y='<li data-bind=\'attr: { "aria-expanded": metadata.expanded() && !metadata.disabled() ? "true" : "false", "class": $data.cssClass ? $data.cssClass() : "" }\'><div class=\'azc-treeView-node azc-node\' data-bind=\'attr: { "aria-disabled": metadata.disabled() }, css: { "azc-treeView-node-has-icon": $data.icon && icon(), "azc-row-disabled": metadata.disabled() }, style: { "paddingLeft": $root.func._paddingValue($parentContext) }\'><!-- ko template: { name: \'treeIcon\', templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- ko template: { name: \'nodeIcon\', templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- ko template: { name: \'nodeContent\', templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/div><!-- ko template: { name: \'tree\', data: { data: $data, level: true }, templateEngine: $root.customTemplateEngine } --><!-- /ko --><\/li>',
p="<!-- ko if: items().length > 0 && !$root.data.alwaysExpanded() --><div class='azc-treeView-icon'><div data-bind='css: { \"azc-treeView-icon-expanded\": metadata.expanded() && !metadata.disabled(), \"azc-treeView-icon-collapsed\": !metadata.expanded() || metadata.disabled() }'><\/div><\/div><!-- /ko -->",
w="<!-- ko if: $data.icon && icon() --><img class='azc-treeView-node-icon' data-bind='attr: { src: icon }' alt='' /><!-- /ko -->",
b="<div class='azc-treeView-node-content' data-bind='htmlBinding: $root.func._itemFormat($data)'><\/div>",
k=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t}(r.Extension),o,c;n.Extension=
k;o=function(n){function i(){n.apply(this,arguments);this.items=ko.observableArray([]);this.events=t.
noop;this.padding=ko.observable(16);this.pathSeparator="/";this.alwaysExpanded=ko.observable(!1);this.
htmlTemplates=[]}return __extends(i,n),i}(r.ViewModel);n.ViewModel=o;c=function(n){function r(r,u,f)
{n.call(this,r,u,t.extend({viewModelType:o},f));this._templateEngine=new i.HtmlTemplateEngine;this._extensionTrigger(
"beforeCreate");this._setTemplates();this.element.addClass(s).html(l);this._initializeComputeds();this.
_bindDescendants({customTemplateEngine:this._templateEngine});this._attachEvents();this._extensionTrigger(
"afterCreate")}return __extends(r,n),r.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this._extensionTrigger("beforeDestroy"),this._detachEvents(),this._cleanElement(
s,h),n.prototype.dispose.call(this),this._extensionTrigger("afterDestroy"))},Object.defineProperty(r.
prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),r.prototype.
getElementFromItem=function(n){return this.element.find(".azc-treeView-node").filter(function(t,i){return ko.
dataFor(i)===n})},r.prototype.toggleNodeExpansion=function(n,t,i){if(n&&!n.metadata.disabled()&&!this.
options.alwaysExpanded()){var r="itemExpand",u=typeof i=="boolean"?i:!n.metadata.expanded(),e={expanding:
u,item:n,cancel:!1};n.metadata.expanded()!==u&&(this._trigger(r,f.cloneEvent(t,r),e),this.options.events(
r,e),t.isDefaultPrevented()||n.metadata.expanded(u))}},r.prototype._expandNode=function(n,t,i){var r;
r=ko.dataFor(n[0]);this.toggleNodeExpansion(r,t,i)},r.prototype._buildPath=function(n){var t=this.element.
find(".azc-treeView-node").filter(function(){return n===ko.dataFor(this)});return t?t.parentsUntil(".azc-treeView",
"li").map(function(){return ko.dataFor(this).text()}).get().reverse().join(this.options.pathSeparator):
""},r.prototype._initializeComputeds=function(){var n=this;this._addDisposablesToCleanUp(ko.computed(
function(){n.element.toggleClass(h,n.options.alwaysExpanded())}))},r.prototype._paddingValue=function(
n){for(var i=0,t=n;t;)t.$data.level===!0&&(i+=1),t=t.$parentContext;return i*this.options.padding()+
"px"},r.prototype._ensureItemInitialized=function(n){return n.items||(n.items=ko.observableArray()),
n.metadata||(n.metadata={}),n.metadata.expanded||(n.metadata.expanded=ko.observable()),n.metadata.disabled||
(n.metadata.disabled=ko.observable(!1)),this._extensionTrigger("defaultItemMetadataProperties",n.metadata),
n},r.prototype._attachEvents=function(){var n=this;this._extensionTrigger("beforeAttachEvents");this.
_treeIconClickHandler=function(i){n._expandNode(t(i.target),i)};this.element.on("click.azcTreeView",
".azc-treeView-icon",this._treeIconClickHandler);this._extensionTrigger("afterAttachEvents")},r.prototype.
_detachEvents=function(){this._extensionTrigger("beforeDetachEvents");this._treeIconClickHandler&&(this.
element.off("click.azcTreeView",this._treeIconClickHandler),this._treeIconClickHandler=null);this._extensionTrigger(
"afterDetachEvents")},r.prototype._itemFormat=function(n){var i=n.templateKey?n.templateKey():null,t;
return i&&(t=e.first(this.options.htmlTemplates,function(n){return u.localeCompareIgnoreCase(i,n.key)===
0}),t&&t.html)?t.html:f.encodeHtml(n.text()||"")},r.prototype._setTemplates=function(){this._extensionTrigger(
"beforeSetTemplates",this._templateEngine);this._templateEngine.setTemplate("tree",a);this._templateEngine.
setTemplate("nodes",v);this._templateEngine.setTemplate("nodesCore",y);this._templateEngine.setTemplate(
"treeIcon",p);this._templateEngine.setTemplate("nodeIcon",w);this._templateEngine.setTemplate("nodeContent",
b);this._extensionTrigger("afterSetTemplates",this._templateEngine)},r}(r.Widget);n.Widget=c}(o||(o=
{})),o});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Tree1/Tree.Selectable",
["require","exports","./Tree.Focusable","../../../Util/Util","../../../Util/ArrayUtil","./Tree"],function(
n,t,i,r,u,f){var e;return function(n){"use strict";var t=jQuery,s=window,h='attr: { "data-treeView-selectable": true, "aria-selected": !metadata.disabled() && metadata.selected() ? "true" : "false" }',
e=".azc-treeView-node",o=e+"[data-treeView-selectable=true]:not([aria-disabled=true])",c='css: { "azc-list-selected": metadata.selected() }',
l=function(n){function f(){n.call(this)}return __extends(f,n),f.prototype.getSelected=function(){return this.
_findSelectedItem(this._widget.options.items())},f.prototype.select=function(n){this.unselect();n.metadata.
selected(!0)},f.prototype.unselect=function(){var n=this.getSelected();n&&n.metadata.selected(!1)},f.
prototype.setInstance=function(t){n.prototype.setInstance.call(this,t)},f.prototype.afterSetTemplates=
function(n){var t=n.getHtmlTemplate("nodesCore");t.addAttribute(">div","data-bind",h);t.addAttribute(
">div","data-bind",c)},f.prototype.defaultItemMetadataProperties=function(n){var t=n;t.selected||(t.
selected=ko.observable(!1));t.selectable||(t.selectable=ko.observable(!0))},f.prototype.afterAttachEvents=
function(){var n=this;this._widget.element.on("selectTreeItem.azcTreeView",this._eventSelect=function(
t,i){n._changeSelection(i,t)}).on("click.azcTreeView",o,this._eventClick=function(i){var u=t(i.currentTarget).
find(".azc-treeView-icon");u.length!==0&&(u[0]===i.target||t.contains(u[0],i.target))||n._widget._trigger(
"selectTreeItem",r.cloneEvent(i,"selectTreeItem"),this)}).on("dblclick.azcTreeView",o,this._eventDoubleClick=
function(i){n._changeSelection(this,i);n._widget._expandNode(t(this),i)}).on("keydown.azcTreeView",this.
_eventKeyDown=function(i){var r=t(i.target);switch(i.which){case 32:r.is(e)&&i.target===s.document.activeElement&&
(n._changeSelection(i.target,i),i.preventDefault())}})},f.prototype.getOrder=function(){return 20},f.
prototype.getDependencies=function(){return[new i.FocusableExtension]},f.prototype.beforeDestroy=function(
){this._eventSelect&&(this._widget.element.off("selectTreeItem.azcTreeView",this._eventSelect),this.
_eventSelect=null);this._eventClick&&(this._widget.element.off("click.azcTreeView",this._eventClick),
this._eventClick=null);this._eventDoubleClick&&(this._widget.element.off("dblclick.azcTreeView",this.
_eventDoubleClick),this._eventDoubleClick=null);this._eventKeyDown&&(this._widget.element.off("keydown.azcTreeView",
this._eventKeyDown),this._eventKeyDown=null)},f.prototype.getName=function(){return f.Name},f.prototype.
_findSelectedItem=function(n){var i,f,r,t,e=function(n){return n.metadata&&n.metadata.selected&&n.metadata.
selected()};if(t=u.first(n,e),!t)for(i=0,f=n.length;i<f;i++)if(r=n[i],r.items&&r.items().length>0&&(
t=this._findSelectedItem(r.items())),t)break;return t},f.prototype._changeSelection=function(n,t){var
i=ko.dataFor(n),u,f;(!i.metadata.selectable||i.metadata.selectable())&&i&&(u=this.getSelected(),i!==
u&&(this.select(i),f={selected:i,unselected:u},this._widget._trigger("itemSelect",r.cloneEvent(t,"itemSelect"),
f),this._widget.options.events("select",f)))},f.Name="azc-treeView-selectable",f}(f.Extension);n.SelectableExtension=
l}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Tree1/Tree.Focusable",
["require","exports","../../../Util/Util","./Tree"],function(n,t,i,r){var u;return function(n){"use strict";
var e=window,t=jQuery,o='attr: { "data-treeView-focusable": true }',s='attr: { tabindex: !metadata.disabled() && metadata.focused() ? "0" : null }',
u=".azc-treeView-node",f=u+"[data-treeView-focusable=true]:not([aria-disabled=true])",h=f+":visible",
c="azc-has-hover",l=function(n){function r(t){this._options=t||{};n.call(this)}return __extends(r,n),
Object.defineProperty(r.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),r.prototype.setInstance=function(t){n.prototype.setInstance.call(this,t)},r.prototype.afterCreate=
function(){this._widget.element.attr("tabindex",0)},r.prototype.afterSetTemplates=function(n){var t=
n.getHtmlTemplate("nodesCore"),i=n.getHtmlTemplate("tree");t.addAttribute(">div","data-bind",o);t.addAttribute(
">div","data-bind",this._getFocusDataBindAttribute());t.addAttribute(">div","class",c)},r.prototype.
defaultItemMetadataProperties=function(n){var t=n;t.focused||(t.focused=ko.observable(!1))},r.prototype.
getOrder=function(){return 10},r.prototype.afterAttachEvents=function(){var n=this;this._widget.element.
on("click.azcTreeView",f,this._eventClick=function(i){var r=t(this).closest(u);n._focusNode(r,ko.dataFor(
r[0]),i)}).on("keydown.azcTreeView",this._eventKeyDown=function(i){var u=t(i.target).not(".azc-treeView"),
r;switch(i.which){case 38:r=n._findPreviousFocusable(u);i.preventDefault();break;case 40:r=n._findNextFocusable(
u);i.preventDefault();break;case 37:i.altKey||i.ctrlKey||(n._widget._expandNode(u,i,!1),i.preventDefault(
));break;case 39:i.altKey||i.ctrlKey||(n._widget._expandNode(u,i,!0),i.preventDefault())}r&&r.length>
0&&n._focusNode(r,ko.dataFor(r.get(0)),i)}).on("itemExpand.azcTreeView",this._eventItemExpand=function(
t,i){var r=n._widget.getElementFromItem(i.item);n._focusNode(r,ko.dataFor(r[0]),t)}).on("mousedown.azcTreeView",
this._eventMouseDown=function(){n._widget.element.addClass("azc-treeView-mousedown");t("body").one("mouseup",
function(){n._widget&&n._widget.element&&n._widget.element.removeClass("azc-treeView-mousedown")})})}
,r.prototype.beforeDestroy=function(){this._eventClick&&(this._widget.element.off("click.azcTreeView",
this._eventClick),this._eventClick=null);this._eventKeyDown&&(this._widget.element.off("keydown.azcTreeView",
this._eventKeyDown),this._eventKeyDown=null);this._eventItemExpand&&(this._widget.element.off("itemExpand.azcTreeView",
this._eventItemExpand),this._eventItemExpand=null);this._eventMouseDown&&(this._widget.element.off("mousedown.azcTreeView",
this._eventMouseDown),this._eventMouseDown=null);this._lastTabbableItemMetadata=null;this._widget.element.
removeAttr("tabindex").removeClass("azc-treeView-mousedown")},r.prototype.getName=function(){return r.
Name},r.prototype._getFocusDataBindAttribute=function(){return s},r.prototype._findPreviousFocusable=
function(n){var u=n[0],r=this._getVisibleEnabledList(this._widget.element),i;if(u)for(i=r.length-1;i>=
0;i--)if(u===r[i]&&i>0)return t(r[i-1]);return t(r[r.length-1])},r.prototype._findNextFocusable=function(
n){var u=n[0],r=this._getVisibleEnabledList(this._widget.element),i;if(u)for(i=0;i<r.length;i++)if(u===
r[i]&&i<r.length-1)return t(r[i+1]);return t(r[0])},r.prototype._focusElement=function(n){var t=n.get(
0);t.focus();t.focus()},r.prototype._focusNode=function(n,r,u){var o=t(n),f,s=r.metadata;r&&o[0]!==e.
document.activeElement&&(this._lastTabbableItemMetadata&&this._lastTabbableItemMetadata.focused(!1),
this._lastTabbableItemMetadata=s,s.focused(!0),this._focusElement(o),f={focused:r},this._widget._trigger(
"itemFocus",i.cloneEvent(u,"itemFocus"),f),this._widget.options.events("focus",f))},r.prototype._getVisibleEnabledList=
function(n){return n.find(h)},r.Name="azc-treeView-focusable",r}(r.Extension);n.FocusableExtension=l}
(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Lists/Tree1/Tree.OnDemandLoadable",
["require","exports","./Tree","../../../Util/Util"],function(n,t,i,r){var u;return function(n){"use strict";
var f=jQuery,e=window,t='<!-- ko if: $root.func.getPlugin("azc-treeView-onDemandLoadable")._isExpandable($data) --><div class=\'azc-treeView-icon\'><div data-bind=\'css: { "azc-treeView-icon-expanded": $root.func.getPlugin("azc-treeView-onDemandLoadable")._isExpanded($data), "azc-treeView-icon-collapsed": $root.func.getPlugin("azc-treeView-onDemandLoadable")._isCollapsed($data), "azc-treeView-icon-loading": $root.func.getPlugin("azc-treeView-onDemandLoadable")._isLoading($data) }\'><\/div><\/div><!-- /ko -->',
u=function(n){function i(){n.call(this)}return __extends(i,n),i.prototype.afterSetTemplates=function(
n){n.setTemplate("treeIcon",t)},i.prototype.defaultItemMetadataProperties=function(n){var t=n;t.loadable||
(t.loadable=ko.observable())},i.prototype.afterAttachEvents=function(){var n=this,t;this._widget.element.
on("itemExpand.azcTreeView",this._eventItemExpand=function(i,u){var f;u.item.items().length===0&&(u.
expanding?(f=u.item.metadata,f.loadable()&&(f.loadable(!1),n._observeChildrenRemoval(u.item),t={item:
u.item,path:n._widget._buildPath(u.item)},n._widget._trigger("itemLoading",r.cloneEvent(i,"itemLoading"),
t),n._widget.options.events("loading",t))):i.preventDefault())})},i.prototype.beforeDestroy=function(
){this._eventItemExpand&&(this._widget.element.off("itemExpand.azcTreeView",this._eventItemExpand),this.
_eventItemExpand=null)},i.prototype.getOrder=function(){return 30},i.prototype.getName=function(){return i.
Name},i.prototype._observeChildrenRemoval=function(n){n.items.subscribeArrayDeletes(this._widget.lifetimeManager,
function(){n.items().length===0&&(n.metadata.expanded(!1),n.metadata.loadable(undefined))})},i.prototype.
_isExpandable=function(n){return n.items().length>0||n.metadata.loadable()!==undefined},i.prototype.
_isExpanded=function(n){return n.items().length>0&&n.metadata.expanded()&&!n.metadata.disabled()},i.
prototype._isCollapsed=function(n){return!n.metadata.expanded()||n.metadata.disabled()||n.metadata.loadable(
)},i.prototype._isLoading=function(n){return n.items().length===0&&!n.metadata.loadable()},i.Name="azc-treeView-onDemandLoadable",
i}(i.Extension);n.OnDemandLoadableExtension=u}(u||(u={})),u});__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Lists/Tree1/Tree.RightClickable",["require","exports",
"../../../Util/Util","./Tree"],function(n,t,i,r){var u;return function(n){"use strict";var u=jQuery,
f=window,t=function(n){function t(){n.call(this)}return __extends(t,n),t.prototype.afterAttachEvents=
function(){var n=this;this._widget.element.on(EventTypes.fxcontextmenurequest+".azcTreeView",".azc-treeView-node",
this._eventRightClick=function(t){var r,u;t.ctrlKey||(n._widget._trigger("selectTreeItem",i.cloneEvent(
t,"selectTreeItem"),this),u=ko.dataFor(this),r={item:u,path:n._widget._buildPath(u),clientX:t.clientX,
clientY:t.clientY},n._widget._trigger("itemRightClick",i.cloneEvent(t,"itemRightClick"),r),n._widget.
options.events("itemRightClick",r))})},t.prototype.beforeDestroy=function(){this._eventRightClick&&(
this._widget.element.off(EventTypes.fxcontextmenurequest+".azcTreeView",this._eventRightClick),this.
_eventRightClick=null)},t.prototype.getName=function(){return t.Name},t.Name="azc-treeView-rightClickable",
t}(r.Extension);n.RightClickableExtension=t}(u||(u={})),u});__extends=this.__extends||function(n,t){
function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl.Controls/Controls/LogStream",["require","exports","./Base/Base",
"./Base/Loadable","Viva.Controls/Controls/LogStream"],function(n,t,i,r,u){var f;return function(n){"use strict";
var o=window,e=jQuery,t="fxcontrol-logstream",f=function(n){function i(i,r,u){n.call(this,i,r,e.extend(
{fillBehavior:3},u));this.options.log.extend({notify:"always"});this.options.logItem.extend({notify:
"always"});this.options.logItems.extend({notify:"always"});this.options.write.extend({notify:"always"});
this.options.writeLine.extend({notify:"always"});this.options.writeText.extend({notify:"always"});this.
options.writeTextLine.extend({notify:"always"});this.options.writeTextArray.extend({notify:"always"});
this.element.addClass(t);this._initializeWidgets()}return __extends(i,n),i.prototype.dispose=function(
){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.element.removeClass(t),n.prototype.
dispose.call(this))},Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=function(){this._widgets.push(new u.
Widget(this.element,this.options))},i}(r.Widget);n.Widget=f;ko.bindingHandlers.pcLogStream=i.Widget.
getBindingHandler(f)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"MsPortalImpl.Controls/Controls/Scrollbar",["require","exports","./Base/Base","Viva.Controls/Controls/Scrollbar"],
function(n,t,i,r){var u;return function(n){"use strict";var u=window,f=jQuery,t=function(n){function t(
t,i,u){n.call(this,t,i,u);this._widgets.push(new r.Widget(this.element,this.options))}return __extends(
t,n),Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,
configurable:!0}),t.prototype.refreshContainer=function(){this._widgets[0]&&this._widgets[0].refreshContainer(
)},t}(i.Widget);n.Widget=t;ko.bindingHandlers.pcScrollbar=i.Widget.getBindingHandler(t,{controlsDescendantBindings:
!1})}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var
i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Settings",
["require","exports","./Base/Base","./Base/Loadable","Viva.Controls/Controls/Settings"],function(n,t,
i,r,u){var f;return function(n){"use strict";var f=window,e=jQuery,t=function(n){function t(t,i,r){n.
call(this,t,i,r);this._initializeSubscriptions();this._initializeWidgets()}return __extends(t,n),Object.
defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),t.prototype._initializeWidgets=function(){this._control=new u.Widget(this.element,this.options);
this._widgets.push(this._control)},t.prototype._initializeSubscriptions=function(){var n=this;this.options.
size.subscribe(function(t){n._control&&(t<=2?(n._control.options.valueClass(u.ValueClasses.Small),n.
_control.options.labelClass(u.LabelClasses.Small)):(n._control.options.valueClass(u.ValueClasses.Large),
n._control.options.labelClass(u.LabelClasses.Large)))})},t}(r.Widget);n.Widget=t;ko.bindingHandlers.
pcSettings=i.Widget.getBindingHandler(t)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Settings",["require","exports","../Util/TemplateEngine","../Util/Util",
"./Base/Base"],function(n,t,i,r,u){var f;return function(n){"use strict";var v=window,h=jQuery,e="azc-settings",
c="azc-settings-disabled",l="<!-- ko if: hasOwnProperty('uri') && ko.utils.unwrapObservable($data.uri) --><img data-bind='css: $root.func._disableCssClass($data.disabled), attr: { src: $data.uri, alt: $data.text }' /><!-- /ko --><!-- ko ifnot: hasOwnProperty('uri') && ko.utils.unwrapObservable($data.uri) --><!-- ko if: hasOwnProperty('text') --><span data-bind='css: $root.func._disableCssClass($data.disabled), text: $data.text'><\/span><!-- /ko --><!-- ko ifnot: hasOwnProperty('text') --><span data-bind='text: $data'><\/span><!-- /ko --><!-- /ko -->",
a="<ul data-bind='foreach: data.items'><!-- ko if: ($index() < ko.utils.unwrapObservable($root.data.maxItems)) --><!-- ko if: $data && (($data.value !== undefined && $data.value !== null) || ($data.label !== undefined && $data.label !== null)) --><li><!-- ko if: $data !== undefined && $data !== null --><span class='azc-settings-value' data-bind='css: $root.data.valueClass'><!-- ko template: { name: 'settings.item', templateEngine: $root.customTemplateEngine, data:$data.value } --><!-- /ko --><\/span><!-- /ko --><!-- ko if: $data !== undefined && $data !== null --><span class='azc-settings-label' data-bind='css: $root.data.labelClass'><!-- ko template: { name: 'settings.item', templateEngine: $root.customTemplateEngine, data:$data.label } --><!-- /ko --><\/span><!-- /ko --><\/li><!-- /ko --><!-- /ko --><\/ul>",
t,o,f,s;n.LabelClasses={Large:"azc-settings-label-large",Small:"azc-settings-label-small"};n.ValueClasses=
{Large:"azc-settings-value-large",Small:"azc-settings-value-small"};t=function(){function n(n,t,i){this.
text=ko.observable();this.disabled=ko.observable(!1);this.uri=ko.observable();typeof n=="object"?this.
populateFromObject(n):(ko.isObservable(n)?this.text=n:this.text(n),ko.isObservable(t)?this.disabled=
t:this.disabled(t),ko.isObservable(i)?this.uri=i:this.uri(i))}return n.prototype.populateFromObject=
function(n){r.shallowCopyFromObject(this,n)},n}();n.SettingTextItem=t;o=function(){function n(){this.
label=new t("");this.value=new t("")}return n}();n.SettingGroupItem=o;f=function(n){function t(){n.apply(
this,arguments);this.items=ko.observableArray();this.valueClass=ko.observable("azc-settings-value-small");
this.labelClass=ko.observable("azc-settings-label-small");this.maxItems=ko.observable(3);this.swapLabelValuePositions=
ko.observable(!1)}return __extends(t,n),t}(u.ViewModel);n.ViewModel=f;s=function(n){function t(t,r,u)
{n.call(this,t,r,h.extend({viewModelType:f},u));this._templateEngine=new i.StringTemplateEngine;this.
_templateEngine.setTemplate("settings.item",l);this.element.addClass(e).html(a);this._bindDescendants(
{customTemplateEngine:this._templateEngine})}return __extends(t,n),t.prototype.dispose=function(){this.
_checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this._cleanElement(e),n.prototype.dispose.call(
this))},Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),t.prototype._disableCssClass=function(n){return ko.utils.unwrapObservable(n)?c:
""},t}(u.Widget);n.Widget=s}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("MsPortalImpl.Controls/Controls/SingleSetting",["require","exports","./Base/Base","./Base/Loadable",
"Viva.Controls/Controls/SingleSetting"],function(n,t,i,r,u){var f;return function(n){"use strict";var
f=window,e=jQuery,t=function(n){function t(t,i,r){n.call(this,t,i,r);this._initializeWidgets()}return __extends(
t,n),Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,
configurable:!0}),t.prototype._initializeWidgets=function(){var n=new u.Widget(this.element,this.options);
this._widgets.push(n)},t}(r.Widget);n.Widget=t;ko.bindingHandlers.pcSingleSetting=i.Widget.getBindingHandler(
t)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i
in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Toolbars/Toolbar",
["require","exports","../Base/Host","../Base/Base","../Base/Loadable","Viva.Controls/Controls/Toolbars/ToolbarOptionsGroup",
"Viva.Controls/Controls/Toolbars/Toolbar","Viva.Controls/Controls/Toolbars/ToolbarItemType","Viva.Controls/Controls/Toolbars/CommandButton",
"Viva.Controls/Controls/Toolbars/ToggleCommandButton","Viva.Controls/Controls/Toolbars/OpenLinkButton",
"Viva.Controls/Controls/Toolbars/ToolbarButton"],function(n,t,i,r,u,f,e,o,s,h,c,l){var a;return function(
n){"use strict";var v=MsPortalFx.ViewModels.Toolbars,y=window,a=jQuery,t="fxcontrol-toolbar",o=function(
n){function r(i,r,u){n.call(this,i,r,u);this.element.addClass(t);this._initializeWidgets()}return __extends(
r,n),r.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.
element.removeClass(t),n.prototype.dispose.call(this))},Object.defineProperty(r.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),r.prototype._initializeWidgets=
function(){var n;this._nestedViewModel=new e.ViewModel;this._initializeComputeds();n=new e.Widget(this.
element,this._nestedViewModel);this._widgets.push(n)},r.prototype._initializeComputeds=function(){var
n=this;this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.items();n._groupMap={};n.
_nestedViewModel.items([]);n._populateNestedViewModel()}))},r.prototype._populateNestedViewModel=function(
){var t=this,n,r=this.options.items(),i=!0;r.forEach(function(r){var v,o,u,a,e,y;i=!0;switch(r.type)
{case 1:break;case 4:v=n=new s.ViewModel;v.populateFromObject(r);v.command=r.command;break;case 6:o=
n=new h.ViewModel;o.populateFromObject(r);o.command=r.command;u=o.optionGroupName;u&&(t._groupMap[u]?
t._groupMap[u].items.push(n):(a=new f.ViewModel(u),t._groupMap[u]=a,a.items.push(n),t._nestedViewModel.
items.push(a)),i=!1);break;case 2:n=new c.ViewModel(r.clickableLink.uri());n.populateFromObject(r);break
case 5:e=n=new l.ViewModel(5);e.populateFromObject(r);e.showDialogContainer(!0);e.command=r.command;
e.events.onClick=function(n,i){t._onClickDialog(n,i)};break;case 3:y=n=new l.ViewModel(3);y.populateFromObject(
r);y.events.onClick=function(n,i){t._onClickOpenBlade(n,i)};break;case 0:default:n=new l.ViewModel;n.
populateFromObject(r)}n.showLabel(!1);i&&t._nestedViewModel.items.push(n)})},r.prototype._onClickDialog=
function(n,t){var r=t,u=a(n).find(".azc-toolbarButton-dialogContainer");i.host.dialogManager.showDialog(
u,r.dialogOptions).then(function(n){r.command.canExecute()&&r.command.execute(n)})},r.prototype._onClickOpenBlade=
function(n,t){var i=t;i.selectable.isSelected()||i.selectable.isSelected(!0)},r}(u.Widget);n.Widget=
o;ko.bindingHandlers.pcToolbar=r.Widget.getBindingHandler(o)}(a||(a={})),a});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Toolbars/ToolbarOptionsGroup",["require",
"exports","./ToolbarGroupType","../Base/Base","./ToolbarItemType","./ToolbarGroup","../../Util/TemplateEngine"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var v=window,o=jQuery,i="azc-toolbar-optionsGroup",
s="<!-- ko template: { name: $root.func._getItemTemplateName, foreach: data.items, templateEngine: $root.customTemplateEngine } --><!-- /ko -->",
h="<li class='azc-toolbar-item' data-bind='azcToolbarCommandButton: $data'><\/li>",c="<li class='azc-toolbar-item' data-bind='azcToolbarToggleCommandButton: $data'><\/li>",
l="<li class='azc-toolbar-item' data-bind='azcToolbarOpenLinkButton: $data'><\/li>",a="<li class='azc-toolbar-item' data-bind='azcToolbarButton: $data'><\/li>",
u=function(n){function t(t){n.call(this,1);this.optionGroupName=t}return __extends(t,n),t}(f.ToolbarGroup),
t;n.ViewModel=u;t=function(n){function t(t,r,f){n.call(this,t,r,o.extend({viewModelType:u},f));this.
_templateEngine=new e.HtmlTemplateEngine;this._setTemplates();this.element.addClass(i).html(s);this.
_initializeSubscriptions(this.options);this._initializeComputeds();this._bindDescendants({customTemplateEngine:
this._templateEngine});this._supportsFocus(!0)}return __extends(t,n),t.prototype.dispose=function(){
this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this._cleanElement(i),n.prototype.dispose.
call(this))},Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),t.prototype._initializeComputeds=function(){var n=this;this._addDisposablesToCleanUp(
this._items=ko.computed(function(){var t=n.options.items().filter(function(t){return t.type===6&&n.options.
optionGroupName===t.optionGroupName});return t.forEach(function(t){t.onStateChangeCallback=function(
t,i){n._onCheckedStateChangeCallback(t,i)}}),t}))},t.prototype._onCheckedStateChangeCallback=function(
n,t){t&&this._items().forEach(function(t){t!==n&&t.checked(!1)})},t.prototype._getItemTemplateName=function(
n){switch(n.type){case 4:return"commandButtonTemplate";case 6:return"toggleButtonTemplate";case 2:return"openLinkButtonTemplate"
case 0:return"otherItemTemplate";case 3:return"otherItemTemplate";case 5:return"otherItemTemplate";default:
return""}},t.prototype._setTemplates=function(){this._templateEngine.setTemplate("commandButtonTemplate",
h);this._templateEngine.setTemplate("toggleButtonTemplate",c);this._templateEngine.setTemplate("openLinkButtonTemplate",
l);this._templateEngine.setTemplate("otherItemTemplate",a)},t}(r.Widget);n.Widget=t;ko.bindingHandlers.
azcToolbarOptionsGroup=r.Widget.getBindingHandler(t)}(o||(o={})),o});define("Viva.Controls/Controls/Toolbars/ToolbarGroupType",
["require","exports"],function(){var n;return function(n){"use strict";(function(n){n[n.None=0]="None";
n[n.OptionsGroup=1]="OptionsGroup"})(n.ToolbarGroupType||(n.ToolbarGroupType={}));var t=n.ToolbarGroupType}
(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Toolbars/ToolbarGroup",
["require","exports","./ToolbarGroupType","./ToolbarItemType","./ToolbarItem"],function(n,t,i,r,u){var
f;return function(n){"use strict";var t=function(n){function t(t){t===void 0&&(t=0);n.call(this,1);this.
items=ko.observableArray();this.groupType=t}return __extends(t,n),t}(u.ToolbarItem);n.ToolbarGroup=t}
(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Toolbars/Toolbar",
["require","exports","../../Util/TemplateEngine","../Base/Base","./ToolbarItemType","./ToolbarGroupType",
"Viva.Controls/Controls/Toolbars/CommandButton","Viva.Controls/Controls/Toolbars/ToolbarOptionsGroup",
"Viva.Controls/Controls/Toolbars/ToggleCommandButton","Viva.Controls/Controls/Toolbars/OpenLinkButton",
"Viva.Controls/Controls/Toolbars/ToolbarButton"],function(n,t,i,r){var u;return function(n){"use strict";
var p=window,o=jQuery,t="azc-toolbar",s="<ul class='azc-toolbar-container' data-bind='template: { name: $root.func._getTemplateName, foreach: data.items, templateEngine: $root.customTemplateEngine }'><\/ul>",
h="<!-- ko template: { name: $root.func._getGroupTemplateName, templateEngine: $root.customTemplateEngine } --><!-- /ko -->",
u="<ul class='azc-toolbar-group' data-bind='azcToolbarOptionsGroup: $data' ><\/ul>",c="<!-- ko template: { name: $root.func._getItemTemplateName, templateEngine: $root.customTemplateEngine } --><!-- /ko -->",
l="<li class='azc-toolbar-item' data-bind='azcToolbarCommandButton: $data'><\/li>",a="<li class='azc-toolbar-item' data-bind='azcToolbarToggleCommandButton: $data'><\/li>",
v="<li class='azc-toolbar-item' data-bind='azcToolbarOpenLinkButton: $data'><\/li>",y="<li class='azc-toolbar-item' data-bind='azcToolbarButton: $data'><\/li>",
f=function(n){function t(){n.apply(this,arguments);this.items=ko.observableArray()}return __extends(
t,n),t}(r.ViewModel),e;n.ViewModel=f;e=function(n){function r(r,u,e){n.call(this,r,u,o.extend({viewModelType:
f},e));this._templateEngine=new i.HtmlTemplateEngine;this._setTemplates();this.element.addClass(t).html(
s);this._initializeSubscriptions(this.options);this._bindDescendants({customTemplateEngine:this._templateEngine});
this._supportsFocus(!0)}return __extends(r,n),r.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this._cleanElement(t),n.prototype.dispose.call(this))},Object.defineProperty(
r.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),r.prototype.
_getTemplateName=function(n){switch(n.type){case 1:return"toolbarGroup";default:return"toolbarItem"}
},r.prototype._getGroupTemplateName=function(n){switch(n.groupType){case 1:return"optionGroupTemplate"
default:return"noneGroupTemplate"}},r.prototype._getItemTemplateName=function(n){switch(n.type){case
4:return"commandButtonTemplate";case 6:return"toggleButtonTemplate";case 2:return"openLinkButtonTemplate"
case 0:return"otherItemTemplate";case 3:return"otherItemTemplate";case 5:return"otherItemTemplate";default:
return""}},r.prototype._setTemplates=function(){this._templateEngine.setTemplate("toolbarItem",c);this.
_templateEngine.setTemplate("toolbarGroup",h);this._templateEngine.setTemplate("optionGroupTemplate",
u);this._templateEngine.setTemplate("noneGroupTemplate",u);this._templateEngine.setTemplate("commandButtonTemplate",
l);this._templateEngine.setTemplate("toggleButtonTemplate",a);this._templateEngine.setTemplate("openLinkButtonTemplate",
v);this._templateEngine.setTemplate("otherItemTemplate",y)},r}(r.Widget);n.Widget=e}(u||(u={})),u});
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Toolbars/ToggleCommandButton",
["require","exports","./ExecutableButtonBase","../Base/Base","./ToolbarItemType","./ToolbarButton"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var h=window,o=jQuery,u="azc-toggleCommandButton",
s="azc-toggleCommandButton-checked azc-fill-primary",e=function(n){function t(){n.call(this,6);this.
optionGroupName="";this.checked=ko.observable(!1);this.commandContext=ko.observable(null);this.onStateChangeCallback=
null}return __extends(t,n),t}(i.ViewModel),t;n.ViewModel=e;t=function(n){function t(t,i,r){n.call(this,
t,i,o.extend({viewModelType:e},r));this.element.addClass(u)}return __extends(t,n),t.prototype.dispose=
function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.element.removeClass(u),n.
prototype.dispose.call(this))},Object.defineProperty(t.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),t.prototype._initializeComputeds=function(){var t=this;n.prototype.
_initializeComputeds.call(this);this._addDisposablesToCleanUp(ko.computed(function(){t.element.find(
"a").toggleClass(s,t.options.checked())}))},t.prototype._isDisabled=function(){return this.options.disabled(
)||!this._canExecute()},t.prototype._onClick=function(){if(this.options.checked(!this.options.checked(
)),this.options.onStateChangeCallback)this.options.onStateChangeCallback(this.options,this.options.checked(
));this.options.command&&this.options.command.canExecute()&&this.options.command.execute({checked:this.
options.checked(),context:this.options.commandContext()})},t.prototype._canExecute=function(){return this.
options.command&&this.options.command.canExecute?this.options.command.canExecute():!1},t}(f.Widget);
n.Widget=t;ko.bindingHandlers.azcToolbarToggleCommandButton=r.Widget.getBindingHandler(t)}(e||(e={})
),e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Toolbars/OpenLinkButton",
["require","exports","./ToolbarItemType","../Base/Base","./ToolbarButton","./ClickableLink"],function(
n,t,i,r,u,f){var e;return function(n){"use strict";var o=window,s=jQuery,i="azc-openLinkButton",e=function(
n){function t(t,i){i===void 0&&(i="_blank");n.call(this,2);this.clickableLink=new f.ClickableLink(ko.
observable(t),ko.observable(i))}return __extends(t,n),t}(u.ViewModel),t;n.ViewModel=e;t=function(n){
function t(t,r,u){n.call(this,t,r,s.extend({viewModelType:e},u));this.element.addClass(i)}return __extends(
t,n),t.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(this.
element.removeClass(i),n.prototype.dispose.call(this))},Object.defineProperty(t.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),t.prototype._onClick=function(
){o.open(this.options.clickableLink.uri(),this.options.clickableLink.target())},t}(u.Widget);n.Widget=
t;ko.bindingHandlers.azcToolbarOpenLinkButton=r.Widget.getBindingHandler(t)}(e||(e={})),e});define("Viva.Controls/Controls/Toolbars/ClickableLink",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(){function n(n,
t){this.uri=n;this.target=t?t:ko.observable("_blank")}return n}();n.ClickableLink=t}(n||(n={})),n});
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/PreviewTag",
["require","exports","./Base/Base"],function(n,t,i){var r;return function(n){"use strict";var r='<span class="azc-preview-icon" data-bind="image: MsPortalFx.Base.Images.Polychromatic.Preview()"><\/span><span class="azc-preview-text" data-bind="text: MsPortalFx.Resources.Strings.ViewModels.Container.preview"><\/span>',
t="fxcontrol-preview",u=window.fx.environment.features,f=function(n){function i(i,f,e){var o=this;if(
n.call(this,i,f,e),i.addClass(t),u.showpreviewtags!=="true"){i.hide();return}i.html(r);this._bindDescendants(
);ko.reactor(this.lifetimeManager,function(){f.show()?o.element.show():o.element.hide()})}return __extends(
i,n),i.prototype.dispose=function(){this.element.removeClass(t);n.prototype.dispose.call(this)},i}(i.
Widget);n.Widget=f}(r||(r={})),r});define("MsPortalImpl/Controls/ControlBindings",["require","exports",
"../Widgets/Widgets.Common"],function(n,t,i){var r;return function(n){"use strict";function t(n){var
t=null;switch(n){case 1:t=ko.bindingHandlers.pcFormSection;break;case 2:t=ko.bindingHandlers.pcTextField;
break;case 3:t=ko.bindingHandlers.pcDropDownField;break;case 4:t=ko.bindingHandlers.pcOptionsGroupField;
break;case 5:t=ko.bindingHandlers.pcPasswordField;break;case 6:t=ko.bindingHandlers.pcSliderField;break
case 7:t=ko.bindingHandlers.pcCheckBoxField;break;case 8:t=ko.bindingHandlers.pcMultiselectDropDownField;
break;case 9:t=ko.bindingHandlers.pcRangeSliderField;break;case 10:t=ko.bindingHandlers.pcNumericTextBoxField;
break;case 11:t=ko.bindingHandlers.pcSelectorField;break;case 12:t=ko.bindingHandlers.pcFilterComboField;
break;case 13:t=ko.bindingHandlers.pcMultiLineTextField;break;case 14:t=ko.bindingHandlers.pcDateTimeComboField;
break;case 15:t=ko.bindingHandlers.pcSection;break;case 16:t=ko.bindingHandlers.pcAttachment;break;case
17:t=ko.bindingHandlers.pcStringListField;break;case 18:t=ko.bindingHandlers.pcHtmlEditorField;break
case 19:t=ko.bindingHandlers.pcHistory;break;case 20:t=ko.bindingHandlers.pcArtifactLinks;break;case
21:t=ko.bindingHandlers.pcSplitter;break;case 22:t=ko.bindingHandlers.pcTriStateCheckBox;break;case 23:
t=ko.bindingHandlers.pcCustomHtmlField;break;case 24:t=ko.bindingHandlers.pcTimePickerField;break;case
25:t=ko.bindingHandlers.pcDatePickerField;break;case 26:t=ko.bindingHandlers.pcDateTimePickerField;break
case 27:t=ko.bindingHandlers.pcDateTimeRangePickerField;break;case 29:t=ko.bindingHandlers.pcOAuthButtonField;
break;case 75:t=ko.bindingHandlers.pcConsole;break;case 31:t=ko.bindingHandlers.pcQueryBuilder;break
case 32:t=ko.bindingHandlers.pcDockedBalloon;break;case 33:t=ko.bindingHandlers.pcDiffEditor;break;case
34:t=ko.bindingHandlers.pcDiffList;break;case 35:t=ko.bindingHandlers.pcDiffView;break;case 36:t=ko.
bindingHandlers.pcDiscussionTimeline;break;case 37:t=ko.bindingHandlers.pcEditor;break;case 38:t=ko.
bindingHandlers.pcButton;break;case 39:t=ko.bindingHandlers.pcCheckBox;break;case 40:t=ko.bindingHandlers.
pcCopyableLabel;break;case 41:t=ko.bindingHandlers.pcDateTimeCombo;break;case 42:t=ko.bindingHandlers.
pcDropDown;break;case 28:t=ko.bindingHandlers.pcFileUpload;break;case 43:t=ko.bindingHandlers.pcFilterCombo;
break;case 44:t=ko.bindingHandlers.pcGroupDropDown;break;case 45:t=ko.bindingHandlers.pcMultiLineTextBox;
break;case 46:t=ko.bindingHandlers.pcMultiselectDropDown;break;case 47:t=ko.bindingHandlers.pcNumericTextBox;
break;case 48:t=ko.bindingHandlers.pcOptionPicker;break;case 49:t=ko.bindingHandlers.pcPassword;break
case 50:t=ko.bindingHandlers.pcRangeSlider;break;case 51:t=ko.bindingHandlers.pcSelector;break;case 52:
t=ko.bindingHandlers.pcSlider;break;case 53:t=ko.bindingHandlers.pcTextBox;break;case 54:t=ko.bindingHandlers.
pcGrid;break;case 55:t=ko.bindingHandlers.pcGallery;break;case 56:t=ko.bindingHandlers.pcListView;break
case 57:t=ko.bindingHandlers.pcTreeView;break;case 58:t=ko.bindingHandlers.pcLogStream;break;case 59:
t=ko.bindingHandlers.pcScrollbar;break;case 60:t=ko.bindingHandlers.pcSettings;break;case 61:t=ko.bindingHandlers.
pcSingleSetting;break;case 62:t=ko.bindingHandlers.pcToolbar;break;case 63:t=ko.bindingHandlers.pcChart;
break;case 64:t=ko.bindingHandlers.pcCsmTopology;break;case 65:t=ko.bindingHandlers.pcDonut;break;case
66:t=ko.bindingHandlers.pcGauge;break;case 67:t=ko.bindingHandlers.pcGraph;break;case 68:t=ko.bindingHandlers.
pcMap;break;case 69:t=ko.bindingHandlers.pcMetrics;break;case 70:t=ko.bindingHandlers.pcPairedTimeline;
break;case 71:t=ko.bindingHandlers.pcProgressBar;break;case 72:t=ko.bindingHandlers.pcQuotaGauge;break
case 73:t=ko.bindingHandlers.pcSingleValueGauge;break;case 74:t=ko.bindingHandlers.pcStepGauge;break
case 76:t=ko.bindingHandlers.pcDeleteAssetConfirmation;break;case 77:t=ko.bindingHandlers.pcHeroBanner;
break;case 78:t=ko.bindingHandlers.pcInfoBox;break;case 87:t=ko.bindingHandlers.pcInfoBox;break;case
82:t=ko.bindingHandlers.pcFileDownloadButton;break;case 79:t=ko.bindingHandlers.pcNotice;break;case 80:
t=ko.bindingHandlers.pcPicker;break;case 81:t=ko.bindingHandlers.pcFileUploadWidget;break;case 30:t=
ko.bindingHandlers.pcTokenComboBox;break;case 83:t=ko.bindingHandlers.pcCreatorAndSelector;break;case
85:t=ko.bindingHandlers.pcCreatorAndSelectorV2;break;case 84:t=ko.bindingHandlers.pcHotSpot;break;case
88:t=ko.bindingHandlers.pcHotSpot;break;case 89:t=ko.bindingHandlers.pcPreviewTag;break;default:throw new
Error("Unknown ControlType: "+n+".");}return t}n.portalControlBindings=[{name:"pcDeleteAssetConfirmation",
moduleId:"MsPortalImpl/Controls/Controls.DeleteAssetConfirmation"},{name:"pcHeroBanner",moduleId:"MsPortalImpl/Controls/Controls.HeroBanner"},
{name:"pcInfoBox",moduleId:"MsPortalImpl/Controls/Controls.InfoBox"},{name:"pcFileDownloadButton",moduleId:
"MsPortalImpl/Controls/Controls.FileDownloadButton"},{name:"pcNotice",moduleId:"MsPortalImpl/Controls/Controls.Notice"},
{name:"pcPicker",moduleId:"MsPortalImpl/Controls/Controls.Picker"},{name:"pcPickerV3",moduleId:"MsPortalImpl/Controls/Controls.PickerV3"},
{name:"pcFileUploadWidget",moduleId:"MsPortalImpl/Controls/Forms/Controls.FileUpload"},{name:"pcTokenComboBox",
moduleId:"MsPortalImpl/Controls/Forms/Controls.TokenComboBox"},{name:"pcHotSpot",moduleId:"MsPortalImpl/Controls/Controls.HotSpot",
initOptions:{controlsDescendantBindings:!1}},{name:"pcCheckBoxField",moduleId:"MsPortalImpl.Controls/Fields/CheckBoxField"},
{name:"pcCreatorAndSelector",moduleId:"MsPortalImpl.Controls/Fields/CreatorAndSelectorField"},{name:
"pcCustomHtmlField",moduleId:"MsPortalImpl.Controls/Fields/CustomHtmlField"},{name:"pcDatePickerField",
moduleId:"MsPortalImpl.Controls/Fields/DatePickerField"},{name:"pcDateTimeComboField",moduleId:"MsPortalImpl.Controls/Fields/DateTimeComboField"},
{name:"pcDateTimePickerField",moduleId:"MsPortalImpl.Controls/Fields/DateTimePickerField"},{name:"pcDateTimeRangePickerField",
moduleId:"MsPortalImpl.Controls/Fields/DateTimeRangePickerField"},{name:"pcDropDownField",moduleId:"MsPortalImpl.Controls/Fields/DropDownField"},
{name:"pcFilterComboField",moduleId:"MsPortalImpl.Controls/Fields/FilterComboField"},{name:"pcHtmlEditorField",
moduleId:"MsPortalImpl.Controls/Fields/HtmlEditorField"},{name:"pcMultiLineTextField",moduleId:"MsPortalImpl.Controls/Fields/MultiLineTextField"},
{name:"pcMultiselectDropDownField",moduleId:"MsPortalImpl.Controls/Fields/MultiselectDropDownField"},
{name:"pcNumericTextBoxField",moduleId:"MsPortalImpl.Controls/Fields/NumericTextBoxField"},{name:"pcOptionsGroupField",
moduleId:"MsPortalImpl.Controls/Fields/OptionsGroupField"},{name:"pcPasswordField",moduleId:"MsPortalImpl.Controls/Fields/PasswordField"},
{name:"pcRangeSliderField",moduleId:"MsPortalImpl.Controls/Fields/RangeSliderField"},{name:"pcSection",
moduleId:"MsPortalImpl.Controls/Fields/Section"},{name:"pcSelectorField",moduleId:"MsPortalImpl.Controls/Fields/SelectorField"},
{name:"pcSliderField",moduleId:"MsPortalImpl.Controls/Fields/SliderField"},{name:"pcTextField",moduleId:
"MsPortalImpl.Controls/Fields/TextField"},{name:"pcTimePickerField",moduleId:"MsPortalImpl.Controls/Fields/TimePickerField"},
{name:"pcTriStateCheckBox",moduleId:"MsPortalImpl.Controls/Fields/TriStateCheckBox"},{name:"pcChart",
moduleId:"MsPortalImpl.Controls/Controls/Visualization/Chart"},{name:"pcCsmTopology",moduleId:"MsPortalImpl.Controls/Controls/Visualization/CsmTopology"},
{name:"pcDonut",moduleId:"MsPortalImpl.Controls/Controls/Visualization/Donut"},{name:"pcGauge",moduleId:
"MsPortalImpl.Controls/Controls/Visualization/Gauge"},{name:"pcGraph",moduleId:"MsPortalImpl.Controls/Controls/Visualization/Graph"},
{name:"pcMap",moduleId:"MsPortalImpl.Controls/Controls/Visualization/Map"},{name:"pcMetrics",moduleId:
"MsPortalImpl.Controls/Controls/Visualization/Metrics"},{name:"pcPairedTimeline",moduleId:"MsPortalImpl.Controls/Controls/Visualization/PairedTimeline"},
{name:"pcProgressBar",moduleId:"MsPortalImpl.Controls/Controls/Visualization/ProgressBar"},{name:"pcQuotaGauge",
moduleId:"MsPortalImpl.Controls/Controls/Visualization/QuotaGauge"},{name:"pcSingleValueGauge",moduleId:
"MsPortalImpl.Controls/Controls/Visualization/SingleValueGauge"},{name:"pcStepGauge",moduleId:"MsPortalImpl.Controls/Controls/Visualization/StepGauge"},
{name:"pcDiffEditor",moduleId:"MsPortalImpl.Controls/Controls/Documents/DiffEditor"},{name:"pcDiffList",
moduleId:"MsPortalImpl.Controls/Controls/Documents/DiffList"},{name:"pcDiffView",moduleId:"MsPortalImpl.Controls/Controls/Documents/DiffView"},
{name:"pcDiscussionTimeline",moduleId:"MsPortalImpl.Controls/Controls/Documents/DiscussionTimeline"},
{name:"pcEditor",moduleId:"MsPortalImpl.Controls/Controls/Documents/Editor"},{name:"pcPreviewTag",moduleId:
"MsPortalImpl.Controls/Controls/PreviewTag"},];n.portalControlBindings.forEach(function(n){ko.bindingHandlers[
n.name]=i.getAsyncBindingHandler(n.moduleId,n.initOptions)});ko.bindingHandlers.pcControl={init:function(
n,i,r,u,f){var o=ko.utils.unwrapObservable(i()),e;if(o&&(e=t(o.controlType),e))return $(n).attr("data-formelement",
$(n).attr("data-bind")),e.init(n,i,r,u,f)},update:function(n,i,r,u,f){var o=ko.utils.unwrapObservable(
i()),e;o&&n&&(e=t(o.controlType),e&&e.update(n,i,r,u,f))}}}(r||(r={})),r});define("MsPortalImpl/Base/Base.KnockoutExtensions.SanitizedCssBinding",
["require","exports","./Base.KnockoutTemplateSanitizer"],function(n,t,i){var r;return function(){"use strict";
function t(n,t){var i=ko.utils.unwrapObservable(n()),r=e(i,t);return function(){return r}}function e(
n,t){var r;if(n&&typeof n=="object")return r={},Object.getOwnPropertyNames(n).forEach(function(f){u.
isSerializableProperty(f)&&(i.isAllowedCssClassName(f)?r[f]=n[f]:f&&t.push(f))}),r;var f=String(n||""),
e=f.split(" "),o=Array.prototype.map.call(e,function(n){return n=String(n||""),i.isAllowedCssClassName(
n)?n:(n&&t.push(n),"")});return o.join(" ")}function o(n,t){var i=n.getAttribute("data-bind")||"None",
u=f.format(String(n.tagName),i,t.join(", "));r.error(u)}var s=window,r=MsPortalFx.Base.Diagnostics.createLog(
n),u=MsPortalFx.Base.Utilities,f="Sanitization error found in 'sanitizedCss' binding\nTag name: {0}; Binding attribute: \"{1}\"\nDisallowed class name(s): {2}";
ko.bindingHandlers.sanitizedCss={init:function(n,i,r,u,f){if(ko.bindingHandlers.css.init){var e=t(i,
[]);return ko.bindingHandlers.css.init(n,e,r,u,f)}return null},update:function(n,i,r,u,f){var e=[],s=
t(i,e);return e.length>0&&o(n,e),ko.bindingHandlers.css.update(n,s,r,u,f)}}}(r||(r={})),r});define("MsPortalImpl/Base/Base.KnockoutExtensions.TextLinesBinding",
["require","exports"],function(n){var t;return function(){"use strict";var i=window,r=jQuery,t=MsPortalFx.
Base.Diagnostics.createLog(n);ko.bindingHandlers.textLines={after:["text","css","sanitizedCss","html",
"sanitizedHtml"],init:function(){t.error("textLines binding is deprecated and will be removed June 30 2015 at the latest.")}
,update:function(){}}}(t||(t={})),t});define("MsPortalImpl/Base/JQueryExtensions",["require","exports"],
function(){var t=MsPortalFx.Base.EventTypes,n;return function(){"use strict";var i=window,n=jQuery;n.
fn.findByClassName=function(n){return this.find("."+n)};n.fn.handleTransitionEndOnce=function(r,u,f)
{var s=this,e,h=!1,o;this.on(t.transitionend,e=function(n){n&&n.originalEvent&&n.originalEvent.propertyName!==
r||h||(h=!0,s.off(t.transitionend,e),f.apply(s,arguments))});return o=function(){var t=n.Event("transitionend",
{originalEvent:{propertyName:r}});e(t)},n.fx.off?o():i.setTimeout(o,u),this};n.enableAnimations=function(
t){var i="fxs-transition-off-style-head-marker",u=n("<style/>").addClass(i).append("* { transition: none !important; }"),
r=n("head");n.fx.off=!t;t?r.findByClassName(i).remove():r.findByClassName(i).length===0&&r.append(u)}
}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/Controls.Wizard",
["require","exports","MsPortalImpl.Controls/Controls/Base/Base","MsPortalImpl.Controls/Controls/Base/Loadable",
"MsPortalImpl.Controls/Controls/Lists/Grid1/Grid"],function(n,t,i,r,u){var e=MsPortalFx.ViewModels.Controls.
Lists.Grid,f;return function(t){"use strict";var l=window,h=MsPortalFx.Base.Resources.getImages(MsPortalImpl.
Resources.Images.ControlsWizard),f=MsPortalFx.Base.Diagnostics.createLog(n),o="fxcontrol-wizard",c="<div class='fxcontrol-wizard-step'><div class='fxcontrol-wizard-step-status' data-bind='css: settings.item.statusCssClass'><\/div><div class='fxcontrol-wizard-stepId'><!-- ko if: settings.item.callbackInProgress() || ko.utils.unwrapObservable(settings.item.icon) --><img class='fxcontrol-wizard-stepIconUri' alt='' data-bind='attr: { src: settings.item.icon }' /><!-- /ko --><!-- ko ifnot: ko.utils.unwrapObservable(settings.item.icon) --><div class='fxcontrol-wizard-stepNumber' data-bind='text: (settings.rowNumber() + 1)'><\/div><!-- /ko --><\/div><div class='fxcontrol-wizard-content'><!-- ko if: settings.item.selector --><div data-bind='formElement: settings.item.selector'><\/div><!-- /ko --><!-- ko ifnot: settings.item.selector --><div class='fxcontrol-wizard-chevron' data-bind='image: settings.item.chevronIcon'><\/div><div class='fxcontrol-wizard-content-leftPane'><div class='fxcontrol-wizard-title' data-bind='text: settings.item.title'><\/div><div class='fxcontrol-wizard-description msportalfx-tooltip-overflow' data-bind='text: settings.item.description'><\/div><\/div><!-- /ko --><\/div><\/div>",
s=function(n){function t(t,i,r){n.call(this,t,i,r);this._selectionUpdatedFromSelectedItems=!1;this._selectionOverridenByComposition=
null;this.element.addClass(o);this._initializeSubscriptions();this._initializeWidgets()}return __extends(
t,n),t.prototype.dispose=function(){var t=this;this._selectableData=null;this._gridWidget&&(this._gridWidget.
options&&this._gridWidget.options.items&&this._gridWidget.options.items().forEach(function(n){t._disposeGridItem(
n)}),this._gridWidget.dispose(),this._gridWidget=null);this._gridViewModel&&this._gridViewModel.dispose(
);this.element.removeClass(o);n.prototype.dispose.call(this)},Object.defineProperty(t.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,
"gridViewModel",{get:function(){return this._gridViewModel},enumerable:!0,configurable:!0}),t.prototype.
_initializeWidgets=function(){var n=this;this._gridViewModel=this._getGridViewModel();this._gridWidget=
new u.TrustedWidget(this.element,this._gridViewModel);this._selectableData=this._gridWidget.options.
selectableData;this._selectableData.selectedItems.subscribe(this.lifetimeManager,function(){var i=n.
_selectableData.selectedItems.slice(0),t=n._selectableData.selectedItems.subscribe(function(r){var u,
e,o;f.verbose("wizard: selectableData.selectedItems.subscribe ### START: {0}".format(ko.toJSON(r)));
u=ko.utils.fixupArrayEdits(ko.utils.compareArrays(i,r));u.filter(function(n){return n.status==="added"}
).length>1&&f.error("More than one 'added' not allowed in wizard since it uses single select mode.");
u.filter(function(n){return n.status==="deleted"}).length>1&&f.error("More than one 'deleted' not allowed in wizard since it uses single select mode.");
e=u.first(function(n){return n.status==="added"});o=u.first(function(n){return n.status==="deleted"}
);e?(n._selectionOverridenByComposition&&(n._selectionOverridenByComposition=null),n._clearThrottleHandle(
),MsPortalFx.Base.Utilities.deepEquals(n.options.selection(),e.value)||(f.verbose("wizard: selectableData.selectedItems.subscribe: INNER add item: {0}".
format(ko.toJSON(e.value))),n._selectionUpdatedFromSelectedItems=!0,n.options.selection(e.value))):o&&
n.options.selection()&&(n._clearThrottleHandle(),f.verbose("wizard: selectableData.selectedItems.subscribe: OUTER remove item: {0}".
format(ko.toJSON(n.options.selection()))),n._throttleSelectionChangeHandle=setTimeout(function(){f.verbose(
"wizard: selectableData.selectedItems.subscribe: INNER remove item: {0}".format(ko.toJSON(n.options.
selection())));n._selectionUpdatedFromSelectedItems=!0;n.options.selection(undefined)},0));t&&(t.dispose(
),t=null);f.verbose("wizard: selectableData.selectedItems.subscribe ### END: {0}".format(ko.toJSON(r)))}
)},null,"beforeChange");this.options.selection.subscribe(this.lifetimeManager,function(t){f.verbose(
"wizard: selection.subscribe ### START: {0}".format(ko.toJSON(t)));n._onSelectionChanged(t);n._selectionUpdatedFromSelectedItems=
!1;f.verbose("wizard: selection.subscribe ### END: {0}".format(ko.toJSON(t)))});this._loadSavedState(
this.options.savedState())},t.prototype._initializeSubscriptions=function(){var n=this;this.options.
savedState.subscribe(this.lifetimeManager,function(t){n._loadSavedState(t)});this.options.stepOutput.
subscribe(this.lifetimeManager,function(t){n._processStepOutput(t)})},t.prototype._clearThrottleHandle=
function(){this._throttleSelectionChangeHandle&&(f.verbose("wizard: cleared the selection change handle"),
clearTimeout(this._throttleSelectionChangeHandle),this._throttleSelectionChangeHandle=null)},t.prototype.
_processStepOutput=function(n){var r=this,f=this._previousStepOutput,t=this._gridViewModel.items().first(
function(t){return n.stepId===t.stepId}),i,u;(this._previousStepOutput=n,t&&!MsPortalFx.Base.Utilities.
deepEquals(f,n))&&(t.status(n.status),i={action:n.action},u=i.action===2||i.action===4,u?n.status===
3&&(t.status(1),this._triggerWizardEvent(t.stepComplete,t,function(){t.status(n.status);r._changeStepIfApplicable(
n,i);i.action===4&&r._triggerWizardEvent(r.options.complete,null,function(){r.options.beginExecuteCommand(
!0)})},function(){t.status(2)})):this._changeStepIfApplicable(n,i))},t.prototype._getGridViewModel=function(
){var n=this,u=MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow,f={selectableRow:{
selectionMode:1,itemMatchesSelection:this._itemMatchesSelection,createSelection:function(t){return n.
createSelection(t)},activateOnSelected:ko.observable(!0)}},t=ko.observableArray([]),i=new e.ViewModel(
this.lifetimeManager,t,u,f),r=function(r){if(r.stepType===1&&(r.selector.selectable.isSelected=i.getRowMetadata(
r).selected),n.options.mode===0){var u=i.getRowMetadata(r);n._addDisposablesToCleanUp(ko.computed(function(
){for(var e=t(),o=e.indexOf(r),i,f,n=o-1;n>=0;n--)if(f=e[n],!f.isOptional){i=f;break}u.disabled(i&&i.
status()!==3)}))}},o=this.options.steps.subscribe(function(){var i=n.options.steps.slice(0),u=n.options.
steps.subscribe(function(f){ko.utils.fixupArrayEdits(ko.utils.compareArrays(i,f)).forEach(function(i)
{var u,f;switch(i.status){case"added":u=n._createGridItem(i.value);t.splice(i.index,0,u);r(u);break;
case"deleted":f=t.splice(i.index,1);f.length&&f.forEach(function(t){n._disposeGridItem(t)})}});u.dispose(
)})},null,"beforeChange");return this.lifetimeManager.registerForDispose(o),this.options.steps().forEach(
function(i){var u=n._createGridItem(i);t.push(u);r(u)}),i.showHeader=!1,i.columns=ko.observableArray(
[{itemKey:"title",format:1e3,formatOptions:{htmlBindingsTemplate:c,htmlBindingsType:0}}]),i},t.prototype.
createSelection=function(n){var t=this._gridViewModel.items(),r=t.indexOf(n),i=t.some(function(n,t){
return t<r&&!n.isOptional&&n.status()!==3});return i||n.status()===0&&n.status(1),{extension:n.extension,
detailBlade:n.formBlade,detailBladeInputs:this._getDetailBladeInputs(n,i),stepId:n.stepId}},t.prototype.
_createGridItem=function(n){var r=this,i={stepId:n.stepId,stepType:n.stepType,title:n.title,description:
n.description,iconUri:n.iconUri,status:n.status,isOptional:n.isOptional,formBlade:n.formBlade,extension:
n.extension,stepLoad:n.stepLoad,stepComplete:n.stepComplete,icon:null,callbackInProgress:ko.observable(
!1),statusCssClass:null,chevronIcon:null};return i.icon=ko.computed(function(){var t=n.iconUri&&n.iconUri(
),r=i.callbackInProgress();return r&&(t=h.loadingImage),t}),this._addDisposablesToCleanUp(i.icon),i.
statusCssClass=ko.computed(function(){switch(n.status()){case 0:return"fxcontrol-wizard-step-status-notstarted"
case 1:return"fxcontrol-wizard-step-status-inprogress";case 2:return"fxcontrol-wizard-step-status-error"
case 3:return"fxcontrol-wizard-step-status-success";default:return"fxcontrol-wizard-step-status-unknown"}
}),this._addDisposablesToCleanUp(i.statusCssClass),i.stepType===1?i.selector=t._getSelectorViewModel(
this.lifetimeManager,n):(i.chevronIcon=ko.computed(function(){var t=n.status();return t===3&&r.options.
mode===0?MsPortalFx.Base.Images.Check():MsPortalFx.Base.Images.Shell.Chevron()}),this._addDisposablesToCleanUp(
i.chevronIcon)),i},t.prototype._disposeGridItem=function(n){n.icon&&n.icon.dispose();n.statusCssClass&&
n.statusCssClass.dispose();n.selector&&n.selector.dispose();n.chevronIcon&&n.chevronIcon.dispose()},
t._getSelectorViewModel=function(n,t){var i=new MsPortalFx.ViewModels.Forms.Selector.ViewModel(n);return i.
label=t.title,i.defaultValue=t.defaultValue,i.isDefault=t.isDefault,i.displayText=t.displayText,i.locked=
t.locked,i.infoBalloonText=t.infoBalloonText,i.lockedBalloonText=t.lockedBalloonText,i},t.prototype.
_getDetailBladeInputs=function(n,t){var i=this._gridViewModel.items(),r=i.indexOf(n),u=i.length-1,f=
n.isOptional&&this.options.mode===0;return{stepInput:{stepId:n.stepId,status:n.status(),isFirstStep:
r===0,isLastStep:r===u,isOptional:f,disabled:t}}},t.prototype._changeStepIfApplicable=function(n,t){
if(t.action!==0){var r=this._gridViewModel.items().firstIndex(function(t){return n.stepId===t.stepId}
),i,u,f;r<this._gridViewModel.items().length-1&&t.action===4&&(t.action=2);switch(t.action){case 1:i=
r-1;break;case 2:case 3:i=r+1;break;default:i=r}if(!(i<0)&&!(i>=this._gridViewModel.items().length))
{if(t.action===4||this.options.mode===1){this._selectableData.selectedItems([]);return}u=this._gridViewModel.
items()[i];f=this.createSelection(u);this._selectableData.selectedItems([f])}}},t.prototype._triggerWizardEvent=
function(n,t,i,r){var f=this,u;if(r===void 0&&(r=$.noop),n&&typeof n=="function"){t&&t.callbackInProgress(
!0);try{u=n(t);u?u.then(function(){f._invokeCallback(i,t)},function(){f._invokeCallback(r,t)}):this.
_invokeCallback(i,t)}catch(e){this._invokeCallback(r,t)}}else i()},t.prototype._invokeCallback=function(
n,t){try{n&&n()}finally{t&&t.callbackInProgress(!1)}},t.prototype._loadSavedState=function(n){if(n){
var t=n.selectedStepId;t===undefined&&this._gridViewModel.items().length&&(t=this._gridViewModel.items(
)[0].stepId);this._selectableData.selectableItems().forEach(function(i){var r=i.data,u=n.stepStatuses.
first(function(n){return r.stepId===n.stepId}),f=u?u.status:0;r.status(f);t&&r.stepId===t&&i.isSelected(
!0)})}},t.prototype._onSelectionChanged=function(n){var r=this,t,i;if(this._selectionUpdatedFromSelectedItems||
(this._selectionOverridenByComposition=n),t=[],this._gridViewModel.items().forEach(function(n){t.push(
{stepId:n.stepId,status:n.status()})}),this.options.currentState({stepStatuses:t,selectedStepId:n?n.
stepId:null}),!n){while(this._selectableData.selectedItems().length)this._selectableData.selectedItems.
pop();return}i=this._gridViewModel.items().first(function(t){return r._itemMatchesSelection(t,n)});this.
_selectionUpdatedFromSelectedItems?(f.verbose("wizard: this._selectionUpdatedFromSelectedItems === true"),
this._triggerWizardEvent(i.stepLoad,i,function(){r._selectableData.selectedItems([n])})):(f.verbose(
"wizard: this._selectionUpdatedFromSelectedItems === false"),this._selectableData.selectedItems([n]))}
,t.prototype._itemMatchesSelection=function(n,t){return n.stepId===t.stepId},t}(r.Widget);t.Widget=s;
ko.bindingHandlers.pcWizard=i.Widget.getBindingHandler(s)}(f||(f={})),f});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/Forms/Controls.FileUpload",["require","exports",
"../../Base/Base.Sanitization","MsPortalImpl/Resources/ImplScriptResources","MsPortalImpl.Controls/Fields/Base/Field",
"Viva.Controls/Controls/Forms/FileUpload2","Viva.Controls/Controls/Base/Validators","Viva.Controls/Controls/Base/ValidationPlacements/Css"],
function(n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var g=window,t=jQuery,h=3,c=1e3,l=1,
a=8,v="block-",y="&comp=block&blockid=",p="&comp=blocklist",w="BlockBlob",s="PUT",b={placeholderText:
r.Controls.FileUpload.placeholderText,singleFileSelectedMessage:r.Controls.FileUpload.singleFileSelectedMessage,
multipleFilesSelectedMessage:r.Controls.FileUpload.multipleFilesSelectedMessage,fileSizeExceededMessage:
r.Controls.FileUpload.fileSizeExceededMessage,fileNotFoundMessage:r.Controls.FileUpload.fileNotFoundMessage,
fileNotReadablMessage:r.Controls.FileUpload.fileNotReadablMessage,fileReadAbortedMessage:r.Controls.
FileUpload.fileReadAbortedMessage,fileReadErrorMessage:r.Controls.FileUpload.fileReadErrorMessage,uploadStatusPending:
r.Controls.FileUpload.uploadStatusPending,uploadStatusError:r.Controls.FileUpload.uploadStatusError,
uploadStatusDone:r.Controls.FileUpload.uploadStatusDone,progressBarGroupUploadedMessage:r.Controls.FileUpload.
progressBarGroupUploadedMessage,progressBarGroupUploadingMessage:r.Controls.FileUpload.progressBarGroupUploadingMessage,
progressBarGroupSuccessMessage:r.Controls.FileUpload.progressBarGroupSuccessMessage,progressBarGroupFailureMessage:
r.Controls.FileUpload.progressBarGroupFailureMessage,progressBarGroupCanceledMessage:r.Controls.FileUpload.
progressBarGroupCanceledMessage},k=function(){function n(n,t){this._containerSasUri=null;this._targetSasUri=
null;this._blockIds=[];this._widget=n;this._selectedFile=t}return n.prototype.uploadToBlobStore=function(
n){var t=this,i;switch(n.status){case 3:case 4:i=n.data;this._uploadBlockBlobToTargetSasUriWrapper(i.
content).then(function(){if(!t._selectedFile.cancelUpload())if(i.endByte!==t._selectedFile.size){var
r=t._getBlobUploadResult(2,n.progressPercent,n.valid);t._selectedFile.uploadResult(r);t._selectedFile.
resumeUpload(!0)}else t._commitBlockBlobUpload().then(function(){if(!t._selectedFile.cancelUpload())
{var i=t._getBlobUploadResult(4,n.progressPercent,n.valid);i.data={type:2,contentType:1,content:t._targetSasUri};
t._selectedFile.uploadResult(i)}},function(i){t._updateErrorUploadResult(n.progressPercent,i)})},function(
i){t._updateErrorUploadResult(n.progressPercent,i)})}},n.prototype._fetchBlobStoreSasUri=function(){
var u=this,n=Q.defer(),t;if(this._containerSasUri)n.resolve();else{if(t=this._widget.options.uploadContext(
),!t.sasUriCommand())return n.reject(r.Controls.FileUpload.sasUriCommandNotProvided),n.promise;t.sasUriCommand(
).execute(t.context()).then(function(t){i.sanitizeUri(t)?(u._containerSasUri=t,n.resolve()):n.reject(
r.Controls.FileUpload.invalidSasUri)},function(t){var i=u._getAjaxStatus(t);n.reject(r.Controls.FileUpload.
actionFailedWithDetails.format(r.Controls.FileUpload.sasUriFailed,r.Controls.FileUpload.ajaxErrorDetails.
format(i.status,i.statusText)))})}return n.promise},n.prototype._uploadBlockBlobToTargetSasUriWrapper=
function(n){var t=this;return this._fetchBlobStoreSasUri().then(function(){return t._uploadBlockBlobToTargetSasUri(
n)})},n.prototype._uploadBlockBlobToTargetSasUri=function(n){var u=this._generateBlockId(this._blockIds.
length),t,i;return this._blockIds.push(btoa(u)),t=this._getSasTargetUri()+y+this._blockIds[this._blockIds.
length-1],i=function(){return MsPortalFx.Base.Net.ajax({uri:t,type:s,processData:!1,contentType:!1,data:
n,headers:{"x-ms-blob-type":w}})},this._retryPromise(r.Controls.FileUpload.uploadBlockBlob,i)},n.prototype.
_commitBlockBlobUpload=function(){var n=this,t=this._getSasTargetUri()+p,i=function(){return MsPortalFx.
Base.Net.ajax({uri:t,type:s,data:n._createCommitRequest(),headers:{"x-ms-blob-content-type":n._selectedFile.
mimetype}})};return this._retryPromise(r.Controls.FileUpload.commitBlockBlob,i)},n.prototype._updateErrorUploadResult=
function(n,t){if(!this._selectedFile.cancelUpload()){var i=this._getBlobUploadResult(0,n,!1);this._widget.
_addValidator(new e.Invalid(t));this._selectedFile.uploadResult(i)}},n.prototype._getBlobUploadResult=
function(n,i,r){var u=t.extend({},this._selectedFile.uploadResult());return u.status=n,u.progressPercent=
i,u.valid=r,u.data=null,u},n.prototype._getSasTargetUri=function(){var t,i,n;return this._targetSasUri||
(t=this._widget.options.uploadContext(),i=t.skipSasUriUpdateWithSelectedFile&&t.skipSasUriUpdateWithSelectedFile(
),this._targetSasUri=this._containerSasUri,!i&&this._containerSasUri&&(n=this._containerSasUri.indexOf(
"?"),this._targetSasUri=n>=0?this._containerSasUri.substring(0,n)+"/"+this._selectedFile.name+this._containerSasUri.
substring(n):this._containerSasUri.length>0&&this._containerSasUri[this._containerSasUri.length-1]===
"/"?this._containerSasUri+this._selectedFile.name:this._containerSasUri+"/"+this._selectedFile.name)),
this._targetSasUri},n.prototype._createCommitRequest=function(){for(var t='<?xml version="1.0" encoding="utf-8"?><BlockList>',
n=0;n<this._blockIds.length;n++)t+="<Latest>"+this._blockIds[n]+"<\/Latest>";return t+"<\/BlockList>"}
,n.prototype._generateBlockId=function(n){for(var t=""+n;t.length<a;)t="0"+t;return v+t},n.prototype.
_getAjaxStatus=function(n){var t={status:0,statusText:""};return MsPortalFx.Base.Utilities.isNullOrUndefined(
n)||(t.status=MsPortalFx.Base.Utilities.isNullOrUndefined(n.status)?0:n.status,t.statusText=MsPortalFx.
Base.Utilities.isNullOrUndefined(n.statusText)?"none":n.statusText),t},n.prototype._isTransientHttpError=
function(n){switch(n){case 408:case 504:case 502:case 500:case 503:return!0}return!1},n.prototype._retryPromise=
function(n,t,i,r,u){i===void 0&&(i=h);r===void 0&&(r=c);u===void 0&&(u=l);var f=Q.defer();return this.
_retryPromiseWorker(n,t,f,i,1,u,r),f.promise},n.prototype._retryPromiseWorker=function(n,t,i,u,f,e,o,
s){var h=this,c;s===void 0&&(s=null);f>u?(c=s?r.Controls.FileUpload.actionFailedWithDetails.format(r.
Controls.FileUpload.ajaxActionFailed.format(n),r.Controls.FileUpload.actionFailedWithDetails.format(
r.Controls.FileUpload.exceededMaxRetries,s)):r.Controls.FileUpload.actionFailedWithDetails.format(r.
Controls.FileUpload.ajaxActionFailed.format(n),r.Controls.FileUpload.exceededMaxRetries),i.reject(c)):
t().then(i.resolve,function(s){MsPortalFx.Base.Diagnostics.Log.writeEntry(1,"Controls","{0} failed. Retry attempt {1}.".
format(n,f));var c=h._getAjaxStatus(s);h._isTransientHttpError(c.status)?setTimeout(function(){h._retryPromiseWorker(
n,t,i,u,f+1,e,o*(1+e),r.Controls.FileUpload.ajaxErrorDetails.format(c.status,c.statusText))},o):i.reject(
r.Controls.FileUpload.actionFailedWithDetails.format(r.Controls.FileUpload.ajaxActionFailed.format(n),
r.Controls.FileUpload.ajaxErrorDetails.format(c.status,c.statusText)))})},n}(),d=function(n){function i(
t,i,r){this._blobStoreUploaderMap={};n.call(this,t,i,r)}return __extends(i,n),Object.defineProperty(
i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(
i.prototype,"validatableViewModel",{get:function(){return this._vivaFileUploadViewModel},enumerable:
!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableWidget",{get:function(){return this.
_vivaFileUploadWidget},enumerable:!0,configurable:!0}),i.prototype.dispose=function(){this._vivaFileUploadWidget&&
(this._vivaFileUploadWidget.dispose(),this._vivaFileUploadWidget=null,this._vivaFileUploadViewModel=
null);this._cleanElement("azc-fileUploadField","fxcontrol-FileUpload");n.prototype.dispose.call(this)}
,i.prototype._addValidator=function(n){this._vivaFileUploadWidget.addValidator(n)},i.prototype._initializeField=
function(){n.prototype._initializeField.call(this);this.element.addClass("azc-fileUploadField").addClass(
"fxcontrol-FileUpload");this._fileUploadFieldInit()},i.prototype._fileUploadFieldInit=function(){var
i=this,n;this._vivaFileUploadViewModel=new f.ViewModel;n=t("<div />");this.appendControl(n);this._linkFileUploadViewModels(
);this._vivaFileUploadWidget=new f.Widget(n,this._vivaFileUploadViewModel);this._addWidget(this._vivaFileUploadWidget);
this.setupValidationBindings();this._vivaFileUploadWidget.options.files.subscribe(this.lifetimeManager,
function(n){i._blobStoreUploaderMap={};i.options.files(n)})},i.prototype._linkFileUploadViewModels=function(
){var n=this;this._vivaFileUploadViewModel.value=this.options.value;this._vivaFileUploadViewModel.accept=
this.options.accept;this._vivaFileUploadViewModel.maxFiles=this.options.maxFiles;this._vivaFileUploadViewModel.
uploadContext=this.options.uploadContext;this._vivaFileUploadViewModel.showProgressBars=this.options.
showProgressBars;this._vivaFileUploadViewModel.text=b;this._vivaFileUploadViewModel.validationPlacements.
push(new o.Css);this._vivaFileUploadViewModel.onFileChunkUploadCallback=function(t,i){n._onFileChunkUploadCallback(
t,i)};this.linkValidatableControlViewModels()},i.prototype._onFileChunkUploadCallback=function(n,t){
var i=this._blobStoreUploaderMap[n.name];i||(this._blobStoreUploaderMap[n.name]=i=new k(this,n));i.uploadToBlobStore(
t)},i}(u.FieldWidget);n.Widget=d}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Forms/FileUpload2",["require","exports","../../Util/TemplateEngine",
"../Base/ValidationPlacements/DockedBalloon","../Base/Validators","../../Base/Base.TriggerableLifetimeManager",
"../Base/ValidationPlacements/Css","./TextBox","../DockedBalloon","./Button","../Base/Base","../Base/ValidatableControl",
"../../Util/StringUtil","MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r,u,f,e,o,s,h,c,
l,a,v){var y;return function(n){"use strict";var dt=window,y=jQuery,ft=0,t="azc-fileUpload2",w="azc-fileUpload-state-hover",
g="azc-fileUpload-hasfocus",et="__azc-fileUpload",nt=".azc-fileUpload-progressBar-cancelUpload",tt=".azc-fileUpload-progressBarGroup-cancelUpload",
it=".azc-fileUpload-progresBarGroup-collapseAll",b=2097152,ot=b,st=209715200,ht=1048576,ct=53687091200,
lt=b,at="<div class='azc-fileUpload-wrapper'><div class='azc-fileUpload-selectedFile' data-bind='azcTextBox: func._textBoxViewModel'><\/div><button class='azc-btn-secondary' data-bind='azcButton: func._buttonViewModel'><svg width='16px' height='16px' x='0px' y='0px' viewBox='0 0 12 12' enable-background='new 0 0 12 12' xml: space='preserve' ><path d ='M11.3,3H1v9h10.4c0.3,0,0.6-0.3,0.6-0.6V3H11.3z'><\/path><path d ='M1,3v8.6C1,11.9,0.9,12,0.6,12C0.3,12,0,12.1,0,11.8V1h3.8l1.4,1H12v1H1z'><\/path><\/svg><\/button><input type='file' class='azc-fileUpload-overlay azc-formControl' data-bind='attr: { name: func._name, accept: data.accept, multiple: data.maxFiles > 1 }'><\/input><\/div><div class='azc-fileUpload-progressBars' data-bind='visible: data.showProgressBars'><!--ko if: data.files().length === 1 --><!-- ko foreach: data.files() --><!-- ko if: !$data.cancelUpload() --><!-- ko template: { name: 'progressBar', templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- /ko --><!-- /ko --><!-- /ko --><!--ko if: data.files().length > 1 --><!-- ko template: { name: 'progressBarGroup', templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- ko if: !$root.func._progressBarGroupCollapseAll() --><!-- ko foreach: data.files() --><!-- ko if: !$data.cancelUpload() --><!-- ko template: { name: 'progressBar', templateEngine: $root.customTemplateEngine } --><!-- /ko --><!-- /ko --><!-- /ko --><!-- /ko --><!-- /ko --><\/div>",
vt="<div class='azc-fileUpload-progressBar'><div class='azc-fileUpload-progressBarAndCancel-container'><div class='azc-fileUpload-progressBar-container'><div class='azc-fileUpload-progress-value' data-bind='style: { width: (($data.uploadResult().progressPercent * 100) + \"%\") }, css: {\"azc-bg-success\": $data.uploadResult().valid, \"azc-bg-invalid\": !$data.uploadResult().valid }'><\/div><div class='azc-fileUpload-progress-background'><\/div><\/div><a href='#' class='azc-fileUpload-progressBar-cancelUpload azc-fill-text' tabindex='0'><svg x='0px' y='0px' width='16px' height='16px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'><polygon points='15,3.475 12.539,1.001 8.006,5.534 3.474,1.001 1,3.475 5.52,8.007 1,12.527 3.474,15.001 7.994, 10.481 12.526, 15.014 15, 12.54 10.467, 8.007'/><\/svg><\/a><div class='azc-fileUpload-progresBar-infoBalloon' data-bind='azcDockedBalloon: $root.func._getProgressInfoBalloonViewModel($data)'><\/div><\/div><div class='azc-fileUpload-progressDetails' data-bind='text: $data.name'><\/div><\/div>",
yt="<div class='azc-fileUpload-progressBarGroup'><div class='azc-fileUpload-progressBarAndCancel-container'><div class='azc-fileUpload-progressBar-container'><div class='azc-fileUpload-progress-value' data-bind='style: { width: (($root.func._progressBarGroupPercent() * 100) + \"%\") }, css: {\"azc-bg-success\": $root.func._progressBarGroupValid(), \"azc-bg-invalid\": !$root.func._progressBarGroupValid() }'><\/div><div class='azc-fileUpload-progress-background'><\/div><\/div><a href='#' class='azc-fileUpload-progressBarGroup-cancelUpload azc-fill-text' tabindex='0'><svg x='0px' y='0px' width='16px' height='16px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'><polygon points='15,3.475 12.539,1.001 8.006,5.534 3.474,1.001 1,3.475 5.52,8.007 1,12.527 3.474,15.001 7.994, 10.481 12.526, 15.014 15, 12.54 10.467, 8.007'/><\/svg><\/a><a href='#' class='azc-fileUpload-progresBarGroup-collapseAll azc-fill-text' tabindex='0'><!-- ko if: $root.func._progressBarGroupCollapseAll() --><svg x='0px' y='0px' width='16px' height='16px' viewBox='0 0 11.9 7' enable-background='new 0 0 11.9 7' xml:space='preserve'><polygon points='5.1,6.1 5.1,6.1 6,7 6.8,6.1 6.8,6.1 11.9,1 10.9,0 6,4.9 1,0 0,1'/><\/svg><!-- /ko --><!-- ko if: !$root.func._progressBarGroupCollapseAll() --><svg x='0px' y='0px' width='16px' height='16px' viewBox='0 0 11.9 7' enable-background='new 0 0 11.9 7' xml:space='preserve'><polygon points='5.1, 0.9 5.1, 0.9 6, 0 6.8, 0.9 6.8, 0.9 11.9, 6 10.9, 7 6, 2.1 1, 7 0, 6' /><\/svg><!-- /ko --><\/a><\/div><div class='azc-fileUpload-progressDetails' data-bind='text: $root.func._progressBarGroupDetails'><\/div><\/div>",
pt={validationStateBalloonOptions:{pending:{balloonVisible:!1}}},wt,bt,kt,p,rt,ut,k,d;(function(n){n[
n.Full=0]="Full";n[n.Stream=1]="Stream";n[n.BlobStore=2]="BlobStore"})(n.FileUploadType||(n.FileUploadType=
{}));wt=n.FileUploadType,function(n){n[n.Default=0]="Default";n[n.Text=1]="Text";n[n.ArrayBuffer=2]=
"ArrayBuffer";n[n.DataUri=3]="DataUri"}(n.ContentType||(n.ContentType={}));bt=n.ContentType,function(
n){n[n.Invalid=0]="Invalid";n[n.Pending=1]="Pending";n[n.Uploading=2]="Uploading";n[n.Paused=3]="Paused";
n[n.Complete=4]="Complete";n[n.Canceled=5]="Canceled"}(n.UploadStatus||(n.UploadStatus={}));kt=n.UploadStatus;
p=function(){function n(){this.type=0;this.contentType=0;this.encoding=null;this.maxFileSize=b;this.
chunkSize=ot}return n}();n.FullFileUploadContext=p;rt=function(n){function t(){n.call(this);this.type=
1;this.maxFileSize=st;this.chunkSize=ht}return __extends(t,n),t}(p);n.StreamFileUploadContext=rt;ut=
function(n){function t(){n.call(this);this.context=ko.observable();this.type=2;this.maxFileSize=ct;this.
chunkSize=lt;this.skipSasUriUpdateWithSelectedFile=ko.observable(!1)}return __extends(t,n),t}(p);n.BlobStoreFileUploadContext=
ut;k=function(n){function t(){n.apply(this,arguments);this.accept="";this.maxFiles=1;this.uploadContext=
ko.observable();this.files=ko.computed(function(){return[]});this.cancelAllUploads=ko.observable(!1);
this.showProgressBars=ko.observable(!0);this.onFileChunkUploadCallback=null}return __extends(t,n),t}
(l.ViewModel);n.ViewModel=k;d=function(n){function c(u,s,c){this._lifetimeManger=new f.TriggerableLifetimeManager;
this._templateEngine=new i.HtmlTemplateEngine;n.call(this,u,s,y.extend({viewModelType:k},c));this._setTemplates(
);this._addDisposablesToCleanUp(this._lifetimeManger);this.element.addClass(t).html(at);this._name=this.
options.name||et+ft++;this._input=this.element.find(".azc-fileUpload-selectedFile");this._inputOverlay=
this.element.find("input.azc-fileUpload-overlay");this._progressBarGroupValid=ko.observable(!1);this.
_progressBarGroupPercent=ko.observable(0);this._progressBarGroupDetails=ko.observable(v.Viva.FileUpload.
singleFileSelected);this._progressBarGroupCollapseAll=ko.observable(!1);this._selectedFiles=ko.observableArray(
[]);this._autoReadBookmarks={};this._progressInfoBalloon={};this.options.text=this.options.text||this.
_getDefaultResourceStrings();this._internalValidators=ko.observableArray([]);this._textBoxViewModel=
new o.ViewModel;this._textBoxViewModel.validationPlacements.push(new e.Css);this._textBoxViewModel.validationPlacements.
push(new r.DockedBalloon(pt));this._textBoxViewModel.readonly(!0);this._textBoxViewModel.placeholder(
this.options.text.placeholderText);this._buttonViewModel=new h.ViewModel;this._buttonViewModel.tabindex(
-1);this._attachEvents();this._initializeComputeds();this._bindDescendants({customTemplateEngine:this.
_templateEngine});this._afterCreate()}return __extends(c,n),c.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(this._detachEvents(),this._cleanElement(t,w),n.prototype.dispose.call(this))}
,Object.defineProperty(c.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),c.prototype.read=function(n,t){var u=this._autoReadBookmarks[n.name],f=this._files[n.name],r,i;
t?(r=t,i=t+this.options.uploadContext().chunkSize):u?(r=u.startByte+this.options.uploadContext().chunkSize,
i=u.endByte+this.options.uploadContext().chunkSize):(r=n.uploadStartByte>0?n.uploadStartByte:0,i=r+this.
options.uploadContext().chunkSize);i>f.size&&(i=f.size);this._autoReadBookmarks[n.name]={startByte:r,
endByte:i};this.readChunk(n,r,i)},c.prototype.addValidator=function(n){this._internalValidators.push(
n)},c.prototype._getElementToFocus=function(){return this._inputOverlay[0]},c.prototype.readChunk=function(
n,t,i){var f=this,e=new FileReader,s=this._files[n.name],o,r=y.extend({},n.uploadResult());if(r.valid&&
s&&!this.options.disabled()){e.onload=function(u){if(!n.cancelUpload()){r=y.extend({},r);switch(f.options.
uploadContext().type){case 0:r.data={type:f.options.uploadContext().type,contentType:f.options.uploadContext(
).contentType,content:u.target.result};break;case 1:case 2:r.data={type:f.options.uploadContext().type,
contentType:f.options.uploadContext().contentType,content:u.target.result,startByte:t,endByte:i}}r.progressPercent=
i/n.size;r.progressPercent>=1?(r.progressPercent=1,r.status=4):r.status=3;f._autoReadBookmarks[n.name]=
{startByte:t,endByte:i};n.resumeUpload(!1);switch(f.options.uploadContext().type){case 0:case 1:n.uploadResult(
r);break;case 2:if(f.options.onFileChunkUploadCallback)f.options.onFileChunkUploadCallback(n,r)}}};e.
onerror=function(t){var r=f._getFileReadErrorMessage(t,n),i=y.extend({},i);i.valid=!1;i.status=0;i.data=
null;n.uploadResult(i);f._internalValidators.push(new u.Invalid(r))};r.status=2;n.uploadResult(r);o=
s.slice(t,i,s.type);switch(this.options.uploadContext().contentType){case 1:this.options.uploadContext(
).encoding?e.readAsText(o,this.options.uploadContext().encoding):e.readAsText(o);break;case 3:e.readAsDataURL(
o);break;case 0:case 2:default:e.readAsArrayBuffer(o)}}else n.resumeUpload(!1)},c.prototype._setTemplates=
function(){this._templateEngine.setTemplate("progressBar",vt);this._templateEngine.setTemplate("progressBarGroup",
yt)},c.prototype._getFileReadErrorMessage=function(n,t){var i;switch(n.target.error.code){case n.target.
error.NOT_FOUND_ERR:i=a.format(this.options.text.fileNotFoundMessage,t.name);break;case n.target.error.
NOT_READABLE_ERR:i=a.format(this.options.text.fileNotReadablMessage,t.name);break;case n.target.error.
ABORT_ERR:i=a.format(this.options.text.fileReadAbortedMessage,t.name);break;default:i=a.format(this.
options.text.fileReadErrorMessage,t.name)}return i},c.prototype._initializeComputeds=function(){var n=
this;this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.disabled();n.element.find(
"input.azc-fileUpload-overlay").prop("disabled",t);n._buttonViewModel.disabled(t);n._textBoxViewModel.
disabled(t);n.options.cancelAllUploads(t)}));this._addDisposablesToCleanUp(ko.computed(function(){var
t=n.options.dirty();n._textBoxViewModel.dirty(t)}));this._addDisposablesToCleanUp(this._displayedString=
ko.computed(function(){var i=null,t=n._selectedFiles();return t.length===1?i=t[0].name:t.length>1&&(
i=a.format(n.options.text.multipleFilesSelectedMessage,t.length)),i},this));this._addDisposablesToCleanUp(
this.options.files=ko.computed(function(){var i=n._selectedFiles()||[],t,r=!1,f=[];return n._autoReadBookmarks=
{},n._resetValidationState(),i.length>0&&(i.forEach(function(i){t=y.extend({},i.uploadResult.peek());
f.push(i.name);i.cancelUpload(!1);i.resumeUpload(!1);t.valid=!0;t.status=1;t.progressPercent=0;t.data=
null;(!n._files[i.name]||i.size===0||i.size>n.options.uploadContext().maxFileSize)&&(t.valid=!1,t.status=
0,r=!0);i.uploadResult(t)}),r?n._internalValidators.push(new u.Invalid(a.format(n.options.text.fileSizeExceededMessage,
n.options.uploadContext().maxFileSize))):n._resetValidationState(),n.options.value(f.join(";"))),i}));
this._addDisposablesToCleanUp(ko.computed(function(){var u=n.options.files(),e=!0,o=!0,f=0,i=0,t=0;if(
!n.options.disabled()&&n.options.showProgressBars()&&u.length>1){u.forEach(function(n){var r=n.uploadResult(
);r.valid||(e=!1);r.status!==0&&r.status!==4&&r.status!==5&&(o=!1);r.status===0&&f++;r.status===5?i++:
t+=r.progressPercent});t=t/(u.length-i);t>1&&(t=1);var h=o?n.options.text.progressBarGroupUploadedMessage:
n.options.text.progressBarGroupUploadingMessage,c=u.length-f-i,s="{0} | {1}",r=a.format(n.options.text.
progressBarGroupSuccessMessage,c,h);f>0&&(r=a.format(s,r,a.format(n.options.text.progressBarGroupFailureMessage,
f)));i>0&&(r=a.format(s,r,a.format(n.options.text.progressBarGroupCanceledMessage,i)));n._progressBarGroupValid(
e);n._progressBarGroupPercent(t);n._progressBarGroupDetails(r)}}));this._addDisposablesToCleanUp(ko.
computed(function(){n.options.cancelAllUploads()&&n._selectedFiles(n._toSelectedFileArray([]))}));this.
_addDisposablesToCleanUp(ko.computed(function(){n._textBoxViewModel.validators(n.options.validators(
))}));this._addDisposablesToCleanUp(ko.computed(function(){n._textBoxViewModel.validationState(n.options.
validationState())}));this._addDisposablesToCleanUp(ko.computed(function(){n._textBoxViewModel.value(
n._displayedString())}));this._internalValidators.subscribeArrayChanges(this._lifetimeManger,function(
t){n.options.validators.push(t)},function(t){n.options.validators.remove(t)})},c.prototype._attachEvents=
function(){var n=this,i=this;this._detachEvents();this._inputOverlayFocusHandler=function(){n._focus(
)};this._inputOverlayBlurHandler=function(){n._blur()};this._inputOverlayChangeHandler=function(t){var
i=t.target;i.files&&n._selectedFiles(n._toSelectedFileArray(i.files))};this._inputOverlayMouseEnterHandler=
function(){n._mouseEnter()};this._inputOverlayMouseLeaveHandler=function(){n._mouseLeave()};this._inputOverlayClickHandler=
function(){n._inputOverlay.val("")};this._inputOverlay.on("focus."+t,this._inputOverlayFocusHandler).
on("blur."+t,this._inputOverlayBlurHandler).on("change."+t,this._inputOverlayChangeHandler).on("mouseenter."+
t,this._inputOverlayMouseEnterHandler).on("mouseleave."+t,this._inputOverlayMouseLeaveHandler).on("click."+
t,this._inputOverlayClickHandler);this.element.on("click.azcFileUploadProgressCancelButton",nt,this.
_progressBarCancelHandler=function(n){n.preventDefault();var t=ko.dataFor(this);t.cancelUpload(!0)});
this.element.on("click.azcFileUploadProgressCancelButton",tt,this._progressBarGroupCancelHandler=function(
t){t.preventDefault();n.options.cancelAllUploads(!0)});this.element.on("click.azcFileUploadProgressGroupCollapseAllButton",
it,this._progressBarGroupCollapseAllHandler=function(t){t.preventDefault();n._progressBarGroupCollapseAll(
!n._progressBarGroupCollapseAll())})},c.prototype._detachEvents=function(){this._inputOverlayFocusHandler&&
(this._inputOverlay.off("focus."+t,this._inputOverlayFocusHandler),this._inputOverlayFocusHandler=null);
this._inputOverlayBlurHandler&&(this._inputOverlay.off("blur."+t,this._inputOverlayBlurHandler),this.
_inputOverlayBlurHandler=null);this._inputOverlayChangeHandler&&(this._inputOverlay.off("change."+t,
this._inputOverlayChangeHandler),this._inputOverlayChangeHandler=null);this._inputOverlayMouseEnterHandler&&
(this._inputOverlay.off("mouseenter."+t,this._inputOverlayMouseEnterHandler),this._inputOverlayMouseEnterHandler=
null);this._inputOverlayMouseLeaveHandler&&(this._inputOverlay.off("mouseleave."+t,this._inputOverlayMouseLeaveHandler),
this._inputOverlayMouseLeaveHandler=null);this._inputOverlayClickHandler&&(this._inputOverlay.off("click."+
t,this._inputOverlayClickHandler),this._inputOverlayClickHandler=null);this._progressBarCancelHandler&&
(this.element.off("click.azcFileUploadProgressCancelButton",nt,this._progressBarCancelHandler),this.
_progressBarCancelHandler=null);this._progressBarGroupCancelHandler&&(this.element.off("click.azcFileUploadProgressCancelButton",
tt,this._progressBarGroupCancelHandler),this._progressBarGroupCancelHandler=null);this._progressBarGroupCollapseAllHandler&&
(this.element.off("click.azcFileUploadProgressGroupCollapseAllButton",it,this._progressBarGroupCollapseAllHandler),
this._progressBarGroupCollapseAllHandler=null)},c.prototype._focus=function(){this._textBoxViewModel.
focused(!0);this.element.toggleClass(g,!0)},c.prototype._blur=function(){this._textBoxViewModel.focused(
!1);this.element.toggleClass(g,!1)},c.prototype._mouseEnter=function(){this.options.disabled()||(this.
element.addClass(w),this.options.validationState()===1&&this.element.find(".azc-dockedballoon-anchor").
trigger("mouseenter"))},c.prototype._mouseLeave=function(){this.options.disabled()||(this.element.removeClass(
w),this.options.validationState()===1&&this.element.find(".azc-dockedballoon-anchor").trigger("mouseleave"))}
,c.prototype._getDefaultResourceStrings=function(){return{placeholderText:v.Viva.FileUpload.placeholder,
singleFileSelectedMessage:v.Viva.FileUpload.singleFileSelected,multipleFilesSelectedMessage:v.Viva.FileUpload.
multipleFilesSelected,fileSizeExceededMessage:v.Viva.FileUpload.fileSizeExceeded,fileNotFoundMessage:
v.Viva.FileUpload.fileNotFound,fileNotReadablMessage:v.Viva.FileUpload.fileNotReadable,fileReadAbortedMessage:
v.Viva.FileUpload.fileReadAborted,fileReadErrorMessage:v.Viva.FileUpload.fileReadError,uploadStatusPending:
v.Viva.FileUpload.uploadStatusPending,uploadStatusError:v.Viva.FileUpload.uploadStatusError,uploadStatusDone:
v.Viva.FileUpload.uploadStatusDone,progressBarGroupUploadedMessage:v.Viva.FileUpload.progressBarGroupUploaded,
progressBarGroupUploadingMessage:v.Viva.FileUpload.progressBarGroupUploading,progressBarGroupSuccessMessage:
v.Viva.FileUpload.progressBarGroupSuccess,progressBarGroupFailureMessage:v.Viva.FileUpload.progressBarGroupFailure,
progressBarGroupCanceledMessage:v.Viva.FileUpload.progressBarGroupCanceled}},c.prototype._resetValidationState=
function(){this._internalValidators.removeAll()},c.prototype._toSelectedFileArray=function(n){var f=
[],i,t,u,e=n.length,r;for(this._files={},this._autoReadBookmarks={},this._progressInfoBalloon={},this.
options.cancelAllUploads(!1),this._uploadSubscribeLifetimeManager&&(this._uploadSubscribeLifetimeManager.
dispose(),this._uploadSubscribeLifetimeManager=null),this._uploadSubscribeLifetimeManager=this._lifetimeManger.
createChildLifetime(),!this.options.maxFiles||this.options.maxFiles>n.length||(e=this.options.maxFiles),
u=0;u<e;u++)t=n[u],i={name:t.name,mimetype:t.type,size:t.size,cancelUpload:ko.observable(!1),resumeUpload:
ko.observable(!1),uploadStartByte:0,uploadResult:ko.observable({valid:!1,status:1,progressPercent:0,
data:null})},f.push(i),this._files[t.name]=t,r=new s.ViewModel,r.type=0,r.content(this.options.text.
uploadStatusPending),this._linkProgressBarInfoBalloonContent(i,r),this._progressInfoBalloon[t.name]=
r,this._subscribeForCancelUpload(i),this._subscribeForResumeUpload(i);return f},c.prototype._subscribeForResumeUpload=
function(n){var t=this;this._uploadSubscribeLifetimeManager.registerForDispose(n.resumeUpload.subscribe(
function(i){i&&!n.cancelUpload()&&t.read(n)}))},c.prototype._subscribeForCancelUpload=function(n){var
t=this;this._uploadSubscribeLifetimeManager.registerForDispose(n.cancelUpload.subscribe(function(i){
if(i){var r=y.extend({},n.uploadResult());r.status!==4&&r.status!==0&&(r.valid=!0,r.status=5,r.data=
null,n.uploadResult(r));t._selectedFiles().length===1&&t._selectedFiles(t._toSelectedFileArray([]))}
}))},c.prototype._getProgressInfoBalloonViewModel=function(n){return this._progressInfoBalloon[n.name]}
,c.prototype._linkProgressBarInfoBalloonContent=function(n,t){var i=this;this._uploadSubscribeLifetimeManager.
registerForDispose(t.content=ko.computed(function(){return i._getProgressDetailsLabel(n.uploadResult(
))}))},c.prototype._getProgressDetailsLabel=function(n){if(!n)return"";switch(n.status){case 1:return this.
options.text.uploadStatusPending;case 0:return this.options.text.uploadStatusError;case 4:return this.
options.text.uploadStatusDone;case 2:case 3:default:return a.format("{0} {1}",Math.floor(n.progressPercent*
100).toString()+"%",this.options.text.progressBarGroupUploadedMessage)}},c}(l.Widget);n.Widget=d;ko.
bindingHandlers.azcFileUpload2=c.Widget.getBindingHandler(d)}(y||(y={})),y});define("MsPortalImpl/Parts/Parts.Intrinsics",
["require","exports","./Parts","./Parts.ButtonPart"],function(n,t,i,r){var f=MsPortalFx.Parts.PartKind,
e=MsPortalFx.Parts.PartSize,u;return function(n){"use strict";n.parts=[{kind:22,factory:i.createAmdPartFactory(
"MsPortalImpl/Parts/Parts.Asset",function(n,t,i,r){return new n.AssetPart(t,i,r)},{defaultSize:1,supportedSizes:
[0,1,2]})},{kind:20,factory:i.createPartFactory(r.template,{supportedSizes:[0,1,2,3],partClass:r.ButtonPart})},
{kind:26,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.Chart",function(n,t,i,r){return new
n.Chart(t,i,r)},{supportedSizes:[1,2,4,3,10,5,6,7,8,9]})},{kind:25,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.Collection",
function(n,t,i,r){return new n.CollectionPart(t,i,r)},{supportedSizes:[0,1,2,3,4,10,5,6,7,9,8]})},{kind:
1,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.CollectionSummary",function(n,t,i,r){return new
n.Part(t,i,r)},{supportedSizes:[0,1,2,3]})},{kind:16,factory:i.createPartFactory("<div data-bind='pcDiffEditor: $root'><\/div>")},
{kind:28,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.Donut",function(n,t,i,r){return new
n.Donut(t,i,r)},{supportedSizes:[2,5,3,10,4,6,]})},{kind:15,factory:i.createPartFactory("<div data-bind='pcEditor: $root'><\/div>")},
{kind:14,factory:i.createPartFactory("<div data-bind='pcGrid: $root'><\/div>",{viewStateProperties:[
"content.selectableData.selectedItems","content.selectableData.activatedItems","content.selectableData.itemsWithChildEdits"]})},
{kind:23,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.InfoList",function(n,t,i,r){return new
n.InfoListPart(t,i,r)},{defaultSize:8,supportedSizes:[8],viewStateProperties:["content.selection.selectedItems",
"content.selection.activatedItems"]})},{kind:4,factory:i.createPartFactory("<div class='fxpart-itemsummary'><div class='fxpart-itemsummary-name' data-bind='text: name'><\/div><\/div>")},
{kind:11,factory:i.createPartFactory("<div data-bind='pcLogStream: $root'><\/div>")},{kind:24,factory:
i.createAmdPartFactory("MsPortalImpl/Parts/Parts.Properties",function(n,t,i,r){return new n.PropertiesPart(
t,i,r)},{defaultSize:7,supportedSizes:[7],viewStateProperties:["content.selection.selectedItems","content.selection.activatedItems"]})},
{kind:17,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.Provisioning",function(n,t,i,r){return new
n.ProvisioningPart(t,i,r)},{supportedSizes:[2,3]})},{kind:21,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.QuickStart",
function(n,t,i,r){return new n.QuickStartPart(t,i,r)},{defaultSize:1,supportedSizes:[0,1,2,3]})},{kind:
29,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.QuotaGauge",function(n,t,i,r){return new
n.QuotaGauge(t,i,r)},{supportedSizes:[2,10,3,4,6,5]})},{kind:30,factory:i.createAmdPartFactory("MsPortalImpl/Parts/Parts.ResourceSummary",
function(n,t,i,r){return new n.ResourceSummaryPart(t,i,r)},{defaultSize:8,supportedSizes:[8],viewStateProperties:
["content.selection.selectedItems","content.selection.activatedItems"]})},{kind:7,factory:i.createPartFactory(
"<div data-bind='pcSettings: $root'><\/div>",{defaultSize:3,supportedSizes:[3]})},{kind:8,factory:i.
createPartFactory("<div data-bind='pcSingleSetting: $root'><\/div>")},{kind:27,factory:i.createAmdPartFactory(
"MsPortalImpl/Parts/Parts.SingleValueGauge",function(n,t,i,r){return new n.SingleValueGauge(t,i,r)},
{supportedSizes:[2,10,3,4]})},{kind:18,factory:i.createPartFactory("<div><\/div>")}];n.parts.forEach(
function(n){i.registerFactory(f[n.kind],n.factory)})}(u||(u={})),u});define("MsPortalImpl/Services/Services.EditScopeManagement",
["require","exports","./Services.Settings"],function(){var n;return function(n){"use strict";function l(
n,t){return new i(n,t,o.client)}function e(n,t){return"{0}-{1}-{2}".format(f,n,t)}function r(n){return"{0}-{1}".
format(f,n)}function a(n){var t=n.split("-"),i=t.slice(1,t.length-1).join("-"),r=t[t.length-1];return{
editScopeId:i,extension:r}}var o=MsPortalFx.Base.Rpc.Internal,u=jQuery,f="editScopes",s=MsPortalFx.Internal.
Data.saveSerializedEditScopeEndPoint,h=MsPortalFx.Internal.Data.loadSerializedEditScopeEndPoint,c=MsPortalFx.
Internal.Data.onEditScopeDiscardedEndPoint,t=7,i;n.createEditScopeManager=l;i=function(){function n(
n,t,i){var r=this;this._editScopes={};this._settingsManager=n;this._extensionManager=t;this._rpcClient=
i;h.register(i,null,function(n,t){var i=t.srcWindowId;return r.loadEditScopeForExtension(n,i)});s.register(
i,null,function(n,t){var i=t.srcWindowId;r.saveEditScopeForExtension(n.editScopeId,i,n.edits)})}return n.
prototype.onEditScopeCreated=function(n){this._editScopes[n]={};this._editScopes[n].justCreated=!0},
n.prototype.onEditScopeDisposed=function(n){var t=this;this._editScopes[n]&&(this._editScopes[n].subscribers&&
this._editScopes[n].subscribers.length>0&&this._editScopes[n].dirtyObservable&&this._editScopes[n].dirtyObservable(
)&&this._editScopes[n].subscribers.forEach(function(i){var r=t._extensionManager.extensionLoader.getExtensions(
).first(function(n){return n.name===i});r&&r.isExtensionLoadedAsync().then(function(){c.invoke(t._rpcClient,
i,n)})}),this._deleteEditScope(n))},n.prototype.getDirtyObservable=function(n){var r=this,t=this._editScopes[
n],i;return t||(t=this._editScopes[n]={}),t.dirtyObservable||(i=ko.observable(),t.dirtyObservable=ko.
computed(function(){i();var t=r._editScopes[n]&&r._editScopes[n].settings;return t?t.extensionSettings(
).some(function(n){return n.settings.edits.length>0}):undefined}),this._loadEditScope(n).then(function(
){i(!0)})),t.dirtyObservable},n.prototype.logEditsToConsole=function(n){var t=this._editScopes[n]&&this.
_editScopes[n].settings;t&&t.extensionSettings().forEach(function(n){var t=a(n.key);console.debug('Edits for editScopeId: {0}, extension: "{1}"'.
format(t.editScopeId,t.extension));MsPortalFx.Internal.Data.logEditsToConsole(n.settings)})},n.prototype.
loadEditScopeForExtension=function(n,t){var i=this;return this._loadEditScope(n).then(function(){var
r=i._editScopes[n],u,o,f;return r?(u=r.settings,o=e(n,t),r.subscribers?r.subscribers.remove(t):r.subscribers=
[],r.subscribers.push(t),u?(f=u.extensionSettings().first(function(n){return n.key===o}),f?f.settings:
null):null):null})},n.prototype.saveEditScopeForExtension=function(n,i,u){var f=this._editScopes[n],
h,o,c,l,s;f&&((s=f.loadPromise,!s||s.state&&s.state()!=="resolved"||s.inspect&&s.inspect().state!=="fulfilled")||
(o=e(n,i),c=f.settings.extensionSettings().firstIndex(function(n){return n.key===o}),c<0?f.settings.
extensionSettings.push({key:o,settings:u}):(l=f.settings.extensionSettings()[c],l.settings=u,f.settings.
extensionSettings.splice(c,1,l)),h={},h[o]=u,f.settings.keys.indexOf(o)<0&&(f.settings.keys.push(o),
h[r(n)]=f.settings.keys),this._settingsManager.setSettings({store:t,settings:h})))},n.prototype._deleteEditScope=
function(n){var i=this._editScopes[n],u=[r(n)];i.settings&&i.settings.extensionSettings&&i.settings.
extensionSettings().forEach(function(n){u.push(n.key)});this._settingsManager.deleteSettings({store:
t,keys:u});delete this._editScopes[n]},n.prototype._loadEditScope=function(n){var t=this._editScopes[
n];return t||(t=this._editScopes[n]={}),t.justCreated&&(t.settings={keys:[],extensionSettings:ko.observableArray(
[])},t.loadPromise=u.Deferred().resolve().promise(),t.justCreated=!1),t.loadPromise||(t.loadPromise=
this._getAndProcessSettings(n,r(n))),t.loadPromise},n.prototype._getAndProcessSettings=function(n,i)
{var r=this,f=u.Deferred();return this._settingsManager.querySetting(t,i).then(function(u){u&&u.length?
r._settingsManager.querySettings({store:t,keys:u}).then(function(t){r._processSettings(t,u,n,i);f.resolve(
)}):(r._processSettings({},[],n,i),f.resolve())}),f.promise()},n.prototype._processSettings=function(
n,t,i){var r,u;if(this._editScopes[i]){r=[];this._editScopes[i].settings={keys:t,extensionSettings:ko.
observableArray(r)};for(u in n)r.push({key:u,settings:n[u]})}},n}();n.EditScopeManagerImpl=i}(n||(n=
{})),n})