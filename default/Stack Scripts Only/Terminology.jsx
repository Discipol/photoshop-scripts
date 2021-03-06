// (c) Copyright 2005-2007  Adobe Systems, Incorporated.  All rights reserved.

/*
@@@BUILDINFO@@@ Terminology.jsx 1.0.0.0
*/

// This defines the Terminology (TypeID constants) used by StackSupport.jsx
// This is essentially an abridged translation of PITerminology.h

// Mode constants
const classBitmapMode			= app.charIDToTypeID('BtmM');
const classCurvePoint			= app.charIDToTypeID('CrPt');
const classGrayscaleMode		= app.charIDToTypeID('Grys');
const classDuotoneMode			= app.charIDToTypeID('DtnM');
const classIndexedColorMode		= app.charIDToTypeID('IndC');
const classRGBColorMode			= app.charIDToTypeID('RGBM');
const classCMYKColorMode		= app.charIDToTypeID('CMYM');
const classLabColorMode			= app.charIDToTypeID('LbCM');
const classMultichannelMode		= app.charIDToTypeID('MltC');
const classShapingCurve			= app.charIDToTypeID('ShpC');

const classAdjustmentLayer		= app.charIDToTypeID('AdjL');
const classApplication			= app.charIDToTypeID('capp');
const classBrightnessContrast	= app.charIDToTypeID('BrgC');
const classChannel				= app.charIDToTypeID('Chnl');
const classColor				= app.charIDToTypeID('Clr ');
const classColorBalance			= app.charIDToTypeID('ClrB');
const classColorStop			= app.charIDToTypeID('Clrt');
const classCurves				= app.charIDToTypeID('Crvs');
const classDocument				= app.charIDToTypeID('Dcmn');
const classFileSavePrefs		= app.charIDToTypeID('FlSv');
const classGradient				= app.charIDToTypeID('Grdn');
const classGrayscale			= app.charIDToTypeID('Grsc');
const classHueSaturation		= app.charIDToTypeID('HStr');
const classLayer				= app.charIDToTypeID('Lyr ');
const classLevels				= app.charIDToTypeID('Lvls');
const classMask					= app.charIDToTypeID('Msk ');
const classMenuItem				= app.charIDToTypeID('Mn  ');
const classMode					= app.charIDToTypeID('Md  ');
const classPoint				= app.charIDToTypeID('Pnt ');
const classPolygon				= app.charIDToTypeID('Plgn');
const classProperty				= app.charIDToTypeID('Prpr');
const classRectangle			= app.charIDToTypeID('Rctn');
const classVersion				= app.charIDToTypeID('Vrsn');


const enumAngle				= app.charIDToTypeID('Angl');
const enumBackgroundColor	= app.charIDToTypeID('BckC');
const enumBlue				= app.charIDToTypeID('Bl  ');
const enumBottom			= app.charIDToTypeID('Bttm');
const enumCustomStops		= app.charIDToTypeID('CstS');
const enumDarken			= app.charIDToTypeID('Drkn');
const enumFirst				= app.charIDToTypeID('Frst');
const enumFitOnScreen		= app.charIDToTypeID('FtOn');
const enumForegroundColor	= app.charIDToTypeID('FrgC');
const enumGray				= app.charIDToTypeID('Gry ');
const enumGreen				= app.charIDToTypeID('Grn ');
const enumHistory			= app.charIDToTypeID('Hsty');
const enumHorizontal		= app.charIDToTypeID('Hrzn');
const enumLeft				= app.charIDToTypeID('Left');
const enumLinear			= app.charIDToTypeID('Lnr ');
const enumMask				= app.charIDToTypeID('Msk '	);// typeChannel.
const enumNone				= app.charIDToTypeID('None');
const enumNormal			= app.charIDToTypeID('Nrml');
const enumRed 				= app.charIDToTypeID('Rd  ');
const enumRedrawComplete	= app.charIDToTypeID('RdCm');
const enumRevealAll			= app.charIDToTypeID('RvlA');
const enumRGBColor			= app.charIDToTypeID('RGBC');
const enumRight				= app.charIDToTypeID('Rght');
const enumTarget			= app.charIDToTypeID('Trgt');
const enumTop				= app.charIDToTypeID('Top ');
const enumUserStop			= app.charIDToTypeID('UsrS');

const eventConvertMode		= app.charIDToTypeID('CnvM');
const eventCrop				= app.charIDToTypeID('Crop');
const eventDelete			= app.charIDToTypeID('Dlt ');
const eventDuplicate		= app.charIDToTypeID('Dplc');
const eventGet				= app.charIDToTypeID('getd');
const eventGradient			= app.charIDToTypeID('Grdn');
const eventHide				= app.charIDToTypeID('Hd  ');
const eventImageSize		= app.charIDToTypeID('ImgS');
const eventMake				= app.charIDToTypeID('Mk  ');
const eventMove				= app.charIDToTypeID('move');
const eventPurge			= app.charIDToTypeID('Prge');
const eventSelect			= app.charIDToTypeID('slct');
const eventSet				= app.charIDToTypeID('setd');
const eventTransform		= app.charIDToTypeID('Trnf');
const eventUndo				= app.charIDToTypeID('undo');
const eventWait 			= app.charIDToTypeID('Wait');

// Stuff from PIStringTerminology.h
const kADSContentStr				= app.stringIDToTypeID("ADSContent");
const kaddLayerFromViewlessDocStr	= app.stringIDToTypeID("addLayerFromViewlessDoc");
const kaddToSelectionContinuousStr	= app.stringIDToTypeID("addToSelectionContinuous");
const kaskMismatchOpeningStr		= app.stringIDToTypeID("askMismatchOpening");
const kaskMismatchPastingStr		= app.stringIDToTypeID("askMismatchPasting");
const kaskMissingStr				= app.stringIDToTypeID("askMissing");
const kaspectRatioStr			= app.stringIDToTypeID("aspectRatio");
const kbrightnessStr			= app.stringIDToTypeID("brightness");
const kcameraRawJPEGStr			= app.stringIDToTypeID("cameraRawJPEG");
const kcameraRotationStr		= app.stringIDToTypeID("cameraRotation");
const kclassContour			= app.stringIDToTypeID("classFXShapeCurve");
const kcloseViewlessDocumentStr = app.stringIDToTypeID("closeViewlessDocument");
const kcolorProfileListStr		= app.stringIDToTypeID("colorProfileList");
const kcolorSettingsStr			= app.stringIDToTypeID("colorSettings");
const kcontentAwareStr			= app.stringIDToTypeID("contentAware");
const kcontrastStr				= app.stringIDToTypeID("contrast");
const kcylindricalStr			= app.stringIDToTypeID("cylindrical");
const kdetailStr 				= app.stringIDToTypeID("detail");
const kdocumentStr				= app.stringIDToTypeID("document");
const kexposureStr				= app.stringIDToTypeID("exposure");
const kflatnessStr 				= app.stringIDToTypeID("flatness");
const kfocalLengthStr			= app.stringIDToTypeID("focalLength");
const kgammaStr 				= app.stringIDToTypeID("gamma");
const kgeometryOnlyStr			= app.stringIDToTypeID("geometryOnly");
const kgeometryRecordStr		= app.stringIDToTypeID("geometryRecord");
const kgroupStr					= app.stringIDToTypeID("group");
const khdrToningMethodTypeStr	= app.stringIDToTypeID("hdrToningMethodType");
const khdrOptionsStr			= app.stringIDToTypeID("hdrOptions");
const khdrToningType1Str		= app.stringIDToTypeID("hdrtype1");
const khdrToningType2Str		= app.stringIDToTypeID("hdrtype2");
const khdrToningType3Str		= app.stringIDToTypeID("hdrtype3");
const khdrToningType4Str		= app.stringIDToTypeID("hdrtype4");
const khdrToningType5Str		= app.stringIDToTypeID("hdrtype5");
const khdrToningType6Str		= app.stringIDToTypeID("hdrtype6");
const khighlightsStr			= app.stringIDToTypeID("highlights");
const khighQualityStr			= app.stringIDToTypeID("highQuality");
const kignoreStr				= app.stringIDToTypeID("ignore");
const kimageCenterStr			= app.stringIDToTypeID("imageCenter");
const kinteractiveStr			= app.stringIDToTypeID("interactive");
const klayerIDStr				= app.stringIDToTypeID("layerID");
const klayersStr 				= app.stringIDToTypeID("layers");
const klayerTransformationStr	= app.stringIDToTypeID("layerTransformation");
const klensCorrectionStr		= app.stringIDToTypeID("lensCorrection");
const klightroomBridgetalkIDStr	= app.stringIDToTypeID("lightroomBridgetalkID");
const klightroomDocIDStr		= app.stringIDToTypeID("lightroomDocID");
const klightroomSaveParamsStr	= app.stringIDToTypeID("lightroomSaveParams");
const kmeasurementScaleStr		= app.stringIDToTypeID("measurementScale");
const kmergeAlignedLayersStr	= app.stringIDToTypeID("mergeAlignedLayers");
const kmethodStr				= app.stringIDToTypeID("method");
const knewPlacedLayerStr		= app.stringIDToTypeID("newPlacedLayer");
const kopenViewlessDocumentStr	= app.stringIDToTypeID("openViewlessDocument");
const kpixelStr 				= app.stringIDToTypeID("pixel");
const kpointsStr				= app.stringIDToTypeID("points");
const kpreferXMPFromACRStr		= app.stringIDToTypeID("preferXMPFromACR");
const kprofileStr				= app.stringIDToTypeID("profile");
const kprojectionStr			= app.stringIDToTypeID("projection");
const kquadCorner0Str			= app.stringIDToTypeID("quadCorner0");
const kquadCorner1Str			= app.stringIDToTypeID("quadCorner1");
const kquadCorner2Str			= app.stringIDToTypeID("quadCorner2");
const kquadCorner3Str			= app.stringIDToTypeID("quadCorner3");
const kquadrilateralStr			= app.stringIDToTypeID("quadrilateral");
const kradiusStr				= app.stringIDToTypeID("radius");
const kradialDistortStr			= app.stringIDToTypeID("radialDistort");
const krectangleStr				= app.stringIDToTypeID("rectangle");
const kresetDocumentFormatStr	= app.stringIDToTypeID("resetDocumentFormatStr");
const krulerPointsStr			= app.stringIDToTypeID("rulerPoints");
const ksaturationStr			= app.stringIDToTypeID("saturation");
const ksaveStr 					= app.stringIDToTypeID("save");
const ksceneCollageStr			= app.stringIDToTypeID("sceneCollage");
const kselectionModifierStr		= app.stringIDToTypeID("selectionModifier");
const kselectionModifierTypeStr	= app.stringIDToTypeID("selectionModifierType");
const kshallowStr				= app.stringIDToTypeID("shallow");
const ksmoothStr				= app.stringIDToTypeID("smooth");
const ksphericalStr				= app.stringIDToTypeID("spherical");
const kthresholdStr				= app.stringIDToTypeID("threshold");
const ktransformStr				= app.stringIDToTypeID("transform");
const ktranslationStr			= app.stringIDToTypeID("translation");
const kversionStr				= app.stringIDToTypeID("version");
const kvibranceStr				= app.stringIDToTypeID("vibrance");
const kvignetteStr				= app.stringIDToTypeID("vignette");
const kXMPMetadataAsUTF8Str		= app.stringIDToTypeID("XMPMetadataAsUTF8");
const kxStr						= app.stringIDToTypeID("x");
const kyStr						= app.stringIDToTypeID("y");

const keyAddLayerFromFile	= app.stringIDToTypeID( "addLayerFromFile" );
const keyAlignment			= app.charIDToTypeID('Algn');
const keyAntiAlias			= app.charIDToTypeID('AntA');
const keyApply				= app.charIDToTypeID('Aply');
const keyAt					= app.charIDToTypeID('At  ');
const keyAuto				= app.charIDToTypeID('Auto');
const keyBottom				= app.charIDToTypeID('Btom');
const keyChannelName		= app.charIDToTypeID('ChnN'	);// Property. Breaks hash.
const keyContinuity			= app.charIDToTypeID('Cnty');
const keyCurve				= app.charIDToTypeID('Crv ');
const keyDepth				= app.charIDToTypeID('Dpth');
const keyDither				= app.charIDToTypeID('Dthr');
const keyExposure			= app.charIDToTypeID('Exps');
const keyFileList		    = app.stringIDToTypeID( "fileList" );
const keyFileSavePrefs		= app.charIDToTypeID('FlSP');
const keyFrom				= app.charIDToTypeID('From');
const keyGamma				= app.charIDToTypeID('Gmm ');
const keyGradient			= app.charIDToTypeID('Grad');
const keyHeight				= app.charIDToTypeID('Hght');
const keyHorizontal			= app.charIDToTypeID('Hrzn');
const keyInterpolation		= app.charIDToTypeID('Intr');
const keyLeft				= app.charIDToTypeID('Left');
const keyLocation			= app.charIDToTypeID('Lctn');
const keyNumberOfChannels	= app.charIDToTypeID('NmbO');
const keyMakeVisible		= app.charIDToTypeID('MkVs');
const keyMethod				= app.charIDToTypeID('Mthd');
const keyMidpoint			= app.charIDToTypeID('Mdpn');
const keyMode				= app.charIDToTypeID('Md  ');
const keyName				= app.charIDToTypeID('Nm  ');
const keyNew				= app.charIDToTypeID('Nw  ');
const keyNull				= app.charIDToTypeID('null');
const keyOffset				= app.charIDToTypeID('Ofst');
const keyOpacity			= app.charIDToTypeID('Opct');
const keyPerspectiveIndex	= app.charIDToTypeID('Prsp');
const keyPoints				= app.charIDToTypeID('Pts ');
const keyResolution			= app.charIDToTypeID('Rslt');
const keyReverse			= app.charIDToTypeID('Rvrs');
const keyRight				= app.charIDToTypeID('Rght');
const keySelection			= app.charIDToTypeID('fsel');	// Defined in piActions.h
const keyState				= app.charIDToTypeID('Stte');
const keyTarget				= app.charIDToTypeID('null');;
const keyTo					= app.charIDToTypeID('T   ');
const keyTop				= app.charIDToTypeID('Top ');
const keyTransferSpec		= app.charIDToTypeID('TrnS');
const keyTransparency		= app.charIDToTypeID('Trns');
const keyType				= app.charIDToTypeID('Type');
const keyUseMask			= app.charIDToTypeID('UsMs');
const keyUserMaskEnabled	= app.charIDToTypeID('UsrM');
const keyUsing				= app.charIDToTypeID('Usng');
const keyVertical			= app.charIDToTypeID('Vrtc');
const keyViewlessDoc		= app.stringIDToTypeID( "viewlessDoc" );
const keyWidth				= app.charIDToTypeID('Wdth');
const keyWith				= app.charIDToTypeID('With');

const typeAlignDistributeSelector	= app.charIDToTypeID('ADSt');
const typeBlendMode			= app.charIDToTypeID('BlnM');
const typeChannel			= app.charIDToTypeID('Chnl');
const typeColors			= app.charIDToTypeID('Clrs');
const typeColorStopType		= app.charIDToTypeID('Clry');
const typeFill				= app.charIDToTypeID('Fl  ');
const typeFillContents		= app.charIDToTypeID('FlCn');
const typeGradientForm		= app.charIDToTypeID('GrdF');
const typeGradientType		= app.charIDToTypeID('GrdT');
const typeMenuItem			= app.charIDToTypeID('MnIt');
const typeNULL 				= app.charIDToTypeID('null');
const typeOrdinal			= app.charIDToTypeID('Ordn');
const typePurgeItem			= app.charIDToTypeID('PrgI');
const typeState				= app.charIDToTypeID('Stte');

const unitAngle				= app.charIDToTypeID('#Ang');
const unitDensity			= app.charIDToTypeID('#Rsl');
const unitDistance			= app.charIDToTypeID('#Rlt');
const unitPercent			= app.charIDToTypeID('#Prc');
const unitPixels			= app.charIDToTypeID('#Pxl');
