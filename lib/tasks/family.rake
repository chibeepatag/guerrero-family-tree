namespace :family do
  desc "Populate generation_no column of members"
  task populate_generation_no: :environment do
    head = Member.find 1
    members = Member.where(generation_no: nil)
    members.each do |member|
      puts "#{member.id} #{member.name}"
      generation = member.generation(head)
      member.update(generation_no: generation)
    end
  end

end
