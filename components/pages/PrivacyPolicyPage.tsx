import React, { useEffect } from 'react';
import { SectionTitle } from '../SectionTitle';
import { COMPANY_INFO } from '../../constants';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 container mx-auto px-4 min-h-screen">
      <div className="mb-8">
        <Link to="/" className="text-[#94A684] font-bold hover:underline flex items-center gap-2">
          &larr; ホームに戻る
        </Link>
      </div>

      <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-lg border border-[#F9F7F2]">
        <SectionTitle title="プライバシーポリシー" subtitle="個人情報の取り扱いについて" />

        <div className="prose prose-stone max-w-none text-[#595045]">
          <p className="mb-8 leading-relaxed">
            {COMPANY_INFO.name}（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </p>

          <h3 className="text-xl font-bold text-[#94A684] mt-8 mb-4 border-l-4 border-[#E6A57E] pl-3">第1条（個人情報）</h3>
          <p className="mb-4">
            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </p>

          <h3 className="text-xl font-bold text-[#94A684] mt-8 mb-4 border-l-4 border-[#E6A57E] pl-3">第2条（個人情報の収集方法）</h3>
          <p className="mb-4">
            当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
          </p>

          <h3 className="text-xl font-bold text-[#94A684] mt-8 mb-4 border-l-4 border-[#E6A57E] pl-3">第3条（個人情報を収集・利用する目的）</h3>
          <p className="mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>当社サービスの提供・運営のため</li>
            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
            <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
            <li>上記の利用目的に付随する目的</li>
          </ul>

          <h3 className="text-xl font-bold text-[#94A684] mt-8 mb-4 border-l-4 border-[#E6A57E] pl-3">第4条（利用目的の変更）</h3>
          <p className="mb-4">
            当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
          </p>

          <h3 className="text-xl font-bold text-[#94A684] mt-8 mb-4 border-l-4 border-[#E6A57E] pl-3">第5条（個人情報の第三者提供）</h3>
          <p className="mb-4">
            当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
          </p>

          <h3 className="text-xl font-bold text-[#94A684] mt-8 mb-4 border-l-4 border-[#E6A57E] pl-3">第6条（お問い合わせ窓口）</h3>
          <p className="mb-4">
            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
          </p>
          <div className="bg-[#F9F7F2] p-6 rounded-xl mt-6">
            <p className="font-bold mb-2">{COMPANY_INFO.name}</p>
            <p className="mb-1">住所：{COMPANY_INFO.address}</p>
            <p className="mb-1">電話番号：{COMPANY_INFO.phone}</p>
            <p className="mb-1">メールアドレス：{COMPANY_INFO.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
