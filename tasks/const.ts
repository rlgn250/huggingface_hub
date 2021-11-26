import type { ModelLibrary } from "../widgets/src/lib/interfaces/Libraries";
import { PipelineType } from "../widgets/src/lib/interfaces/Types";

// TODO should be moved to huggingface_hub ?
export const TASKS_MODEL_LIBRARIES: Record<keyof typeof PipelineType, Array<keyof typeof ModelLibrary>> = {
	/// nlp
	"text-classification":            ["adapter-transformers", "spacy", "transformers"],
	"token-classification":           ["adapter-transformers", "flair", "spacy", "stanza", "transformers"],
	"table-question-answering":       ["transformers"],
	"question-answering":             ["adapter-transformers", "allennlp", "transformers"],
	"zero-shot-classification":       ["transformers"],
	"translation":                    ["transformers"],
	"summarization":                  ["transformers"],
	"conversational":                 ["transformers"],
	"feature-extraction":             ["sentence-transformers", "transformers"],
	"text-generation":                ["transformers"],
	"text2text-generation":           ["transformers"],
	"fill-mask":                      ["transformers"],
	"sentence-similarity":            ["sentence-transformers", "spacy"],
	/// audio
	"text-to-speech":                 ["espnet", "tensorflowtts"],
	"automatic-speech-recognition":   ["espnet", "speechbrain", "transformers"],
	"audio-to-audio":                 ["asteroid", "speechbrain"],
	"audio-classification":           ["speechbrain", "transformers"],
	"voice-activity-detection":       [],
	/// computer vision
	"image-classification":           ["keras", "timm", "transformers"],
	"object-detection":               ["transformers"],
	"image-segmentation":             ["transformers"],
	"text-to-image":                  [],
	/// others
	"structured-data-classification": ["sklearn"],
};
