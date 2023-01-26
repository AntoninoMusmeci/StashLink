import os
import sys
import json
from newspaper import Article

url = sys.argv[1]
template_for_exceptions = "Exception of type {0} occurred. Arguments:\n{1!r}"


def get_web_page(url):
    try:
        if url and len(url) > 0:
            article = Article(url, keep_article_html=True)
            article.download()
            article.parse()
            keywords = []
            try:
                article.nlp()
                keywords = article.keywords
            except:
                pass
            bookmarkJSON = json.dumps({
                'publicationDate': article.publish_date if article.publish_date is None else article.publish_date.strftime("%Y-%m-%d %H:%M:%S"),
                'title': article.title,
                'images': article.top_image if article.top_image else "",
                'authors': article.authors,
                'keywords': keywords
            })
        try:
            sys.stdout.write(bookmarkJSON)
            sys.stdout.flush()
            os._exit(0)
        except Exception as e:
            exception_msg = template_for_exceptions.format(
                type(e).__name__, e.args)
            print(exception_msg)
            sys.exit(1)
    except Exception as e:
        exception_msg = template_for_exceptions.format(
            type(e).__name__, e.args)
        print(exception_msg)
        sys.exit(1)


if __name__ == '__main__':
    get_web_page(url)
