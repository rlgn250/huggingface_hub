---
# For reference on dataset card metadata, see the spec: https://github.com/huggingface/hub-docs/blob/main/datasetcard.md?plain=1
# Doc / guide: https://huggingface.co/docs/hub/datasets-cards
{{ card_data }}
---

# Dataset Card for Religion Survey

<!-- Provide a quick summary of the dataset. -->

This directory contains data behind the article "When Does Praying in Public Make Others Uncomfortable?" (https://fivethirtyeight.com/features/when-does-praying-in-public-make-others-uncomfortable/) by Leah Libresco published on fivethirtyeight.com on September 16, 2016. 

Using a SurveyMonkey poll conducted between July 29 and August 1, 2016, 661 respondents were asked questions about public displays of religion.

## Dataset Details

### Dataset Description

<!-- Provide a longer summary of what this dataset is. -->

Leah Libresco commisioned a poll in the summer of 2016 to "get a better sense of what religious religious practices make the nonreligious uncomfortable," (Libresco, 2016). She used SurveyMonkey Audience (a tool on surveymonkey.com that allows one to add custom screen questions or select the demographics they want, create a survey, and collect and analyze the results in real time) to ask questions about acts of prayer that might be performed on a daily basis by individuals, rather than by groups of people or the government.

- **Curated by:** Leah Libresco
- **Shared by:** FiveThirtyEight.com
- **Language(s) (NLP):** English/Python
- **License:** Attribution 4.0 International (CC BY 4.0) (https://creativecommons.org/licenses/by/4.0/)

### Dataset Sources 

<!-- Provide the basic links for the dataset. -->

- **Repository:** https://github.com/fivethirtyeight/data/blob/master/religion-survey/README.md?plain=1

## Uses

<!-- Address questions around how the dataset is intended to be used. -->

### Direct Use

This dataset was commissioned by a writer for FiveThirtyEight.com for her to use in her article. It can be used to analyze how individuals display their religion (or lack thereof) publicly, how they think others feel about them doing so, and how they feel about others of differing religious traditions displaying their religion publicy.

### Out-of-Scope Use

<!-- This section addresses misuse, malicious use, and uses that the dataset will not work well for. -->

{{ out_of_scope_use | default("[More Information Needed]", true)}}

## Dataset Structure

The survey asked 48 mostly multiple choice questions (with one question having the answer to fill in the blank instead of choosing one of the options). These involved demographic questions, behavior questions, and feelings quesitons. These questions were answered by 661 SurveyMonkey respondents in the United States. Libresco then used this data to divide the respondents into "Christians" and "atheists and agnostics" to compare their responses in her article.

## Dataset Creation

### Curation Rationale

This dataset was created to analyze how sentiments differ between Christians and atheists/agnostics about public displays of faith.

### Source Data

<!-- This section describes the source data (e.g. news text and headlines, social media posts, translated sentences, ...). -->

#### Data Collection and Processing

<!-- This section describes the data collection and processing process such as data selection criteria, filtering and normalization methods, tools and libraries used, etc. -->

Data was collected from the respondents' answers to the SurveyMonkey poll.

#### Who are the source data producers?

<!-- This section describes the people or systems who originally created the data. It should also include self-reported demographic or identity information for the source data creators if this information is available. -->

Leah Libresco grew up an atheist in Long Island and converted to Catholicism in adulthood. She is now a freelance writer covering religion, statistics, and theater.

#### Personal and Sensitive Information

<!-- State whether the dataset contains data that might be considered personal, sensitive, or private (e.g., data that reveals addresses, uniquely identifiable names or aliases, racial or ethnic origins, sexual orientations, religious beliefs, political opinions, financial or health data, etc.). If efforts were made to anonymize the data, describe the anonymization process. -->

This dataset reveals personal and sensitive information in having people identify their religious beliefs, financial income, and beliefs about their own and others' religious practices.

## Bias, Risks, and Limitations

<!-- This section is meant to convey both technical and sociotechnical limitations. -->

The respondents answered the initial question "What is your present religion, if any?" in a variety of ways that could lead to skewed data if the answers were not analyzed properly. The respondents were also only reached via one avenue; SurveyMonkey. This could leading to leaving out a demographic or several demographics, including those who do not have access to the internet or SurveyMonkey. All of the respondents were also adults in the US, thus providing information only about that demographic.

### Recommendations

<!-- This section is meant to convey recommendations with respect to the bias, risk, and technical limitations. -->

Revisions should be made to the first question so that there are more concise answers and less confusion. Other demographics should also be included and analyzed in this research to see if there is variation based on race, age, socioeconomic status, or location.

## Citation 

<!-- If there is a paper or blog post introducing the dataset, the APA and Bibtex information for that should go in this section. -->

**BibTeX:**

@misc{Libresco_2016, title={When Does Praying In Public Make Others Uncomfortable?}, url={https://fivethirtyeight.com/features/when-does-praying-in-public-make-others-uncomfortable/}, journal={FiveThirtyEight}, author={Libresco, Leah}, year={2016}, month={Sep}} 

**APA:**

Libresco, Leah. “When Does Praying in Public Make Others Uncomfortable?” FiveThirtyEight, September 16, 2016. Accessed March 28, 2024. https://fivethirtyeight.com/features/when-does-praying-in-public-make-others-uncomfortable/.

## Dataset Card Authors 

Glennis Covault
