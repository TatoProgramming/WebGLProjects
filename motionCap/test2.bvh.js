// This data is identical to test1 except that there is only
// one motion frame for faster load times.

var testData2 = "HIERARCHY \
ROOT Hips \
{ \
	OFFSET 0.00000 0.00000 0.00000 \
	CHANNELS 6 Xposition Yposition Zposition Zrotation Yrotation Xrotation  \
	JOINT LHipJoint \
	{ \
		OFFSET 0 0 0 \
		CHANNELS 3 Zrotation Yrotation Xrotation \
		JOINT LeftHip \
		{ \
			OFFSET 1.36306 -1.79463 0.83929 \
			CHANNELS 3 Zrotation Yrotation Xrotation \
			JOINT LeftKnee \
			{ \
				OFFSET 2.44811 -6.72613 0.00000 \
				CHANNELS 3 Zrotation Yrotation Xrotation \
				JOINT LeftAnkle \
				{ \
					OFFSET 2.56220 -7.03959 0.00000 \
					CHANNELS 3 Zrotation Yrotation Xrotation \
					JOINT LeftToe \
					{ \
						OFFSET 0.15764 -0.43311 2.32255 \
						CHANNELS 3 Zrotation Yrotation Xrotation \
						End Site \
						{ \
							OFFSET 0.00000 -0.00000 1.18966 \
						} \
					} \
				} \
			} \
		} \
	} \
	JOINT RHipJoint \
	{ \
		OFFSET 0 0 0 \
		CHANNELS 3 Zrotation Yrotation Xrotation \
		JOINT RightHip \
		{ \
			OFFSET -1.30552 -1.79463 0.83929 \
			CHANNELS 3 Zrotation Yrotation Xrotation \
			JOINT RightKnee \
			{ \
				OFFSET -2.54253 -6.98555 0.00000 \
				CHANNELS 3 Zrotation Yrotation Xrotation \
				JOINT RightAnkle \
				{ \
					OFFSET -2.56826 -7.05623 0.00000 \
					CHANNELS 3 Zrotation Yrotation Xrotation \
					JOINT RightToe \
					{ \
						OFFSET -0.16473 -0.45259 2.36315 \
						CHANNELS 3 Zrotation Yrotation Xrotation \
						End Site \
						{ \
							OFFSET -0.00000 -0.00000 1.21082 \
						} \
					} \
				} \
			} \
		} \
	} \
	JOINT lowerback \
	{ \
		OFFSET 0 0 0 \
		CHANNELS 3 Zrotation Yrotation Xrotation \
		JOINT Chest \
		{ \
			OFFSET 0.02827 2.03559 -0.19338 \
			CHANNELS 3 Zrotation Yrotation Xrotation \
			JOINT Chest2 \
			{ \
				OFFSET 0.05672 2.04885 -0.04275 \
				CHANNELS 3 Zrotation Yrotation Xrotation \
				JOINT lowerneck \
				{ \
					OFFSET 0 0 0 \
					CHANNELS 3 Zrotation Yrotation Xrotation \
					JOINT Neck \
					{ \
						OFFSET -0.05417 1.74624 0.17202 \
						CHANNELS 3 Zrotation Yrotation Xrotation \
						JOINT Head \
						{ \
							OFFSET 0.10407 1.76136 -0.12397 \
							CHANNELS 3 Zrotation Yrotation Xrotation \
							End Site \
							{ \
								OFFSET 0.03720 1.77044 -0.06241 \
							} \
						} \
					} \
				} \
				JOINT LeftCollar \
				{ \
					OFFSET 0 0 0 \
					CHANNELS 3 Zrotation Yrotation Xrotation \
					JOINT LeftShoulder \
					{ \
						OFFSET 3.36241 1.20089 -0.31121 \
CHANNELS 3 Zrotation Xrotation Yrotation \
						JOINT LeftElbow \
						{ \
OFFSET 0 -4.983000 -0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
							JOINT LeftWrist \
							{ \
OFFSET 0 -3.483560 -0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
								JOINT lhand \
								{ \
									OFFSET 0 0 0 \
CHANNELS 3 Zrotation Xrotation Yrotation \
									JOINT LFingers \
									{ \
OFFSET 0 -0.715260 -0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
										End Site \
										{ \
OFFSET 0 -0.576660 -0.000000 \
										} \
									} \
								} \
								JOINT LThumb \
								{ \
OFFSET 0 0.000000 0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
									End Site \
									{ \
OFFSET 0 -0.585470 0.585470 \
									} \
								} \
							} \
						} \
					} \
				} \
				JOINT RightCollar \
				{ \
					OFFSET 0 0 0 \
					CHANNELS 3 Zrotation Yrotation Xrotation \
					JOINT RightShoulder \
					{ \
						OFFSET -3.13660 1.37405 -0.40465 \
CHANNELS 3 Zrotation Xrotation Yrotation \
						JOINT RightElbow \
						{ \
OFFSET 0 -5.241900 -0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
							JOINT RightWrist \
							{ \
OFFSET 0 -3.444170 -0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
								JOINT rhand \
								{ \
									OFFSET 0 0 0 \
CHANNELS 3 Zrotation Xrotation Yrotation \
									JOINT RFingers \
									{ \
OFFSET 0 -0.622530 -0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
										End Site \
										{ \
OFFSET 0 -0.501900 -0.000000 \
										} \
									} \
								} \
								JOINT RThumb \
								{ \
OFFSET 0 0.000000 0.000000 \
CHANNELS 3 Zrotation Xrotation Yrotation \
									End Site \
									{ \
OFFSET 0 -0.509560 0.509560 \
									} \
								} \
							} \
						} \
					} \
				} \
			} \
		} \
	} \
} \
MOTION \
Frames: 1 \
Frame Time: .0083333 \
9.3722 17.8693 -17.3198 -3.2316 -7.5970 -2.0168 0.0000 0.0000 0.0000 -13.8102 2.5002 3.3502 1.1281 6.7462 18.9656 0.8229 0.7402 -17.4237 0.0598 -1.5779 -4.3405 0.0000 0.0000 0.0000 22.6124 4.5864 1.0031 -1.9501 -8.7613 25.0515 -0.6734 -4.2652 -17.6334 -0.0434 -1.3453 3.6994 1.1730 -0.3951 2.3019 2.7039 -0.4627 0.0030 2.1315 -0.2318 -1.2745 -6.7079 -3.7653 -9.3282 -3.0132 -3.2335 27.8377 -0.3184 -2.5573 10.5560 -0.0000 0.0000 0.0000 30.8103 -43.6055 -29.6611 154.4073 -36.8037 111.3575 38.9427 -20.98 13.7335 0.0 0.0 0.0 -7.1250 0.0 0.0 7.7209 12.6535 5.8971 -0.0000 0.0000 0.0000 -2.6083 -1.1336 15.0356 -10.9661 -18.2362 -1.7653 -18.6457 -0.9673 20.0268 0.0 0.0 0.0 7.1250 0.0 -0.0 9.8154 50.7628 -1.4054 \
"
